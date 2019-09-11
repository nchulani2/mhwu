import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'src/Style/SkillsList.css';

const romanChars = rankNum => {
  switch (rankNum) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    default:
      return;
  }
};

const SkillsList = props => {
  return (
    <div className="skillsList ui container animated fadeIn faster">
      <table style={{ width: '100%' }}>
        <thead className="DONOTFILTER">
          <tr>
            <th className="mainHeader">Icon</th>
            <th className="mainHeader">Skill</th>
            <th className="mainHeader">Rank</th>
          </tr>
        </thead>

        {props.skills !== 0
          ? props.skills.map(skill => (
              <tbody className="FILTER" key={skill.id}>
                <tr>
                  <td
                    className="icon-td"
                    rowSpan={
                      skill.ranks.length !== 1
                        ? skill.ranks.length + 1
                        : skill.ranks.length + 2
                    }>
                    <Link to={`/skills/${skill.id}`}>
                      <img src={skill.icon} alt={skill.description}></img>
                    </Link>
                  </td>
                  <td
                    className="skill-td"
                    rowSpan={
                      skill.ranks.length !== 1
                        ? skill.ranks.length + 1
                        : skill.ranks.length + 2
                    }>
                    <Link to={`/skills/${skill.id}`}>
                      <span className="FILTER-CHECKER">{skill.name}</span>
                    </Link>
                    <br></br>
                    <span className="skill-desc">{skill.description}</span>
                  </td>
                </tr>
                {skill.ranks !== 0
                  ? skill.ranks.map(rank => (
                      <tr key={rank.id}>
                        <td className="reg-td">
                          <span
                            style={{
                              color: '#cfee1d',
                              letterSpacing: '2px'
                            }}>
                            {romanChars(rank.level)}
                          </span>{' '}
                          ― {rank.description}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default withRouter(SkillsList);
