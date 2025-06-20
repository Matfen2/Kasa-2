import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({id, cover, title}) => {
  const navigate = useNavigate();

  function showLogement() {
    navigate(`/logements/${id}`);
  }

  return (
    <article className="card" onClick={showLogement}>
      <div className="card-body">
        <img src={cover} className="card-img" alt={title} />
        <span>{title}</span>
      </div>
    </article>
  )
}

export default Card
