
"use client";
import React from "react";
import { FaTrophy, FaCheckCircle, FaCalendar } from "react-icons/fa";

function QuickStatistics({Statistics}) {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4  flex-wrap">
      <h3 className="font-semibold text-lg mb-2">Quick Statistics</h3>
      <div className="flex justify-around">
        <div className="text-center flex flex-col items-center">
          <FaTrophy className="text-yellow-500 text-2xl" />
          <p className="font-bold">{Statistics.rank}</p>
          <p className="text-gray-600">Your Rank</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <FaCalendar/>
          <p className="font-bold text-xl">{Statistics.percentile}%</p>
          <p className="text-gray-600">Percentile</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p className="font-bold">{Statistics.currScore}/ 15</p>
          <p className="text-gray-600">Correct Answers</p>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
