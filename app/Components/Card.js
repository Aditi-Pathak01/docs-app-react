import React from "react";
import { MdInsertDriveFile } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
const card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="relative w-[13vw] h-[30vh] bg-zinc-900 text-zinc-100 rounded-[1.7vw] overflow-hidden flex-shrink-0 px-4"
      >
        <MdInsertDriveFile />
        <p className="mt-8 text-sm leading-tight">{data.desc}</p>
        <div className="footer absolute left-0 bottom-0 w-full">
          <div className="flex justify-between items-center px-5">
            <h5 className="font-semibold text-[0.8vw]">{data.fileSize}</h5>
            <span className="bg-red-400 rounded-full flex justify-center items-center p-[1.7px]">
              {data.close === true ? (
                <IoCloseSharp />
              ) : (
                <MdOutlineFileDownload />
              )}
            </span>
          </div>
          {data.tag.isOpen === false ? (
            <div
              className={`tag w-full p-2 ${
                data.tag.tagColor === "blue" ? "bg-blue-800" : "bg-green-700"
              }`}
            >
              <h3 className="text-md text-white text-center">
                {data.tag.tagTitle}
              </h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};
export default card;
