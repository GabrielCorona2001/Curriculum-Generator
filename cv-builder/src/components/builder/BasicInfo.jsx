import "../../styles/infos.css";
import { ContextName } from "../../contexts/Context";
import { useContext } from "react";




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
        <div className="info-block">

            <h2>Informações Básicas</h2>
            <form className="form-info">
                <span>Primeiro Nome:</span>
                <input type="text" onChange={handleNameChange} value={state.name} />
                <span>Sobrenome:</span>
                <input type="text" onChange={handleLastNameChange} value={state.lastName} />
                <span>Profissão:</span>
                <input type="text" value={state.profission} onChange={handleProfissionChange} />
                <span>Fale sobre si:</span>
                <input type="text" value={state.bio} onChange={handleBioChange} />
            </form>
        </div>
    )

}