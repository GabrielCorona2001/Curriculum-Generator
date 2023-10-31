import "../../styles//model/infosModel.css";
import { ContextName } from "../../contexts/Context";
import { useContext } from "react";



export default function ContactInfo() {

    const { state, setValues } = useContext(ContextName);

    const handleEmailChange = (event) => {
        setValues({ ...state, email: event.target.value })
    }

    const handleTelephoneChange = (event) => {
        setValues({ ...state, telephone: event.target.value })
    }

    const handleLocationChange = (event) => {
        setValues({ ...state, location: event.target.value })
    }

    const handleLinkedin = (event) => {
        setValues({ ...state, linkedin: event.target.value })
    }

    return (

        <div className="buider-info-wrapper">
            <h2 className="title-builder">Informações de contato</h2>

            <form className="form-info">
                <span>Email:</span>
                <input type="text" onChange={handleEmailChange} value={state.email}  className="input-form"/>
                <span>Número de telefone:</span>
                <input type="text" onChange={handleTelephoneChange} value={state.telephone} className="input-form" />
                <span>Localização:</span>
                <input type="text" onChange={handleLocationChange} value={state.location}  className="input-form"/>
                <span>Linkedin</span>
                <input type="text" onChange={handleLinkedin} value={state.linkedin} className="input-form"></input>
            </form>

        </div>
    )
}