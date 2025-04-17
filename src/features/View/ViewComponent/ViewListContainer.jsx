import React, { useState, useEffect } from "react";
import "./ViewListContainer.css";
import ContentCardsView from "./ViewListC";
import { ref, onValue } from "firebase/database";
import { database } from "../../../services/firebase-config";

const ViewListContainer = ({ selectedStatus }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setItems([]); // Clear previous items

    let itemsRef;

    if (selectedStatus === "Unclaimed Items") {
      itemsRef = ref(database, "reportedItems/Items");
    } else if (selectedStatus === "Pending Request") {
      itemsRef = ref(database, "RequestRetrieval");
    } else {
      // Optionally fetch a default set of data or do nothing
      itemsRef = ref(database, "reportedItems/Items"); // Default to unclaimed for now
    }

    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const fetchedItems = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          fetchedItems.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        if (selectedStatus === "Unclaimed Items") {
          // If your items have a status field, filter here
          const unclaimed = fetchedItems.filter(
            (item) => item.status === undefined || item.status === "unclaimed" || item.status === ""
          );
          setItems(unclaimed);
        } else {
          setItems(fetchedItems);
        }
      } else {
        setItems([]);
      }
      setLoading(false);
    }, (err) => {
      setError(err);
      setLoading(false);
      console.error("Error fetching data:", err);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [selectedStatus]);

  if (loading) {
    return <div>Loading items...</div>;
  }

  if (error) {
    return <div>Error loading items: {error.message}</div>;
  }

  return (
    <div className="request-containerView">
      <div className="request-container-contentView">
        <div className="unclaimed-items-containerView">
          {items.map((item) => (
            <ContentCardsView
              key={item.id}
              image={item.Picture || item.Image ||"https://placehold.co/100x100"} // Use Picture URL
              itemName={item.ItemName || item['Item Title'] || "No Name"}
              category={item["Item Category"] || item.category || "No Category"}
              dateLost={item["Date Found"] || item["Date Lost"] || "N/A"}
              status={item.Status}
              itemId={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewListContainer;