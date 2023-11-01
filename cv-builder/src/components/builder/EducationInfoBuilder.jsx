import { useState } from "react"
import { ContextName } from "../../contexts/Context";
import { useContext } from "react";
import BuilderToggler from "./BuilderToggler";


export default function EducationInfo() {
    const { state, setValues } = useContext(ContextName);

    const [formDisplay, setformDisplay] = useState({ display: "block" })



    const [checked, setChecked] = useState(false)
    const handleToggle = () => {
        if (checked) {
            setformDisplay({ display: "block" })
            setValues({
                ...state,
                studiesInfo: { ...state.studiesInfo, conclusionYear: "" }
            });
        } else {
            setformDisplay({ display: "none" })

            setValues({
                ...state,
                studiesInfo: { ...state.studiesInfo, conclusionYear: "até o momento" }

            });
        }
        setChecked(!checked);
    }

    const handleInstitutionChange = (event) => {
        setValues({ ...state, studiesInfo: { ...state.studiesInfo, institution: event.target.value } })
    }

    const handleCourseChange = (event) => {
        setValues({ ...state, studiesInfo: { ...state.studiesInfo, course: event.target.value } })
    }

    const handleCourseStartChange = (event) => {
        setValues({ ...state, studiesInfo: { ...state.studiesInfo, startingYear: event.target.value } })
    }

    const handleCourseConclusionChange = (event) => {
        setValues({ ...state, studiesInfo: { ...state.studiesInfo, conclusionYear: event.target.value } })

    }




    return (
        <div className="buider-info-wrapper">

            <h2 className="title-builder">Formação Acadêmica</h2>
            <form className="form-info">

                <label>Instituição:</label>
                <input className="input-form" onChange={handleInstitutionChange}></input>
                <label>Curso:</label>
                <input className="input-form" onChange={handleCourseChange}></input>
                <label>Ano de Início:</label>
                <input className="input-form" type="month" onChange={handleCourseStartChange}></input>
                <label
                    style={formDisplay}
                >Ano de conclusão:</label>
                <input className="input-form" type="month"
                    style={formDisplay}
                    onChange={handleCourseConclusionChange}
                ></input>
                <label>Em Andamento:</label>
                <BuilderToggler onChange={handleToggle} toggle={"toggleEducation"} checked={checked}></BuilderToggler>



            </form>
        </div>
    )
}