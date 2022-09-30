import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Chuyen = (props) => {
    const cx = classNames.bind(styles);
    const [lists, setList] = useState([]);

    useEffect(() => {
        setList(props.props);
    }, []);

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


    // console.log(props)



    return (

        <div class={cx("blog-wrapper")}>
            <Slider {...settings}>
                {lists.map((list, index) => (
                    <div class={cx("blog-card")}>
                        <div class={cx("card-img")}>
                            <a href={`/phim/${list.slug}`}>
                                <img
                                    src={
                                        "https://img.ophim.cc/uploads/movies/" + list.thumb_url
                                    }
                                />
                            </a>
                            <div>
                                <h5>{list.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default Chuyen;
