import { Component } from "react";
import Skill from "./subComponents/Skill"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SkillDataSection extends Component{
    constructor(props){
        super(props);

        this.state = {skills : [], skill : "", isAdd : false, showPaper : false};
        this.onChangeFunc = this.onChangeFunc.bind(this);
        this.addSkillForm = this.addSkillForm.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        this.skillExist = this.skillExist.bind(this);
        this.renderSkillForm = this.renderSkillForm.bind(this);
    }

    onChangeFunc(e){
        const value = e.target.value;
        this.setState({skill : value});
    }

    addSkillForm(){
        this.setState({isAdd : true});
    }

    addSkill(e){
        const skill = this.state.skill;
        
        this.setState((state) => {
            if(!this.skillExist(skill) && skill.length > 0){
                const temportalSkills = state.skills.concat(skill);
                return {skills : temportalSkills, skill : "", isAdd : false};
            }
            return {skill : "", isAdd : false};
        });

    }

    deleteSkill(skillToDelete, e){
        this.setState((state) => {
            const temporalSkills = state.skills.filter(skill => skill !== skillToDelete);
            return {skills: temporalSkills};
        });
    }

    skillExist(skill){
        return this.state.skills.some(item => item === skill)
    }


    renderSkillForm(){
        if(this.state.isAdd){
            return (
                <form onSubmit={this.addSkill}>
                    <TextField 
                        variant="outlined"  
                        label="Skill" 
                        name="skill" 
                        value={this.state.skill} 
                        onChange={this.onChangeFunc} 
                    />
                    <Button variant="contained" type="submit" value="Add">+</Button>
                </form>
            );
        }
        return (
            <Button variant="contained" value="Add" onClick={this.addSkillForm}>+</Button>
        )
    }

    render(){

        return(
            <div className="skill-section">
                <h3>Skills</h3>
                {this.renderSkillForm()}
                <Paper className="skills-paper" elevation={3}>
                    {this.state.skills.map(skill => {
                        return <Skill key={skill} skill={skill} deleteSkill={this.deleteSkill} />
                    })}
                </Paper>
                
            </div>
        )
    }
}

export default SkillDataSection;