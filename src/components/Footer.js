import React, { useContext } from 'react'
import { Contexts } from '../contexts/contexts'
import FooterSvg from './FooterSvg'

const Footer = () => {

     const { lightMode, textData } = useContext(Contexts)


  return (
    <div className={`${lightMode ? "bg-[#F9F9F9]" : "bg-[#252128]"} p-px`}>
    <div className={`flex flex-col items-center my-20`}>
        <div className="item-center w-[30rem]">
            <div className='text-[#4731D3] text-center fond-bold text-5xl mb-5' >
              <span className={`${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"} p-px`}>{textData.footerMessage}</span>
              </div>
            <div className='basis 1/2 text-[#120B39] text-center text-2xl mb-5'>
            <span className={`${lightMode ? "text-[#120B39]" : "text-[#FFFFFF]"} p-px`}>{textData.footerText}</span>
              </div>
        </div>
        <div className='decoration-solid underline'>
        <a href="mailto:yasarmuslu93@outlook.com"
        className={`${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"} p-px`}>
          yasarmuslu93@outlook.com
        </a>
        </div>
        <div>
          <FooterSvg />
        </div>
        </div>
    </div>
  )
}

export default Footer