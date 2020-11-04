import React, { useState } from 'react';

const EditLinkTable = ({
  title,
  field,
  items,
  isTestable = false,
  nameTitle = 'Name',
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
    setActiveValue(e.target.value);
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
            <th>{nameTitle}</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((key) => {
            const url = items[key];
            if (key === activeKey) {
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
                  {isTestable && url.indexOf('http') !== -1 && (
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
