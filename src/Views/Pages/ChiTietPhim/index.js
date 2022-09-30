import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom'

import Header from "../../../Components/Header/index";
import Slide from "../../../Components/slider/index";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import { FaGlobe, FaCaretDown, FaAngleRight, FaPlus, FaExpand } from "react-icons/fa";


function ChiTiet() {
  const cx = classNames.bind(styles);
  const Ref_content = useRef();
  const Ref_an = useRef();


  let slug = useParams();
  const [apis_name, setApiNames] = useState([]);
  const [apis_movie, setMovie] = useState([]);

  const [slider, settSlider] = useState([]);


  const [apis_episodes, setEpisodes] = useState([]);

  const [server_data, setServer_data] = useState([]);

  const [ifarm, setIfarm] = useState('')

  const [test, setTest] = useState('')


  useEffect(() => {
    fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat")
      .then(res => res.json())
      .then(slider => {
        settSlider([slider]);
      })
  }, []);


  useEffect(() => {
    server_data.map((server) => {
      if (server.name == '1') {
        setTest(server_data[0].link_embed)
      }
    })

  })
  console.log(test)

  useEffect(() => {
    fetch("https://ophim1.com/phim/" + `${slug.slug}`)
      .then(res => res.json())
      .then(apis_name => setApiNames([apis_name]))
  }, []);

  useEffect(() => {
    apis_name.map((api_name) => {
      if (api_name.length === 0) {
        // console.log('mảng rỗng')
      }
      else {
        // console.log('mảng ')
        document.getElementById('phu1').style.display = 'none';
        document.getElementById('hieuung3').style.display = 'none';

      }
    })
  })


  useEffect(() => {
    apis_name.map((api_name) => {
      setMovie(api_name.movie)
    })
  })

  useEffect(() => {
    apis_name.map((api_name) => {
      setEpisodes(api_name.episodes)
    })
  })

  useEffect(() => {
    apis_episodes.map((api_name) => {
      setServer_data(api_name.server_data)
    })
  })

  // console.log(server_data)

  function handerClick(link_embed, id) {
    // console.log(link_embed)
    setIfarm(link_embed);
    document.getElementById(id).style.background = 'gray'
  }

  function handerView() {

  }

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    if (Ref_an.current.clientHeight < 180) {
      document.getElementById('an').style.display = 'none'
    }
  }, [])

  function handerContent() {


    if (Ref_an.current.innerText === 'Xem Thêm') {
      Ref_content.current.style.height = 'auto';
      Ref_an.current.innerText = 'Ẩn';
    }

    else if (Ref_an.current.innerText === 'Ẩn') {
      Ref_content.current.style.height = '180px';
      Ref_an.current.innerText = 'Xem Thêm';
    }

  }




  return (
    <>
      <Header />

      <div className={cx('phu1')} id='phu1'>  </div>
      <div id="hieuung3" className={cx('hieuung3')} >
        <span className={cx('rect1')}></span>
        <span className={cx('rect2')}></span>
        <span className={cx('rect3')}></span>
        <span className={cx('rect4')}></span>
        <span className={cx('rect5')}></span>
      </div>

      <div className={cx('Chinh')}>
        <div></div>
        <div className={cx("container")}>
          <div className={cx('box')}>
            <div className={cx('iframe')}>
              {/* {test.map((li) => ( */}
              <iframe src={ifarm != '' ? ifarm : test} >

              </iframe>
              <a href={ifarm != '' ? ifarm : test} target='' >
                <FaExpand className={cx('FaExpand')} />
              </a>

              {/* ))} */}
            </div>
            <button onClick={() => handerView()}>
              <a href={ifarm != '' ? ifarm : test} target='' >
                Xem Toàn Màn Hình
              </a>

            </button>
            <h2>Tập Phim</h2>
            <div className={cx('tapphim')}>
              {server_data.map((server) => (
                <div>

                  <button onClick={() => handerClick(server.link_embed, server.name)} id={server.name} className={cx('a' + server.name)}> {server.name}  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={cx('box-2')}>
            <div className={cx('img')}>
              <img src={apis_movie.thumb_url} />
            </div>
            <div className={cx('text1')}>
              <h2>{apis_movie.name}</h2>
              <h3>{apis_movie.origin_name}</h3>
              <h4>
                <h3> Nội Dung:</h3>
                <p className={cx('content')} id='content' ref={Ref_content} >
                  {apis_movie.content}
                </p>
                <h3 onClick={() => handerContent()} ref={Ref_an} id='an'> Xem Thêm  </h3>
              </h4>
            </div>
            <div className={cx('text2')}>
              <h4>Số Tập: &nbsp;&nbsp;
                {apis_movie.episode_total}
              </h4>
              <h4>
                Hoàn Tất: &nbsp;&nbsp;
                {apis_movie.episode_current}
              </h4>
              <h4> Thời Lượng:&nbsp;&nbsp;
                {apis_movie.time}
              </h4>
              <h4>
                Ngôn Ngữ:&nbsp;&nbsp;
                {apis_movie.lang}
              </h4>
              <h4>Phát hành:&nbsp;&nbsp;
                {apis_movie.year}
              </h4>
            </div>
          </div>

          <div className={cx('slider')}>
            <h2>
              Các Phim Tương Tự
            </h2>
            {slider.map((list, index) => (
              // <Slider {...settings}>
              <Slide props={list.items} />
              // </Slider>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default ChiTiet;