import { Component, Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Education extends Component{
    constructor(props){
        super(props);

        this.state = {
            error: false,
            errorMessage: {}
        }

        this.handleValidation = this.handleValidation.bind(this);
        this.educationForm = this.educationForm.bind(this);
        this.displayEducation = this.displayEducation.bind(this);
        this.renderEducation = this.renderEducation.bind(this);
    }

    handleValidation = (education, e) => {
        let isError = false;
        if (!education.title) {
          isError = true;
          this.setState({
            error: true,
            errorMessage: { titleEmpty: "Title can't be empty" }
          });
        } 
        if (!education.school) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, schoolEmpty: "School can't be empty" }
          }));
        } 
        if (!!education.startMonth && (education.startMonth < 1 || education.startMonth > 12)) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidStartMonth: "Invalid month" }
          }));
        } 
        if (!!education.endMonth && (education.endMonth < 1 || education.endMonth > 12)) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidEndtMonth: "Invalid month" }
          }));
        } 
        if (!!education.startYear && education.startYear < 1 ) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidStartYear: "Invalid year" }
          }));
        } 
        if (!!education.endYear && education.endYear < 1 ) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidEndYear: "Invalid year" }
          }));
        } 

        if(!isError){
            this.setState(prevState => ({
              error: false,
              errorMessage: {}
            }));
            this.props.changeView(education.id, false, e);
        }

    }

    educationForm(){
        const edu = this.props.education;
        return(
            <Fragment>
                <form>
                
                    <TextField 
                        variant="outlined" 
                        required
                        error={!!this.state.errorMessage.titleEmpty}
                        helperText={this.state.errorMessage.titleEmpty}
                        fullWidth 
                        label="Title" 
                        placeholder="" 
                        name="title" 
                        value={edu.title} 
                        onChange={(e) => { this.props.onChangeFunc(edu.id, e)}} 
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        required
                        error={!!this.state.errorMessage.schoolEmpty}
                        helperText={this.state.errorMessage.schoolEmpty}
                        fullWidth
                        label="School" 
                        placeholder="" 
                        name="school" 
                        value={edu.school} 
                        onChange={(e) => {this.props.onChangeFunc(edu.id, e)}} 
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidStartMonth}
                        helperText={this.state.errorMessage.invalidStartMonth}
                        label="Month" 
                        type="number" 
                        name="startMonth" 
                        min="1" 
                        max="12" 
                        placeholder="Month" 
                        value={edu.startMonth} 
                        onChange={(e) => {this.props.onChangeFunc(edu.id, e)}} 
                    />
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidStartYear}
                        helperText={this.state.errorMessage.invalidStartYear}
                        label="Year" 
                        type="number" 
                        name="startYear" 
                        placeholder="Year" 
                        value={edu.startYear} 
                        onChange={(e) => {this.props.onChangeFunc(edu.id, e)}}
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidEndtMonth}
                        helperText={this.state.errorMessage.invalidEndtMonth}
                        label="Month" 
                        type="number" 
                        name="endMonth" 
                        placeholder="Month" 
                        value={edu.endMonth} 
                        onChange={(e) => {this.props.onChangeFunc(edu.id, e)}}
                    />
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidEndYear}
                        helperText={this.state.errorMessage.invalidEndYear}
                        label="Year" 
                        type="number" 
                        name="endYear" 
                        placeholder="Year" 
                        value={edu.endYear} 
                        onChange={(e) => {this.props.onChangeFunc(edu.id, e)}}
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        label="Description" 
                        fullWidth
                        placeholder="" 
                        multiline={true}
                        name="description" 
                        value={edu.description} 
                        onChange={(e) => this.props.onChangeFunc(edu.id, e)} 
                        inputProps={{ maxLength: 666}}
                    />
                    <br/>
                    <Button variant="contained" color="primary" type="submit "value="Submit" onClick={(e) => {this.handleValidation(edu, e)}}>+</Button>
                    <Button variant="contained" color="secondary"  value="delete" onClick={(e) => this.props.deleteEducation(edu.id, e)}>-</Button>
                </form>
            </Fragment>
        )
    }

    displayEducation(){
        const edu = this.props.education;
        return(
            <Fragment>
                <h4 className="education-title">
                    {edu.title}
                </h4> 
                <div className="education-date date-info">
                    {edu.startMonth + "/" + edu.startYear + 
                    " - " + edu.endMonth + "/" + edu.endYear}
                </div>
                <br/>
                <div className="education-school">
                    {edu.school}
                </div>
                <p className="education-description">
                    {edu.description}
                </p>
                <Button variant="contained" color="primary" onClick={(e) => this.props.changeView(edu.id, true, e)}>Edit</Button>
            </Fragment>
        );
    }

    renderEducation(){
        
        if(!this.props.education.isEdit){
            return this.displayEducation();
        }
        return this.educationForm();
    }

    render(){

        return(
            <div class="education-content">
                {this.renderEducation()}
            </div>
        )
    }

}

export default Education;