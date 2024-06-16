import { useState } from "react";
import './TaskAddModal.css'; // Import your custom CSS file

const TaskAddModal = ({ setShowAddModal, handleConfirmAdd }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("pending");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = {
			title,
			description,
			status,
		};

		handleConfirmAdd(newTask);
		setShowAddModal(false);
	};

	const handleClose = () => {
		setShowAddModal(false);
	};

	return (
		<div className="modal fade show custom-modal-overlay" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content custom-modal-content">
					<div className="modal-header custom-modal-header">
						<h5 className="modal-title">Add Task</h5>
						<button type="button" className="btn-close" onClick={handleClose}></button>
					</div>
					<div className="modal-body custom-modal-body">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">Title</label>
								<input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="description" className="form-label">Description</label>
								<textarea className="form-control" id="description" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="status" className="form-label">Status</label>
								<select className="form-select" id="status" value={status} onChange={handleStatusChange}>
									<option value="completed">Completed</option>
									<option value="in_progress">In Progress</option>
									<option value="pending">Pending</option>
								</select>
							</div>
							<div className="modal-footer custom-modal-footer">
								<button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
								<button type="submit" className="btn btn-primary">Add Task</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskAddModal;
