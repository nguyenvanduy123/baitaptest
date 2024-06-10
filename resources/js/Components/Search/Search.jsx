import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import InputSeach from "../Input-form/InputSearch/InputSearch";
function Search(props) {
    const { onchangeSearch, ValueSearch, idsa, valuesearch, classNameinput } = props;
    return (
        <div className="box-context Search stand_radius" id="search">
            <InputSeach
                className={`search_input inputs_item`}
                placeholder={"Rechercher dans Metaforma "}
                classNameinput={classNameinput}
                id={idsa}
                name={idsa}
                onChange={onchangeSearch}
                value={valuesearch ?? ""}
            />
            <div className="search_icon">
                <div class="plus"></div>
            </div>

        </div>
    );
}
export default Search;
