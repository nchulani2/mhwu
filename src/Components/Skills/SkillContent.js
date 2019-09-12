import React from 'react';
import 'src/Style/SkillContent.css';
import { withRouter } from 'react-router-dom';

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

const SkillContent = props => {
  const { skill } = props;
  const skillie = skill[0];

  return (
    <div className="skillContent ui container animated fadeIn faster">
      <div className="skillTitle">{skillie.name}</div>
      <div className="skillDesc">{skillie.description}</div>
      <div className="skillContentGrid">
        {skillie.ranks.length !== 0
          ? skillie.ranks.map(rank => (
              <div key={rank.id} className="rankBox">
                <div className="rankLevel">
                  {rank.skillName} {romanChars(rank.level)}
                </div>

                <div className="modifierDesc">{rank.description}</div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default withRouter(SkillContent);
