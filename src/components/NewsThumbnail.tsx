import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";

export interface INewsThumbNail {
  name: string;
  id: string;
  img: string;
  title: string;
  publishedAt: string;
}
const NewsThumbNail: React.FC<INewsThumbNail> = ({
  id,
  img,
  name,
  title,
  publishedAt,
}) => {

  const newscontext = useContext(NewsContext)

  const {showselected} = newscontext

  const showpost = ()=>{
    showselected(title)
  }
  
  return (
    <div className="d-flex newsthumbnail">
      <img src={img} alt="N/A" onClick={showpost} />
      <div className="d-flex">
        <p>{title}</p>
        <p>{publishedAt}</p>
      </div>

    </div> 
  );
};

export default NewsThumbNail;


  

