import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"
import Tasklist from "../../components/Tasklist/Tasklist"
import { fetchTaskList } from "../../api/dashboard";

export const Dashboard = () => {
	const [taskList, setTaskList] = useState([]);


	const fetchTask = async () => {
		try{
			const response = await fetchTaskList();

			setTaskList(response.tasks);


		}catch(err){
			console.log("Error while fetching task list")
		}
	}

	useEffect(() => {
		fetchTask();
		
	},[])

  return (
	<div>
		<Header taskList={taskList}/>
		<Tasklist />
	</div>
  )
}
