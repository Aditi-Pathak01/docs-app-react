import React from "react";
const background = () => {
  return (
    <>
      <div className="fixed w-full h-screen bg-zinc-800 z-[2]">
        <h1 className="flex justify-center py-10 text-[1.5vw]">Document</h1>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};
export default background