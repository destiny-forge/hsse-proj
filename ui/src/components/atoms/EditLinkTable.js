import React, { useState } from 'react';

const EditLinkTable = ({
  title,
  field,
  items,
  isTestable = false,
  onUpdate,
}) => {
  const [activeKey, setActiveKey] = useState('');
  const [activeValue, setActiveValue] = useState('');

  const activate = (key, value) => {
    setActiveKey(key);
    setActiveValue(value);
  };

  const deactivate = () => {
    setActiveKey('');
    setActiveValue('');
  };

  const changeValue = (e) => {
    const { name, value } = e.target;
    setActiveValue(value);
  };

  const sendUpdate = () => {
    onUpdate(field, activeKey, activeValue);
    deactivate();
  };

  const test = (url) => {
    window.open(url);
  };

  return (
    <fieldset>
      <legend>{title}</legend>
      <table className="table table-striped b-t">
        <thead>
          <tr>
            <th></th>
            <th>Link Name</th>
            <th>Link URL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((key) => {
            const url = items[key];
            const isEmpty = url === '' || url === null;
            if (key == activeKey) {
              return (
                <tr key={key}>
                  <td>
                    <button onClick={deactivate}>Cancel</button>
                  </td>
                  <td>{key}</td>
                  <td>
                    <input
                      className="form-control"
                      onChange={changeValue}
                      value={activeValue}
                    />
                    <button onClick={sendUpdate}>Update</button>
                  </td>
                </tr>
              );
            }
            return (
              <tr key={key}>
                <td>
                  <button onClick={() => activate(key, url)}>Edit</button>
                </td>
                <td>{key}</td>
                <td>
                  {isTestable && url.indexOf('http') != -1 && (
                    <button onClick={() => test(url)}>Test</button>
                  )}{' '}
                  {url}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default EditLinkTable;
