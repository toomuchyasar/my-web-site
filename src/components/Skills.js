import React from 'react'
import js from "../images/js.svg";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import nodeJs from "../images/nodeJs.svg";
import vsCode from "../images/vsCode.svg";
import figma from "../images/figma.svg";
import { Contexts } from "../contexts/contexts";
import { useContext } from "react";

function Skills() {
    const { lightMode, textData } = useContext(Contexts);
    return (
        <div className={`${lightMode ? "" : "bg-[#252128]"} p-px`}>
            <div className={`flex flex-col items-center my-20`}>
                <div className="flex w-[66%]">
                    <div className={`basis-2/5 text-left text-5xl ${lightMode ? "text-[#4832D3]" : "text-[#CBF281]"}`}> {textData.skillText}</div>
                    <div className={`basis-3/5 text-left text-1xl mx-2${lightMode ? "text-[#4832D3]" : "text-[#CBF281]"}`}>
                        <div className='flex flex-wrap m'>
                            <div className="flex items-center w-64 ">
                                <img className="h-32 mr-5 my-3 " src={js} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>JAVASCRIPT</p>
                            </div>
                            <div className="flex items-center w-64 ">
                                <img className="h-32 mr-5 my-10 " src={nodeJs} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>NODE</p>
                            </div>
                            <div className="flex items-center w-64">
                            <img className="h-32 mr-5 my-10 " src={react} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>REACT</p>
                            </div>
                             <div className="flex items-center w-64">
                                <img className="h-32 mr-5 my-3 " src={vsCode} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>VS CODE</p>
                            </div>
                             <div className="flex items-center w-64">
                                <img className="h-32 mr-5 my-3 " src={redux} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>REDUX</p>
                            </div>
                             <div className="flex items-center w-64">
                                <img className="h-32 mr-5 my-3 " src={figma} />
                                <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>FIGMA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
