const Blogs= () => {
    return (
        <div className="flex flex-col ml-1 mt-10 gap-5">
            <div className="text-3xl mb-10">
                Started writing blogs a couple of months ago, here are a few:
            </div>

            <div className="text-blue-500 text-2xl hover:text-green-500">
               - <a href="https://medium.com/@hanzaladotjs/wth-is-web3-8d672eadfd1d" className="hover:underline" >WTH is Web3?? </a>
            </div>
              <div className="text-blue-500 text-2xl hover:text-green-500">
               - <a href="https://hanzalaa.medium.com/capitalism-its-principles-c38959bce184" className="hover:underline" > Captilism and it's principles </a>
            </div>
             <div className="text-blue-500 text-2xl hover:text-green-500">
               - <a href="https://medium.com/@hanzaladotjs/rendering-types-and-popular-tech-stacks-in-modern-day-web-development-99c77b7cbbc2" className="hover:underline" > Modern day rendering  </a>
            </div>
            <div className="text-blue-500 text-2xl hover:text-green-500">
               - <a href="https://medium.com/@hanzaladotjs/basics-of-application-servers-8287c7f38587" className="hover:underline" > Basics of application servers.  </a>
            </div>

        </div>
    )
}

export default Blogs