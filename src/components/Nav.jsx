
import { useState } from "react";
import logoShortly from "../assets/logo.svg";
import Navbar from "./Navbar";
import iconMenu from "../assets/menu-outline.svg";

function Nav() {

  const [Aprire, setAprire] = useState(false);

  const openMenu = ()=>{
      if (!Aprire) {
        setAprire(true);
      } else {
        setAprire(false);
      }

  }

  return (
    /* Nav */
    <div className="flex w-screen justify-center bg-white">
      <nav className="flex w-3/4 justify-between items-center mt-12">

        {/* Nav Left */}
        <div className="flex items-center">

          {/* Nav Logo */}
          <div className="mr-8">
            <img src={logoShortly} alt="logo-web-site" />
          </div>

          {/* Nav list */}
          <div className="max-input:absolute max-input:invisible">
            <ul className="flex gap-6 text-sm font-medium text-neutral-grayishViolet">
              <li><a href="#" className=" hover:text-primary-darkViolet transition-colors duration-200">Features</a></li>
              <li><a href="#" className=" hover:text-primary-darkViolet transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className=" hover:text-primary-darkViolet transition-colors duration-200">Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Nav Right */}
        <div className="flex gap-8 text-sm font-medium items-center max-input:absolute max-input:invisible">

          {/* Nav Buttons */}
          <a href="#" className="text-neutral-grayishViolet hover:text-black duration-200 transition-colors">Login</a>

          <button className="bg-primary-cyan p-2 px-5 rounded-3xl text-white font-medium hover:bg-cyan-200 duration-200 transition-colors">Sign Up</button>
        </div>

        <div className="absolute invisible max-input:relative max-input:visible w-10 flex">
          <button className="w-full"><img src={iconMenu} alt="icon-menu" onClick={openMenu} /></button>
        </div>
      </nav>

      <Navbar open={Aprire}></Navbar>
    </div>

  )
}

export default Nav
