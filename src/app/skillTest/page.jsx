
"use client";

import React, { useEffect, useState } from "react";
import SkillTestCard from "@/Components/skillTestCard";
import QuickStatistics from "@/Components/quickStats";
import ComparisonGraph from "@/Components/comparionGraph";
import SyllabusAnalysis from "@/Components/syllabusAnalysis";
import QuestionAnalysis from "@/Components/questionAnalysis";
import InputPopUp from "@/Components/inputPopUp";
import {initialPercentiles,initialStudentCounts} from "@/app/skillTest/dataArrays"

function Home() {
  const [Popup, setPopup] = useState(false);
  const [Data, setData] = useState({
    rank: 0,
    percentile: 0,
    currScore: 0,
  });
  const [Percentile,setPercentile] = useState(-1);
  const findCurrAvg  = ()=>{
      let sum =0;
      let students = 0;
      // console.log(";;;;")
      for(let i=0;i<initialPercentiles.length;i++){
        sum = sum+ initialPercentiles[i]*initialStudentCounts[i];
        // console.log(initialPercentiles[i], initialStudentCounts[i], initialPercentiles[i]*initialStudentCounts[i], sum);
      }
      for(let i=0;i<initialStudentCounts.length;i++){
        students = students+ initialStudentCounts[i];
        // console.log(in/itialStudentCounts[i]);
      }
      return (sum/students).toFixed(2);

  }
  //to handle current avg percentile
  const [Avg,setAvg] = useState(0);

  //to change the state of Popup box on clicking
  const handlePopup = (state) => {
    setPopup(state);
  };
  //to handle input data from InputPopUp
  const handleData = (data) => {
    console.log(data);
    setPercentile(data.percentile);
    setData(data);
  };
  //graph data
  
  const [indx,setindx] = useState(-1);

  useEffect(()=>{
    // console.log("ppp",Percentile);
    // console.log("wtf",initialPercentiles.includes(Percentile));
    if( initialPercentiles.includes(Percentile)){
      // initialPercentiles.sort();
      // console.log("ww");
        // indx = initialPercentiles.indexOf(Percentile);
        setindx(initialPercentiles.indexOf(Percentile));
        // console.log(initialPercentiles.indexOf(Percentile));
        // console.log("n-indx ",initialPercentiles.indexOf(Percentile));
        // console.log("indx-prev-count", initialStudentCounts[initialPercentiles.indexOf(Percentile)]);
        initialStudentCounts[initialPercentiles.indexOf(Percentile)] = initialStudentCounts[initialPercentiles.indexOf(Percentile)]+1;
        // console.log("indx-later-count", initialStudentCounts[initialPercentiles.indexOf(Percentile)]);
    }else if(Percentile!=-1){
      // console.log("ll");
        initialPercentiles.push(Percentile);
        initialPercentiles.sort();
        // console.log(initialPercentiles.indexOf(Percentile));
        // indx =  initialPercentiles.indexOf(Percentile);
        setindx(initialPercentiles.indexOf(Percentile));
        // initialStudentCounts.push(1);
        initialStudentCounts.splice(initialPercentiles.indexOf(Percentile), 0, 1);
    }
    setAvg(findCurrAvg());
    //  console.log("***   ", initialPercentiles[ind]);
    //  console.log("indx ", initialStudentCounts[ind]);
},[Popup])


  // New percentile to highlight (e.g., 70th percentile with 12 students)
  // console.log("alphaq",indx);
  // console.log(Data.percentile, "sigmadikh",initialStudentCounts[indx]);
  const newPercentile = { percentile: Data.percentile, count:(indx==-1?0: initialStudentCounts[indx])  };

  return (
    <div className=" w-full " >
      <h3 className=" ml-12 sm:ml-8 mt-3 font-semibold">Skill Test</h3>
      <div className=" lg:flex  justify-center">  
        <div className="  p-4  w-full">
          <SkillTestCard OpenPopup={handlePopup} />
          <QuickStatistics Statistics={Data} />
          <ComparisonGraph
            myPerc = {Data.percentile}
            AvgPerc = {Avg}
            initialPercentiles={initialPercentiles}
            initialStudentCounts={initialStudentCounts}
            newPercentile={newPercentile}
          />
        </div>
        <div className="w-full lg:w-[40%] p-4">
          <SyllabusAnalysis />
          <QuestionAnalysis
            totalQuestions={15}
            correctAnswers={Data.currScore}
          />
        </div>
        {Popup && <InputPopUp state={handlePopup} InputData={handleData} />}
      </div>
    </div>
  );
}

export default Home;
