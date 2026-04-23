import { useNavigate } from "react-router-dom";
import LearnCard from "./LearnCard";
import "./Learning.css"; 

const topics = [
  { id: 'store', title: 'Redux Store', desc: 'The single source of truth for your application.' },
  { id: 'actions', title: 'Actions', desc: 'Plain objects that describe what happened in the application.' },
  { id: 'reducers', title: 'Reducers', desc: 'Functions that specify how the state changes in response to actions.' },
  { id: 'hooks', title: 'Hooks', desc: 'Modern way to interact with Redux using useSelector and useDispatch.' },
  { id: 'toolkit', title: 'Redux Toolkit', desc: 'The official, opinionated, batteries-included toolset for efficient Redux development.' },
  { id: 'middleware', title: 'Middleware', desc: 'Provides a third-party extension point between dispatching an action and the reducer.' },
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
