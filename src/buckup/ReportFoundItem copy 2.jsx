// ReportFoundItem.jsx
import React, { useState } from "react";
import { ref, set, get } from "firebase/database"; // For Realtime Database
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // For Storage
import { database, storage } from "../../../services/firebase-config"; // Import Firebase instances
import "./ReportFoundItem.css";

const FoundItemForm = () => {
    const [formData, setFormData] = useState({
        schoolID: "",
        name: "",
        location: "",
        dateFound: "",
        itemName: "",
        itemCategory: "",
        itemDescription: "",
    });
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // To prevent multiple submissions

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const areAllFieldsFilled = () => {
        return (
            formData.schoolID.trim() &&
            formData.name.trim() &&
            formData.location.trim() &&
            formData.dateFound &&
            formData.itemName.trim() &&
            formData.itemCategory &&
            formData.itemDescription.trim()
        );
    };

    const getNextItemNumber = async () => {
        const itemsRef = ref(database, "reportedItems/Items");
        const snapshot = await get(itemsRef);

        if (!snapshot.exists()) {
            return 1; // Start at 1 if no items exist
        }

        const items = snapshot.val();
        const itemNumbers = Object.keys(items)
            .map((key) => parseInt(key.replace("Item", ""), 10))
            .filter((num) => !isNaN(num));
        
        return itemNumbers.length > 0 ? Math.max(...itemNumbers) + 1 : 1;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!areAllFieldsFilled()) {
            alert("Please fill out all required fields before submitting.");
            return;
        }

        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);

        try {
            // Step 1: Determine the next available item number
            const nextItemNumber = await getNextItemNumber();

            // Step 2: Upload the image to Firebase Storage (if present)
            let imageUrl = "";
            if (imageFile) {
                const imageStorageRef = storageRef(storage, `items/Item${nextItemNumber}/${imageFile.name}`);
                const snapshot = await uploadBytes(imageStorageRef, imageFile);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            // Step 3: Prepare the data to save
            const itemData = {
                SchoolID: formData.schoolID.trim(),
                Name: formData.name.trim(),
                Location: formData.location.trim(),
                "Date Found": formData.dateFound,
                ItemName: formData.itemName.trim(),
                "Item Category": formData.itemCategory,
                "Item Description": formData.itemDescription.trim(),
                Picture: imageUrl || "",
                Timestamp: new Date().toISOString(), // Add timestamp for reference
            };

            // Step 4: Save the data to Firebase Realtime Database
            const newItemRef = ref(database, `reportedItems/Items/Item${nextItemNumber}`);
            await set(newItemRef, itemData);

            // Step 5: Reset the form
            setFormData({
                schoolID: "",
                name: "",
                location: "",
                dateFound: "",
                itemName: "",
                itemCategory: "",
                itemDescription: "",
            });
            setImage(null);
            setImageFile(null);

            alert(`Lost & Found Report #${nextItemNumber} Reported Successfully!`);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to report item. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Report Found Item</h2>
            </div>

            <form className="report-form" onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input
                    type="text"
                    id="id"
                    name="schoolID"
                    placeholder="ID"
                    value={formData.schoolID}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date-found">Date Found</label>
                <input
                    type="date"
                    id="date-found"
                    name="dateFound"
                    value={formData.dateFound}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="item-name">Item Name</label>
                <input
                    type="text"
                    id="item-name"
                    name="itemName"
                    placeholder="e.g. Water Bottle, Backpack"
                    value={formData.itemName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="item-category">Item Category</label>
                <select
                    id="item-category"
                    name="itemCategory"
                    value={formData.itemCategory}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing & Wearables">Clothing & Wearables</option>
                    <option value="Bags & Containers">Bags & Containers</option>
                    <option value="Documents & ID's">Documents & ID's</option>
                    <option value="Sports & Fitness Gear">Sports & Fitness Gear</option>
                    <option value="Medical Items">Medical Items</option>
                    <option value="Personal Accessories">Personal Accessories</option>
                    <option value="Household Items">Household Items</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>

                <label htmlFor="item-description">Item Description</label>
                <textarea
                    id="item-description"
                    name="itemDescription"
                    placeholder="Detailed description"
                    value={formData.itemDescription}
                    onChange={handleChange}
                    required
                ></textarea>

                <div className="image-upload-container">
                    <div className="image-preview">
                        {image ? (
                            <img src={image} alt="Uploaded" />
                        ) : (
                            <span className="plus-icon"></span>
                        )}
                    </div>
                    <input
                        type="file"
                        id="item-image"
                        onChange={handleImageUpload}
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    <button
                        type="button"
                        className="image-upload-button"
                        onClick={() => document.getElementById("item-image").click()}
                    >
                        <span className="plus-icon">+</span>
                    </button>
                </div>

                <div className="buttons">
                    <button
                        type="button"
                        className="cancel"
                        onClick={() => {
                            setFormData({
                                schoolID: "",
                                name: "",
                                location: "",
                                dateFound: "",
                                itemName: "",
                                itemCategory: "",
                                itemDescription: "",
                            });
                            setImage(null);
                            setImageFile(null);
                        }}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FoundItemForm;