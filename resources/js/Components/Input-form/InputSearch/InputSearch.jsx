import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"
function InputSeach(props) {
    const { id, name, value, placeholder, onChange } = props
    return (
        <div className={`InputSeach ${props.className ?? ""} `} id={'inputsearch'} style={{ ...props?.style ?? "" }}>
            <div className={`inputs_item ${props.className ?? ""}`}>
                <div className={"icon_float"}><img src="/image/Search-1.png" /></div>
                <input
                    className={`input_item ${props.classNameinput ?? ""}`}
                    id={id ? id : ""}
                    name={name ? name : ""}
                    placeholder={placeholder ? placeholder : ""} value={value ? value : ""}
                    onChange={(e) => onChange(e)} />
            </div>
        </div>
    )
}
export default InputSeach;
