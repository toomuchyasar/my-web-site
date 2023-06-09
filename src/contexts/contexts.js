import { createContext, useEffect, useState } from "react"
import  { engData } from "../data/engData"
import  { trData } from "../data/trData"

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
    const [lightMode , setLightMode] = useState(true);
    const [ lang , setLang ] = useState("tr");
    const [ textData , setTextData ] = useState(trData);
    const langHandler = () => {
        lang === "tr" ? setLang("eng") : setLang("tr")
    }

    useEffect(() => {

    console.log(lang)
    console.log(textData)

    },[lang])

    useEffect(() => {
       if(lang === "tr") {
        setTextData(trData)
       }
       else if(lang === "eng"){
        setTextData(engData)
       }   
    },[lang])

    const ContextVars = {
        lightMode,
        setLightMode,
        lang,
        setLang,
        textData,
        setTextData,
        langHandler
    };

    return (
        <Contexts.Provider value={ContextVars}>{children}</Contexts.Provider>
    )

    }
    export default ContextsProvider;

