import { Component, Fragment } from "react";
import EducationDataSection from "./EducationDataSection";
import PersonalDataSection from "./PersonalDataSection"
import JobDataSection from "./JobDataSection"
import SkillDataSection from "./SkillDataSection";

class Curriculum extends Component{


    render(){
        return (
            <Fragment>
                <PersonalDataSection firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} phoneCountryCode={this.props.phoneCountryCode} phoneNumber={this.props.phoneNumber}/>
                <EducationDataSection/>
                <JobDataSection/>
                <SkillDataSection/>
            </Fragment>
        )
    }
}

export default Curriculum;