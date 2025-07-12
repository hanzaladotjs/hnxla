import { AnimatedTestimonials } from "./ui/animated-testimonials"


const Projects = ({light}:any) => {

    const pow:any = [
        {
            name: "Quickfire",
            designation: "Postman for kids",
            quote: `Built a postman like app for absolute beginners, its has basic features like get, post, put, delete, headers.
params, and body. Tech stack: Typescript, Reactjs (fetchapi), Context API, TailwindCSS.(not responsive yet)`,
src: "/src/assets/quickfire.png",
live: "https://quickfire.hanzala.xyz",
repo: "https://github.com/hanzaladotjs/quickfire"
        }
    ]
    return (
        <div>
            <AnimatedTestimonials testimonials={pow} light={light}/>
        </div>
    )
}

export default Projects