import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
function ButtonDropdownV1(props)
{

    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()

    const { Options, value, id, placeholder, onChange, children, icon, isHover } = props;

    const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() =>
    {
        const pop = popRef.current;
        const Optionslen = Options.length;
        setHeightDropdown(Optionslen * 10);

        setPosition({ top: pop.offsetHeight, bottom: 0, left: 0, right: 0 })
    }, []);

    useEffect(() =>
    {
        if (!isHovering) {
            setIsClick(isHovering);
        }
        if (isHover && isHovering) {
            setIsClick(isHovering);
        }
    }, [isHovering]);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () =>
    {
        clearTimeout(timeoutRef.current);
        setIsHovering(true);
    };

    const handleMouseLeave = () =>
    {
        timeoutRef.current = setTimeout(() => setIsHovering(false), 200);
    };


    return (
        <div
            className={`ButtonDropdownV1 stand_radius" ${props.className ?? ""}`}
            id={"button_dropdownV1"}
            style={{ ...props?.style ?? "" }}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className={"inputs_item"} >
                <div className={`icon_float ${isClick ? "is_change" :""}`}><img src={icon} className={"icon_btn"}/></div>
                {children}
            </div>
            <div className={`dropdown_bodyv1 ${isClick ? "show" : ""}`}
                style={{top: Position.top,}}>

                <ul>
                    {Options && Options.map((item, index) =>
                    {

                        if (id !== item.id) {
                            return <li className={"stand_input"} key={index} onClick={() => { setIsTitle(item); onChange(item.id) }} >{item.name}</li>
                        }

                    })}


                </ul>
            </div>
        </div>
    )
}


export default ButtonDropdownV1;
