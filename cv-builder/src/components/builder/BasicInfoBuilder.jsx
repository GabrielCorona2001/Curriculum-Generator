import { ContextName } from "../../contexts/Context";
import { useContext } from "react";
import "../../styles/builder/infosBuilder.css";




export default function BasicInfo() {
    const { state, setValues } = useContext(ContextName);

    const handleNameChange = (event) => {
        setValues({ ...state, basicInfo: { ...state.basicInfo, name: event.target.value } });
    }

    const handleLastNameChange = (event) => {
        setValues({
            ...state,
            basicInfo: {
                ...state.basicInfo,
                lastName: event.target.value
            }
        });
    }

    const handleProfissionChange = (event) => {
        setValues({ ...state, basicInfo: { ...state.basicInfo, profission: event.target.value } });
    }

    const handleBioChange = (event) => {
        setValues({ ...state, basicInfo: { ...state.basicInfo, bio: event.target.value } });
    }


    return (
        <div className="buider-info-wrapper">

            <h2 className="title-builder">Informações Básicas</h2>
            <form className="form-info">
                <label>Primeiro Nome:</label>
                <input type="text" onChange={handleNameChange} className="input-form" />
                <label>Sobrenome:</label>
                <input type="text" onChange={handleLastNameChange} className="input-form" />
                <label>Profissão:</label>
                <input type="text"  onChange={handleProfissionChange} className="input-form" />
                <label>Fale sobre si:</label>
                <textarea type="text" onChange={handleBioChange} className="input-form input-bio" />
            </form>
        </div>
    )

}