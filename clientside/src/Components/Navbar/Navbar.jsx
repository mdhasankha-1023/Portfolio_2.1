import { useState } from "react";
import Icons from "../../UI/Icons/Icons";

export default function Navbar() {
    const [clicked, setClicked] = useState(false); 

    // handle clicked btn
    const handleClickedBtn = () => {
      setClicked(!clicked)
    }

    return (
        <header className="relative z-20 border-b shadow-lg border-b-1  after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch justify-between font-medium text-white text-xl" role="navigation">
            {/* <!-- Brand logo --> */}
            <a id="WindUI" aria-label="WindUI logo" aria-current="page" className="flex items-center gap-2 py-3 text-2xl whitespace-nowrap focus:outline-none lg:flex-1 text-white" href="javascript:void(0)">
              Brand
            </a>
            {/* <!-- Mobile trigger --> */}
            {
              clicked ?
            <button onClick={handleClickedBtn} className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Icons type="cancel"/>
              </div>
            </button>
            :
            <button onClick={handleClickedBtn} className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Icons type="bars"/>
              </div>
            </button>
            }
            {/* <!-- Navigation links --> */}
            <ul role="menubar" aria-label="Select page" className={` ${clicked ? 'visible' : 'invisible'} absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-100 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100`}>
              <li role="none" className="flex items-stretch">
                <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#home"> <span>Home</span></a>
              </li>
              <li role="none" className="flex items-stretch">
                <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#about"> <span>About</span> </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a role="menuitem"  aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#skills"> <span>Skills</span> </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a role="menuitem"  aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#projects"> <span>Projects</span> </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a role="menui" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#studies"> <span>Studies</span> </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a role="menuitem"  aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 text-white hover:text-secondary focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8" href="#contact"> <span>Contact</span> </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      )
}
