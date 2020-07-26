import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import NewsListItem from "./NewsListItem";
import NewsThumbNail from "./NewsThumbnail";

const NewsBySource: React.FC = () => {
  const newscontext = useContext(NewsContext);

  const { sourcenews } = newscontext.State;

  return (
    <div className="d-flex flex-column">
      <p className="p-3">{}</p>
      <div className="newsbysourcediv">
        <ul>
          {sourcenews.map((item) => {
            return (
              <li className={item.source.name}>
                <NewsThumbNail
                  publishedAt={item.publishedAt}
                  name={item.source.name}
                  id={item.source.id}
                  img={item.urlToImage}
                  title={item.title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsBySource;
