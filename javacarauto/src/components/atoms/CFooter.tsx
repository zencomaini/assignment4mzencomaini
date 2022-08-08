import React from 'react'
import { Icon } from '../../assets'

const CFooter = () => {
  return (
    <footer className="fixed bg-black md:h-16 w-full h-10 bottom-2">
      <div className="flex bottom-full px-4 justify-between items-center">
        <h5 className="text-[8px] md:text-[16px]">Coppyrigth&copy;JavaCarAuto 2022</h5>
        <img src={Icon} alt="javacarauto" className="md:w-48"/>
      </div>
    </footer>
  )
}

export default CFooter