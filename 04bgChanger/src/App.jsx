import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  let Colorone = ()=>{
    setColor("red");
  }

  let Colortwo = ()=>{
    setColor("blue")
  }

  let Colorthree = ()=>{
    setColor("green")
  }
  return (
    <div className="w-full h-screen bg-gray-700 duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600" onClick={Colorone}>
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-600" onClick={Colortwo}>
            Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-600" onClick={Colorthree}>
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
