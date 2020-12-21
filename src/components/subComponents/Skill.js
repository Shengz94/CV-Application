import { Component } from "react";
import Chip from '@material-ui/core/Chip';

class Skill extends Component{

    render(){
        const {skill, deleteSkill} = this.props;
        return(
            <Chip
                label={skill}
                color="primary"
                onDelete={() => deleteSkill(skill)}
                className="skill-chip"
            />
        )
    }

}

export default Skill;