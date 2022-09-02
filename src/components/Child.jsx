import React from "react";

function Child(props) {
  return (
    <div className="mt-7 mx-8 h-2/3 bg-purple-100 rounded-md">
      <div className="text-xl font-bold flex justify-center pt-2">Child</div>
      <div
        className="flex justify-center cursor-pointer p-2 "
        onClick={() => props.changeWord("Thành Kun")}
      >
        Click change title
      </div>
    </div>
  );
}

export default Child;
