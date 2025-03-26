import React, { useState } from 'react';
import './requestForm.css';

const RequestForm = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handlePlusButtonClick = () => {
        document.getElementById("fileUpload").click();
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
                {/* Form Section */}
                <form className="form-body">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateLost">Date Lost</label>
                        <input type="date" id="dateLost" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" placeholder="Phone number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemDescription">Item Description</label>
                        <textarea id="itemDescription" placeholder="Detail description" required />
                    </div>
                </form>

                {/* Image Preview with Categories */}
                <div className="image-category-container">
                    <div className="image-preview-container">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Uploaded Preview" />
                        ) : (
                            <p>+</p> // Placeholder before image is uploaded
                        )}
                    </div>

                    {/* Category Box Below Image */}
                    <div className="category-box">
                    <span className="category-text">Electronic</span> | <span className="category-text">Laptop</span>

                        {/* New text below categories */}
                        <p className="upload-text">Upload a Photo (Optional)</p>
                    </div>

                    {/* Updated Plus Button to Open File Upload */}
                    <button type="button" className="plus-button" onClick={handlePlusButtonClick}>+</button>
                </div>
            </div>

            {/* Hidden File Input */}
            <input type="file" id="fileUpload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />

           

            {/* Submit Button */}
            <div className="submit-section">
                <button type="submit" className="submit-button">Submit</button>
            </div>

            {/* Footer Section */}
            <footer className="form-footer"></footer>
        </div>
    );
};

export default RequestForm;
