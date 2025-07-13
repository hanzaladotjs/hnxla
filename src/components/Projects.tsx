import { AnimatedTestimonials } from "./ui/animated-testimonials"


const Projects = ({ light }: any) => {

    const pow: any = [
        {
            name: "Quickfire",
            designation: "Postman for kids",
            quote: `Built a postman like app for absolute beginners, its has basic features like get, post, put, delete, headers.
params, and body. Tech stack: Typescript, Reactjs (fetchapi), Context API, TailwindCSS.(not responsive yet)`,
            src: "/src/assets/quickfire.png",
            live: "https://quickfire.hanzala.xyz",
            repo: "https://github.com/hanzaladotjs/quickfire"
        },
           {
            name: "Gibmoney",
            designation: "Mock Payment app",
            quote: `Built a full stack mock payment app, where users gets alloted random balance, and they can send that
dummy balance to other users. Learnt transactions in dbs.
Tech stack: Typescript/Reactjs, Nodejs, Expressjs, MongoDB`,
            live: "https://gibmoney.hanzala.xyz",
            repo: "https://github.com/hanzaladotjs/gibmoney",
            src: "/src/assets/gib.png",
        },
        {
                name: "Hoodle",
            designation: "Crypto data app",
            quote: `Created a react app, that fetches data from free crypto api’s, rendering the data.
Tech stack: Typescript, Reactjs, TailwindCSS, DiaData API, CoinGecko API`,
            live: "https://hoodle.hanzala.xyz",
            repo: "https://github.com/hanzaladotjs/hoodle",
            src: "/src/assets/hoodle.png",
        }, {
           name: "Atrium clone",
            designation: "Clone of atrium.academy's landing page",
            quote: `Cloned the landing page of atrium.academy
Tech stack: Typescript, Reactjs, TailwindCSS.`,
            live: "https://atrium-clone.vercel.app",
            repo: "https://github.com/hanzaladotjs/atrium-clone",
            src: "/src/assets/atrium.png",
        },  {
           name: "Octant clone",
            designation: "Clone of Octant.app's landing page",
            quote: `Cloned the landing page of Octant.app
Tech stack: Typescript, Reactjs, TailwindCSS.`,
            live: "https://octant-clone.vercel.app",
            repo: "https://github.com/hanzaladotjs/octant-clone",
            src: "/src/assets/octant.png",
        }

    ]
    return (
        <div>
            <AnimatedTestimonials testimonials={pow} light={light} />
        </div>
    )
}

export default Projects