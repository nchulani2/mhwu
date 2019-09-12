import React from 'react';
import 'src/Style/CharmContent.css';
import { withRouter, Link } from 'react-router-dom';

const romanChars = rankNum => {
  switch (rankNum) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    default:
      return;
  }
};

const CharmContent = props => {
  const { charm } = props;
  const charmie = charm[0];
  // console.log(charmie);

  return (
    <div className="charmContent ui container animated fadeIn faster">
      <div className="charmTitle">{charmie.name}</div>
      {charmie.ranks.length !== 0
        ? charmie.ranks.map(rank => (
            <div className="rankEle" key={rank.name}>
              <div className="rankBox">
                <div className="rankLevel">Level {romanChars(rank.level)}</div>
                {rank.skills.length !== 0
                  ? rank.skills.map(skill => (
                      <div key={skill.id} className="skillBlock">
                        <Link
                          to={`/skills/${skill.skill}`}
                          className="skillLink">
                          {skill.skillName}
                        </Link>

                        <div className="skillDesc">{skill.description}</div>
                      </div>
                    ))
                  : null}
                <div className="craftingFlex">
                  <div id="itemHead">
                    <span className="craftItemHead">Item</span>
                    {rank.crafting.materials.length !== 0
                      ? rank.crafting.materials.map(material => (
                          <div key={material.item.id} className="itemEle">
                            <Link to="" className="materialLink">
                              {material.item.name}
                            </Link>
                          </div>
                        ))
                      : null}
                  </div>
                  <div>
                    <span className="craftItemHead">Quantity</span>
                    {rank.crafting.materials.length !== 0
                      ? rank.crafting.materials.map(material => (
                          <div
                            style={{
                              padding: '4px'
                            }}
                            key={material.item.id}>
                            {material.quantity}
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
              <div className="arrowBox">⥥</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default withRouter(CharmContent);
