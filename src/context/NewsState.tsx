import React, { useReducer } from "react"
import { InitialState } from "../state/InitialState"
import { IInitialstate } from "../state/interface/IInitialState"
import axios from 'axios';
import { GET_DATA,GET_FAVCOUNT,GET_SELECTED,GET_SOURCENEWS,SET_FAVOURATE,NEWS_ERROR} from "./Types"
import {IAction} from "../context/interfaces/IAction"
import NewsContext from "./NewsContext"
import NewsReducer from "./NewsReducer";

const ShipmentState =(props:any)=>{
    const apikey = process.env.REACT_APP_API_KEY

    const [state,dispatch] = useReducer<React.Reducer<IInitialstate, IAction>>(NewsReducer,InitialState)

    const getnewsdata = async ()=>{
        try {
        const res = await axios.get(`https://newsapi.org/v2/sources?apiKey=${apikey}`)
        dispatch({type : GET_DATA,payload:res.data.sources})

        } catch (e) {
            dispatch({type:NEWS_ERROR,payload : e.msg})
        }
    }

    return(
        <NewsContext.Provider value={{
            State:state,
            getnewsdata
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default ShipmentState