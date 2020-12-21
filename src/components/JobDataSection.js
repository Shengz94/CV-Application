import { Component } from "react";
import Job from "./subComponents/Job"
import uniqid from "uniqid";
import Button from '@material-ui/core/Button';

function job(id, isEdit, title, company, startMonth, startYear, endMonth, endYear, description) {
    this.id = id !== undefined ? title : uniqid();
    this.isEdit = isEdit !== undefined ? title : true;
    this.title = title !== undefined ? title : "" ;
    this.company = company !== undefined ? company : "" ;;
    this.startMonth = startMonth !== undefined ? startMonth : "" ;
    this.startYear = startYear !== undefined ? startYear : "" ;
    this.endMonth = endMonth !== undefined ? endMonth : "" ;
    this.endYear = endYear !== undefined ? endYear : "" ;
    this.description = description !== undefined ? description : "" ;
}

class JobDataSection extends Component{
    constructor(props){
        super(props);

        this.state = {jobs : [], isEdit: false};
        this.onChangeFunc = this.onChangeFunc.bind(this);
        this.addJob = this.addJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
        this.changeView = this.changeView.bind(this);

    }

    onChangeFunc(id, e){ //Modify data in real time
        const {name, value} = e.target;
        this.setState((state) => {
            const tempJobs = state.jobs.map(job => {
                if( job.id === id){
                    return Object.assign({},job, {[name]: value})                     
                }
                return job;
            });
            return {jobs: tempJobs}  
        });
    }

    addJob(){
        this.setState((state) => {
            console.log("adding")
            const newJob = new job();
            const temportalJobs = state.jobs.concat(newJob);
            return {jobs: temportalJobs};
        });
    }

    deleteJob(id){
        this.setState((state) => {
            const temportalJobs = state.jobs.filter(job => job.id !== id);
            return {jobs: temportalJobs};
        });
    }

    changeView(id, isEdit, e){ //Change from edit Form to display data or viceversa
        this.setState((state) => {
            const temportalJobs = state.jobs.map(job => {
                if( job.id === id){
                    return Object.assign({},job, {isEdit: isEdit})                     
                }
                return job;
            });
            return {jobs: temportalJobs}  
        });

        e.preventDefault();
    }

    render(){

        return(
            <div className="job-section">
                <h3>Job Background</h3>
                {this.state.jobs.map(item => {
                    return <Job key={item.id} job={item} onChangeFunc={this.onChangeFunc} changeView={this.changeView} deleteJob={this.deleteJob}  isEdit={item.isEdit} />
                })}
                <Button variant="contained"value="add" onClick={this.addJob}>+</Button>
                
            </div>
        )
    }
}

export default JobDataSection;