import { useState } from "react";
import "./App.css";
import hanzala from "./assets/hanzala.jpg";
import BackgroundBricks from "./components/ui/Background";
function App() {
  const [dark, setDark] = useState(true);
  const [time, setTime] = useState<any>(null)

  function hi(){
    const now = new Date()
    setTime(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
    console.log("ho")
  }

  setInterval(hi, 1000)


  function handleClick() {
    if(dark==true){
      setDark(false)
    }else{
      setDark(true)
    }
  }

  return (
    <div
      className={
        dark
          ? "relative flex flex-col justify-center text-white bg-gray-950 items-center min-h-screen space-y-2 font-mono"
          : "relative flex flex-col justify-center bg-stone-300 items-center min-h-screen space-y-2 font-mono"
      }
    > 
    { !dark
      ? <BackgroundBricks/> :  null}
      <div className="flex items-center"> 
      <div className="absolute top-4 left-4">{time}</div>
      <button onClick={handleClick} className="absolute top-4 right-4   " > {dark ? <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="#000000" stroke=" #FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke=" #FFFFFF" stroke-width="1.5"></path></svg>:<svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke="#000000" stroke-width="1.5"></path></svg>}</button>
      </div>
      <div className="flex flex-col ml-4 z-50 md:ml-0">
        
        <div className="flex space-x-2 md:space-x-6 md:justify-center mb-5 items-center">
          <img
            src={hanzala}
            alt="hanzala"
            className="h-18 w-18 md:h-22  md:w-22 rounded-lg border-2 border-gray-700"
          />
          <h1
            className={
              !dark
                ? "md:text-6xl text-3xl text-green-800"
                : "md:text-6xl text-3xl text-green-600"
            }
          >
            {" "}
            hi i'm hanzala
          </h1>
        </div>
        <h2 className="md:w-full  md:text-center font-semibold text-lg md:text-xl md:h-10 h-20  ">
          i develop web-apps on centralized servers and blockchains
        </h2>
        <h3 className="md:w-full mt-5 h-40 md:h-15 text-lg">
          my tech stack:{" "}
          <span className={dark ? "text-blue-400 hover:bg-blue-900 ": "text-blue-800 hover:bg-white"}>typescript/javascript </span>,{" "}
          <span className={dark ?"text-yellow-400 hover:bg-blue-900": "text-yellow-600 hover:bg-white"} > node.js </span>,
          <span className={dark ?"text-pink-400 hover:bg-blue-900 " : "text-pink-700 hover:bg-white"}>react.js </span> ,{" "}
          <span className={dark ? "text-green-400 hover:bg-blue-900" : "text-green-800 hover:bg-white"}>tailwindcss</span> ,{" "}
          <span className={dark ? "text-red-400 hover:bg-blue-900 " : "text-red-800 hover:bg-white"}>sql/nosql </span>,{" "}
          <span className={dark ? "text-cyan-400 hover:bg-blue-900": "text-gray-800 hover:bg-white"}> git </span>,
          <span className={dark? "text-orange-400 hover:bg-blue-900" : "text-orange-700 hover:bg-white"}> solidity, remix </span>
        </h3>
        <h1 className="text-xl text-blue-600 text-start" >
          projects:
          <br>
          </br>
          coming soon!
        </h1>
      </div>
    </div>
  );
}

export default App;
