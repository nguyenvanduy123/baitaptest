import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"
function InputSeachV1(props) {
    const { id, name, value, placeholder, onChange } = props
    return (
        <div className={`InputSeachV1 ${props.className ?? ""} `} id={'inputsearchv1'} style={{ ...props?.style ?? "" }}>
            <div className={`inputs_itemv1 ${props.className ?? ""}`}>
                <div className={"icon_floatv1"}><img src="/image/Search-1.png" /></div>
                <input
                    className={`input_itemv1 ${props.classNameinput ?? ""}`}
                    id={id ? id : ""}
                    name={name ? name : ""}
                    placeholder={placeholder ? placeholder : ""} value={value ? value : ""}
                    onChange={(e) => onChange(e)} />
            </div>
        </div>
    )
}
export default InputSeachV1;
