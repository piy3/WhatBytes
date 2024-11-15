'use client'
import { useState, useEffect } from 'react';

const QuestionAnalysis =({ totalQuestions, correctAnswers })=> {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    // Introduce a slight delay before starting the animation
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 300); 

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [correctAnswers, totalQuestions]);

  return (
    <div className=" bg-white border border-gray-200 rounded-lg p-6 text-center">
      <div className="flex justify-between items-center font-bold text-gray-800 text-sm mb-2">
        <span>Question Analysis</span>
        <span className="text-blue-500">{`${correctAnswers}/${totalQuestions}`}</span>
      </div>
      <p className="text-gray-600 text-xm mb-4">
        <b> You scored {correctAnswers} question{correctAnswers === 1 ? '' : 's'} correct out of {totalQuestions}.</b>
        However, it still needs some improvements.
      </p>
      <div className="relative inline-block">
        <svg width="100" height="100" className="block">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e0e0e0"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45" 
            stroke="#3b82f6"
            strokeWidth="10"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="283"
            style={{
              transition: 'stroke-dashoffset 0.5s ease', 
              strokeDashoffset: 283 - (283 * progress) / 100,
            }}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🎯
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
