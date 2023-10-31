import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import "../../styles/builder/builderWrapper.css";
import BuilderHeader from "./BuilderHeader";

export default function BuilderWrapper() {

    return (
        <div id="wrapper-builder">
            <BuilderHeader></BuilderHeader>
            <BasicInfo></BasicInfo>
            <ContactInfo></ContactInfo>
        </div>

    )

}