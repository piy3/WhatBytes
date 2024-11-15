import React from "react";
import Image from "next/image";
function NothingToShow() {
  return (
    <>
      <div className=" h-full w-[100%]  bg-slate-100 flex flex-col justify-center items-center">
        <Image
          src="https://i.pinimg.com/originals/56/94/72/569472665b47e718976d4a25c3ef8327.png"
          alt="Example Image"
          layout="responsive"
          width={50}
          height={100}
          className="h-[10%] w-[50%]"
        />
        <div className="h-[150px]">
          <h3 className=" font-extrabold text-[30px]">
            OOP&apos;s Nothing to show.
          </h3>
        </div>
      </div>
    </>
  );
}

export default NothingToShow;
