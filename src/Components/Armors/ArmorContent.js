import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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

const ArmorContent = props => {
  const armories = props.armor[0];

  return (
    <div className="armorContent ui container animated fadeIn faster">
      <div className="armorTitle">{armories.name}</div>
      <div className="armorContentGrid">
        {armories.pieces.length !== 0 ? (
          armories.pieces.map(armorPiece => (
            <Link
              key={armorPiece.id}
              to={`/armors/${armories.id}/${armorPiece.id}`}>
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

                {armorPiece.assets !== null ? (
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
                      <div className="child_header">Base</div>
                      <div className="child_value">
                        {armorPiece.defense.base
                          ? armorPiece.defense.base
                          : 'N/a'}
                      </div>
                    </div>

                    <div>
                      <div className="child_header">Max</div>
                      <div className="child_value">
                        {armorPiece.defense.max
                          ? armorPiece.defense.max
                          : 'N/a'}
                      </div>
                    </div>

                    <div>
                      <div className="child_header">Augmented</div>
                      <div className="child_value">
                        {armorPiece.defense.augmented
                          ? armorPiece.defense.augmented
                          : 'N/a'}
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
                      <div className="child_header">Fire</div>
                      <div className="child_value" style={{ color: '#FF3E04' }}>
                        {armorPiece.resistances.fire === 0
                          ? '0'
                          : armorPiece.resistances.fire}
                      </div>
                    </div>

                    <div>
                      <div className="child_header">Water</div>
                      <div className="child_value" style={{ color: '#7994AE' }}>
                        {armorPiece.resistances.water === 0
                          ? '0'
                          : armorPiece.resistances.water}
                      </div>
                    </div>

                    <div>
                      <div className="child_header">Thunder</div>
                      <div className="child_value" style={{ color: '#F3FA2A' }}>
                        {armorPiece.resistances.thunder === 0
                          ? '0'
                          : armorPiece.resistances.thunder}
                      </div>
                    </div>
                  </div>
                  <div
                    className="child_flexCont"
                    style={{ justifyContent: 'space-evenly' }}>
                    <div>
                      <div className="child_header">Dragon</div>
                      <div className="child_value" style={{ color: '#6271B2' }}>
                        {armorPiece.resistances.dragon === 0
                          ? '0'
                          : armorPiece.resistances.dragon}
                      </div>
                    </div>
                    <div>
                      <div className="child_header">Ice</div>
                      <div className="child_value" style={{ color: '#80A5AB' }}>
                        {armorPiece.resistances.ice === 0
                          ? '0'
                          : armorPiece.resistances.ice}
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
