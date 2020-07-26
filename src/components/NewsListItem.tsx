import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";

export interface INewsListItem {
  name: string;
  id: string;
}
const NewsListItem: React.FC<INewsListItem> = ({ name, id }) => {
  const newscontext = useContext(NewsContext);
  const { getsourcenews } = newscontext;

  const getsourcelist =()=>{
    getsourcenews(id)
  }

  return <p className="p-2" onClick={getsourcelist}>{name}</p>;
};

export default NewsListItem;
