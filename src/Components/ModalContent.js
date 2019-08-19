import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import 'src/Style/ModalContent.css';

export default class ModalContent extends Component {
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

  render() {
    const { monster } = this.props;

    return (
      <div className="modalcontent">
        <div className="imgBlock">
          <img src={monster.image} alt={'A monster from MHW'} />
        </div>

        <h1 className="monsterTitle">{monster.name}</h1>
        <p className="monsterDescription">{monster.description}</p>
        <div className="monsterFlex">
          {/* NOTE TYPE */}
          <div>Type: </div>
          <div className="monsterAttribute">
            {monster.type ? monster.type : 'Unknown'}
          </div>
        </div>
        {/* NOTE SPECIES */}
        <div className="monsterFlex">
          <div>Species:</div>
          <div className="monsterAttribute">
            {monster.species ? monster.species : 'Unknown'}
          </div>
        </div>
        {/* NOTE ELEMENTS */}
        <div className="monsterFlex">
          <div>Elements:</div>
          <div style={{ textAlign: 'right' }}>
            {monster.elements.length !== 0 ? (
              monster.elements.map(element => (
                <div key={this.getRandomKey(10)} className="monsterAttribute">
                  {element}
                  {/* <div className="iconElements" /> */}
                  <br />
                </div>
              ))
            ) : (
              <div className="monsterAttribute">No elements</div>
            )}
          </div>
        </div>
        {/* NOTE AILMENTS */}
        <div className="monsterFlex">
          <div>Ailments:</div>
          <div style={{ textAlign: 'right' }}>
            {monster.ailments.length !== 0 ? (
              monster.ailments.map(ailment => (
                <div key={ailment.id} className="monsterAttribute">
                  {ailment.name}
                  <img
                    className="iconElements"
                    src={ailment.icon}
                    alt={ailment.description}
                  />
                </div>
              ))
            ) : (
              <div className="monsterAttribute">No ailments</div>
            )}
          </div>
        </div>
        {/* NOTE WEAKNESS */}
        <div className="monsterFlex">
          <div>Weaknesses:</div>
          <div style={{ textAlign: 'right' }}>
            {monster.weaknesses.length !== 0 ? (
              monster.weaknesses.map(weakness => (
                <div key={this.getRandomKey(20)} className="monsterAttribute">
                  {weakness.element}
                  <Rater
                    total={3}
                    rating={weakness.stars}
                    interactive={false}
                  />
                  <br />
                </div>
              ))
            ) : (
              <div className="monsterAttribute">No weaknesses</div>
            )}
          </div>
        </div>
        {/* NOTE RESISTANCES */}
        <div className="monsterFlex">
          <div>Resistances:</div>
          <div style={{ textAlign: 'right' }}>
            {monster.resistances.length !== 0 ? (
              monster.resistances.map(resistance => (
                <div key={this.getRandomKey(20)} className="monsterAttribute">
                  Immune to {resistance.element}
                  <br />
                </div>
              ))
            ) : (
              <div className="monsterAttribute">No Resistances</div>
            )}
          </div>
        </div>
        {/* NOTE LOCATION */}
        <div className="monsterFlex">
          <div>Locations:</div>
          <div style={{ textAlign: 'right' }}>
            {monster.locations.length !== 0 ? (
              monster.locations.map(location => (
                <div key={location.id} className="monsterAttribute">
                  {location.name} <div>- [Zone {location.zoneCount}]</div>
                </div>
              ))
            ) : (
              <div className="monsterAttribute">No location</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
