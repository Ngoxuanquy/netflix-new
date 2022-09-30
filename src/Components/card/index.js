import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Card = (props) => {
  const cx = classNames.bind(styles);
  const [lists, setList] = useState([]);

  useEffect(() => {
    setList(props.props);
  }, [props]);

  // console.log(lists)


  return (

    <div class={cx("blog-wrapper")}>
      {lists.map((list, index) => (
        <div class={cx("blog-card")}>
          <div class={cx("card-img")}>
            <Link to={`/phim/${list.slug}`}>
              <img
                src={
                  "https://img.ophim.cc/uploads/movies/" + list.thumb_url
                }
              />
            </Link>
            <div>
              <h5>{list.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Card;
