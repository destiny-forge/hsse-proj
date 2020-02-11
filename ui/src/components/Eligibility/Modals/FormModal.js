import React from 'react';
import Select from 'react-select';

const FormModal = ({ 
  handleClose, 
  handleChange,
  show, 
  article,
  state,
  type 
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(article);
  const DOCUMENT_TYPES = [
    { value: 'Evidence briefs for policy', label: 'Evidence briefs for policy' },
    { value: 'Overviews of systematic reviews', label: 'Overviews of systematic reviews' },
    { value: 'Systematic reviews addressing other questions', label: 'Systematic reviews addressing other questions' },
    { value: 'Systematic reviews in progress', label: 'Systematic reviews in progress' },
    { value: 'Systematic reviews being planned', label: 'Systematic reviews being planned' },
    { value: 'Economic evaluations and costing studies', label: 'Economic evaluations and costing studies' },
    { value: 'Health reform descriptions', label: 'Health reform descriptions' },
    { value: 'Health system descriptions', label: 'Health system descriptions' },
    { value: 'Intergovernmental organizations’ health systems documents', label: 'Intergovernmental organizations’ health systems documents' },
    { value: 'Canada’s health systems documents', label: 'Canada’s health systems documents' },
    { value: 'Ontario’s health system documents', label: 'Ontario’s health system documents' },
    { value: 'No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.', label: 'NO, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.' },
  ];

  return (
    <div id="m-md" className={`model ${showHideClassName}`} databackdrop="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {article.title} - <small>{article.shortId}</small>
            </h5>
          </div>
          <div className="modal-body p-lg">
            <form>
              <h6 className="pb-3">General Information</h6>
              
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref Id</label>
                <div className="col-sm-10">
                  {article.shortId}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">
                  N/A
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document type</label>
                <div className="col-sm-10">
                  <Select
                    value={state.selectedDocumentType}
                    name="selectedDocumentType"
                    onChange={(value) => handleChange('selectedDocumentType', value)}
                    options={DOCUMENT_TYPES}
                    isSearchable
                  /> 
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Check me out
                    </label>
                  </div>
                </div>
              </div>
              <div class="box-divider pt-2 pb-3"></div>

              <h6 className="pb-3 pt-3">General Information</h6>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref Id</label>
                <div className="col-sm-10">
                  {article.shortId}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">
                  N/A
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document type</label>
                <div className="col-sm-10">
                  <Select
                    value={state.selectedDocumentType}
                    name="selectedDocumentType"
                    onChange={(value) => handleChange('selectedDocumentType', value)}
                    options={DOCUMENT_TYPES}
                    isSearchable
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Check me out
                    </label>
                  </div>
                </div>
              </div>

            </form>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn danger p-x-md" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn white p-x-md" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default FormModal;