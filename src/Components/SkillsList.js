import React from 'react';
import '../Style/SkillsList.css';

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
        <tbody className="DONOTFILTER">
          <tr>
            <th className="mainHeader">Icon</th>
            <th className="mainHeader">Skill</th>
            <th className="mainHeader">Rank</th>
          </tr>
        </tbody>

        {props.skills !== 0
          ? props.skills.map(skill => (
              <tbody key={skill.id} className="FILTER">
                <tr>
                  <td className="icon-td" rowSpan="0">
                    <img src={skill.icon} alt={skill.description}></img>
                  </td>
                  <td className="skill-td" rowSpan="0">
                    <span className="FILTER-CHECKER">{skill.name}</span>
                    <br></br>
                    <span className="skill-desc">{skill.description}</span>
                  </td>
                </tr>
                {skill.ranks !== 0
                  ? skill.ranks.map(rank => (
                      <tr key={rank.id}>
                        <td className="reg-td">
                          <span
                            style={{ color: '#cfee1d', letterSpacing: '2px' }}>
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

        {/* <tr>
            <td>icon here</td>
          </tr>
          <tr>
            <td>icon here</td>
          </tr> */}
      </table>
    </div>
  );
};

export default SkillsList;
