import { useState } from "react";
import Child from "./components/Child";
const Parent = () => {
  const [word, setWord] = useState("Parent");
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="w-96 h-1/2 bg-green-100 rounded-md ">
        <div className="mt-4 text-xl font-bold mx-auto flex justify-center">
          {word}
        </div>
        <Child changeWord={(word) => setWord(word)} />
      </div>
    </div>
  );
};

export default Parent;
