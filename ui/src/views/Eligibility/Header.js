import React from 'react';

const Header = (props) =>
  <div className={`item ${props.type}`}>
    <div className="p-4">
      <div className="row mt-3">
        <div className="col-sm-7">
          <div className="media">
            <div className="media-body mx-3 mb-2">
              { props.type === 'hse' ?
                <div>
                  <h4>HEALTH SYSTEMS EVIDENCE</h4>
                  <p>
                    The world's most comprehensive, free access point for evidence to support policy makers, stakeholders and
                    researchers interested in how to strengthen or reform health systems or in how to get cost-effective programs,
                    services and drugs to those who need them.
                  </p>
                </div>
              :
                <div>
                  <h4>SOCIAL SYSTEMS EVIDENCE</h4>
                  <p>
                    The world's most comprehensive, free access point for evidence about strengthening 20 government
                    sectors and program areas, and achieving the Sustainable Development Goals.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Header;