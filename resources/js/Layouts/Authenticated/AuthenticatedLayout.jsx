import React, { useEffect, useState } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/DropdownV1';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Menu from '@/Components/Menu/Menu';
import Topbar from '@/Components/Topbar/Topbar';
import './style.scss'
import axios from "axios";
export default function Authenticated({ user, header, children }) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        axios.get(`/load-menu`).then((response) => {
            setMenu(response.data);
        });
    },[]);

        return (
            <div className="wrap" id="main_page">
                 <header>
                 <div className="left_main">
                    <Menu menu={menu}/>
                </div>
                 </header>

                <div className="right_main">
                    <Topbar />
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        );

}
