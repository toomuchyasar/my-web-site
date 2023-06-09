import React, { useContext } from 'react'
import { Contexts } from '../contexts/contexts'
import ProjectCard from './ProjectCard'

const ProjectList = () => {

    const { lightMode , textData } = useContext(Contexts)


    return (
        <div className={`${lightMode ? "bg-[#CBF281]" : "bg-[#1A210B]"} p-px`}>
            <div className={`flex flex-col items-center my-20`}>
                <div className=" w-[66%] ">
                    <div className={`${lightMode ? "text-[#4731D3]" : "text-[#CBF281]"} p-px text-4xl font-bold`}>
                        {textData.projectsTitle}
                    </div>
                    <div className='flex flex-col justify-center gap-y-5 mt-5'>
                        {textData.projects.map(item => { 
                            return <ProjectCard item={item} />
                        })}           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList