import React, { useState, useEffect } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import "./style.scss";

function Table(props) {
    const { Colums, DataRow, isboder, ischeckbox, onChangeCheck, WrapperStyle } = props;
    const [Values, setValues] = useState([]);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        onChangeCheck(Values);
    }, [check]);

    const onChangeCheckbox = (e, value, isall) => {
        let result = [];
        if (!isall) {
            if (e.target.checked) {
                if (!Values.includes(value)) {
                    Values.push(value);
                    result = Values;
                }
            } else {
                result = Values.filter(item => value !== item);
            }
        } else {
            setValues([]);
            if (e.target.checked) {
                (DataRow || []).forEach(item => result.push(item.id));
            } else {
                result = [];
            }
        }
        setValues(result);
        setCheck(!check);
    };

    return (
        <div className="Table" id='table' style={{ ...WrapperStyle }}>
            <div className="table-container">
                <table className='table_standard' cellPadding={0} cellSpacing={0} border={isboder ? 1 : 0}>
                    <thead>
                        <tr className='color_standar'>
                            {Colums && Colums.map((item, index) => (
                                <th key={index} style={{ ...item.style }}>
                                    {ischeckbox && index <= 0 && (
                                        <div style={{ display: "flex" }}>
                                            <CheckBox
                                                id={"all_check"}
                                                value={"all_check"}
                                                style={{ marginRight: "10px", width: "15px", height: "15px" }}
                                                onChange={(e) => onChangeCheckbox(e, "all_check", true)}
                                                checked={Values.length === DataRow.length}
                                            />
                                            {item.title}
                                        </div>
                                    )}
                                    {!ischeckbox || index > 0 && item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {DataRow && DataRow.length > 0 ? (

                        DataRow && DataRow.map((item, index) => (
                            <tr key={index} >
                                {Colums && Colums.map((el, i) => (
                                    <td key={i} style={{ ...el.style }}>
                                        {ischeckbox && i <= 0 && (
                                            <div style={{ display: "flex" }}>
                                                <CheckBox
                                                    id={item.id}
                                                    value={item.key}
                                                    style={{ marginRight: "10px", width: "15px", height: "15px" }}
                                                    onChange={(e) => onChangeCheckbox(e, item.id, false)}
                                                    checked={Values.includes(item.id)}
                                                />
                                                {!el.render && item[el.dataIndex]}
                                                {el.render && el.render(item[el.dataIndex], item)}
                                            </div>
                                        )}
                                        {(!ischeckbox || i > 0) && !el.render && item[el.dataIndex]}
                                        {(!ischeckbox || i > 0) && el.render && el.render(item[el.dataIndex], item, index)}
                                    </td>
                                ))}
                            </tr>
                        ))
                        ) : (
                            <tr>
                                <td colSpan={Colums.length} style={{ textAlign: 'center', padding: '20px' }}>
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
