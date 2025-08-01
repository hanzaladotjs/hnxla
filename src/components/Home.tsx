
import { IconCloudDemo } from "./ui/IconCloudDemo"


const Home = () => {
    return (
        <div className="flex flex-col ml-1">

            <h1 className=" text-5xl">
            Hadi Rasool
            </h1>
            <h2 className="text-gray-500 text-xl mb-3">
                Full stack developer
            </h2>

            <h1 className="md:w-140 mb-10 antialiased text-lg"> 20. computer sci major. web apps developer . interests: web3, ai (esp. agentic ai), decentralization, metaverse, privacy, finance, economics, hustle culture, minimalism, novels, anime sometimes, nolan's movies and likes. </h1>

            
            <h1 className="text-2xl text-start "> Skills:</h1>
            <IconCloudDemo/>
           
            <h1 className="text-2xl mb-2"> Education:</h1>
            <h2 className="text-stone-400"> BS, Computer Science (Online) </h2>
            <h2 className="text-gray-600"> University of People, USA</h2>

            


        </div>
    )
}

export default Home