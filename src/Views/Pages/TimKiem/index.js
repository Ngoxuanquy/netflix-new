import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import Header from "../../../Components/Header/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function TimKiem() {
  let slug = useParams();
  const cx = classNames.bind(styles);

  const [apis_name, setApiNames] = useState([]);
  const [lists_name, setListName] = useState([]);
  const [lists_search, setListCheck] = useState([]);

  const pape = [1, 2, 3, 4]

  useEffect(() => {
    pape.map((pa) => {

      fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + `${pa}`)
        .then(res => res.json())
        .then(apis_name => {
          setApiNames([apis_name]);
        })
    })

  }, [])

  useEffect(() => {
    apis_name.map((api_name) => {
      if (api_name.length === 0) {
        // console.log('mảng rỗng')
      }
      else {
        // console.log('mảng ')
        document.getElementById('phu').style.display = 'none';
        document.getElementById('hieuung3').style.display = 'none';

      }
    })
  })


  useEffect(() => {
    apis_name.map((api_name) => {
      setListName(api_name.items)
    })
  })
  // console.log(lists_name)

  useEffect(() => {
    lists_name.map((list_name) => {
      if (list_name.name.includes(slug.slug)) {
        setListCheck(pre => [...pre, list_name])
      }
    })

  }, [lists_name])


  // console.log(lists_search)

  return (
    <>
      <Header />
      <div className={cx('phu')} id='phu'>  </div>
      <div id="hieuung3" className={cx('hieuung3')} >
        <span className={cx('rect1')}></span>
        <span className={cx('rect2')}></span>
        <span className={cx('rect3')}></span>
        <span className={cx('rect4')}></span>
        <span className={cx('rect5')}></span>
      </div>

      <div class={cx("blog-wrapper")}>
        {lists_search.map((list, index) => (
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
    </>
  );
}

export default TimKiem;
