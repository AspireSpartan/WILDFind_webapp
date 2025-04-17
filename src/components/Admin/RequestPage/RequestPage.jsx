// src/components/Admin/RequestPage/RequestPage.jsx
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../../../services/firebase-config"; // Import the database instance
import "./RequestPage.css";
import ContentCards from "../../../components/Admin/ContentCards/ContentCards";

const RequestPage = () => {
  const [lostItems, setLostItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getDatabase();
    const requestsRef = ref(db, "RequestRetrieval");

    const unsubscribe = onValue(
      requestsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const requestsData = snapshot.val();
          console.log("Fetched requests:", requestsData); // Log the data for debugging

          // Map the requests with unique keys and sort by date (newest first)
          const mappedItems = Object.keys(requestsData)
          .map((key) => ({
            key: key, // e.g., "Request1"
            image: requestsData[key].Image || "https://placehold.co/299x185",
            itemName: requestsData[key]["Item Title"], // ✅ Fixed property name
            name: requestsData[key].Name,
            idNumber: requestsData[key].IDNumber, // ✅ Added ID Number
            phone: requestsData[key].PhoneNumber,
            dateLost: requestsData[key]["Date Lost"], // ✅ Fixed property name
            description: requestsData[key]["Item Description"], // ✅ Fixed property name
            category: requestsData[key]["Item Category"], // ✅ Add category
            status: requestsData[key].Status,           // ✅ Add status
          }))
            .sort((a, b) => new Date(b.dateLost) - new Date(a.dateLost)); // Sort by date, newest first

          setLostItems(mappedItems);
          setError(null);
        } else {
          setError("No retrieval requests found.");
          setLostItems([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching requests:", error.code, error.message);
        setError("Failed to fetch retrieval requests. Please try again.");
        setLostItems([]);
        setLoading(false);
      }
    );

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="request-container">
      <div className="request-container-content">
        <h1>Retrieval Request</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : lostItems.length > 0 ? (
          <div className="lost-items-container">
            {lostItems.map((item) => (
              <ContentCards
                key={item.key} // Use the request key (e.g., "Request1")
                {...item}
                onRelease={() => console.log(`Release clicked for ${item.name}`)}
              />
            ))}
          </div>
        ) : (
          <p>No retrieval requests available.</p>
        )}
      </div>
    </div>
  );
};

export default RequestPage;