import { useNavigate } from "react-router-dom";
import LearnCard from "./LearnCard";
import "./Learning.css"; 

const topics = [
  { id: 'store', title: 'Redux Store', desc: 'The single source of truth for your application.' },
  { id: 'actions', title: 'Actions', desc: 'What happened in the application.' },
  { id: 'reducers', title: 'Reducers', desc: 'How the state changes in response to actions.' },
  { id: 'hooks', title: 'Hooks', desc: 'useSelector and useDispatch for functional components.' },
];

function LearnTeor() {
  const navigate =useNavigate();
  return (
    <div className="teor-container">
      <h2>Curriculum</h2>
      <div className="cards-grid">
        {topics.map(topic => (
          <LearnCard key={topic.id} {...topic} /> 
        ))}
      </div>
      <button className="teor-btn" onClick={() => navigate("/tests")}>Go to test</button>
    </div>
  );
}
export default LearnTeor;
