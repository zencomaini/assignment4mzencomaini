import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useRef, useState } from 'react'
import "../../assets/images/index";
import { Logo, Icon, Icon2 } from '../../assets/images/index';

const CHeader: React.FC = () => {
  const [active,setActive] = useState(false);
  
  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header>
      <div className="container fixed w-full h-32">
        <div className="absolute left-5 top-3 xl:-top-2">
          <img src={Icon} alt="javacarauto" className="flex md:px-10 md:w-64 xl:left-15 xl:w-96"/>
          <img src={Icon2} alt="arow" className="absolute left-3 top-5 md:top-8 md:px-10 md:w-64 xl:left-6 xl:top-14 xl:w-full" />
        </div>
        <div className="absolute right-6 -top-1 md:top-0 xl:right-2 xl:-top-10">
          <img src={Logo} alt="logo" className="md:w-64 xl:w-96" />
        </div>
      </div>
      <button onClick={showMenu} className="absolute top-16 left-5 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>
      <div className="fixed flex top-20 -left-full w-full md:left-0 h-5 md:top-36 md:justify-between md:items-center p-4">
        <button className="md:hidden absolute -top-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="md:flex">
          <ul className="">
            <li><a href="./">home</a></li>
          </ul>
          <ul className="md:flex md:absolute gap-3 right-12">
            <li><a href="./inputAccessories">accessories</a></li>
            <li><a href="./inputCarTires">car tires</a></li>
            <li><a href="./inputVelg">var velg</a></li>
          </ul>
        </nav>
      </div>
      <div className="absolute bg-black w-screen h-1 top-14 md:top-32 xl:top-36">
      </div>
    </header>
  )
}

export default CHeader