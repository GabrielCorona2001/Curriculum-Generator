import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import "../../styles/builderWrapper.css";

export default function BuilderWrapper() {

    return (
        <div id="wrapper-builder">
            <h1>CV BUILDER</h1>
            <p>Crie seu currículo de maneira dinâmica e fácil.</p>
            <BasicInfo></BasicInfo>
            <ContactInfo></ContactInfo>
        </div>

    )

}