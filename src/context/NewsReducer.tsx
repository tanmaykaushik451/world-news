import { IInitialstate } from "../state/interface/IInitialState";
import { GET_DATA,GET_FAVCOUNT,GET_SELECTED,GET_SOURCENEWS,SET_FAVOURATE,NEWS_ERROR, REMOVE_FAVOURITE} from "./Types"
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
        case GET_SELECTED:
            return{
                ...state,
                view:state.sourcenews.filter((item)=>item.title === action.payload)
            }
        case SET_FAVOURATE:
            return{
                ...state,
                favourates:[...state.favourates,action.payload]
            }
        case REMOVE_FAVOURITE:
            return{
                ...state,
                favourates:state.favourates.filter((item)=>item !== action.payload)
            }
        case GET_FAVCOUNT:
            return{
                ...state,
                favcount:state.favourates.length
                }
        default :
        return state
    }
}