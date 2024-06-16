import TaskCard from "../TaskCard/TaskCard";

const Header = ({taskList}) => {

	const totalTasks = taskList.length;
	const completedTasks = taskList.filter((task) => task.status === "completed").length;
	const remainingTasks = totalTasks - completedTasks;

	
  return (
	<div className="container mt-5">
			<div className="row" style={{flex:1}}>
				<div className="col-md-4 mb-4" >
					<TaskCard title="Total Tasks" count={totalTasks} color="#0d6efd" />
				</div>
				<div className="col-md-4 mb-4">
					<TaskCard title="Completed Tasks" count={completedTasks} color="#198754" />
				</div>
				<div className="col-md-4 mb-4">
					<TaskCard title="Remaining Tasks" count={remainingTasks} color="#dc3545" />
				</div>
			</div>
		</div>
  )
}

export default Header