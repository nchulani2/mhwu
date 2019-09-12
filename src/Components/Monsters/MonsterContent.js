import React, { Component } from 'react';
import _ from 'lodash';
import Rater from 'react-rater';
import { withRouter, Link } from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import 'src/Style/MonsterContent.css';

class MonsterContent extends Component {
  capitIt = {
    textTransform: 'capitalize'
  };
  flexIt = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  rewardTitles = {
    fontSize: '14px',
    color: 'rgba(208, 238, 29, 0.7)',
    textTransform: 'uppercase',
    paddingBottom: '5px'
  };

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

  weaknessStars = weaknesses => {
    return weaknesses.filter(weakness => weakness.stars > 1);
  };

  filterStatus = toBeFiltered => {
    const filtered = [];
    toBeFiltered.forEach(filter => {
      var n = filter.element;
      if (
        n === 'fire' ||
        n === 'water' ||
        n === 'thunder' ||
        n === 'dragon' ||
        n === 'ice'
      ) {
        filtered.push({
          element: n,
          stars: filter.stars
        });
      }
    });
    return _.sortBy(filtered, ['stars']).reverse();
  };

  resistanceStars = resistances => {
    return resistances.filter(resistance => resistance.stars <= 1);
  };

  lowRankRewards = rewards => {
    return rewards.filter(reward => reward.conditions[0].rank === 'low');
  };
  highRankRewards = rewards => {
    return rewards.filter(reward => reward.conditions[0].rank === 'high');
  };

  render() {
    const { monster } = this.props;
    const monstie = monster[0];

    const filteredWeaknesses = this.weaknessStars(monstie.weaknesses);
    const weaknessFilt = this.filterStatus(filteredWeaknesses);

    const filteredResistances = this.resistanceStars(monstie.weaknesses);
    const resistanceFilt = this.filterStatus(filteredResistances);

    const lowRankRewards = this.lowRankRewards(monstie.rewards);
    const highRankRewards = this.highRankRewards(monstie.rewards);

    return (
      <div className="monsterContent ui container animated fadeIn faster">
        <div className="monsterTitle">{monstie.name}</div>
        <div className="monsterDesc">{monstie.description}</div>
        <div className="imgBlock">
          <img src={monstie.image} alt={'A monster from MHW'} />
        </div>
        {/* NOTE FIXED POSITIONING ELEMENTS */}
        <div className="leftBox animated bounceInLeft faster">
          {/* TYPE */}
          <div className="monsterAttr">
            <div className="monsterTitles">Type</div>
            <div style={{ ...this.capitIt }}>
              {monstie.type ? monstie.type : 'N/a'}
            </div>
          </div>
          {/* SPECIES */}
          <div className="monsterAttr">
            <div className="monsterTitles">Species</div>
            <div style={{ ...this.capitIt }}>
              {monstie.species ? monstie.species : 'N/a'}
            </div>
          </div>
          {/* ELEMENTS */}
          <div className="monsterAttr">
            <div className="monsterTitles">Elements</div>
            <div style={{ ...this.capitIt }}>
              {monstie.elements.length !== 0 ? (
                monstie.elements.map(element => (
                  <div key={this.getRandomKey(10)}>{element}</div>
                ))
              ) : (
                <div>N/a</div>
              )}
            </div>
          </div>
          {/* AILMENTS */}
          <div className="monsterAttr">
            <div className="monsterTitles">Ailments</div>
            <div style={{ ...this.capitIt }}>
              {monstie.ailments.length !== 0 ? (
                monstie.ailments.map(ailment => (
                  <div style={{ ...this.flexIt }} key={ailment.id}>
                    {ailment.name}
                    <img
                      style={{ width: '18px', marginLeft: '5px' }}
                      src={ailment.icon}
                      alt={ailment.description}></img>
                  </div>
                ))
              ) : (
                <div>N/a</div>
              )}
            </div>
          </div>
          {/* WEAKNESSES */}
          <div className="monsterAttr">
            <div className="monsterTitles">Weaknesses</div>
            <div
              style={{
                ...this.capitIt
              }}>
              {weaknessFilt.length !== 0 ? (
                weaknessFilt.map(weakness => (
                  <div
                    style={{ ...this.flexIt, alignItems: 'baseline' }}
                    key={this.getRandomKey(10)}>
                    {weakness.element}
                    <Rater
                      total={3}
                      rating={weakness.stars}
                      interactive={false}
                    />
                  </div>
                ))
              ) : (
                <div>N/a</div>
              )}
            </div>
          </div>
        </div>
        {/* LOW DAMAGE */}
        <div className="rightBox animated bounceInRight faster">
          <div className="monsterAttr">
            <div className="monsterTitles">Low Damage</div>
            <div
              style={{
                ...this.capitIt
              }}>
              {resistanceFilt.length !== 0 ? (
                resistanceFilt.map(lowDamage => (
                  <div
                    style={{
                      ...this.flexIt,
                      justifyContent: 'space-evenly',
                      alignItems: 'baseline'
                    }}
                    key={this.getRandomKey(10)}>
                    {lowDamage.element}
                    <Rater
                      total={3}
                      rating={lowDamage.stars}
                      interactive={false}
                    />
                  </div>
                ))
              ) : (
                <div>N/a</div>
              )}
            </div>
          </div>
          {/* RESISTANCES */}
          <div className="monsterAttr">
            <div className="monsterTitles">Resistances</div>
            <div
              style={{
                ...this.capitIt
              }}>
              {monstie.resistances.length !== 0 ? (
                monstie.resistances.map(resistance => (
                  <div key={this.getRandomKey(10)}>{resistance.element}</div>
                ))
              ) : (
                <div>N/a</div>
              )}
            </div>
          </div>
          {/* REWARDS */}
          <div className="monsterAttr">
            <div className="monsterTitles">Rewards</div>
            <div className="rewardsFlex">
              {/* LOW */}
              <div style={{ textAlign: 'left', paddingRight: '8px' }}>
                <div style={{ ...this.rewardTitles }}>low rank</div>
                <div
                  style={{
                    ...this.capitIt
                  }}>
                  {lowRankRewards.length !== 0 ? (
                    lowRankRewards.map(lowRank => (
                      <div key={lowRank.id} className="rankBox">
                        <Link to="" className="rewardLink">
                          {lowRank.item.name}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div>N/a</div>
                  )}
                </div>
              </div>
              {/* HIGH */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ ...this.rewardTitles }}>high rank</div>
                <div
                  style={{
                    ...this.capitIt
                  }}>
                  {highRankRewards.length !== 0 ? (
                    highRankRewards.map(highRank => (
                      <div key={highRank.id} className="rankBox">
                        <Link to="" className="rewardLink">
                          {highRank.item.name}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div>N/a</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MonsterContent);
