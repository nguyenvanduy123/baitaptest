import React from "react";
import "./style.scss";
import ItemInput from "../Iteminput/ItemInput";
import Itemdropdown from '@/Components/fromitemdropdown/FromItemDropdown';
import DatePickerWithIcon from "../inputDate/InputDate";
import TimePickerWithIcon from "@/Components/inputTime/inputTime"
function Modal(props) {
    return (
        <div  //visible bg-black/20
            onClick={props.onClose}
            className={`Modal ${props.open ? "modalhiden" : "invisible"}
      `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`Modalfrom ${props.open ? "scale-100 opacity-100" : "scale-125 opacity-0"} ${props.open ? "translate-x-0 w-full" : "translate-x-1/2 w-0"}`}
            >
                <div className="modalitem">
                    <div className="titleheader">
                        <span>Éditer tâche</span>
                        <button
                            onClick={props.onClose}
                            className="Modalclone"
                        >
                            <img src={"/image/Close-remove.png"} />
                        </button>
                    </div>



                </div>
                <div className="contentModal">
                        <div className="item-content">
                            <ItemInput
                            style={{
                                width: "318px",
                                marginTop: "12px"
                            }}
                            placeholder={"Titre de la tâche"}
                            />
                            <Itemdropdown
                            placeholder={""} id="danhmuc" name="danhmuc"
                            Options = {[]}
                            title=""
                            valide="*"
                            top="222px"
                            style={{
                                height: "40px",
                                width: "204px",
                                marginTop: "3px",
                                marginLeft: "10px",
                                backgroundColor: "rgba(255, 0, 31, 0.2)"
                            }}
                            icon={<img src='/image/ic-droppagiin.png' className='icon_danhmuc' />}

                            />
                        </div>
                        <div className="item-content">
                            <DatePickerWithIcon/>
                            {/* <TimePickerWithIcon/> */}

                        </div>


                    </div>
            </div>
        </div>
    );
}

export default Modal;
