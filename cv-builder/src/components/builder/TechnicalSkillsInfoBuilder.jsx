import { ContextName } from "../../contexts/Context";
import { useContext, useState } from "react";

export default function TechnicalSkillsInfoBuilder() {
    const { state, setValues } = useContext(ContextName);
    const [newSkill, setNewSkill] = useState("");

    const handleChangeSkill = (event) => {
        event.preventDefault();
        if (newSkill.trim() !== '') {
            setValues({
                ...state,
                technicalSkills: {
                    ...state.technicalSkills,
                    items: [...state.technicalSkills.items, newSkill]
                }
            });
            setNewSkill('');
        }
    }

    const handleExcludeSkill = (index) => {
        setValues({
            ...state,
            technicalSkills: {
                ...state.technicalSkills,
                items: state.technicalSkills.items.filter((_, itemIndex) => itemIndex !== index)
            }
        });
    };

    return (
        <div className="buider-info-wrapper">
            <h2 className="title-builder">Habilidades Técnicas</h2>
            <form className="form-info" onSubmit={handleChangeSkill}>
                <span>Mostre suas habilidades mais impressionantes para se destacar no mercado de trabalho</span>
                <label>Adicione um item:</label>
                <input type="text" className="input-form" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                <input type="submit" className="submit-skill" value="Adicionar" />

                {state.technicalSkills.items.length > 0 && (
                    <div>
                        <label>Exclua um item:</label>
                        <ul className="list-exclude-skill">
                            {state.technicalSkills.items.map((item, index) => (
                                <div className="wrapper-exclude-skill" key={index}>
                                    <li>{item}</li>
                                    <button onClick={() => handleExcludeSkill(index)} className="skill-exclude-btn">Excluir</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    )
}
