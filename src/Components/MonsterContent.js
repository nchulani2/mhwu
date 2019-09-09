import React, { Component } from 'react';
import Rater from 'react-rater';
import { withRouter } from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import 'src/Style/MonsterContent.css';

class MonsterContent extends Component {
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

  // Regex for capitalizing first letter in a word
  upperCaseFirst = str => {
    return str.replace(/^\w/, firstLetter => firstLetter.toUpperCase());
  };

  threeWeakness = weaknesses => {
    return weaknesses.filter(weakness => weakness.stars > 2);
  };
  twoWeakness = weaknesses => {
    return weaknesses.filter(weakness => weakness.stars === 2);
  };
  oneWeakness = weaknesses => {
    return weaknesses.filter(weakness => weakness.stars === 1);
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

    const threeStars = this.threeWeakness(monstie.weaknesses);
    const twoStars = this.twoWeakness(monstie.weaknesses);
    const oneStars = this.oneWeakness(monstie.weaknesses);

    const lowRankRewards = this.lowRankRewards(monstie.rewards);
    const highRankRewards = this.highRankRewards(monstie.rewards);

    return (
      <div className="monsterContent ui container animated fadeIn faster">
        <div className="monsterTitle">{monstie.name}</div>
        <div className="monsterDesc">{monstie.description}</div>
        <div className="imgBlock">
          <img src={monstie.image} alt={'A monster from MHW'} />
        </div>
        <table className="tableHoc">
          {/* NOTE TYPE */}
          <tbody style={{ borderTop: '2px solid rgba(208, 238, 29, 1)' }}>
            <tr>
              <th className="tableHeaders">Type</th>
              <td className="tableInfos">
                {monstie.type ? this.upperCaseFirst(monstie.type) : 'Unknown'}
              </td>
            </tr>
          </tbody>
          {/* NOTE SPECIES */}
          <tbody>
            <tr>
              <th className="tableHeaders">Species</th>
              <td
                className="tableInfos"
                style={{ textTransform: 'capitalize' }}>
                {monstie.species ? monstie.species : 'Unknown'}
              </td>
            </tr>
          </tbody>
          {/* NOTE ELEMENTS */}
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  monstie.elements.length !== 0
                    ? monstie.elements.length + 1
                    : monstie.elements.length
                }>
                Elements
              </th>
            </tr>
            {monstie.elements.length !== 0 ? (
              monstie.elements.map(element => (
                <tr key={this.getRandomKey(10)}>
                  <td className="tableInfos">{this.upperCaseFirst(element)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">No Elements</td>
              </tr>
            )}
          </tbody>
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  monstie.ailments.length !== 0
                    ? monstie.ailments.length + 1
                    : monstie.ailments.length
                }>
                Ailments
              </th>
            </tr>
            {monstie.ailments.length !== 0 ? (
              monstie.ailments.map(ailment => (
                <tr key={ailment.id}>
                  <td className="tableInfos">
                    {this.upperCaseFirst(ailment.name)}
                    <img
                      className="iconElements"
                      src={ailment.icon}
                      alt={ailment.description}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">No Ailments</td>
              </tr>
            )}
          </tbody>

          {/* NOTE THREESTARS */}
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  threeStars.length !== 0
                    ? threeStars.length + 1
                    : threeStars.length
                }>
                Weaknesses
              </th>
            </tr>
            {threeStars.length !== 0 ? (
              threeStars.map(weakness => (
                <tr key={this.getRandomKey(20)}>
                  <td className="tableInfos">
                    {this.upperCaseFirst(weakness.element)}
                    <Rater
                      total={3}
                      rating={weakness.stars}
                      interactive={false}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">N/a</td>
              </tr>
            )}
          </tbody>
          {/* NOTE TWOSTARS */}
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  twoStars.length !== 0 ? twoStars.length + 1 : twoStars.length
                }>
                moderate weaknesses
              </th>
            </tr>
            {twoStars.length !== 0 ? (
              twoStars.map(weakness => (
                <tr key={this.getRandomKey(20)}>
                  <td className="tableInfos">
                    {this.upperCaseFirst(weakness.element)}
                    <Rater
                      total={3}
                      rating={weakness.stars}
                      interactive={false}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">N/a</td>
              </tr>
            )}
          </tbody>
          {/* NOTE ONESTARS */}
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  oneStars.length !== 0 ? oneStars.length + 1 : oneStars.length
                }>
                Minimum weaknesses
              </th>
            </tr>
            {oneStars.length !== 0 ? (
              oneStars.map(weakness => (
                <tr key={this.getRandomKey(20)}>
                  <td className="tableInfos">
                    {this.upperCaseFirst(weakness.element)}
                    <Rater
                      total={3}
                      rating={weakness.stars}
                      interactive={false}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">N/a</td>
              </tr>
            )}
          </tbody>
          {/* NOTE RESISTANCES */}
          <tbody>
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  monstie.resistances.length !== 0
                    ? monstie.resistances.length + 1
                    : monstie.resistances.length
                }>
                resistances
              </th>
            </tr>
            {monstie.resistances.length !== 0 ? (
              monstie.resistances.map(resistance => (
                <tr key={this.getRandomKey(20)}>
                  <td className="tableInfos">
                    {this.upperCaseFirst(resistance.element)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">No Resistances</td>
              </tr>
            )}
          </tbody>
          {/* NOTE LOCATIONS */}
          <tbody className="lastTr">
            <tr>
              <th
                className="tableHeaders"
                rowSpan={
                  monstie.locations.length !== 0
                    ? monstie.locations.length + 1
                    : monstie.locations.length
                }>
                Locations
              </th>
            </tr>
            {monstie.locations.length !== 0 ? (
              monstie.locations.map(location => (
                <tr key={location.id}>
                  <td className="tableInfos">
                    {location.name} <span>[{location.zoneCount}]</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="tableInfos">No Locations</td>
              </tr>
            )}
          </tbody>
        </table>

        {/*  NOTE REWARDS */}
        <table className="tableHoc">
          <caption className="rewardCaption">rewards [low]</caption>
          <tbody id="rewardTr">
            <tr>
              <th className="rewardHeaders">Name</th>
              <th className="rewardHeaders">description</th>
            </tr>
            {lowRankRewards.length !== 0 ? (
              lowRankRewards.map(reward => (
                <tr key={reward.id}>
                  <td className="rewardNames">{reward.item.name}</td>
                  <td className="rewardInfos">{reward.item.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="tableInfos">
                  No Rewards Available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <table className="tableHoc">
          <caption className="rewardCaption">rewards [high]</caption>
          <tbody id="rewardTr">
            <tr>
              <th className="rewardHeaders">Name</th>
              <th className="rewardHeaders">description</th>
            </tr>
            {highRankRewards.length !== 0 ? (
              highRankRewards.map(reward => (
                <tr key={reward.id}>
                  <td className="rewardNames">{reward.item.name}</td>
                  <td className="rewardInfos">{reward.item.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="tableInfos">
                  No Rewards Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(MonsterContent);
