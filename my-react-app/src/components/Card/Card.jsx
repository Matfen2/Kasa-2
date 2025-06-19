import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({id, cover, title}) => {
  const navigate = useNavigate();

  function showLogement() {
    navigate(`/logement/${id}`);
  }

  return (
    <article className="card" key={id} onClick={showLogement}>
      <div className="card-body">
        <img src={cover} className="card-img" alt={title} />
        <span>{title}</span>
      </div>
    </article>
  )
}

export default Card
