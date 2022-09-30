import React, { useEffect, useState } from "react";
import Tv from "../../../assets/tv.png";
import Mobie from "../../../assets/mobile.jpg";
import boxshot from "../../../assets/boxshot.png";
import treem from "../../../assets/tre-em.png";
import Vn from "../../../assets/vn.jpg";
import Img from "../../../assets/bia.jpg";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import Netflix from "../../../assets/netflix.png";

import { FaGlobe, FaCaretDown, FaAngleRight, FaPlus } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const cx = classNames.bind(styles);
  const [apis, setapis] = useState([]);
  const [lists_name, setListName] = useState([]);

  useEffect(() => {
    fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat")
      .then((res) => res.json())
      .then((apis) => {
        setapis([apis]);
      });
  }, []);

  useEffect(() => {
    apis.map((api, index) => {
      setListName(api.items);
    });
  });

  // console.log(lists_name);

  return (
    <>
      <div className={cx("container")}>
        <div className="container">
          <div className={cx("text")}>
            <div className={cx("title")}>
              <img src={Netflix} />
            </div>
            <div className={cx('box-language')}>
              <button className={cx("language")}>
                <span>
                  <FaGlobe />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <select >
                  <option >
                    Tiếng Việt
                  </option>
                  <option >
                    EngList
                  </option>
                </select>
                &nbsp;
                <span>
                  {/* <FaCaretDown /> */}
                </span>
                &nbsp;
              </button>

              <button className={cx("login")}> Đăng Nhập </button>

            </div>
          </div>
          <div className={cx("conten")}>
            <div className={cx("text-h1")}>
              <h3>Chào mừng bạn quay lại!</h3>
              <h1>
                Chương trình truyền hình, phim không giới hạn và nhiều nội dung
                khác.
              </h1>
              <h3>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h3>
              <Link
                to="/phim"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  width: '100px'
                }}
              >
                <button className={cx("XemPhim")}>
                  {" "}
                  <h4>Xem Phim</h4>
                  <span>
                    <FaAngleRight />
                  </span>
                </button>
              </Link>{" "}
            </div>
          </div>
          <div className={cx("img_bia")}>
            <img src={Img} />
          </div>
        </div>
      </div>

      <div className={cx("container1")}>
        <div className="container">
          <div className={cx("box")}>
            <div className={cx("box-1")}>
              <div className={cx("text")}>
                <h1>Thưởng thức trên TV của bạn.</h1>
                <h2>
                  Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple
                  TV, đầu phát Blu-ray và nhiều thiết bị khác.
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
                  Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có
                  thứ để xem.
                </h2>
              </div>
            </div>
            <div className={cx("box-3")}>
              <div className={cx("text-box3")}>
                <h2>Xem ở mọi nơi.</h2>
                <h4>
                  Phát trực tuyến không giới hạn phim và chương trình truyền
                  hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
                </h4>
              </div>
            </div>

            <div className={cx("box-4")}>
              <div className={cx("img-box4")}>
                <img src={treem} />
              </div>
              <div className={cx("text-box4")}>
                <h1>Tạo hồ sơ cho trẻ em.</h1>
                <h3>
                  Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu
                  thích trong một không gian riêng. Tính năng này đi kèm miễn
                  phí với tư cách thành viên của bạn.
                </h3>
              </div>
            </div>

            <div className={cx("box-5")}>
              <div className={cx("text-box5")}>
                <h1>
                  Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới
                  của chúng tôi!
                </h1>
                <h3>
                  Xem các bộ phim và chương trình truyền hình mới được tuyển
                  chọn mà không cần cung cấp thông tin thanh toán!
                </h3>
                <h3>
                  {" "}
                  Tải Ứng Dụng &nbsp;&nbsp;
                  <span>
                    <FaAngleRight />
                  </span>
                </h3>
              </div>
              <div className={cx("img-box5")}>
                <img src={Vn} />
              </div>
            </div>

            <div className={cx("box-6")}>
              <h1>Câu hỏi thường gặp</h1>

              <div>
                <button>
                  Netflix là gì?
                  <span id="">
                    <FaPlus />
                  </span>
                  <div className={cx("phu-text")}>
                    <p>
                      Netflix là dịch vụ phát trực tuyến mang đến đa dạng các
                      loại chương trình truyền hình, phim, anime, phim tài liệu
                      đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn
                      thiết bị có kết nối Internet. Bạn có thể xem bao nhiêu tùy
                      thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng
                      cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn
                      có những nội dung mới để bạn khám phá và những chương
                      trình truyền hình, phim mới được bổ sung mỗi tuần!
                    </p>
                  </div>
                </button>
              </div>
              <div>
                <button>
                  Tôi phải trả bao nhiêu tiền để xem Netflix?
                  <span>
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div>
                <button>
                  Tôi có thể xem ở đâu?
                  <span>
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div>
                <button>
                  Làm thế nào để hủy?
                  <span>
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div>
                <button>
                  Tôi có thể xem gì trên Netflix?
                  <span>
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div>
                <button>
                  Netflix có phù hợp cho trẻ em không?
                  <span>
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div>
                <Link
                  to="/phim"
                  style={{
                    listStyle: "none",
                    textDecoration: "none",
                  }}
                >
                  <button className={cx("htdk")}>
                    {" "}
                    <h4>Xem Phim</h4>
                    <span>
                      <FaAngleRight />
                    </span>
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
