// import css 
import './TaskCard.css';
const TaskCard = ({ title, count, color }) => {
  return (
    <div className="card text-center task-card" style={{ backgroundColor: color, height: "100%" }}>
      <div className="card-body" >
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text">{count}</p>
      </div>
    </div>
  );
};

export default TaskCard;