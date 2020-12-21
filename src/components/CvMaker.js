import { Component } from "react";
import PersonalDataForm from "./PersonalDataForm"
import Curriculum from "./Curriculum"

class CvMaker extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneCountryCode: "",
            phoneNumber: "",
            setPersonalInfo: true
        }
        
        /* Personal Data Form Function */
        this.personalInfoOnChange = this.personalInfoOnChange.bind(this);
        this.submitPersonalInfo = this.submitPersonalInfo.bind(this);

        /* Curriculum Function */


        /* General Functions */
        this.displayForm = this.displayForm.bind(this);
    }
    
    /*******************************/
    /* Personal Data Form Function */
    /*******************************/

    personalInfoOnChange(e){
        const formName = e.target.name;
        let value = e.target.value;
        this.setState({[formName]: value});
    }

    submitPersonalInfo(){
        // TODO validate form
        this.setState({setPersonalInfo:false});
    }

    /*******************************/
    /*      General Function       */
    /*******************************/

    displayForm(){
        if(this.state.setPersonalInfo){
            return <PersonalDataForm onChangeFunc={this.personalInfoOnChange} onSubmitFunc={this.submitPersonalInfo} />
        }
        return <Curriculum firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} phoneCountryCode={this.state.phoneCountryCode} phoneNumber={this.state.phoneNumber} />
    }
 
    
    render(){
        return(
            <div className="cv-maker">
                {this.displayForm()}
            </div>
        )
    }
}

export default CvMaker;