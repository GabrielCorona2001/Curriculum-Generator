import { ContextName } from "../../contexts/Context";
import { useContext } from "react";
import "../../styles/builder/infosBuilder.css";




export default function BasicInfo() {
    const { state, setValues } = useContext(ContextName);

    const handleNameChange = (event) => {
        setValues({ ...state, name: event.target.value })
    }

    const handleLastNameChange = (event) => {
        setValues({ ...state, lastName: event.target.value })

    }

    const handleProfissionChange = (event) => {
        setValues({ ...state, profission: event.target.value })
    }

    const handleBioChange = (event) => {
        setValues({ ...state, bio: event.target.value })
    }


    return (
        <div className="buider-info-wrapper">

            <h2 className="title-builder">Informações Básicas</h2>
            <form className="form-info">
                <span>Primeiro Nome:</span>
                <input type="text" onChange={handleNameChange} value={state.name} className="input-form" />
                <span>Sobrenome:</span>
                <input type="text" onChange={handleLastNameChange} value={state.lastName} className="input-form" />
                <span>Profissão:</span>
                <input type="text" value={state.profission} onChange={handleProfissionChange} className="input-form" />
                <span>Fale sobre si:</span>
                <textarea type="text" value={state.bio} onChange={handleBioChange} className="input-form input-bio" />
            </form>
        </div>
    )

}