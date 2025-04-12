import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, set, get } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { database, storage } from "../../../../services/firebase-config";
import "./requestForm.css";

const RequestForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        idNumber: "",
        email: "",
        phoneNumber: "",
        itemDescription: "",
        dateLost: location.state?.dateLost || "",
        category: location.state?.category || "",
        title: location.state?.title || ""
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            dateLost: location.state?.dateLost || "",
            category: location.state?.category || "",
            title: location.state?.title || ""
        }));
    }, [location.state]);

    useEffect(() => {
        validateForm();
    }, [formData]);

    const validateForm = () => {
        const { name, idNumber, email, phoneNumber, itemDescription, dateLost, category, title } = formData;
        setIsFormValid(
            name.trim() !== "" &&
            idNumber.trim() !== "" &&
            email.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            itemDescription.trim() !== "" &&
            dateLost !== "" &&
            category !== "" &&
            title !== ""
        );
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === "idNumber") {
            let cleanedValue = value.replace(/\D/g, "");
            let formattedValue = "";

            if (cleanedValue.length > 2) {
                formattedValue += cleanedValue.slice(0, 2) + "-";
                if (cleanedValue.length > 6) {
                    formattedValue += cleanedValue.slice(2, 6) + "-";
                    formattedValue += cleanedValue.slice(6, 9);
                } else {
                    formattedValue += cleanedValue.slice(2);
                }
            } else {
                formattedValue = cleanedValue;
            }

            setFormData((prev) => ({ ...prev, idNumber: formattedValue.slice(0, 12) }));
            return;
        }

        if (id === "phoneNumber") {
            let cleanedValue = value.replace(/\D/g, "");
            if (!cleanedValue.startsWith("63")) {
                cleanedValue = "63";
            }
            if (cleanedValue.length > 12) {
                cleanedValue = cleanedValue.slice(0, 12);
            }
            setFormData((prev) => ({ ...prev, phoneNumber: cleanedValue }));
            return;
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePlusButtonClick = () => {
        document.getElementById("fileUpload").click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check for empty required fields
        if (
            !formData.name.trim() ||
            !formData.idNumber.trim() ||
            !formData.email.trim() ||
            !formData.phoneNumber.trim() ||
            !formData.itemDescription.trim() ||
            !formData.dateLost.trim() ||
            !formData.category.trim() ||
            !formData.title.trim()
        ) {
            console.warn("⚠️ Submission failed: All fields (except image upload) must be filled out.");
            alert("Please fill out all required fields before submitting.");
            return;
        }
    
        try {
            const requestsRef = ref(database, "RequestRetrieval");
            const snapshot = await get(requestsRef);
            const requestCount = snapshot.exists() ? Object.keys(snapshot.val()).length + 1 : 1;
            const requestId = `Request${requestCount}`;
    
            let imageUrl = "";
            if (imageFile) {
                const storageReference = storageRef(storage, `retrievals/${requestId}/${imageFile.name}`);
                await uploadBytes(storageReference, imageFile);
                imageUrl = await getDownloadURL(storageReference);
            }
    
            await set(ref(database, `RequestRetrieval/${requestId}`), {
                Name: formData.name.trim(),
                IDNumber: formData.idNumber.trim(),
                Email: formData.email.trim(),
                PhoneNumber: formData.phoneNumber.trim(),
                "Date Lost": formData.dateLost,
                "Item Category": formData.category,
                "Item Title": formData.title.trim(),
                "Item Description": formData.itemDescription.trim(),
                Image: imageUrl || "",
                Timestamp: new Date().toISOString(),
            });
    
            alert("Request submitted successfully!");
    
            // ✅ Clear form after successful submission
            setFormData({
                name: "",
                idNumber: "",
                email: "",
                phoneNumber: "",
                itemDescription: "",
                dateLost: "",
                category: "",
                title: "",
            });
            setImagePreview(null);
            setImageFile(null);
    
            // ✅ Redirect back to dashboard
            navigate("/dashboard");
        } catch (error) {
            console.error("❌ Submission error:", error);
            alert("Failed to submit request. Check console for details.");
        }
    };
    
    

    return (
        <div className="background-container">
            <header className="form-header">
                <img src="/src/assets/images/cit.png" alt="System Logo" className="form-logo" />
                <h1 className="form-title">REQUEST FOR RETRIEVAL FORM</h1>
                <p className="form-subtitle">
                    Your personal information will be handled with the utmost confidentiality.
                    Please enter the required details below.
                </p>
            </header>

            <div className="request-form-container">
                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="idNumber">ID Number</label>
                        <input type="text" id="idNumber" placeholder="##-####-###" value={formData.idNumber} onChange={handleChange} maxLength="12" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateLost">Date Lost</label>
                        <input type="date" id="dateLost" value={formData.dateLost} readOnly required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" placeholder="63##########" value={formData.phoneNumber} onChange={handleChange} maxLength="12" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="itemDescription">Item Description</label>
                        <textarea id="itemDescription" placeholder="Detail description" value={formData.itemDescription} onChange={handleChange} required />
                    </div>
                </form>

                <div className="image-category-container">
                    <div className="image-preview-container">
                        {imagePreview ? <img src={imagePreview} alt="Uploaded Preview" /> : <p>+</p>}
                    </div>

                    <div className="category-box">
                        <span className="category-text">{formData.category}</span> | 
                        <span className="item-name">{formData.title}</span>
                        <p className="upload-text">Upload a Photo (Optional)</p>
                    </div>

                    <button type="button" className="plus-button" onClick={handlePlusButtonClick}>+</button>
                </div>
            </div>

            <input type="file" id="fileUpload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />

            <div className="submit-section">
                <button type="submit" className="submit-button" onClick={handleSubmit} disabled={!isFormValid}>Submit</button>
            </div>
        </div>
    );
};

export default RequestForm;
