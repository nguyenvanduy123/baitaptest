import React from 'react';
import "./style.scss"
function CheckBoxV1(props)
{

    const { value, onChange, id, style, checked, children } = props;


    return (
        <div className="CheckBoxV1" id='checkboxV1'>
            {/* value={value} onChange={(e) => onChange(e, value, true)} checked={checked}  */}
            <input type="checkboxV1" id={id} value={value} onChange={(e) => onChange(e, value, true)} checked={checked} />
            <label htmlFor={id} style={style}>{children}</label>

        </div>
    )
}


export default CheckBoxV1;
