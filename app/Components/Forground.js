import React, { useRef } from "react";
import Card from "./Card";

const forground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is card 1",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is card 2",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is card 3",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full z-[3] p-5 flex gap-5 flex-shrink-0 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};
export default forground;
