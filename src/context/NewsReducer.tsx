import { IInitialstate } from "../state/interface/IInitialState";
import { GET_DATA,GET_FAVCOUNT,GET_SELECTED,GET_SOURCENEWS,SET_FAVOURATE,NEWS_ERROR} from "./Types"
import { IAction } from "./interfaces/IAction";

export default  (state : IInitialstate,action:IAction) : IInitialstate =>{
    switch(action.type){
        case GET_DATA :
        return{
            ...state,
            news:action.payload
        }
        case GET_SOURCENEWS:
            return{
                ...state,
                sourcenews: action.payload
            }
        default :
        return state
    }
}