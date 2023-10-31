import { ContextName } from "../../contexts/Context";
import { useContext } from "react";


export default function EducationInfo() {

    const { state, setValues } = useContext(ContextName);

    return (
        <div className="">
            <h2 className="info-title title-skills">Formação acadêmica</h2>
            <div className="wrapper-studies">
                <div className="studies-top">
                    <h2>{state.studiesInfo.institution}</h2>

                    <span>{state.studiesInfo.startingYear} / {state.studiesInfo.conclusionYear}</span>
                </div>
                <p>{state.studiesInfo.course}</p>
            </div>

        </div>
    )
}