import './TaskDeleteModal.css'; // Import your custom CSS file

const TaskDeleteModal = ({ task, setShowDeleteModal, handleConfirmDelete }) => {

  const handleDelete = () => {
    handleConfirmDelete(task?.id); 
    setShowDeleteModal(false); 
  };

  const handleClose = () => {
    setShowDeleteModal(false); 
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content custom-modal-content">
          <div className="modal-header custom-modal-header">
            <h5 className="modal-title">Delete Task</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body custom-modal-body">
            <p>Are you sure you want to delete this task titled as &quot;{task?.title}&quot;?</p>
          </div>
          <div className="modal-footer custom-modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDeleteModal;