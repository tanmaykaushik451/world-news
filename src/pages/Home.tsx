import React, { useEffect, useContext } from "react"
import NewsContext from "../context/NewsContext";
import AllNews from "../components/AllNews";
import NewsBySource from "../components/NewsBySource";

const Home : React.FC =()=>{

    const shipmentContext = useContext(NewsContext);

    const { getnewsdata } = shipmentContext;
    
    useEffect(() => {
      getnewsdata();
      // eslint-disable-next-line
    }, []);

return(
    <div className="row" id="content">
      <div className="col-12 col-md-2 p-0"><AllNews/></div>
      <div className="col-12 col-md-4 p-0"><NewsBySource/></div>
      <div className="col-12 col-md-6 p-0"></div>
    </div>
)
}

export default Home