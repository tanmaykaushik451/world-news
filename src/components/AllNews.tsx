import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import NewsListItem from "./NewsListItem";

const AllNews: React.FC = () => {
  const newscontext = useContext(NewsContext);

  const { news,favcount,favourates} = newscontext.State;
  const { getfavcount} = newscontext

  useEffect(()=>{
    getfavcount()
  },[favourates])

  return (
    <div className="d-flex flex-column">
      <p className="p-3">Sources</p>
      <button className="btn btn-light text-left">All Sources</button>
      <div className="newslistdiv">
        <ul>
          {news.map((item) => {
            return (
              <li key={item.id} className="newslistitem">
                <NewsListItem name={item.name} id={item.id} />
              </li>
            );
          })}
        </ul>
      </div>
        <button className="btn btn-light text-left">Favorites {favcount}</button>
    </div>
  );
};

export default AllNews;
