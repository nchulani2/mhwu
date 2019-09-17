import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'src/Style/ArmorContent.css';

const getRandomKey = length => {
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

const addSlots = pieces => {
  pieces.forEach(piece => {
    if (piece.slots.length === 0) {
      return;
    }
    piece.slots.forEach(slot => {
      switch (slot.rank) {
        case 1:
          Object.assign(slot, {
            url:
              'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gem_level_1.png'
          });
          break;
        case 2:
          Object.assign(slot, {
            url:
              'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gem_level_2.png'
          });
          break;
        case 3:
          Object.assign(slot, {
            url:
              'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gem_level_3.png'
          });
          break;
        default:
          return;
      }
    });
  });
};

const ArmorContent = props => {
  const armories = props.armor[0];
  addSlots(armories.pieces);

  return (
    <div className="armorContent ui container animated fadeIn faster">
      <div className="armorTitle">{armories.name}</div>
      <div className="armorContentGrid">
        {armories.pieces.length !== 0 ? (
          armories.pieces.map(armorPiece => (
            <Link
              key={armorPiece.id}
              to={`armors/${armories.id}/${armorPiece.id}`}>
              <div className="pieceBox">
                <div className="armorName">
                  {armorPiece.name}

                  <span className="slotImgs">
                    {armorPiece.slots.length !== 0
                      ? armorPiece.slots.map(slot => (
                          <img
                            key={getRandomKey(10)}
                            src={slot.url}
                            alt={slot.rank}></img>
                        ))
                      : null}
                  </span>
                </div>

                {armorPiece.assets !== null && armorPiece.assets !== null ? (
                  <div className="armorImgs">
                    <img
                      src={armorPiece.assets.imageMale}
                      alt={armorPiece.type}></img>
                    <img
                      src={armorPiece.assets.imageFemale}
                      alt={armorPiece.type}></img>
                  </div>
                ) : null}
                {/* DEFENSE */}
                <div className="child_data">
                  <div className="child_title">Defense</div>
                  <div
                    className="child_flexCont"
                    style={{ marginBottom: '30px' }}>
                    <div>
                      <div className="radialHeader">Base</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.defense.base}
                          text={
                            armorPiece.defense.base
                              ? armorPiece.defense.base
                              : 'N/a'
                          }
                          maxValue={150}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="radialHeader">Max</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.defense.max}
                          text={
                            armorPiece.defense.max
                              ? armorPiece.defense.max
                              : 'N/a'
                          }
                          maxValue={150}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="radialHeader">Augmented</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.defense.augmented}
                          text={
                            armorPiece.defense.augmented
                              ? armorPiece.defense.augmented
                              : 'N/a'
                          }
                          maxValue={150}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* RESISTANCES */}
                <div className="child_data">
                  <div className="child_title">Resistances</div>
                  <div
                    className="child_flexCont"
                    style={{ marginBottom: '20px' }}>
                    <div>
                      <div className="radialHeader">Fire</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.resistances.fire}
                          text={
                            armorPiece.resistances.fire === 0
                              ? '0'
                              : armorPiece.resistances.fire
                          }
                          maxValue={6}
                          styles={{
                            path: {
                              stroke: '#FC420B'
                            },
                            text: {
                              fill: '#FC420B'
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="radialHeader">Water</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.resistances.water}
                          text={
                            armorPiece.resistances.water === 0
                              ? '0'
                              : armorPiece.resistances.water
                          }
                          maxValue={6}
                          styles={{
                            path: {
                              stroke: '#7994B1'
                            },
                            text: {
                              fill: '#7994B1'
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="radialHeader">Thunder</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.resistances.thunder}
                          text={
                            armorPiece.resistances.thunder === 0
                              ? '0'
                              : armorPiece.resistances.thunder
                          }
                          maxValue={6}
                          styles={{
                            path: {
                              stroke: '#EBF63D'
                            },
                            text: {
                              fill: '#EBF63D'
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="child_flexCont"
                    style={{ justifyContent: 'space-evenly' }}>
                    <div>
                      <div className="radialHeader">Dragon</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.resistances.dragon}
                          text={
                            armorPiece.resistances.dragon === 0
                              ? '0'
                              : armorPiece.resistances.dragon
                          }
                          maxValue={6}
                          styles={{
                            path: {
                              stroke: '#6870AD'
                            },
                            text: {
                              fill: '#6870AD'
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="radialHeader">Ice</div>
                      <div className="radialProgress">
                        <CircularProgressbar
                          value={armorPiece.resistances.ice}
                          text={
                            armorPiece.resistances.ice === 0
                              ? '0'
                              : armorPiece.resistances.ice
                          }
                          maxValue={6}
                          styles={{
                            path: {
                              stroke: '#769EA5'
                            },
                            text: {
                              fill: '#769EA5'
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div
            style={{
              textAlign: 'center',
              fontSize: '16px',
              letterSpacing: '2px'
            }}>
            Sorry, not available at this moment!
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ArmorContent);
