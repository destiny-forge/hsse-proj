import React, { useState } from 'react';
import Select from 'react-select';
import Dropzone from 'react-dropzone-uploader';
import BatchService from '../../services/BatchService';

const LANGUAGES = [
  { value: 'EN', label: 'English' },
  { value: 'AR', label: 'Arabic' },
  { value: 'CN', label: 'Chinese' },
  { value: 'ES', label: 'Spanish' },
  { value: 'FR', label: 'French' },
  { value: 'PT', label: 'Portugese' },
];

const PDFUploadLinks = ({
  title,
  type,
  field,
  items = {},
  svcFetch,
  onUpdate,
}) => {
  const [language, setLanguage] = useState(LANGUAGES[0].value);

  const Batch = BatchService({ fetch: svcFetch });

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const remove = (key) => {
    const clone = { ...items };
    const updatedItems = delete clone[key];
    onUpdate(field, updatedItems);
  };

  const add = (link) => {
    const updatedItems = {
      ...items,
      [language]: link,
    };
    onUpdate(field, updatedItems);
  };

  const handleFileUpload = ({ file, meta: { name } }, status) => {
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
              add(res.url);
              console.log(file);
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
            const url = items[key];
            return (
              <tr key={key}>
                <td>
                  <button onClick={() => remove(key)}>Remove</button>
                </td>
                <td>{key}</td>
                <td>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default PDFUploadLinks;
