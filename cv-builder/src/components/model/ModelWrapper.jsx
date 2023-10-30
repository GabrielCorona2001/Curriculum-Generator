import "../../styles/modelWrapper.css";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContacInfo";

export default function ModelWrapper() {
   return (
    <div id="wrapper-model">
        <BasicInfo></BasicInfo>
        <ContactInfo></ContactInfo>
    </div>
   )
}