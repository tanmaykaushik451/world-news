import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import NewsListItem from "./NewsListItem";

const NewsBySource: React.FC = () => {
  const newscontext = useContext(NewsContext);

  const { news } = newscontext.State;

  return (
    <div className="d-flex flex-column">
      {/* <p className="p-3"></p>
      <div className="">
        <ul>
          {news.map((item) => {
            return (
              <li key={item.id} className="">
                <NewsListItem name={item.name} />
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default NewsBySource;
