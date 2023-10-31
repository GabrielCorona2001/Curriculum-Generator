import "../../styles//model/infosModel.css";
import { ContextName } from "../../contexts/Context";
import { useContext } from "react";



export default function ContactInfo() {

    const { state, setValues } = useContext(ContextName);


    const handleTelephoneChange = (event) => {
        setValues({ ...state, contactInfo: { ...state.contactInfo, telephone: event.target.value } });
    }

    const handleLocationChange = (event) => {
        setValues({ ...state, contactInfo: { ...state.contactInfo, location: event.target.value } });
    }

    const handleLinkedin = (event) => {
        setValues({ ...state, contactInfo: { ...state.contactInfo, linkedin: event.target.value } });
    }

    const handleEmailChange = (event) => {
        setValues({ ...state, contactInfo: { ...state.contactInfo, email: event.target.value } });
    }

    return (

        <div className="buider-info-wrapper">
            <h2 className="title-builder">Informações de contato</h2>

            <form className="form-info">
                <label>Email:</label>
                <input type="text" onChange={handleEmailChange} className="input-form" />
                <label>Número de telefone:</label>
                <input type="text" onChange={handleTelephoneChange} className="input-form" />
                <label>Localização:</label>
                <input type="text" onChange={handleLocationChange} className="input-form" />
                <label>Linkedin</label>
                <input type="text" onChange={handleLinkedin} className="input-form"></input>
            </form>

        </div>
    )
}