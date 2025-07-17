
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

            <h1 className="md:w-140 mb-10"> Full stack developer, trying to <span className="text-green-500"> really </span> become a full stack developer. Someone who wants to become enough
                capable to take <span className="text-blue-500">ownership </span> of stuff. Ran away from <span className="text-red-500"> tutorial hell </span>. Goal is to become enough <span className="text-yellow-500">tech agonstic</span>  by
                the time I retire.</h1>

            
            <h1 className="text-2xl text-start "> Skills:</h1>
            <IconCloudDemo/>
           
            <h1 className="text-2xl mb-2"> Education:</h1>
            <h2 className="text-stone-400"> BS, Computer Science (Online) </h2>
            <h2 className="text-gray-600"> University of People, USA</h2>

            


        </div>
    )
}

export default Home