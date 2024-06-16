
import axios from "axios"
//fetchTaskList -get
import {base_url} from "../Helper/helper"
export const fetchTaskList =async () => {
	try{
		const response = await axios.get(base_url+"/task-list");
		if(response.status === 200){
			return response.data
		}else{
			console.log("Failed to fetch task list")
			throw new Error("Failed to fetch task list")
		}

	}catch(err){
		console.log(err)
		throw new Error("Failed to fetch task list")
	}
}



//addTask - post
export const addTask = async (newTask) => {
	try {
		const response = await axios.post(base_url + "/create-task", {
			task: newTask,
		});
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error("Failed to add task");
		}
	} catch (error) {
		console.log(error);
		throw new Error("Failed to add task");
	}
};







// updateTask - put



export const updateTask = async (updatedTask) => {
	try {
		const response = await axios.put(base_url + "/update-task", {
			task: updatedTask,
		});
		console.log(response);
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error("Failed to update task");
		}
	} catch (error) {
		console.log(error);
		throw new Error("Failed to update task");
	}
};


// deleteTask - delete

export const deleteTask = async (taskId) => {
	try {
		const response = await axios.delete(base_url + "/delete-task/" + taskId);
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error("Failed to delete task");
		}
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete task");
	}
};