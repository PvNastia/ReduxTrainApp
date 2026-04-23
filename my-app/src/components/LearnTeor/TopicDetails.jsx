import { useParams, useNavigate } from "react-router-dom";

function TopicDetails() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>{topicId.replace('-', ' ').toUpperCase()}</h1>
      </div>
      <div className="details-content">
        <p>This is a detailed lecture about <strong>{topicId}</strong>.</p>
        <p>Here you can add more text, code examples, or even video lessons.</p>
      </div>
      <button className="back-btn" onClick={() => navigate("/teor")}>
        ← Back to Topics
      </button>
    </div>
  );
}
export default TopicDetails;
