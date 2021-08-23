import React from "react";
import logo from "./img/kids.jpg"

const ImageMap = () =>(
<>
    <img src = {logo} alt="" usemap="#favorites"/>
    <map name="favorites">
        <area shape="rect" coords="10, 10, 160, 200" href="http://cafe.naver.com/" target="_blank" alt="네이버카페"/>
        <area shape="rect" coords="220, 10, 380, 200" href="http://www.facebook.com" target="_blank" alt="페이스북"/>
    </map>
</>)

export default ImageMap