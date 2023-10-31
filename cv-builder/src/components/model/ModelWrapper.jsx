import "../../styles/model/modelWrapper.css";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContacInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import TechnicalSkillsInfo from "./TechnicalSkillsInfo";

export default function ModelWrapper() {
    return (
        <div id="wrapper-model">
            <BasicInfo></BasicInfo>
            <ContactInfo></ContactInfo>
            <EducationInfo></EducationInfo>
            <TechnicalSkillsInfo></TechnicalSkillsInfo>
            <ExperienceInfo></ExperienceInfo>
        </div>
    )
}