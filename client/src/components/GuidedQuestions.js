import React, { useState, useEffect } from 'react';
import Context from './Context';

const GuidedQuestions = ({ site, language }) => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    let url = `/i18n/${site}/questions-${language}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((results) => {
        setQuestions(results);
        setQuestion(results[0]);
      });
  }, [language]);

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

  const selectAnswer = (i) => {
    console.log(question.answers[i]);
    // we'll want to load the search
    // page and populate the menu based
    // on the passed in filters

    // Note: our system treats all child
    // elements of a parent as selected if
    // it itself is selected
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
                <a href="#" onClick={() => selectAnswer(i)}>
                  <span>{answer.title}</span>
                </a>
                <span className="answer-item-filters">
                  [{answer.description}]
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };

  const LeftArrow = () => {
    let className = 'btn-prev';
    className += index == 0 ? ' disabled' : '';
    return (
      <a href="#" className={className} onClick={prev}>
        <i />
      </a>
    );
  };

  const RightArrow = () => {
    let className = 'btn-next';
    className += index + 1 == questions.length ? ' disabled' : '';
    return (
      <a href="#" className={className} onClick={next}>
        <i />
      </a>
    );
  };

  return (
    <div className="guided-questions-box">
      <Dots />
      <LeftArrow />
      <GuidedQuestion />
      <RightArrow />
    </div>
  );
};

export default Context(GuidedQuestions);
