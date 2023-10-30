import React, { createContext, useState } from 'react';


const InitialState = {
    name: 'Seu Nome',
    lastName: 'Seu Sobrenome',
    profission: "Sua profissão",
    bio: "Fale sobre si mesmo"
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