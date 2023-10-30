import { ContextName } from "../../contexts/Context";
import { useContext } from "react";


export default function ContactInfo() {
    const { state, setValues } = useContext(ContextName);



    return (
        <div>
            <h1>{state.email}</h1>
            <h1>{state.telephone}</h1>
            <h1>{state.location}</h1>
            <h1>{state.linkedin}</h1>
        </div>
    )
}