import React from "react";
import "./style.scss";
import { Head, Link, useForm } from '@inertiajs/react';
import Search from "../Search/Search";

function Topbar(props) {


    return (
        <div className="Topbar" id="topbar">
            <div className="left">

                    <Search classNameinput="inputfocus"/>

            </div>
            <div className="right">
                <div className="menu_top_right">
                    <button className="notifi"></button>
                    <button className="messages"></button>
                    <button className="setting"></button>
                </div>
                <div className="btn_user">
                    <img src="/image/Ellipse-1.png"/>
                    <div className="name-location">
                        <span className="name-user">
                        Sébastien Hanouna
                        </span>
                        <span className="location-user">
                        CEO, Admin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Topbar;
