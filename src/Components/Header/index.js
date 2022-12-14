import React, { useEffect, useRef, useState } from "react";
import Img from "../../assets/bia.jpg";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

import Netflix from "../../assets/netflix.png";

import { FaGlobe, FaCaretDown, FaAngleRight, FaSearch, FaBars } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  const cx = classNames.bind(styles);

  const ref = useRef();
  const ref_phu = useRef();
  const ref_menu = useRef();
  const menu_bars = useRef();


  const ref_search = useRef();

  const [refs, setRef] = useState("");

  const [apis_name, setApiNames] = useState([]);
  const [lists_name, setListName] = useState([]);
  const [lists_search, setListCheck] = useState([]);

  const [theloai, setTheLoai] = useState([]);

  const page = [1, 2, 3, 4]

  // useEffect(() => {
  //   fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat")
  //     .then(res => res.json())
  //     .then(apis_name => {
  //       setApiNames([apis_name]);
  //     })

  // }, [])



  // function handeChane() {
  //   setRef(ref.current.value);
  // }

  // function handerChane(e) {
  //   setRef(ref.current.value);
  //   if (ref.current.value != '') {
  //     document.getElementById('search').style.display = 'block'

  //   }
  //   else {
  //     document.getElementById('search').style.display = 'none'

  //   }
  //   fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat")
  //     .then(res => res.json())
  //     .then(apis_name => {
  //       apis_name.items.map((api_name) => {
  //         if (api_name.name.includes(ref.current.value) === true) {
  //           // console.log(api_name)
  //           setListName([...lists_name, api_name])
  //         }
  //       })
  //     }
  //     )

  // }


  function handeChane() {
    setRef(ref.current.value);
  }

  function handerChane(e) {
    setRef(ref.current.value);
    if (ref.current.value != '') {
      document.getElementById('search').style.display = 'block'
      document.getElementById('all').style.display = 'block'
    }
    else {
      document.getElementById('search').style.display = 'none'
      document.getElementById('all').style.display = 'none'


    }
    page.map((pa) => {
      fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + `${pa}`)
        .then(res => res.json())
        .then(apis_name => {
          var selected_number = apis_name.items.filter(function (value) {
            if (value.name.includes(ref.current.value)) {
              return [...lists_name, value]
            }
          });
          setListName(selected_number)
        }
        )
    })
  }

  // console.log(lists_name)

  function handerPhu() {
    ref_phu.current.style.display = 'none'
    ref_menu.current.style.display = 'none'

  }

  function handerBars() {
    ref_phu.current.style.display = 'block'
    ref_menu.current.style.display = 'block'
  }

  const TheLoais = [
    { id: 1, name: 'Phim H??nh ?????ng' },
    { id: 2, name: 'Phim Bom T???n' },
    { id: 3, name: 'Phim T??m C???m' },
    { id: 4, name: 'Phim C??? Trang' },
    { id: 5, name: 'Phim T??m L??' },
    { id: 6, name: 'Phim H??nh S???' },
    { id: 7, name: 'Phim Chi???u R???p' },
    { id: 8, name: 'Phim S???p Chi???u' },
  ]

  function handerTheLoai(theloai) {
    setTheLoai(theloai);
  }


  console.log(theloai)



  return (
    <div className={cx("container")}>
      <div className="container">
        <div className={cx('phu-den')} ref={ref_phu} onClick={() => handerPhu()}></div>
        <div className={cx('menu-phu')} ref={ref_menu}>
          <ul >
            <Link to="/">
              <li>
                <img src={Netflix} className={cx('Netflix-phu')} />
              </li>
            </Link>
            {/* <div className={cx('box-an')}> */}
            <li >Phim L???</li>
            <li >Phim B???</li>
            <li >
              Th??? Lo???i
            </li>
            <li >Qu???c Gia
            </li>
            <li>TV Show</li>
            <li >Tin T???c</li>

            {/* </div> */}

          </ul>
        </div>
        <div className={cx("header")}>
          <div className={cx("box")}>
            <ul className={cx("ul-box")}>
              <Link to="/">
                <li>
                  <img src={Netflix} className={cx('Netflix')} />
                </li>
              </Link>
              {/* <div className={cx('box-an')}> */}
              <li className={cx('an')}>Phim L???</li>
              <li className={cx('an')}>Phim B???</li>
              <li className={cx('menu-li')}>
                Th??? Lo???i
                <ul className={cx('menu')} >
                  <br />
                  <a href={`/theloai/${theloai}`} >
                    {TheLoais.map((TheLoai) => (

                      <li key={TheLoai.id} onClick={() => handerTheLoai(TheLoai.name)}>  {TheLoai.name} </li>
                    ))}
                  </a>
                </ul>

              </li>
              <li className={cx('menu-li')}>Qu???c Gia
                <ul className={cx('menu')} >
                  <br />
                  <li> Phim Trung Qu???c  </li>
                  <li>Phim Vi???t Nam</li>
                  <li></li>
                  <li>Phim H??n QU???c</li>
                  <li>Phim ??u M???</li>
                  <li>Phim H???ng K??ng</li>
                  <li>Phim Nh???t B???n</li>
                  <li>Phim T???ng H???p</li>

                </ul>

              </li>

              <li className={cx('an')}>TV Show</li>
              <li className={cx('an')}>Tin T???c</li>
              <li>

                <input
                  type="text"
                  placeholder="T??m Ki???m..."
                  ref={ref}
                  onChange={() => handerChane()}
                  id="input"

                />
                <a href={`/timkiem/${refs}`}>
                  <span>
                    <FaSearch
                      onClick={() => {
                        handeChane();
                      }}
                    />
                  </span>
                </a>
                <ul className={cx('search')} id='search'>
                  {lists_name.map(list_name => (
                    <li className={cx('search-li')} >
                      <div>
                        <a href={`/phim/${list_name.slug}`}>
                          <div>
                            <img
                              src={
                                "https://img.ophim.cc/uploads/movies/" + list_name.thumb_url
                              }
                            />
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href={`/phim/${list_name.slug}`} style={{ textDecoration: "none", color: 'white' }}>
                          {list_name.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href={`/timkiem/${refs}`} style={{ textDecoration: "none", color: 'white' }} >
                  <li className={cx('all')} id='all'>
                    <div>
                      Xem T???t c??? k???t qu???
                    </div>
                  </li>
                </a>
              </li>
              {/* </div> */}
              <li className={cx('menu-bars')} ref={menu_bars} onClick={() => handerBars()}>
                <FaBars />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;
