// FoundItemForm.jsx
import React, { useState } from "react";
import "./ReportFoundItem.css";

const FoundItemForm = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Report Found Item</h2>
      </div>

      <form className="report-form" onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" placeholder="ID" required />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Full Name" required />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Location" required />

        <label htmlFor="date-found">Date Found</label>
        <input type="date" id="date-found" required />

        <label htmlFor="item-name">Item Name</label>
        <input type="text" id="item-name" placeholder="e.g. Water Bottle, Backpack" required />

        <label htmlFor="item-category">Item Category</label>
        <select id="item-category" name="itemCategory" required>
            <option value="" disabled selected>Select a category</option>
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
        <textarea id="item-description" placeholder="Detailed description" required></textarea>

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
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FoundItemForm;