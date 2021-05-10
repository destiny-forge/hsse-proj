import React, { useState } from 'react';
import Select from 'react-select';
import Dropzone from 'react-dropzone-uploader';
import BatchService from '../../services/BatchService';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
  { value: 'cn', label: 'Chinese' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'pt', label: 'Portugese' },
];

const PDFUploadLinks = ({ title, type, items = {}, svcFetch, onUpdate }) => {
  const [language, setLanguage] = useState(LANGUAGES[0].value);

  const Batch = BatchService({ fetch: svcFetch });

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const remove = (key) => {
    const updatedItems = Object.assign({}, items);
    delete updatedItems[key];
    onUpdate(updatedItems);
  };

  const add = (name, link) => {
    const updatedItems = {
      ...items,
      [language]: {
        name,
        link,
      },
    };
    onUpdate(updatedItems);
  };

  const handleFileUpload = ({ file, meta: { name }, remove }, status) => {
    if (status === 'done') {
      Batch.signedUrl({
        type,
        contentType: 'application/pdf',
      })
        .then((res) => {
          fetch(
            new Request(res.data.url, {
              method: 'PUT',
              body: file,
              headers: new Headers({
                'Content-Type': 'application/pdf',
              }),
            })
          ).then((res) => {
            if (res.ok) {
              add(name, res.url);
              remove();
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <fieldset>
      <legend>{title}</legend>
      <table className="table">
        <tbody>
          <tr>
            <td colSpan="2">Select a language and choose a file to upload</td>
          </tr>
          <tr>
            <td>
              <Select
                value={LANGUAGES.filter((opt) => opt.value === language)}
                name="status"
                onChange={(opt) => changeLanguage(opt.value)}
                options={LANGUAGES}
                isSearchable
              />
            </td>
            <td>
              <Dropzone
                inputContent={null}
                maxFiles={1}
                accept={'application/pdf'}
                onChangeStatus={handleFileUpload}
                autoUpload={false}
                submitButtonDisabled={true}
                onDrag={true}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-striped b-t">
        <thead>
          <tr>
            <th></th>
            <th>Language</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <button onClick={() => remove(key)}>Remove</button>
                </td>
                <td>{key}</td>
                <td>{items[key].name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default PDFUploadLinks;
