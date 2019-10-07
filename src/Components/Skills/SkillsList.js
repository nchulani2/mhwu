import React, { Component } from 'react';
import 'src/Style/SkillsList.css';
import { withRouter, Link } from 'react-router-dom';

class SkillsList extends Component {
  handleSkills = skill => {
   
    return (
      <Link to={`/skills/${skill.id}`} key={skill.id} className="filterSkills">
        <div className="skillComp">
          <img src={skill.icon} alt={skill.description}></img>
          <div className="skillDeets">{skill.name}</div>
        </div>
      </Link>
    );
  };
  render() {
    return (
      <div className="skillGrid">
        {this.props.skills.map(skill => this.handleSkills(skill))}
      </div>
    );
  }
}

export default withRouter(SkillsList);
