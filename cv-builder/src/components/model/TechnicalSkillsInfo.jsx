import React, { useContext } from 'react';
import { ContextName } from "../../contexts/Context";
import "../../styles/builder/infosBuilder.css";

export default function TechnicalSkillsInfo() {

    const { state } = useContext(ContextName);


    return (
        <div>
            <h1 className="info-title title-skills">Habilidades Técnicas</h1>
            <ul>
                {state.technicalSkills.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}