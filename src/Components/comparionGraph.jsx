// components/ComparisonGraph.js
"use client";
import React from "react";
import PercentileGraph from '@/Components/percentileGraph'

function ComparisonGraph({myPerc,AvgPerc, initialPercentiles, initialStudentCounts, newPercentile }) {
  
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 w-full">
      <h3 className="font-semibold text-lg mb-2">Comparison Graph</h3>
      <p>
        You scored <span className="font-bold">{myPerc}% percentile</span> which is
        {myPerc==AvgPerc ? " equal to" : myPerc>AvgPerc ? " higher than" : " lower than"} the average percentile <span className="font-bold">{AvgPerc}%</span>{" "}
        of all the engineers who took this assessment.
      </p>
      <div className="mt-4">
        {/* Placeholder for Graph - Replace with actual graph component if available */}
        <div className="h-fit rounded-lg flex items-center justify-center">
          <span>
            <PercentileGraph 
              initPer={initialPercentiles}
              initStudentCounts={initialStudentCounts}
              newPerc={newPercentile}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ComparisonGraph;
