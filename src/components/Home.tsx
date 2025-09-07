
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
            <div className="flex space-x-2 items-center mt-10 underline">
            <a href="https://drive.google.com/file/d/1Of3l5l0Ji8CZc14rf73-tMA2qfE1GUIm/view?usp=drive_link"> See my Resume </a><svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#858585"><path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</div>
            


        </div>
    )
}

export default Home