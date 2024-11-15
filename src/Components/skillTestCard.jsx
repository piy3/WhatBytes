// components/SkillTestCard.js
"use client";
import React from "react";

function SkillTestCard({OpenPopup}) {
   
  const handlechange = ()=>{
    OpenPopup(true);
  }
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <div className="flex justify-between items-center">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML Icon" className="h-12 w-12" />
          <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
          <p className="text-gray-600">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <button onClick={handlechange} className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </div>
    </div>
  );
}

export default SkillTestCard;
