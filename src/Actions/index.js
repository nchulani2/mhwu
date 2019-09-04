import monsterhunter from '../api/monsterhunter';
import _ from 'lodash';
import { MonsterList, BlightList } from '../Components/MonsterExports';
// import { ElementalList } from '../Components/MonsterExports';

const addIcon = monsters => {
  return monsters.forEach(monster => {
    Object.assign(
      monster,
      _.chain(MonsterList)
        .find({ id: monster.id })
        .value()
    );
    if (monster.ailments.length === 0) return;
    else {
      return monster.ailments.forEach(ailment => {
        Object.assign(
          ailment,
          _.chain(BlightList)
            .find({ id: ailment.id })
            .value()
        );
      });
    }
  });
};

export const getSmallMonsters = () => async dispatch => {
  const response = await monsterhunter.get('/monsters?q={"type":"small"}');
  const monsters = _.chain(response.data)
    .sortBy('name')
    .value();
  addIcon(monsters);

  dispatch({ type: 'GET_SMALL', payload: monsters });
};

export const getLargeMonsters = () => async dispatch => {
  const response = await monsterhunter.get('/monsters?q={"type":"large"}');
  console.log(response);
  const monsters = _.chain(response.data)
    .sortBy('name')
    .value();
  addIcon(monsters);

  dispatch({ type: 'GET_LARGE', payload: monsters });
};
