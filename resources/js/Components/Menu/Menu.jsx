import React, { useState, useEffect } from 'react';
import "./style.scss"
// import { Link, useLocation } from "react-router-dom";
import { Head, Link, useForm } from '@inertiajs/react';
import axios from "axios";
function Menu(props)
{
    const {menu} = props;
    // let history = useLocation();
    let path_ = location.pathname;


    return (
        <div className="Menu" id='menubar'>
            <div className='topmneu'>

                <a className='logo_'>
                    <img src='/image/logo-1.png' className='icon_logo logo-icon' />
                </a>
            </div>
            <ul className='menu'>
                {menu && menu.map((item, index) =>
                {

                    let active = "";
                    if (item.link == path_ || path_.includes(item.link)) {
                        active = "active"
                    }

                    return <li key={index} className={`item_menu ${active}`}><Link href={item.link}><img className="icon-menu" src={item.icon}/></Link></li>
                })}

            </ul>

        </div>
    )
}
export default Menu;
