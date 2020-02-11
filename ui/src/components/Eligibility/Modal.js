import React from 'react';

const AssignModal = ({ handleClose, show, user, stage, articleId, type }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div id="m" className={`model ${showHideClassName }`} databackdrop="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Assign Article</h5>
          </div>
          <div className="modal-body text-center p-lg">
            <p>Are you sure you want to assign this article to your assigned quality appraisals list?</p>
          </div>
          <div className="modal-footer">
            <button onClick={() => handleClose(user, null, null, type)} type="button" className="btn dark-white p-x-md" data-dismiss="modal">No</button>
            <button onClick={() => handleClose(user, stage, articleId, type)} type="button" className="btn danger p-x-md" data-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignModal;