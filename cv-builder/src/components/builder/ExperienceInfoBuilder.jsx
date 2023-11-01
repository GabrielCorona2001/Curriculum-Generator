import { useState } from "react";
import BuilderToggler from "./BuilderToggler";

export default function () {

    const [checked, setChecked] = useState(false)



    const [formDisplay, setFormDisplay] = useState({ display: "block" })
    const handleToggle = () => {

        console.log("aaa")
        if (checked) {
            setFormDisplay({ display: "block" })
        } else {
            setFormDisplay({ display: "none" })

        }

        setChecked(!checked);

    }


    return (
        <div className="buider-info-wrapper">
            <h2 className="title-builder">Experiência Profissional</h2>
            <form className="form-info">
                <label>Posição</label>
                <input className="input-form"></input>
                <label>Ano de início</label>
                <input type="month" className="input-form" />
                <label>Empresa Atual:</label>
                <BuilderToggler onChange={handleToggle} toggle={"toggleExperience"} checked={checked}
                ></BuilderToggler>
                <label
                    style={formDisplay}
                >Ano de encerramento</label>
                <input type="month"
                    className="input-form"
                    style={formDisplay}></input>
                <label>Responsabilidades</label>
                <input className="input-form"></input>
                <input type="submit" className="submit-skill"></input>
                <ul className="list-exclude-skill">

                    <li>aaa</li>
                </ul>
            </form>
        </div>
    )
}