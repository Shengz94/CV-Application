import { Component, Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Job extends Component{
    constructor(props){
        super(props);

        this.state = {
            error: false,
            errorMessage: {}
        }

        this.jobForm = this.jobForm.bind(this);
        this.displayJob = this.displayJob.bind(this);
        this.renderJob = this.renderJob.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }


    handleValidation = (job, e) => {
        let isError = false;
        if (!job.title) {
          isError = true;
          this.setState({
            error: true,
            errorMessage: { titleEmpty: "Title can't be empty" }
          });
        } 
        if (!job.company) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, schoolEmpty: "School can't be empty" }
          }));
        } 
        if (!!job.startMonth && (job.startMonth < 1 || job.startMonth > 12)) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidStartMonth: "Invalid month" }
          }));
        } 
        if (!!job.endMonth && (job.endMonth < 1 || job.endMonth > 12)) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidEndtMonth: "Invalid month" }
          }));
        } 
        if (!!job.startYear && job.startYear < 1 ) {
          isError = true;
          this.setState(prev => ({
            ...prev,
            error: true,
            errorMessage: { ...prev.errorMessage, invalidStartYear: "Invalid year" }
          }));
        } 
        if (!!job.endYear && job.endYear < 1 ) {
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
            this.props.changeView(job.id, false, e);
        }

    }

    jobForm(){
        const job = this.props.job;
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
                        value={job.title} 
                        onChange={(e) => { this.props.onChangeFunc(job.id, e)}} 
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        required
                        error={!!this.state.errorMessage.schoolEmpty}
                        helperText={this.state.errorMessage.schoolEmpty}
                        fullWidth
                        label="company" 
                        placeholder="" 
                        name="company" 
                        value={job.school} 
                        onChange={(e) => {this.props.onChangeFunc(job.id, e)}} 
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
                        value={job.startMonth} 
                        onChange={(e) => {this.props.onChangeFunc(job.id, e)}} 
                    />
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidStartYear}
                        helperText={this.state.errorMessage.invalidStartYear}
                        label="Year" 
                        type="number" 
                        name="startYear" 
                        placeholder="Year" 
                        value={job.startYear} 
                        onChange={(e) => {this.props.onChangeFunc(job.id, e)}}
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
                        value={job.endMonth} 
                        onChange={(e) => {this.props.onChangeFunc(job.id, e)}}
                    />
                    <TextField 
                        variant="outlined" 
                        error={!!this.state.errorMessage.invalidEndYear}
                        helperText={this.state.errorMessage.invalidEndYear}
                        label="Year" 
                        type="number" 
                        name="endYear" 
                        placeholder="Year" 
                        value={job.endYear} 
                        onChange={(e) => {this.props.onChangeFunc(job.id, e)}}
                    />
                    <br/>
                    <TextField 
                        variant="outlined" 
                        label="Description" 
                        fullWidth
                        placeholder="" 
                        multiline={true}
                        name="description" 
                        value={job.description} 
                        onChange={(e) => this.props.onChangeFunc(job.id, e)} 
                        inputProps={{ maxLength: 666}}
                    />
                    <br/>
                    <Button variant="contained" color="primary" type="submit "value="Submit" onClick={(e) => {this.handleValidation(job, e)}}>+</Button>
                    <Button variant="contained" color="secondary"  value="delete" onClick={(e) => this.props.deleteJob(job.id, e)}>-</Button>
                </form>
            </Fragment>
        )
    }

    displayJob(){
        const job = this.props.job;
        return(
            <Fragment>
                <h4 className="job-title">
                    {job.title}
                </h4> 
                <div className="job-date date-info">
                    {job.startMonth + "/" + job.startYear + 
                    " - " + job.endMonth + "/" + job.endYear}
                </div>
                <br/>
                <div className="job-company">
                    {job.company}
                </div>
                <p className="job-description">
                    {job.description}
                </p>
                <Button variant="contained" color="primary" onClick={(e) => this.props.changeView(job.id, true, e)}>Edit</Button>
            </Fragment>
        );
    }


    renderJob(){
        if(!this.props.job.isEdit){
            return this.displayJob();
        }
        return this.jobForm();
    }

    render(){

        return(
            <div class="job-content">
                {this.renderJob()}
            </div>
        )
    }

}

export default Job;