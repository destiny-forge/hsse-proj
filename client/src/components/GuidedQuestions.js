import React, { useState, useEffect } from 'react';
import Context from './Context';
import { GuidedSearchConsumer } from './GuidedSearchContext';
import { useHistory, useLocation } from 'react-router-dom';

const GuidedQuestions = ({ site, language, isCollapsed = false }) => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [collapsed, setCollapsed] = useState(isCollapsed);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    let url = `/i18n/${site}/questions-${language}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((results) => {
        setQuestions(results);
        setQuestion(results[0]);
      });
  }, [site, language]);

  const navigate = (i) => {
    setIndex(i);
    setQuestion(questions[i]);
  };

  const prev = (e) => {
    e.preventDefault();
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      setIndex(prevIndex);
      setQuestion(questions[prevIndex]);
    }
  };

  const next = (e) => {
    e.preventDefault();
    const nextIndex = index + 1;
    if (nextIndex < questions.length) {
      setIndex(nextIndex);
      setQuestion(questions[nextIndex]);
    }
  };

  const toggle = (e) => {
    e.preventDefault();
    setCollapsed(!collapsed);
  };

  const selectAnswer = (e, i) => {
    e.preventDefault();
    const answer = question.answers[i];
    let params = new URLSearchParams(location.search);
    const filter =
      (answer.filters && answer.filters.join(',')) || answer.filterGroup.id;

    let applied_filters = params.get('applied_filters');
    applied_filters =
      applied_filters === null ? filter : `${applied_filters},${filter}`;

    history.push({
      pathname: '/search',
      search: `?applied_filters=${applied_filters}`,
    });

    setCollapsed(true);
  };

  const Dots = () => {
    return (
      <ul className="carousel-indicators">
        {questions.map((_q, i) => {
          let className = 'carousel-indicator-item';
          className += i === index ? ' active' : '';
          return (
            <li key={i} className={className} onClick={() => navigate(i)}></li>
          );
        })}
      </ul>
    );
  };

  const GuidedQuestion = () => {
    let Question = null;
    switch (site) {
      case 'hse':
        Question = HSEQuestion;
        break;
      case 'sse':
        Question = SSEQuestion;
        break;
      default:
      case 'cvd':
        Question = null;
        break;
    }
    return <Question />;
  };

  const SSEQuestion = () => {
    let className = 'guided-question';
    className += collapsed ? ' collapsed' : ' expanded';
    return (
      question && (
        <div className={className}>
          <div className="guided-question-text">
            <span>{question.text}</span>
            {question.image && (
              <img src={question.image} alt={question.text} width="150" />
            )}
            <a className="btn-toggle" href="#" onClick={toggle}></a>
          </div>
          <ul className="answer-list">
            {question.answers.map((answer, i) => {
              let css = `answer-item${answer.image ? ' answer-image' : ''}`;
              let aCss = `${
                answer.image ? '' : 'layer-toggle layer-toggle-filters'
              }`;
              return (
                <li key={i} className={css}>
                  <a
                    href="/search"
                    className={aCss}
                    onClick={(e) => selectAnswer(e, i)}
                  >
                    {answer.image ? (
                      <img src={answer.image} alt={answer.section.title} />
                    ) : (
                      <React.Fragment>
                        <span>{answer.text}</span>
                        {answer.filterGroup.title !== '' ? (
                          <span className="answer-item-filters">
                            [{answer.filterGroup.title}]
                          </span>
                        ) : null}
                      </React.Fragment>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="clearfix" />
        </div>
      )
    );
  };

  const HSEQuestion = () => {
    let className = 'guided-question';
    className += collapsed ? ' collapsed' : ' expanded';
    return (
      question && (
        <div className={className}>
          <div className="guided-question-text">
            <span>{question.title}</span>
            <a className="btn-toggle" href="#" onClick={toggle}></a>
          </div>
          <ul className="answer-list">
            {question.answers.map((answer, i) => (
              <li key={i} className="answer-item">
                <a
                  href="#"
                  onClick={(e) => selectAnswer(e, i)}
                  className="layer-toggle layer-toggle-filters"
                >
                  <span>{answer.title}</span>
                </a>
                <span className="answer-item-filters">
                  [{answer.description}]
                </span>
              </li>
            ))}
          </ul>
          <div className="clearfix" />
        </div>
      )
    );
  };

  const LeftArrow = () => {
    let className = 'btn-prev';
    className += index === 0 ? ' disabled' : '';
    return (
      <a href="#" className={className} onClick={prev}>
        <i />
      </a>
    );
  };

  const RightArrow = () => {
    let className = 'btn-next';
    className += index + 1 === questions.length ? ' disabled' : '';
    return (
      <a href="#" className={className} onClick={next}>
        <i />
      </a>
    );
  };

  return (
    <GuidedSearchConsumer>
      {({ toggled }) => {
        return (
          toggled && (
            <div className="guided-questions-box">
              <Dots />
              <LeftArrow />
              <GuidedQuestion />
              <RightArrow />
            </div>
          )
        );
      }}
    </GuidedSearchConsumer>
  );
};

export default Context(GuidedQuestions);
