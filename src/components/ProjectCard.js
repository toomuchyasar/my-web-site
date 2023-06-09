import React, { useContext } from 'react'
import pizza from "../images/pizza.png"
import { Contexts } from "../contexts/contexts";

const ProjectCard = (props) => {

  const { lightMode, textData } = useContext(Contexts)
  const { item } = props

  return (
    <div className={`${lightMode ? "bg-[#FFFFFF]" : "bg-[#2B2727]"} flex items-center h-72 w-full gap-x-10 rounded-lg`}>
      <div className='h-full w-72 '>
        <img className='h-full w-full object-cover rounded-l-lg ' src={item.photo} />
      </div>
      <div className="flex flex-col mx-auto my-auto py-5 basis-3/5">
        <h3
          className={`text-left mb-5 font-bold text-3xl ${lightMode ? "text-[#4338CA]" : "text-[#C1BAED]"
            }`}
        >
          {item.title}
        </h3>
        <p className={`text-left  ${
            lightMode ? "text-[#383838]" : "text-[#FFFFFF]"
          }`}>{item.summary}</p>
        <div className="flex gap-y-5 gap-x-5 mt-10">
          {item.lib.map(i => {
            return <span className={`inline-block  py-2 px-4 mr-2 rounded-3xl flex-gap-2 flex ${lightMode
                ? "bg-[#4731D3] text-[#FFFFFF]"
                : "bg-[#8173DA] text-[#FFFFFF]"
              }`}>{i}</span>
          })}
        </div>
        <div className='underline text-left mt-5 text-xl'>
          {item.link.map(i => {
            return <a href={i.url}><span className={`mr-20 ${lightMode ? "text-[#120B39]" : "text-[#CBF281]"
              }`}>{i.title}</span> </a>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard