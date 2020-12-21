import { Component } from "react";
import Education from "./subComponents/Education"
import uniqid from "uniqid";
import Button from '@material-ui/core/Button';

function education(id, isEdit, title, school, startMonth, startYear, endMonth, endYear, description) {
    this.id = id !== undefined ? title : uniqid();
    this.isEdit = isEdit !== undefined ? title : true;
    this.title = title !== undefined ? title : "" ;
    this.school = school !== undefined ? school : "" ;;
    this.startMonth = startMonth !== undefined ? startMonth : "" ;
    this.startYear = startYear !== undefined ? startYear : "" ;
    this.endMonth = endMonth !== undefined ? endMonth : "" ;
    this.endYear = endYear !== undefined ? endYear : "" ;
    this.description = description !== undefined ? description : "" ;
}

class EducationDataSection extends Component{
    constructor(props){
        super(props);

        this.state = {educations : [], isEdit: false};
        this.onChangeFunc = this.onChangeFunc.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.changeView = this.changeView.bind(this);

    }

    onChangeFunc(id, e){ //Modify data in real time
        const {name, value} = e.target;
        this.setState((state) => {
            const tempEducations = state.educations.map(education => {
                if( education.id === id){
                    return Object.assign({},education, {[name]: value})                     
                }
                return education;
            });
            return {educations: tempEducations}  
        });
    }

    addEducation(){
        this.setState((state) => {
            console.log("adding")
            const newEdu = new education();
            const temporalEducations = state.educations.concat(newEdu);
            return {educations: temporalEducations};
        });
    }

    deleteEducation(id){
        this.setState((state) => {
            const temporalEducations = state.educations.filter(education => education.id !== id);
            return {educations: temporalEducations};
        });
    }

    changeView(id, isEdit, e){ //Change from edit Form to display data or viceversa
        this.setState((state) => {
            const tempEducations = state.educations.map(education => {
                if( education.id === id){
                    return Object.assign({},education, {isEdit: isEdit})                     
                }
                return education;
            });
            return {educations: tempEducations}  
        });

        e.preventDefault();
    }

    render(){

        return(
            <div className="education-section">
                <h3>Education Background</h3>
                {this.state.educations.map(item => {
                    return <Education key={item.id} education={item} onChangeFunc={this.onChangeFunc} changeView={this.changeView} deleteEducation={this.deleteEducation}  isEdit={item.isEdit} />
                })}
                <Button variant="contained" value="add" onClick={this.addEducation}>+</Button>
                
            </div>
        )
    }
}

export default EducationDataSection;