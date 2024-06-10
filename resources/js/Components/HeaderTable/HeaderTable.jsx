import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"
function HeaderTable(props) {

    return (
        <div className={`TitleText ${props.className ?? ""} `} id={'titletext'} style={{ ...props?.style ?? "" }}>
            <h4 className='title_text'>{props.title1}</h4>
            <div className='line_v'></div>
            <button className='Appel'>
                <img src={props.icon1} />
                <p>{props.title2}</p>
            </button>
            <button className='email'>
                <img src={props.icon2} />
                <p>{props.title3}</p>
            </button>
            <div className='line_v'></div>
            <button className='title4'>{props.title4}</button>
            <button className='title5'>{props.title5}</button>
            <button className='title6'>{props.title6}</button>
            <button className='title7'>{props.title7}</button>
            <div className='line_v'></div>
            <button className='title8'>{props.title8}</button>
            <button className='title9'>{props.title9}</button>
            <button className='title10'>{props.title10}</button>

        </div>
    )
}
export default HeaderTable;
