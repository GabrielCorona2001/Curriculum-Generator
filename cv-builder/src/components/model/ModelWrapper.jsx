import "../../styles/model/modelWrapper.css";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContacInfo";
import EducationInfo from "./EducationInfo";

export default function ModelWrapper() {
    return (
        <div id="wrapper-model">
            <BasicInfo></BasicInfo>
            <ContactInfo></ContactInfo>
            <EducationInfo></EducationInfo>
        </div>
    )
}