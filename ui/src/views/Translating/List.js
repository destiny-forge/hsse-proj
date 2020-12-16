import React, { useState, useEffect } from 'react';

const Translation = ({ article, text, edit, approve }) => (
  <tr key={article.shortId}>
    <td>
      <button onClick={() => edit(article._id, text)}>Edit</button>
    </td>
    <td>{article.shortId}</td>
    <td>{article.title}</td>
    <td>
      {text}
      {text !== '' && (
        <button onClick={() => approve(article._id, text)}>Approve</button>
      )}
    </td>
    <td>{article.title.split(' ').length}</td>
  </tr>
);

const EditTranslation = ({ article, text, change, cancel, update }) => (
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
        value={text}
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

const List = ({ articles = [], language, priority, onUpdate, onSearch }) => {
  const [active, setActive] = useState(null);
  const [text, setText] = useState('');

  const edit = (articleId, text) => {
    setText(text);
    setActive(articleId);
  };
  const cancel = () => setActive(null);
  const change = (e) => setText(e.target.value);

  const update = (approve) => {
    cancel(active);
    onUpdate(active, language, text, approve);
  };

  const approve = (articleId, translation) => {
    onUpdate(articleId, language, translation, true);
  };

  useEffect(() => {
    onSearch(language);
  }, [language, priority]);

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
              const translatedTitle =
                (article.titles[language] && article.titles[language].text) ||
                '';
              return article._id === active ? (
                <EditTranslation
                  article={article}
                  text={text}
                  change={change}
                  cancel={cancel}
                  update={update}
                  key={article.shortId}
                />
              ) : (
                <Translation
                  article={article}
                  text={translatedTitle}
                  edit={edit}
                  approve={approve}
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
