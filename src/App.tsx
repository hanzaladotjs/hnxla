
import "./App.css";
import hanzala from "./assets/hanzala.jpg";
import BackgroundBricks from "./components/ui/Background";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

function App() {
 

  return (
    <div className="relative md:justify-center flex bg-stone-300 items-center min-h-screen space-y-2 ">
      <BackgroundBricks />


      <div className="flex flex-col z-50">
        <div className="flex space-x-2 md:space-x-6 ml-2  mb-5 items-center">
          <img
            src={hanzala}
            alt="hanzala"
            className="h-18 w-18 md:h-22  md:w-22 rounded-lg border-2 hover:border-white border-gray-700"
          />
          <div className="flex flex-col space-y-2 items-start">
          <h1 className="md:text-6xl text-3xl font-sans hover:italic font-semibold text-gray-800">
        <a href="https://github.com/hanzaladotjs">  hanzala.xyz </a>
          </h1>
          <h2 className="text-gray-600 ml-1 hover:text-blue-900"> 📍 srinagar, kashmir </h2>
          </div>
         
        </div>
        <Terminal className="md:w-220 md:h-100 ml-1">
            <AnimatedSpan className="hover:text-green-400">welcome, my name is hanzala </AnimatedSpan>
            
            <TypingAnimation delay={1000} className="hover:text-white">im 20 y/0 and a college dropout</TypingAnimation>

            <TypingAnimation delay={2000} className="mb-2 hover:text-white">im a full stack web2/web3 developer </TypingAnimation>
            <TypingAnimation delay={3000} className="hover:text-red-400">frontend stack:  </TypingAnimation>
            <TypingAnimation delay={4000} className="mb-2 hover:text-white">typescript, react.js, tailwindcss </TypingAnimation>
            <TypingAnimation delay={5000} className="hover:text-yellow-500">backend stack:  </TypingAnimation>
            <TypingAnimation delay={6000} className="mb-2 hover:text-white">node.js, express.js, nestjs </TypingAnimation>
            <TypingAnimation delay={7000} className="hover:text-green-400">database stack:  </TypingAnimation>
            <TypingAnimation delay={8000} className="mb-2 hover:text-white  ">mongodb, postgreSQL, prisma </TypingAnimation>
            <TypingAnimation delay={9000} className="hover:text-yellow-500">my web3 stack:  </TypingAnimation>
            <TypingAnimation delay={10000} className="hover:text-white">solidity, ether.js, remix/foundry </TypingAnimation>

            
          </Terminal>
      </div>
    </div>
  );
}

export default App;
