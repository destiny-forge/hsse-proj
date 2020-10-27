import React, { useState } from 'react';

const Translation = ({ article, language, edit }) => (
  <tr key={article.shortId}>
    <td>
      <button onClick={() => edit(article.shortId)}>Edit</button>
    </td>
    <td>{article.shortId}</td>
    <td>{article.title}</td>
    <td>{article.titles[language]}</td>
    <td>{article.title.split(' ').length}</td>
  </tr>
);

const EditTranslation = ({ article, language, change, cancel, update }) => (
  <tr key={article.shortId}>
    <td>
      <button onClick={() => cancel()}>Cancel</button>
    </td>
    <td>{article.shortId}</td>
    <td>{article.title}</td>
    <td>
      <textarea
        className="form-control"
        rows="5"
        onChange={change}
        value={article.titles[language]}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <button onClick={() => update(false)}>Update</button>
        <button onClick={() => update(true)}>Update and approve</button>
      </div>
    </td>
    <td>{article.title.split(' ').length}</td>
  </tr>
);

const List = ({ articles = [], language, onUpdate }) => {
  const [active, setActive] = useState(null);
  const [text, setText] = useState('');

  const edit = (shortId) => setActive(shortId);
  const cancel = () => setActive(null);
  const change = (e) => setText(e.target.value);

  const update = (approve) => {
    onUpdate(active, text, approve);
    cancel(active);
  };

  return (
    <div className="box">
      <div className="table-responsive">
        <table className="table table-striped b-t">
          <thead>
            <tr>
              <th></th>
              <th>Ref Id</th>
              <th>English Title</th>
              <th>Translated Title</th>
              <th>Word Count</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => {
              return article.shortId === active ? (
                <EditTranslation
                  article={article}
                  language={language}
                  change={change}
                  cancel={cancel}
                  update={update}
                  key={article.shortId}
                />
              ) : (
                <Translation
                  article={article}
                  language={language}
                  edit={edit}
                  key={article.shortId}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
