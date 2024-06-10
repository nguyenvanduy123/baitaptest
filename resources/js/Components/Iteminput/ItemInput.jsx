import React from "react";
import "./style.scss";

function ItemInput(props){
const { data, loading , children, placeholder,onChange ,title,valide,value,name} =props

return (

        <div className={"inputitem"} style={{ ...props?.style ?? "" }}>
            {/* <div className={"inputitem-stand"} >
                <span className={"text-item-ncc"}>{title}</span>
                <span className={"valide"}>{valide}</span>
        </div> */}
                <input className={`input-item ${props.className}`} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>


)
}
export default ItemInput
