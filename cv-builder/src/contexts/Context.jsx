import React, { createContext, useState } from 'react';


const InitialState = {
    basicInfo: {
        name: 'Nome',
        lastName: 'Sobrenome',
        profission: "Sua profissão",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis.",
    }, contactInfo: {
        email: "Seu e-mail",
        telephone: "Seu número de telefone",
        location: "Sua localização",
        linkedin: "Seu linkedin"
    }, studiesInfo: {
        institution: "Sua instituição",
        course: "Seu curso",
        startingYear:
            new Date().getFullYear().toString()
            + " - " + new Date().getMonth().toString(),
        conclusionYear:
            ""
    }, technicalSkills: {
        items: []
    }

}

const ContextName = createContext();

const ContextNameProvider = ({ children }) => {
    const [state, setState] = useState(InitialState);

    const setValues = (newValues) => {
        setState((prevState) => ({
            ...prevState,
            ...newValues
        }))
    }

    return (
        <ContextName.Provider value={{ state, setValues }}>
            {children}
        </ContextName.Provider>
    )
}

export { ContextName, ContextNameProvider }