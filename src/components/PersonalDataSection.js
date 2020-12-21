import { Component } from "react";

class PersonalDataSection extends Component{

    render(){
        const {firstName, lastName, email, phoneNumber} = this.props;
        const phoneCountryCode = this.props.phoneCountryCode.charAt(0) === "+" ? 
            this.props.phoneCountryCode : 
            this.props.phoneCountryCode.length > 0 ? 
                "+" + this.props.phoneCountryCode : "";

        return(
            <div className="personal-data-section">
                <h2>{firstName + " " + lastName}</h2>
                <div className="subHeader">
                    <h4>
                        <a href={"mailto:" + email}>{email}</a> 
                        <a href={"tel:" + phoneCountryCode + phoneNumber}>{phoneCountryCode + " " + phoneNumber}</a>
                    </h4>
                </div>
            </div>
        )
    }
}

export default PersonalDataSection;