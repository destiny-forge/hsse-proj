import React from 'react';

const GoLiveList = ({ items, onGoLive }) => {
  return (
    <div>
      <h4>Monthly updates waiting to go live</h4>
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Update date</th>
                <th># in update</th>
                <th># needing data entry</th>
                <th># needing Arabic</th>
                <th># needing Chinese</th>
                <th># needing French</th>
                <th># needing Portugese</th>
                <th># needing Russian</th>
                <th># needing Spanish</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr key={Math.random()}>
                    <td>{item._id}</td>
                    <td>{item.total}</td>
                    <td>{item.needing_data}</td>
                    <td>{item.needing_arabic}</td>
                    <td>{item.needing_chinese}</td>
                    <td>{item.needing_french}</td>
                    <td>{item.needing_portugese}</td>
                    <td>{item.needing_russian}</td>
                    <td>{item.needing_spanish}</td>
                    <td>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onGoLive();
                        }}
                      >
                        Go Live! (w/o translations)
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

export default GoLiveList;
