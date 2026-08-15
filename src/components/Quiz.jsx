import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Quiz({ dayId, title, questions, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, optionIndex) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score += 1;
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-container empty">
        <h3>Quiz for Day {dayId}</h3>
        <p>No questions have been added for this day yet. Check back later!</p>
        <button className="btn-read" onClick={onComplete}>Mark Day as Complete Anyway</button>
      </div>
    );
  }

  const score = calculateScore();

  return (
    <div className="quiz-container">
      <h3>End of Day Quiz: {title}</h3>
      <div className="questions-list">
        {questions.map((q, qIndex) => {
          const isCorrect = answers[qIndex] === q.answer;
          const showResult = submitted;

          return (
            <div key={qIndex} className="question-card">
              <p className="question-text"><strong>Q{qIndex + 1}:</strong> {q.question}</p>
              <div className="options-list">
                {q.options.map((opt, optIndex) => {
                  const isSelected = answers[qIndex] === optIndex;
                  const isActuallyCorrect = q.answer === optIndex;
                  
                  let optClass = "option-btn";
                  if (isSelected) optClass += " selected";
                  if (showResult && isActuallyCorrect) optClass += " correct";
                  if (showResult && isSelected && !isActuallyCorrect) optClass += " incorrect";

                  return (
                    <button 
                      key={optIndex} 
                      className={optClass}
                      onClick={() => handleSelect(qIndex, optIndex)}
                      disabled={submitted}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {showResult && (
                <div className={`explanation ${isCorrect ? 'correct-text' : 'incorrect-text'}`}>
                  {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button 
          className="btn-submit-quiz" 
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < questions.length}
        >
          Submit Quiz
        </button>
      ) : (
        <div className="quiz-results">
          <h4>You scored {score} out of {questions.length}!</h4>
          <button className="btn-read" onClick={onComplete}>Complete Day {dayId}</button>
        </div>
      )}
    </div>
  );
}
