import React from "react";
import "./ViewListContainer.css";
import ContentCardsView from "./ViewListC";

// Import example images
import walletImage from "../../../assets/images/wallet.jpg";
import phoneImage from "../../../assets/images/applewatch.jpg";
import backpackImage from "../../../assets/images/bracelet.webp";
import umbrellaImage from "../../../assets/images/wallet.jpg";
import laptopImage from "../../../assets/images/laptop.webp";
import notebookImage from "../../../assets/images/wallet.jpg";
import watchImage from "../../../assets/images/applewatch.jpg";
import earphonesImage from "../../../assets/images/bracelet.webp";
import jacketImage from "../../../assets/images/Iphone.webp";
import idCardImage from "../../../assets/images/bracelet.webp";

const lostItems = [
  { image: walletImage, itemName: "Wallet", category: "Accessories", dateLost: "03/28/2025" },
  { image: phoneImage, itemName: "Phone", category: "Electronics", dateLost: "03/25/2025" },
  { image: backpackImage, itemName: "Backpack", category: "Bags", dateLost: "03/20/2025" },
  { image: umbrellaImage, itemName: "Umbrella", category: "Accessories", dateLost: "03/18/2025" },
  { image: laptopImage, itemName: "Laptop", category: "Electronics", dateLost: "03/15/2025" },
  { image: notebookImage, itemName: "Notebook", category: "Stationery", dateLost: "03/10/2025" },
  { image: watchImage, itemName: "Watch", category: "Accessories", dateLost: "03/05/2025" },
  { image: earphonesImage, itemName: "Earphones", category: "Electronics", dateLost: "03/02/2025" },
  { image: jacketImage, itemName: "Jacket", category: "Clothing", dateLost: "02/28/2025" },
  { image: idCardImage, itemName: "ID Card", category: "Documents", dateLost: "02/25/2025" },
];

const ViewListContainer = () => {
  return (
    <div className="request-containerView">
      <div className="request-container-contentView">
        <div className="unclaimed-items-containerView">
          {lostItems.map((item, index) => (
            <ContentCardsView
              key={index}
              image={item.image}
              itemName={item.itemName}
              category={item.category}
              dateLost={item.dateLost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewListContainer;
