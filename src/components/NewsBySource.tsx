import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import NewsListItem from "./NewsListItem";
import NewsThumbNail from "./NewsThumbnail";

const NewsBySource: React.FC = () => {
  const newscontext = useContext(NewsContext);

  const { sourcenews, favourates, showfav } = newscontext.State;

  return (
    <div className="newsbysourcediv">
      {showfav ? (
        <ul>
          {favourates.map((item) => {
            return (
              <li>
                <NewsThumbNail item={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {sourcenews.map((item) => {
            return (
              <li>
                <NewsThumbNail item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NewsBySource;
