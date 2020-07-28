import React, { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import NewsListItem from "./NewsListItem";

const AllNews: React.FC = () => {

  const [showfav,setshowfav] = useState(false)

  const newscontext = useContext(NewsContext);

  const { news,favcount,favourates} = newscontext.State;
  const { getfavcount,isshowfavourites} = newscontext

  useEffect(()=>{
    getfavcount()
  },[favourates])

  const handleshowfav=()=>{
    setshowfav(!showfav)
    isshowfavourites(showfav)
  }

  return (
    <div className="d-flex flex-column">
      <p className="p-3">Sources</p>
      <button className="btn btn-light text-left">All Sources</button>
      <div className="newslistdiv">
        {news.length===0 ?<div>
          Please check your internet connection
        </div> :<ul>
          {news.map((item) => {
            return (
              <li key={item.id} className="newslistitem">
                <NewsListItem name={item.name} id={item.id} />
              </li>
            );
          })}
        </ul>}
      </div>
        <button className="btn btn-light text-left" onClick={handleshowfav}>Favorites {favcount}</button>
    </div>
  );
};

export default AllNews;
