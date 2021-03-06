import React from 'react';

const WaitingList = ({ batches, onAssign, onMakeLive }) => {
  return (
    <div>
      <h4>Batches waiting to be made priority / go live</h4>
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Batch Description</th>
                <th># in batch</th>
                <th># needing data entry</th>
                <th># needing Arabic</th>
                <th># needing Chinese</th>
                <th># needing French</th>
                <th># needing Portugese</th>
                <th># needing Russian</th>
                <th># needing Spanish</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {batches &&
                batches.map((batch) => (
                  <tr key={Math.random()}>
                    <td>{batch.batchName}</td>
                    <td>
                      {batch.total}({batch.live})
                    </td>
                    <td>{batch.needing_data}</td>
                    <td>{batch.needing_arabic}</td>
                    <td>{batch.needing_chinese}</td>
                    <td>{batch.needing_french}</td>
                    <td>{batch.needing_portugese}</td>
                    <td>{batch.needing_russian}</td>
                    <td>{batch.needing_spanish}</td>
                    <td>
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          onAssign(batch._id);
                        }}
                      >
                        Assign to this months update
                      </a>
                    </td>
                    <td>
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          onMakeLive(batch.batchId);
                        }}
                      >
                        Make live w/o monthly update
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
