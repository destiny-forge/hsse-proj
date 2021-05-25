import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { AssignHeader } from '../../components/Assignment';
import perms from '../../utils/permissions';

const ArticleList = ({ stage, articles = [], user, assign }) => {
  const showEmail = (stage, type) => {
    if (!_.isUndefined(stage[type])) {
      return stage[type].email;
    }
  };

  const isAssigned = (stage) => {
    let juniorAssigned,
      seniorAssigned = false;
    if (!_.isUndefined(stage['junior'])) {
      juniorAssigned = stage.junior.email === user.email;
    }
    if (!_.isUndefined(stage['senior'])) {
      seniorAssigned = stage.senior.email === user.email;
    }
    return juniorAssigned || seniorAssigned;
  };

  const getMyStatus = (stage) => {
    let status = '';
    if (isAssignedAs(stage, 'junior')) {
      status = stage.junior.status;
    }
    if (isAssignedAs(stage, 'senior')) {
      status = stage.senior.status;
    }
    return status;
  };

  const getStatus = (article, stage) => {
    return article.stages[stage].status || '';
  };

  const isAssignedAs = (stage, role) => {
    return !_.isUndefined(stage[role]) && stage[role].email === user.email;
  };

  const getAction = (article, stageName) => {
    const stage = article.stages[stageName];
    const { status } = stage;

    if (!perms.can_filter(user)) {
      return null;
    }

    if (!isAssigned(stage) || status === 'Data entry complete') {
      return null;
    }

    const code = `/${stageName}/${article.type}/${article.shortId}`;
    const resolve = `/conflicts/${article.type}/${stageName}/${article.shortId}`;

    return status === 'Discrepancy detected' ? (
      <Link to={resolve}>Resolve Conflicts</Link>
    ) : (
      <Link to={code}>Code</Link>
    );
  };

  return (
    <div className="box">
      {/* <h2>{title}</h2> */}
      <div className="table-responsive">
        <table className="table table-striped b-t">
          <thead>
            <tr>
              <th>Ref Id</th>
              <th>Title</th>
              <th>Authors</th>
              <th>
                <AssignHeader role="Junior" stage={stage} />
              </th>
              <th>
                <AssignHeader role="Senior" stage={stage} />
              </th>
              <th>My Status</th>
              <th>Article Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((article) => (
                <tr key={Math.random()}>
                  <td>{article.shortId}</td>
                  <td>{article.title}</td>
                  <td>{article.authors}</td>
                  <td>
                    {/*
                        <AssignAction
                          user={user}
                          stage={stage}
                          role="junior"
                          action={this.assign}
                        />
                      */}

                    {showEmail(article.stages[stage], 'junior') ||
                      (!isAssignedAs(article.stages[stage], 'senior') &&
                        perms.can_filter_junior(user) && (
                          <button
                            className="md-btn md-flat mb-2 w-xs text-success"
                            onClick={() => {
                              if (
                                window.confirm(
                                  'Are you sure you want to assign this article to your assigned quality appraisals list?'
                                )
                              )
                                assign(
                                  'junior',
                                  article._id,
                                  article.stages[stage]
                                );
                            }}
                          >
                            Assign
                          </button>
                        ))}
                  </td>
                  <td>
                    {showEmail(article.stages[stage], 'senior') ||
                      (!isAssignedAs(article.stages[stage], 'junior') &&
                        perms.can_filter_senior(user) && (
                          <button
                            className="md-btn md-flat mb-2 w-xs text-success"
                            onClick={() => {
                              if (
                                window.confirm(
                                  'Are you sure you want to assign this article to your assigned quality appraisals list?'
                                )
                              )
                                assign(
                                  'senior',
                                  article._id,
                                  article.stages[stage]
                                );
                            }}
                          >
                            Assign
                          </button>
                        ))}
                  </td>
                  <td>{getMyStatus(article.stages[stage])}</td>
                  <td>{getStatus(article, stage)}</td>
                  <td>{getAction(article, stage)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleList;
