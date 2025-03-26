import React from "react";
import "./RequestPage.css";
import ContentCards from "./ContentCards/ContentCards"; // Already imported

const RequestPage = () => {
  const lostItems = [
    {
      image: "https://placehold.co/299x185",
      category: "Laptop",
      name: "John Doe",
      phone: "123-456-7890",
      dateLost: "March 20, 2025",
      description: "Lost near the university library. Contact me if found.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },
    {
      image: "https://placehold.co/299x185",
      category: "Phone",
      name: "Jane Smith",
      phone: "987-654-3210",
      dateLost: "March 18, 2025",
      description: "Silver laptop with a blue sticker on the back.",
    },

    {
        image: "https://placehold.co/299x185",
        category: "Phone",
        name: "Jane Smith",
        phone: "987-654-3210",
        dateLost: "March 18, 2025",
        description: "Silver laptop with a blue sticker on the back.",
    },

    {
        image: "https://placehold.co/299x185",
        category: "Phone",
        name: "Jane Smith",
        phone: "987-654-3210",
        dateLost: "March 18, 2025",
        description: "Silver laptop with a blue sticker on the back.",
    },
    
  ];

  return (
    <div className="request-container">
      <div className="request-container-content">
        <h1>Retrieval Request</h1>
        <div className="lost-items-container">
          {lostItems.map((item, index) => (
            <ContentCards
              key={index}
              {...item}
              onRelease={() => console.log(`Release clicked for ${item.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestPage;