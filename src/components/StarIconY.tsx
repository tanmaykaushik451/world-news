import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import NewsContext from "../context/NewsContext";
import { IStarIcon } from "./StarIcon";

const StarIconY: React.FC<IStarIcon> = ({ item }) => {
  const [checked, setChecked] = useState(true);

  const newscontext = useContext(NewsContext);

  const { removefavourite } = newscontext;

  const handleOncheck = () => {
    removefavourite(item);
  };

  return (
    <div className="mystar">
      <label>
        <input
          type="checkbox"
          name="rating"
          checked={checked}
          onChange={handleOncheck}
        />
        <FaStar className="star" color="yellow" />
      </label>
    </div>
  );
};

export default StarIconY;
