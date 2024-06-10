import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import './style.scss';
import Dropdown from "@/Components/InputDropdown/InputDropdown";
import InputSeachV1 from "../Input-form/InputSearchV1/InputSearchV1";
function SearchHeader(props) {
    const [contask, setcontask] = useState(50);
    const { reacode, onchangeSearch, datastatus
        , ValueStatus, ValueAddress, ValueSearch, resetitem, btnsearch,
        idsa, idstatus, idaddress, valuesearch, onchangeStatusDrop,onchangeStatusDropuser, dataprovin, onchangeinput, valueinput, onchanresetstatus, idvacancies
        , idrecruitmentproposal, idday,InputSeachvalue,Optionss,ValueStatusdrop,valuesearchusser,Optionssuser
    } = props

    return (
        <div className="Search-header-content">
            <div className="left-search">
                <button className="Add-task">
                    <img src="/image/Plus1-1.png" className="plus-add" />
                    <p>Ajouter une tâche</p>
                </button>

                <span className="Task-count">{contask} <p>tâches</p></span>
            </div>
            <div className="right-search">
                <Dropdown className={"_select_input inputs_item"} placeholder={"Plus de filtre"}
                    id={idstatus} name={idstatus}
                    Options={Optionss}
                    onChange={(e) => { onchangeStatusDrop(e) }}
                    // value={valuesearch.status ? (valuesearch.status == 1 ? "Giao dịch" : "Tạm dừng") : valueinput.status}
                    value={ValueStatusdrop}
                    isHover={true}
                    icon={"/image/preferences1.png"}
                    iconclone={"/image/preferences1.png"}
                    change={(e) => { onchangeinput(e) }}
                    onchanreset={(e) => { onchanresetstatus(e, 'status') }}

                />
                <Dropdown className={"_select_input inputs_item"} placeholder={"Tout le monde"}
                    id={idstatus} name={idstatus}
                    Options={Optionssuser}
                    onChange={(e) => { onchangeStatusDropuser(e) }}
                    // value={valuesearch.status ? (valuesearch.status == 1 ? "Giao dịch" : "Tạm dừng") : valueinput.status}
                    value={valuesearchusser}
                    isHover={true}
                    icon={"/image/userdrop.png"}
                    iconclone={"/image/userdrop.png"}
                    change={(e) => { onchangeinput(e) }}
                    onchanreset={(e) => { onchanresetstatus(e, 'status') }}

                />
                <InputSeachV1
                value={InputSeachvalue}
                className={`search_input inputs_item`}
                placeholder={"Titre, contact, responsable..."}
                onChange={(e)=>{onchangeSearch(e)}}/>
            </div>
        </div>



    )
}
export default SearchHeader;
