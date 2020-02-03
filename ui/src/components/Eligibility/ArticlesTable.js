import React from 'react';
import Modal from './Modal';

class ArticlesTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      show: false 
    }
  }

  showModal = () => {
    this.setState({ 
      show: true 
    });
  }

  hideModal = () => {
    this.setState({ 
      show: false 
    });
  }

  render() {
    const { 
      user,
      type
    } = this.props;

    return (
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
                <th>Junior Appraiser</th>
                <th>Senior Appraiser</th>
                <th>Authors</th>
                <th>Source</th>
                <th>Complicated</th>
                <th>Lost</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.articles && this.props.articles.map(article => (
                  <tr key={Math.random()}>
                    <td>
                      <label className="ui-check m-0">
                        <input type="checkbox" name="post[]" />
                        <i className="dark-white"></i>
                      </label>
                    </td>
                    <td>{article.title}</td>
                    <td>{article.journal}</td>
                    <td>
                      <Modal 
                        show={this.state.show} 
                        handleClose={this.hideModal}
                        user={user}
                        stage='eligibility'
                        articleId={article._id}
                        type={type}
                      />
                      <button 
                        className="md-btn md-flat mb-2 w-xs text-success"
                        onClick={this.showModal}>
                          Assign
                      </button>
                    </td>
                    <td><button className="md-btn md-flat mb-2 w-xs text-success">Assign</button></td>
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
    )
  }
}

export default ArticlesTable;