
const Loader = () => {
	return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
            <div className="spinner-border me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
			<div>
				<h2> Please wait ...</h2>
			</div>
        </div>
    );
}

export default Loader