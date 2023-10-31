import React, { useContext } from "react";
import { ContextName } from "../../contexts/Context";

import "../../styles//model/infosModel.css";



export default function BasicInfo() {
    const { state, setValues } = useContext(ContextName);




    return (
        <div className="basic-info-wrapper">
            <h1 className="info-title">{state.name + " " + state.lastName}</h1>

            <p className="info-title">{state.profission}</p>
            <p className="info-bio">{state.bio}</p>
        </div>
    );
}   