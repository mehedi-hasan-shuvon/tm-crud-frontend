import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"
import Tasklist from "../../components/Tasklist/Tasklist"
import { fetchTaskList } from "../../api/dashboard";

export const Dashboard = () => {
	const [taskList, setTaskList] = useState([]);
	const [isUpdated, setIsUpdated] = useState(false);

	const [isLoading, setIsLoading] = useState(false);


	const fetchTask = async () => {
		try{
			setIsLoading(true);
			const response = await fetchTaskList();

			setTaskList(response.tasks);
			setIsLoading(false);

		}catch(err){
			console.log("Error while fetching task list")
		}
	}

	useEffect(() => {
		fetchTask();
		
	},[isUpdated])

  return (
	<div className="container-fluid dashboard"> 
		<Header taskList={taskList}/>
		<Tasklist taskList={taskList} isUpdated={isUpdated} setIsUpdated={setIsUpdated} isLoading={isLoading}/>
	</div>
  )
}
