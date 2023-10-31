import { ContextName } from "../../contexts/Context";
import { useContext } from "react";
import "../../styles//model/infosModel.css";


export default function ContactInfo() {
    const { state, setValues } = useContext(ContextName);



    return (
        <div className="wrapper-contact">
            <div className="contact-info-item">
                <span className="material-symbols-outlined icons">
                    mail
                </span>
                <p>{state.email}</p>

            </div>
            <div className="contact-info-item">
                <span className="material-symbols-outlined icons">
                    smartphone
                </span>
                <p>{state.telephone}</p>

            </div>
            <div className="contact-info-item">
                <span className="material-symbols-outlined icons">
                    location_on
                </span>
                <p>{state.location}</p>

            </div>
            <div className="contact-info-item">
                <span className="material-symbols-outlined icons">
                    link
                </span>
                <p>{state.linkedin}</p>
            </div>
        </div>
    )
}