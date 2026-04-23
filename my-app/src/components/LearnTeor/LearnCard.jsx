import { Link } from "react-router-dom";

function LearnCard({ id, title, desc }) {
  return (
    <div className="learn-card">
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <Link to={`/teor/${id}`} className="card-btn">Learn More →</Link>
    </div>
  );
}
export default LearnCard;
