import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";
import StarIcon from "./StarIcon";
import StarIconY from "./StarIconY";

export interface INewsThumbNail {
  item: {
    name: string;
    id: string;
    urlToImage: string;
    title: string;
    publishedAt: string;
  };
}
const NewsThumbNail: React.FC<INewsThumbNail> = ({ item }) => {
  const newscontext = useContext(NewsContext);

  const { showselected } = newscontext;

  const { favourates } = newscontext.State;

  const showpost = () => {
    showselected(item.title);
  };

  const isfav = favourates.includes(item)

  return (
    <div className="d-flex newsthumbnail my-2">
      <img src={item.urlToImage} alt="N/A" onClick={showpost} />
      <div className="d-flex">
        <span>{item.title}</span>
        <span>{item.publishedAt}</span>
        <p>{!isfav ? <StarIcon item={item} /> : <StarIconY item={item} />}</p>
      </div>
    </div>
  );
};

export default NewsThumbNail;
