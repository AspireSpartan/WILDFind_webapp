import "./ViewListC.css";

const ContentCardsView = ({ image, itemName, category, dateLost, status, itemId }) => {
  return (
    <div className="content-cardView">
      <img className="wallet-image" src={image} alt={itemName} />
      <div className="card-containerView">
        <div className="wallet-info-background" />
        <div className="wallet-title">{itemName} | {category}</div>
        <div className="wallet-date">Date Lost: {dateLost}</div>
        <div className="wallet-status">{status || "Unclaimed"}</div> {/* Use status if available, default to "Unclaimed" */}
      </div>
    </div>
  );
};

export default ContentCardsView;