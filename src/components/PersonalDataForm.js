import { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PersonalDataForm extends Component{

    render(){
        return (
            <div>
                <form onSubmit={this.props.onSubmitFunc}>
                    <TextField 
                        variant="outlined" 
                        required
                        label="First Name" 
                        placeholder="" 
                        name="firstName" 
                        value={this.props.firstName} 
                        onChange={this.props.onChangeFunc} 
                    />
                    <TextField 
                        variant="outlined" 
                        required
                        label="Last Name" 
                        placeholder="" 
                        name="lastName" 
                        value={this.props.lastName} 
                        onChange={this.props.onChangeFunc} 
                    />
                    <br/>
                    <TextField 
                        variant="outlined"  
                        type="email"
                        label="Email" 
                        placeholder="" 
                        name="email" 
                        value={this.props.email} 
                        onChange={this.props.onChangeFunc} 
                    />
                    <br/>
                    <TextField 
                        variant="outlined"
                        label="Phone country code" 
                        placeholder="+34" 
                        name="phoneCountryCode" 
                        value={this.props.phoneCountryCode} 
                        onChange={this.props.onChangeFunc} 
                    />
                    <TextField 
                        variant="outlined"                
                        label="Phone number" 
                        placeholder="" 
                        name="phoneNumber" 
                        value={this.props.phoneNumber} 
                        onChange={this.props.onChangeFunc} 
                    />
                    <br/>
                    <Button variant="contained" color="primary" type="submit "value="Submit">Submit</Button>                    
                </form>

            </div>
        );
    }
}

export default PersonalDataForm;