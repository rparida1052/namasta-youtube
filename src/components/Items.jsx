import React from "react";

const Items = ({name}) => {
  return (
    <>
      <li className="font-semibold text-lg p-1 hover:bg-gray-200 rounded-xl pl-7 ">
        {name}
      </li>
    </>
  );
};

export default Items;
