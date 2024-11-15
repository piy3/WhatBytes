// components/SyllabusAnalysis.js
"use client";
import React from "react";

function SyllabusAnalysis() {
  const topics = [
    { name: "HTML Tools, Forms, History", percent: 80, color: "bg-blue-500" },
    { name: "Tags & References in HTML", percent: 60, color: "bg-orange-500" },
    { name: "Tables & References in HTML", percent: 24, color: "bg-red-500" },
    { name: "Tables & CSS Basics", percent: 96, color: "bg-green-500" },
  ];

  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 w-[100%]">
      <h3 className="font-semibold text-lg mb-2">Syllabus Wise Analysis</h3>
      {topics.map((topic, index) => (
        <div key={index} className="mb-2 p-2">
          <div className="flex justify-between mb-1">
            <span>{topic.name}</span>
            <span>{topic.percent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${topic.color} h-2 rounded-full`}
              style={{ width: `${topic.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SyllabusAnalysis;
