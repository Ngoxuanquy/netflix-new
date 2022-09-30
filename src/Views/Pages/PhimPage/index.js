import React, { useEffect, useState, useRef } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import Card from "../../../Components/card/index";
import Header from "../../../Components/Header/index";
import Mobie from "../../../assets/mobile.jpg";
import Img from "../../../assets/bia.jpg";
import Tv from "../../../assets/tv.png";
import boxshot from "../../../assets/boxshot.png";

import Slide from "../../../Components/slider/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Lordicon from "react-lordicon";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

import axios from "axios";

function Phim() {
  const cx = classNames.bind(styles);
  const [apis_name, setApiNames] = useState([]);
  const [lists_name, setListName] = useState([]);

  const [lists_slug, setListSlug] = useState([]);

  const [papes, setPape] = useState();

  let ref = useRef();

  defineLordIconElement(loadAnimation);

  var settings = {
    dots: true,
    styles: {
      color: "#222",
    },
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  function hander(pape) {
    setPape(pape);
    document.getElementById('1').style.background = 'gray'
    document.getElementById(pape).style.background = "gray";
    // location.reload();
    // window.location.reload()
    // document.getElementById('phu').style.display = 'block';
    // document.getElementById('hieuung3').style.display = 'block';

    // setTimeout(() => {
    //   document.getElementById('phu').style.display = 'none';
    //   document.getElementById('hieuung3').style.display = 'none';
    // }, 3000)

  }


  useEffect(() => {
    fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + `${papes}`)
      .then(res => res.json())
      .then(apis_name => {
        setApiNames([apis_name]);
      })

  }, [papes])

  // console.log(apis_name)
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

  // useEffect(() => {
  //   apis_name.map(lists_name => {
  //     setListName(lists_name.items);
  //   });
  // }, []);

  // React.useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });


  // useEffect(() => {
  //   let items = document.getElementsByClassName('active')
  //   items.forEach(element => {
  //     element.addEventListener('click', function (e) {
  //       items.forEach(items_remove => {
  //         items_remove.classList.remove('active');
  //       })
  //       this.classList.add('action')
  //     })
  //   });
  // }, [])

  const pape = [
    { id: 1, pape: 1 },
    { id: 2, pape: 2 },
    { id: 3, pape: 3 },
    { id: 4, pape: 4 },
    { id: 5, pape: 5 },
    { id: 6, pape: 6 },
    { id: 7, pape: 7 },
  ];

  return (
    <div className={cx("container")}>
      <Header />
      <div className={cx('phu')} id='phu'>  </div>
      <div id="hieuung3" className={cx('hieuung3')} >
        <span className={cx('rect1')}></span>
        <span className={cx('rect2')}></span>
        <span className={cx('rect3')}></span>
        <span className={cx('rect4')}></span>
        <span className={cx('rect5')}></span>
      </div>


      <div className={cx("img_bia")}>
        <div>
          {" "}
          <h1>Phim Gì Cũng Có</h1>
          <h2>Xem Hết Ở Netflix</h2>
        </div>
        <img src={Img} />
      </div>

      <div className="container">
        <div className={cx("icon")}>
          <div>
            <br />{" "}
            <Lordicon
              colors={{
                primary: "#fff",
                secondary: "#fff",
              }}
              icon="warning"
              size={50}
              delay={1000}
              trigger="loop"
              style={{
                position: "absolute",
                top: "100px",
                left: "-200px",
              }}
            />
            <br />
            <h4>Xem Phim Miễn Phí</h4>
          </div>
          <div>
            <br />{" "}
            <Lordicon
              colors={{
                primary: "#fff",
                secondary: "#fff",
              }}
              icon="notificationBell"
              size={50}
              delay={2000}
              trigger="loop"
              style={{
                position: "absolute",
                top: "100px",
                left: "-200px",
              }}
            />
            <h4>Phim Gì Cũng Có</h4>
          </div>
          <div>
            <br />{" "}
            <Lordicon
              colors={{
                primary: "#fff",
                secondary: "#fff",
              }}
              icon="alarm"
              size={50}
              delay={2000}
              trigger="loop"
              style={{
                position: "absolute",
                top: "100px",
                left: "-200px",
              }}
            />
            <h4>Sản Xuất Bởi Quy</h4>
          </div>
        </div>
        <div className={cx("box-list")}>
          <div></div>
          <div className={cx("list-card")}>
            {apis_name.map((list, index) => (
              <div>
                <Card props={list.items} />
              </div>
            ))}
            <div className={cx("pape")}>
              <ul>
                {pape.map((pa, index) => (
                  <div>
                    <li className="active">
                      {" "}
                      <button
                        onClick={() => hander(pa.pape)}
                        ref={ref}
                        id={pa.pape}
                      >
                        {pa.pape}
                      </button>{" "}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className={cx("list-slider")}>
        <div className={cx('slider')}>
          <h1>Phim Mới</h1>
          {apis_name.map((list, index) => (
            // <Slider {...settings}>
            <Slide props={list.items} />
            // </Slider>
          ))}
        </div>

        {/* <Card props={list.items} /> */}

        <div className={cx("box-1")}>
          <div className={cx("text")}>
            <h1>Thưởng thức trên TV của bạn.</h1>
            <h2>
              Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV,
              đầu phát Blu-ray và nhiều thiết bị khác.
            </h2>
          </div>
          <div className={cx("tv")}>
            <div className={cx("img-tv")}>
              <img src={Tv} />

              <div className={cx("video-tv")}>
                <video
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  autoPlay
                  playsinline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("box-2")}>
          <div className={cx("img-box")}>
            <img src={Mobie} />
            <div className={cx("phu-img")}>
              <img src={boxshot} />
              <div>
                <h3>Cậu Bé Mất Tích</h3>
                <h4>Đang tải xuống....</h4>
              </div>
            </div>
          </div>
          <div className={cx("text-box2")}>
            <h1>Tải xuống nội dung để xem ngoại tuyến.</h1>
            <h2>
              Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ
              để xem.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phim;
