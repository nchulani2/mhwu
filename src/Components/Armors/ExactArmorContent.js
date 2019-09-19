import React, { Component } from 'react';
import 'src/Style/ExactArmorContent.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { withRouter, Link } from 'react-router-dom';

class ExactArmorContent extends Component {
  getRandomKey = length => {
    // generated random key that is length # of characters long to avoid matching key props
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  componentDidMount = () => {
    window.addEventListener('resize', this.manipFlexCont);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.manipFlexCont);
  };
  manipFlexCont = () => {
    var flexCont;
    if (window.innerWidth > 750) {
      flexCont = document.getElementById('flexCont');
      flexCont.style.flexDirection = 'row';
    } else {
      flexCont = document.getElementById('flexCont');
      flexCont.style.flexDirection = 'column';
    }
  };

  render() {
    const { exactArmor } = this.props;
    console.log(exactArmor);
    return (
      <div className="exactArmorContent ui container animated fadeIn faster">
        <div className="exactTitle">{exactArmor.name}</div>
        <div className="slots">
          {exactArmor.slots.length !== 0
            ? exactArmor.slots.map(slot => (
                <img
                  key={this.getRandomKey(10)}
                  src={slot.url}
                  alt={`Level ${slot.rank}`}></img>
              ))
            : null}
        </div>
        {exactArmor.assets ? (
          <div className="imgBlock">
            <div className="imgGender">
              male
              <img
                style={{ display: 'block' }}
                src={exactArmor.assets.imageMale}
                alt="male armor piece"></img>
            </div>
            <div className="imgGender">
              Female
              <img
                style={{ display: 'block' }}
                src={exactArmor.assets.imageFemale}
                alt="female armor piece"></img>
            </div>
          </div>
        ) : null}
        {/* Skills */}
        <div className="content_data" style={{ marginBottom: '50px' }}>
          <div className="content_title" style={{ paddingBottom: '10px' }}>
            Skills
          </div>
          <div
            className="content_flexCont"
            style={{ justifyContent: 'center' }}>
            {exactArmor.skills.length !== 0
              ? exactArmor.skills.map(skill => (
                  <Link key={skill.id} to={`/skills/${skill.skill}`}>
                    <div className="linkCont">
                      <span
                        style={{
                          textDecoration: 'underline',
                          textUnderlinePosition: 'under'
                        }}>
                        {skill.skillName}
                      </span>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
        {/* Defense */}
        <div className="content_data">
          <div className="content_title">Defense</div>
          <div className="content_flexCont" style={{ marginBottom: '50px' }}>
            <div>
              <div className="content_header">Base</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={exactArmor.defense.base}
                    text={
                      exactArmor.defense.base ? exactArmor.defense.base : 'N/a'
                    }
                    maxValue={150}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="content_header">Max</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={exactArmor.defense.max}
                    text={
                      exactArmor.defense.max ? exactArmor.defense.max : 'N/a'
                    }
                    maxValue={150}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="content_header">Augmented</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={exactArmor.defense.augmented}
                    text={
                      exactArmor.defense.augmented
                        ? exactArmor.defense.augmented
                        : 'N/a'
                    }
                    maxValue={150}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Resistances */}
        <div className="content_data">
          <div className="content_title">Resistances</div>
          <div className="content_flexCont" style={{ marginBottom: '20px' }}>
            <div>
              <div className="content_header">Fire</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={
                      exactArmor.resistances.fire === 0
                        ? '0'
                        : exactArmor.resistances.fire
                    }
                    text={
                      exactArmor.resistances.fire === 0
                        ? '0'
                        : exactArmor.resistances.fire
                    }
                    styles={{
                      path: {
                        stroke: '#FC3A05'
                      },
                      text: {
                        fill: '#FC3A05',
                        fontSize: '20px'
                      }
                    }}
                    maxValue={6}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="content_header">Water</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={
                      exactArmor.resistances.water === 0
                        ? '0'
                        : exactArmor.resistances.water
                    }
                    text={
                      exactArmor.resistances.water === 0
                        ? '0'
                        : exactArmor.resistances.water
                    }
                    styles={{
                      path: {
                        stroke: '#7491A9'
                      },
                      text: {
                        fill: '#7491A9',
                        fontSize: '20px'
                      }
                    }}
                    maxValue={6}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="content_header">Thunder</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={
                      exactArmor.resistances.thunder === 0
                        ? '0'
                        : exactArmor.resistances.thunder
                    }
                    text={
                      exactArmor.resistances.thunder === 0
                        ? '0'
                        : exactArmor.resistances.thunder
                    }
                    styles={{
                      path: {
                        stroke: '#F1F52A'
                      },
                      text: {
                        fill: '#F1F52A',
                        fontSize: '20px'
                      }
                    }}
                    maxValue={6}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content_flexCont" style={{ marginBottom: '50px' }}>
            <div>
              <div className="content_header">Dragon</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={
                      exactArmor.resistances.dragon === 0
                        ? '0'
                        : exactArmor.resistances.dragon
                    }
                    text={
                      exactArmor.resistances.dragon === 0
                        ? '0'
                        : exactArmor.resistances.dragon
                    }
                    styles={{
                      path: {
                        stroke: '#677CBA'
                      },
                      text: {
                        fill: '#677CBA',
                        fontSize: '20px'
                      }
                    }}
                    maxValue={6}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="content_header">Ice</div>
              <div className="content_value">
                <div className="radialProgress">
                  <CircularProgressbar
                    value={
                      exactArmor.resistances.ice === 0
                        ? '0'
                        : exactArmor.resistances.ice
                    }
                    text={
                      exactArmor.resistances.ice === 0
                        ? '0'
                        : exactArmor.resistances.ice
                    }
                    styles={{
                      path: {
                        stroke: '#76A4A7'
                      },
                      text: {
                        fill: '#76A4A7',
                        fontSize: '20px'
                      }
                    }}
                    maxValue={6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content_data" style={{ marginBottom: '50px' }}>
          <div className="content_title" style={{ paddingBottom: '10px' }}>
            Crafting
          </div>
          <div className="content_flexCont" id="flexCont">
            {exactArmor.crafting.materials.length !== 0
              ? exactArmor.crafting.materials.map(material => (
                  <Link key={material.item.id} to="/">
                    <div className="linkCont">
                      <span
                        style={{
                          textDecoration: 'underline',
                          textUnderlinePosition: 'under'
                        }}>
                        {material.item.name}
                      </span>
                      <div style={{ paddingTop: '5px' }}>
                        x{material.quantity}
                      </div>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ExactArmorContent);
