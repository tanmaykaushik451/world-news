import { IInitialstate } from "../../state/interface/IInitialState";

export interface INewsContext {
    State: IInitialstate,
    getnewsdata :()=>void,
    getsourcenews :(id:string)=>void,
}
