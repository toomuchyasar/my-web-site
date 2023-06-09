import React, { useContext } from "react";
import yasar from "../yasar.jpeg";
import { Contexts } from "../contexts/contexts";

const Profile = () => {

    const { lightMode, textData } = useContext(Contexts);


    return (
        <div className={`${lightMode ? "bg-[#4731D3]" : "bg-[#171043]"} p-px`}>
            <div className={`flex flex-col items-center my-20`}>
                <div className="flex w-[66%] ">
                    <div className=" w-[33%]">
                        <div className="text-3xl text-bold text-[#FFFFFF] mb-2"> {textData.basicInformation} </div>
                        <div className="flex">
                            <div className="basis 1/2">
                                <div className="text-lg text-[#FFFFFF]"><span className="text-[#CBF281] font-bold text-lg">{textData.birthDate}</span></div>
                                <div className="text-lg text-[#FFFFFF]"><span className="text-[#CBF281] font-bold text-lg">{textData.city}</span></div>
                                <div className="text-lg text-[#FFFFFF]"><span className="text-[#CBF281] font-bold text-lg">{textData.education}</span></div>
                                <div className="text-lg text-[#FFFFFF]"><span className="text-[#CBF281] font-bold text-lg">{textData.preferredRole}</span></div>
                            </div>
                            <div className="ml-1">
                                <div className="text-[#FFFFFF] font-bold text-lg">
                                    21/02/1993
                                </div >
                                <div className="text-[#FFFFFF] font-bold text-lg">
                                    Izmir
                                </div>
                                <div className="text-[#FFFFFF] font-bold text-lg">

                                </div>
                                <div className="text-[#FFFFFF] font-bold text-lg">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[33%] "><img src={yasar} /></div>
                    <div className=" w-[33%]">
                        <div className="text-[#FFFFFF] text-3xl ml-8 mb-6">
                            {textData.aboutMe}
                        </div>
                        <div className="text-[#FFFFFF] font-bold text-base ml-8">
                            {textData.aboutP1}
                            <br />
                            <br />
                            {textData.aboutP2}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile