import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '@/Components/Dropdown/Dropdown';
// import InputSeach from '../inputseach/InputSeach';

import "./style.scss";
function Pagination(props) {

    const { Options, value, ValueSelectLimit, id, placeholder, onChange, isHover, icon, top, style, OnChangeSelectNumPages, ShowStatus, CurrentPage, TotalRecord } = props;

    const [ValueSelect, setValueSelect] = useState({});
    const [Statuspage, setStatuspage] = useState("Hiển thị từ - trên tổng");

    useEffect(() => {
        setValueSelect(ValueSelectLimit)
    }, [ValueSelectLimit]);

    const onchangeStatus = (e) => {
        setValueSelect(e)
        OnChangeSelectNumPages(e)
    }
    useEffect(() => {

        setValueSelect(ValueSelectLimit)
        setShowStatus()

    }, []);


    useEffect(() => {

        setShowStatus()

    }, [ValueSelect]);
    useEffect(() => {

        setShowStatus()

    }, [ValueSelectLimit, CurrentPage]);


    const setShowStatus = () => {
        const start = ((CurrentPage - 1) * ValueSelect.id) + 1;
        const end = (CurrentPage * (ValueSelect.id));
        setStatuspage(`${start ?? ""} - ${end} sur ${TotalRecord ?? ""} éléments`)
        // 1-25 sur 500 éléments
    }
    return (
        <div className={`Pagination stand_radius`} id={'pagination'} style={{ ...style }}>
            <div className='pagination_left'>
            <div className={'chose_row_show'}>
                <span>Éléments par page</span>
                <Dropdown className={"_select_input"} placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueSelect.id}
                    isHover={true}
                    style={{
                        height: "24px",
                        width: "65px",
                        padding: 0
                    }}
                    icon={"/image/ic-droppagiin.png"}
                />
            </div>
            {ShowStatus && <div className={'_show_detail'}>
                <span>{Statuspage}</span>

            </div>
            }
            </div>

            <div className={'pagination_wrrap'}>

                <ButtonPage {...props} limit={ValueSelect.id} />


            </div>
        </div>
    )
}

// function ButtonPage(props)
// {
//     const { TotalRecord, CurrentPage, OnclickButtonChangePage, OnclickButtonNext, OnclickButtonPre, limit, LimitButton } = props;
//     const renders = [];
//     let totalVisiblePages = LimitButton
//     let TotalPage = Math.ceil((TotalRecord / limit))

//     let startPage = Math.max(1, CurrentPage - Math.floor(totalVisiblePages / 2));
//     let endPage = Math.min(TotalPage, startPage + totalVisiblePages - 1);
//     if (endPage - startPage < totalVisiblePages - 1) {
//         startPage = Math.max(1, endPage - totalVisiblePages + 1);
//     }
//     if (TotalPage) {

//         for (let i = startPage; i <= endPage; i++) {

//             renders.push(<button className={`reset_btn item item_left ${CurrentPage == i ? "active" : ""}`}
//                 onClick={(e) => OnclickButtonChangePage(e, i)}
//             >
//                 {i}
//             </button>)
//         }


//     }
//     return (<>
//         <button className={`reset_btn item item_left`} onClick={(e) => { OnclickButtonPre(e, CurrentPage <= 1 ? 1 : CurrentPage - 1) }}>
//             <img src='images/icon-pagi1.svg' className='icon_' style={{
//                 width: "24px", height: "24px"
//             }} />
//         </button>
//         {renders.map((item, index) =>
//         {
//             return <div key={index}>{item}</div>

//         })}
//         <button className={`reset_btn item item_right`} onClick={(e) => OnclickButtonNext(e, CurrentPage >= TotalPage ? TotalPage : CurrentPage + 1)}>
//             <img src='images/icon-pagi2.svg' className='icon_' style={{
//                 width: "24px", height: "24px"
//             }} />
//         </button>
//     </>

//     )


// }
function ButtonPage(props) {
    const { TotalRecord, CurrentPage, OnclickButtonChangePage, OnclickButtonNext, OnclickButtonPre, limit, LimitButton } = props;
    const renders = [];
    let totalVisiblePages = LimitButton;
    let TotalPage = Math.ceil((TotalRecord / limit));

    let startPage = Math.max(1, CurrentPage - Math.floor(totalVisiblePages / 2));
    let endPage = Math.min(TotalPage, startPage + totalVisiblePages - 1);
    if (endPage - startPage < totalVisiblePages - 1) {
        startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }

    if (TotalPage) {
        for (let i = startPage; i <= endPage; i++) {
            renders.push(
                <button key={i} className={`reset_btn item item_left ${CurrentPage == i ? "active" : ""}`}
                    onClick={(e) => OnclickButtonChangePage(e, i)}
                >
                    {i}
                </button>
            );
        }
    }

    return (
        <>
            <button className={`reset_btn item item_left`} onClick={(e) => OnclickButtonChangePage(e, 1)}>
                <img src={props.icon1} />
            </button>
            <button className={`reset_btn item item_left`} onClick={(e) => OnclickButtonPre(e, CurrentPage <= 1 ? 1 : CurrentPage - 1)}>
                <img src={props.icon2} />
            </button>

            <span className="page-info">{CurrentPage} de {TotalPage}</span>
            <button className={`reset_btn item item_right`} onClick={(e) => OnclickButtonNext(e, CurrentPage >= TotalPage ? TotalPage : CurrentPage + 1)}>
                <img src={props.icon3} />
            </button>
            <button className={`reset_btn item item_right`} onClick={(e) => OnclickButtonChangePage(e, TotalPage)}>
                <img src={props.icon4} />
            </button>
        </>
    );
}

export default Pagination;
