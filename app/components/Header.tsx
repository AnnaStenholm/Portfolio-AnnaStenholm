

export function Header() {
    return(

<header className="flex flex-row items-center gap-12">
          <div className="w-[500px] max-w-[100vw] p-4">
            <nav className="flex justify-center gap-12">

        <a className="group text-pink-500 transition-all duration-300 ease-in-out pl-6" href="#">
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Home
        </span>
        </a>
        <span className="vertical-line border-1 border-gray-500 margin: 0 10px height: 50px"></span>
        <a className="group text-pink-500 transition-all duration-300 ease-in-out pl-6" href="#">
         <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Projects
        </span>
        </a>
         <span className="vertical-line border-1 border-gray-500 margin: 0 10px height: 50px"></span>
        <a className="group text-pink-500 transition-all duration-300 ease-in-out pl-6" href="#">
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
        </span>
        </a>

            </nav>

          </div>
        </header>
        );

}