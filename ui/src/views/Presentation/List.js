import React from 'react';

const List = ({ articles = [], onEdit }) => (
  <div className="box">
    <div className="table-responsive">
      <table className="table table-striped b-t">
        <thead>
          <tr>
            <th></th>
            <th>Ref Id</th>
            <th>Title</th>
            <th>Focus</th>
            <th>Pub Year</th>
            <th>Authors</th>
            <th>Abstract</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={Math.random()}>
              <td>
                <button onClick={() => onEdit(article.shortId)}>Edit</button>
              </td>
              <td>{article.shortId}</td>
              <td>{article.title}</td>
              <td>{article.generalFocus ? 'General' : 'Specific'}</td>
              <td>{article.published}</td>
              <td>{article.authors}</td>
              <td>{article.abstract}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default List;
