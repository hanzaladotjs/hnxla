import { AnimatedTestimonials } from "./ui/animated-testimonials"
import quickfire from "/src/assets/quickfire.png"
import gibmoney from "/src/assets/gib.png"
import todopng from "../../src/assets/todo.png"
import k2k from "../../src/assets/k2k.png"

const Projects = ({ light }: any) => {

    const pow: any = [
          {
            name: "K2K",
            designation: "Knowledge to Knowledge",
            quote: `Built a full stack skills barter app, where users can barter skills, post offers, reciever proposals, talk to other
users and much more.        
Tech stack: Typescript/Reactjs, TailwindCSS, Zustand, Cloudflare workers, HonoJs, PostgreSQL, Drizzle-
ORM`,
            src: k2k,
            live: "https://k2k.hanzala.xyz",
            repo: "https://github.com/hanzaladotjs/k2k-"
        },{
            name: "Quickfire",
            designation: "Postman for kids",
            quote: `Built a postman like app for absolute beginners, its has basic features like get, post, put, delete, headers.
params, and body. Tech stack: Typescript, Reactjs (fetchapi), Context API, TailwindCSS.(not responsive yet)`,
            src: quickfire,
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
            src: gibmoney,
        },
          {
            name: "Todo App",
            designation: "Dont forget your todos",
            quote: `Built a full stack todo app with auth, where users can add, update, delete todos.
Tech stack: Typescript/Reactjs, Nodejs, Expressjs, MySQL, Recoiljs`,
            live: "https://todo.hanzala.xyz",
            repo: "https://github.com/hanzaladotjs/mysqltodo",
            src: todopng,
        }

       

    ]
    return (
        <div>
            <AnimatedTestimonials testimonials={pow} light={light} />
        </div>
    )
}

export default Projects