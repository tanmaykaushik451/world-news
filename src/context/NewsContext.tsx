import { createContext } from "react"
import { InitialState } from "../state/InitialState"
import { INewsContext } from "./interfaces/INewsContext"

const ContextState : INewsContext={
    State : InitialState,
    getnewsdata: ()=>{throw new Error("Shipments not available")},
}

const NewsContext = createContext<INewsContext>(ContextState)

export default NewsContext