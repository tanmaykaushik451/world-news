import React, { useReducer } from "react";
import { InitialState } from "../state/InitialState";
import { IInitialstate } from "../state/interface/IInitialState";
import axios from "axios";
import {
  GET_DATA,
  GET_FAVCOUNT,
  GET_SELECTED,
  GET_SOURCENEWS,
  SET_FAVOURATE,
  NEWS_ERROR,
  REMOVE_FAVOURITE,IS_SHOWFAV
} from "./Types";
import { IAction } from "../context/interfaces/IAction";
import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";

const ShipmentState = (props: any) => {
  const apikey = process.env.REACT_APP_API_KEY;

  const [state, dispatch] = useReducer<React.Reducer<IInitialstate, IAction>>(
    NewsReducer,
    InitialState
  );

  const getnewsdata = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/sources?apiKey=${apikey}`
      );
      dispatch({ type: GET_DATA, payload: res.data.sources });
    } catch (e) {
      dispatch({ type: NEWS_ERROR, payload: e.msg });
    }
  };

  const getsourcenews =async (id: string) => {
    try {
      const res = await axios.get(
        `http://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apikey}`
      );
      dispatch({ type: GET_SOURCENEWS,payload:res.data.articles});
    } catch (e) {
      dispatch({ type: NEWS_ERROR, payload: e.msg });
    }
  };

  const showselected =(id:string)=>{
    dispatch({type:GET_SELECTED,payload:id})
  }

  const setfavourite = ( item : any) =>{
    dispatch({type:SET_FAVOURATE,payload:item})
  }
  const removefavourite = ( item : any) =>{
    dispatch({type:REMOVE_FAVOURITE,payload:item})
  }
  const getfavcount = () =>{
    dispatch({type:GET_FAVCOUNT})
  }
  const isshowfavourites = (favshow : boolean) =>{
    dispatch({type:IS_SHOWFAV,payload:favshow})
  }
  


  return (
    <NewsContext.Provider
      value={{
        State: state,
        getnewsdata,
        getsourcenews,
        showselected,
        setfavourite,
        getfavcount,
        removefavourite,
        isshowfavourites,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default ShipmentState;
