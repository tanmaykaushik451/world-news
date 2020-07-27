import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";
import StarIcon from "./StarIcon";

const ViewPost: React.FC = () => {
  const newscontext = useContext(NewsContext);

  const { view } = newscontext.State;

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={view[0].urlToImage} alt="N/A" />
        <div className="card-body">
          <h5 className="card-title">
            {view[0].title} 
          </h5>
          <p className="card-text">{view[0].content}</p>
        </div>
      </div>
    </>
  );
};

export default ViewPost;
