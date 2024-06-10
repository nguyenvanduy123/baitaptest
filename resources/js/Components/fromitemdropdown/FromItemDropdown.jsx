import React, { useState ,useEffect,useRef} from "react";
import "./style.scss";

function DropdownItem(props) {
    console.log(props.style);
    // const [Position, setPosition] = useState({ top:"213px", bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);

    const { Options, value, id, placeholder, onChange, isHover, icon, top ,title , valide } = props;

    const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const popRef = useRef()

    return <div className={"dropitem-input"}>
            <div className={"inputitem-stand-drop"}>
                        {/* <span className={"text-item-danhmuc"}>{title}</span>
                        <span className={"valide-danhmuc"}>{valide}</span> */}
                </div>
    <div className={`Dropdownitem  ${props.className ?? ""}`}
        id={'dropdown-item'}
        style={{ ...props?.style ?? "" }}
        ref={popRef}
        onClick={() => { setIsClick(!isClick) }}>
        <div className={`inputs_item-drop stand_input-item`}>
            <div className={`icon_float-drop ${isClick ? "is_change-drop" : ""}`}>{icon}</div>
            <input className={`reset_input-drop input_item-drop`} id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                value={value ?? ""}
                autoComplete={("off").toString()} onChange={() => { }} />
        </div>
        <div className={`dropdown_body-item stand_radius ${props.classNameBody ?? ""} ${isClick ? "show-drop" : ""}`}
            style={{top: top}}>

            <ul>
                {Options && Options.map((item, index) => {

                    return <li className={'stand_input'} key={index} onClick={() => { setIsTitle(item); onChange(item) }} >{item.name}</li>
                })}


            </ul>
        </div>
    </div>
    </div>
}
export default DropdownItem
