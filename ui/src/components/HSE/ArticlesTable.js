import React from 'react';

const ArticlesTable = (props) => 
  <div className="box">
    <div className="table-responsive">
      <table className="table table-striped b-t">
        <thead>
          <tr>
            <th style={{ width: "20px" }}>
              <label className="ui-check m-0">
                <input type="checkbox" />
                <i></i>
              </label>
            </th>
            <th>Title</th>
            <th>Journal</th>
            <th>Authors</th>
            <th>Source</th>
            <th>Complicated</th>
            <th>Lost</th>
          </tr>
        </thead>
        <tbody>
          {
            props.articles && props.articles.map(article => (
              <tr key={Math.random()}>
                <td>
                  <label className="ui-check m-0">
                    <input type="checkbox" name="post[]" />
                    <i className="dark-white"></i>
                  </label>
                </td>
                <td>{article.title}</td>
                <td>{article.journal}</td>
                <td>{article.authors}</td>
                <td>{article.source}</td>
                <td>
                  {
                    article.complicated
                      ? <i className="fa fa-check text-success d-none"></i>
                      : <i className="fa fa-times text-danger d-inline"></i>
                  }
                </td>
                <td>
                  {
                    article.lost
                      ? <i className="fa fa-check text-success d-none"></i>
                      : <i className="fa fa-times text-danger d-inline"></i>
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>

export default ArticlesTable;