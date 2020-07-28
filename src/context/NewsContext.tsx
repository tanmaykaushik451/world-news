import { createContext } from "react"
import { InitialState } from "../state/InitialState"
import { INewsContext } from "./interfaces/INewsContext"

const ContextState : INewsContext={
    State : InitialState,
    getnewsdata: ()=>{throw new Error("News not available")},
    getsourcenews: ()=>{throw new Error("News not available")},
    showselected: ()=>{throw new Error("News not available")},
    setfavourite: ()=>{throw new Error("News not available")},
    getfavcount: ()=>{throw new Error("News not available")},
    removefavourite: ()=>{throw new Error("News not available")},
    isshowfavourites: ()=>{throw new Error("News not available")},
}

const NewsContext = createContext<INewsContext>(ContextState)

export default NewsContext