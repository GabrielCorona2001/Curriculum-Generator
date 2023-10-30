import "../../styles/infos.css";
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

        <div>
            <h2>Informações de contato</h2>

            <form className="form-info">
                <span>Email:</span>
                <input type="text" onChange={handleEmailChange} value={state.email} />
                <span>Número de telefone:</span>
                <input type="text" onChange={handleTelephoneChange} value={state.telefone} />
                <span>Localização:</span>
                <input type="text" onChange={handleLocationChange} value={state.telephone} />
                <span>Linkedin</span>
                <input type="text" onChange={handleLinkedin} value={state.linkedin}></input>
            </form>

        </div>
    )
}