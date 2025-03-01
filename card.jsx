// Card.jsx
const Card = ({ title, description, link }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    );
  };
  
  export default Card;
  