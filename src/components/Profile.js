import React, { useContext } from "react";
import yasar from "../yasar.jpeg";
import { Contexts } from "../contexts/contexts";

const Profile = () => {

    const { lightMode, textData } = useContext(Contexts);


    return (
        <div className={`${lightMode ? "bg-[#4731D3]" : "bg-[#171043]"} p-px`}>          
            <div className={`flex flex-col items-center my-20`}>      
                <div className="w-[66%]">
                <div className={`${lightMode ? "text-[#CBF281]" : "text-[#CBF281]"} text-4xl font-bold p-px mb-9`}>
                        {textData.profilesHeader}
                    </div>
                    <div className="flex">
                    <div className=" w-[40%]">          
                        <div className="text-3xl text-bold text-[#FFFFFF] mb-2"> {textData.basicInformation} </div>
                        <div className="flex">
                            <div className="basis 2/5">
                                <div className=" text-[#FFFFFF]"><span className="text-[#CBF281]">{textData.birthDate}</span></div>
                                <div className=" text-[#FFFFFF]"><span className="text-[#CBF281] ">{textData.city}</span></div>
                                <div className=" text-[#FFFFFF]"><span className="text-[#CBF281] ">{textData.education}</span></div>
                                <div className=" text-[#FFFFFF]"><span className="text-[#CBF281] ">{textData.preferredRole}</span></div>
                            </div>
                            <div className="ml-1 basis 2/5">
                                <div className="text-[#FFFFFF] ">
                                    21/02/1993
                                </div >
                                <div className="text-[#FFFFFF]">
                                    Izmir
                                </div>
                                <div className="text-[#FFFFFF] ">
                                    Eskisehir Osmangazi University
                                </div>
                                <div className="text-[#FFFFFF] ">
                                    Frontend,UI.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[30%] p-2 ">
                        <img className="rounded-lg" src={yasar} />
                        </div>
                    <div className=" w-[30%]">
                        <div className="text-[#FFFFFF] text-3xl ml-8 mb-6">
                            {textData.aboutMe}
                        </div>
                        <div className="text-[#FFFFFF] text-base ml-8">
                            {textData.aboutP1}
                            <br />
                            <br />
                            {textData.aboutP2}
                        </div>

                    </div>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile