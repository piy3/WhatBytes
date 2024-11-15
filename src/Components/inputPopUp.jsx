"use-client";
import React, { useState } from "react";
import Image from "next/image";

function InputPopUp({ state, InputData }) {
  const [Open, setOpen] = useState({ state });
  const [InputVal, setInputVal] = useState({
    rank: 0,
    percentile: 0,
    currScore: 0,
  });

  const handleState = () => {
    state(false);
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Xx ");
    InputData(InputVal);
    state(false);
    setOpen(false);
  };

  return (
    <>
      {Open && (
        <div
          onClick={handleState}
          className=" w-full h-full backdrop-blur-[3px] flex justify-center items-center fixed top-0 left-0"
        >
          <div
            className=" bg-white p-6 rounded-lg shadow-md w-[350px] border-2 border-gray-400 relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing on inner div click
          >
            <h2 className="text-xl font-semibold mb-4">Update scores</h2>
            <div className="absolute top-4 right-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5 Logo"
                width={32} // Equivalent to Tailwind's `w-8`
                height={32} // Equivalent to Tailwind's `h-8`
                className="rounded"
              />
            </div>
            <div className="space-y-4">
              {/* Rank Input */}
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-bold">1</span>
                <label className="flex-grow font-medium">
                  Update your <span className="font-semibold">Rank</span>
                </label>
                <input
                  onChange={(e) =>
                    setInputVal((prev) => ({
                      ...prev,
                      rank: Number(e.target.value),
                    }))
                  }
                  type="number"
                  min={0}
                  placeholder="4"
                  className="border rounded p-1 w-16 text-center focus:outline-none"
                />
              </div>

              {/* Percentile Input */}
              <div className="flex-col items-center space-x-2">
                <span className="text-blue-600 font-bold">2</span>
                <label className="flex-grow font-medium">
                  Update your <span className="font-semibold">Percentile</span>
                </label>
                <input
                  onInput={(e) => {
                    const value = e.target.value;
                    // Only update if value is within range 0-100
                    if (/^(100|[1-9]?[0-9])$/.test(value) || value === "") {
                      setInputVal((prev) => ({
                        ...prev,
                        percentile: Number(value),
                      }));
                    } else {
                      // Reset input to the last valid value if out of range
                      e.target.value = InputVal.percentile;
                    }
                  }}
                  type="number"
                  min={0}
                  max={100}
                  placeholder="10"
                  className="border rounded p-1 w-16 text-center focus:outline-none float-right"
                />

                <div className=" float-right text-[8px] text-red-600">
                  *Range should be 1-100
                </div>
              </div>

              {/* Current Score Input */}
              <div className="flex-col items-center space-x-2 ">
                <span className="text-blue-600 font-bold">3</span>
                <label className="flex-grow font-medium ">
                  Update your{" "}
                  <span className="font-semibold">Current Score</span> (out of
                  15)
                </label>
                <input
                  onInput={(e) => {
                    const value = e.target.value;
                    // Check if the value is between 0 and 15
                    if (/^(0|[1-9]|1[0-5])$/.test(value) || value === "") {
                      setInputVal((prev) => ({
                        ...prev,
                        currScore: Number(value),
                      }));
                    } else {
                      // Prevents entering an invalid value by resetting it
                      e.target.value = InputVal.currScore;
                    }
                  }}
                  type="number"
                  min={0}
                  max={15}
                  placeholder="10"
                  className="border float-right rounded p-1 w-16 text-center focus:outline-none"
                />

                <div className=" float-right text-[8px] text-red-600">
                  *Range should be 0-15
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-8 space-x-2 ">
              <button
                onClick={handleState}
                className="text-gray-500 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white rounded px-4 py-1 flex items-center space-x-1 hover:bg-blue-700"
              >
                <span>Save</span>
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InputPopUp;
