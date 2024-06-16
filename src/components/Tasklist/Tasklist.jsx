

import { useState } from 'react';
import './Tasklist.css'
import { addTask, deleteTask, updateTask } from '../../api/dashboard';
import TaskDeleteModal from '../TaskDeleteModal/TaskDeleteModal';
import TaskEditModal from '../TaskEditModal/TaskEditModal';
import TaskAddModal from '../TaskAddModal/TaskAddModal';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
const Tasklist = ({ taskList, isUpdated, setIsUpdated, isLoading }) => {

	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);
	const [showAddModal, setShowAddModal] = useState(false);


	const handleEdit = (task) => {
		setShowEditModal(true);
		setSelectedTask(task);
	};

	const handleDelete = (task) => {
		setShowDeleteModal(true);
		setSelectedTask(task);
	};

	const handleAdd = () => {
		setShowAddModal(true);
	};

	const handleConfirmEdit = async (task) => {
		try {
			const response = await updateTask(task);
			if (response.status === 200) {
				toast.success('Task updated successfully');
			} else {
				toast.error('Failed to update task');
				console.log('Failed to update task');
			}

		} catch (error) {
			console.log('Failed to update task:', error);
		}
		setIsUpdated(!isUpdated);
	}

	// make a async function to handle delete with deleteTask API


	const handleConfirmDelete = async (taskId) => {
		try {
			const response = await deleteTask(taskId);

			if (response.status === 200) {
				toast.success('Task deleted successfully');
				setIsUpdated(!isUpdated);
			} else {
				toast.error('Failed to delete task');
				console.log('Failed to delete task');
			}


		} catch (error) {
			console.log('Failed to delete task:', error);
		}
	}

	const handleConfirmAdd = async (task) => {
		try {

			const response = await addTask(task);
			if (response.status === 200) {
				toast.success('Task added successfully');
			} else {
				toast.error('Failed to add task');
				console.log('Failed to add task');
			}

		} catch (error) {
			console.log('Failed to add task:', error);
		}
		setIsUpdated(!isUpdated);
	}

	const checkStatus = (status) => {
		if (status === "completed") {
			return "bg-success";
		} else if (status == "in_progress") {
			return "bg-warning";
		} else {
			return "bg-danger";
		}
	}
	return (
		<div className="container mt-4">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h2>Task List:</h2>
				<div className="d-flex justify-content-end">
					<button
						type="button"
						className="btn btn-primary btn-sm"
						onClick={() => handleAdd()}
					>
						Add Task
					</button>
				</div>
			</div>
			{
				isLoading ?
					<Loader />
					:
					<div className="table-responsive table-container">
						<table className="table table-striped">
							<thead>
								<tr>
									<th>Task No.</th>
									<th>Title</th>
									<th>Status</th>
									<th>Description</th>
									<th>Created At</th>
									<th className="d-flex justify-content-end">Actions</th>
								</tr>
							</thead>
							<tbody>
								{taskList.map((task, index) => (
									<tr key={task.id}>
										<td>{index + 1}</td>
										<td>{task.title}</td>
										<td>
											<span
												className={`badge ${checkStatus(task.status)}`}
												style={{
													color: "white",
													fontSize: "14px",
													fontWeight: "500",
													padding: "5px 10px",
												}}
											>
												{task.status.replace(/_/g, " ")}
											</span>
										</td>
										<td>
											{task?.description.length > 30
												? task?.description.slice(0, 30) + "..."
												: task?.description}
										</td>
										<td>{new Date(task.created_at).toLocaleString()}</td>
										<td className="d-flex justify-content-end">
											<button
												className="btn btn-primary btn-sm me-2"
												onClick={() => handleEdit(task)}
											>
												Edit
											</button>
											<button
												className="btn btn-danger btn-sm"
												onClick={() => handleDelete(task)}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
			}



			{showDeleteModal && <TaskDeleteModal task={selectedTask} setShowDeleteModal={setShowDeleteModal} handleConfirmDelete={handleConfirmDelete} />}
			{/* for edit */}
			{
				showEditModal && <TaskEditModal task={selectedTask} setShowEditModal={setShowEditModal} handleConfirmEdit={handleConfirmEdit} />
			}

			{showAddModal && <TaskAddModal setShowAddModal={setShowAddModal} handleConfirmAdd={handleConfirmAdd} />}
		</div>
	);
}

export default Tasklist