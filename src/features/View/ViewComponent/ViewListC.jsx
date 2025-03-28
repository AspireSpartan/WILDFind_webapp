import "./ViewListC.css";

const ContentCardsView = ({ image, itemName, category, dateLost }) => {
  return (
    <div className="content-cardView">
      <img className="wallet-image" src={image} alt={itemName} />
      <div className="card-containerView">
        <div className="wallet-info-background" />
        <div className="wallet-title">{itemName} | {category}</div>
        <div className="wallet-date">Date Lost: {dateLost}</div>
        <div className="wallet-status">Unclaimed</div>
      </div>
    </div>
  );
};

export default ContentCardsView;
