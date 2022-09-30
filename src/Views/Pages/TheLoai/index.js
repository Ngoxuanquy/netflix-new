import React from "react";
import { useParams } from 'react-router-dom'

import Header from "../../../Components/Header/index";

function TheLoai() {

    let theloai = useParams();
    console.log(theloai)

    return (
        <div>
            <Header />
            <div>
                {theloai.slug}
            </div>
        </div>
    )
}

export default TheLoai;