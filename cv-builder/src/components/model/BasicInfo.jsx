import React, { useContext } from "react";
import { ContextName } from "../../contexts/Context";




export default function BasicInfo() {
    const { state, setValues } = useContext(ContextName);





    return (
        <div>
            <h1>{state.name}</h1>
            <h2>{state.lastName}</h2>
            <p>{state.profission}</p>
            <p>{state.bio}</p>
        </div>
    );
}   