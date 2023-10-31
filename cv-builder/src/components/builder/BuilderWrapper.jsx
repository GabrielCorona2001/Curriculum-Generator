import BasicInfo from "./BasicInfoBuilder";
import ContactInfo from "./ContactInfoBuilder";
import "../../styles/builder/builderWrapper.css";
import BuilderHeader from "./BuilderHeader";
import EducationInfo from "./EducationInfoBuilder.jsx";
import TechnicalSkillsInfoBuilder from "./TechnicalSkillsInfoBuilder";
import ExperienceInfoBuilder from "./ExperienceInfoBuilder";

export default function BuilderWrapper() {

    return (
        <div id="wrapper-builder">
            <BuilderHeader></BuilderHeader>
            <BasicInfo></BasicInfo>
            <ContactInfo></ContactInfo>
            <EducationInfo></EducationInfo>
            <TechnicalSkillsInfoBuilder></TechnicalSkillsInfoBuilder>
            <ExperienceInfoBuilder></ExperienceInfoBuilder>
        </div>

    )

}