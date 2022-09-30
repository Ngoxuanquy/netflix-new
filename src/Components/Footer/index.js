import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
function Footer() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("container")}>
      <h4>Bạn có câu hỏi? Liên hệ với chúng tôi.</h4>
      <div className={cx("footer")}>
        <ul>
          <li>Câu hỏi thường gặp</li>
          <li>Quan hệ với nhà đầu tư</li>
          <li>Quyền riêng tư</li>
          <li>Kiểm tra tốc độ</li>
        </ul>
        <ul>
          <li>Trung tâm trợ giúp</li>
          <li>Việc làm</li>
          <li>Tùy chọn cookie</li>
          <li>Thông báo pháp lý</li>
        </ul>
        <ul>
          <li>Tài khoản</li>
          <li>Các cách xem</li>
          <li>Thông tin doanh nghiệp</li>
          <li>Chỉ có trên Netflix</li>
        </ul>
        <ul>
          <div className={cx('box4')}>

            <li>Trung tâm đa phương tiện</li>
            <li>Điều khoản sử dụng</li>
            <li>Liên hệ với chúng tôi</li>
          </div>
        </ul>
      </div>
      <button>Tiếng Việt</button>
    </div>
  );
}

export default Footer;
