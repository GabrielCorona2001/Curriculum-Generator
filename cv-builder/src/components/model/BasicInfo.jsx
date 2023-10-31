import React, { useContext } from "react";
import { ContextName } from "../../contexts/Context";

import "../../styles//model/infosModel.css";



export default function BasicInfo() {
    const { state, setValues } = useContext(ContextName);




    return (
        <div className="basic-info-wrapper">
            <h1 className="info-title">{state.basicInfo.name + " " + state.basicInfo.lastName}</h1>

            <p className="info-title">{state.basicInfo.profission}</p>
            <p className="info-bio">{state.basicInfo.bio}</p>
        </div>
    );
}   