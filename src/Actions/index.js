import monsterhunter from '../api/monsterhunter';
import _ from 'lodash';
import { MonsterList, BlightList } from '../Components/MonsterExports';
import { SkillIcons } from '../Components/SkillExports';
// import { ElementalList } from '../Components/MonsterExports';

/* -------------------------------------------------------------------------- */
// START MONSTERS
const addIcons = monsters => {
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

const addSpecIcon = monster => {
  return Object.assign(
    monster,
    _.chain(MonsterList)
      .find({ id: monster.id })
      .value()
  );
};

const addSpecAilmentIcon = monster => {
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
};

export const getSmallMonsters = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/monsters?q={"type":"small"}');
  const monsters = _.chain(response.data)
    .sortBy('name')
    .value();
  addIcons(monsters);

  dispatch({ type: 'GET_SMALL', payload: monsters });
};

export const getLargeMonsters = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/monsters?q={"type":"large"}');

  const monsters = _.chain(response.data)
    .sortBy('name')
    .value();
  addIcons(monsters);

  dispatch({ type: 'GET_LARGE', payload: monsters });
};

export const getSpecMonster = id => async (dispatch, getState) => {
  // Behaves as sort of a caching feature for an individual monster
  const data = getState().data;

  if (data.monsterData.length !== 0) {
    const monster = data.monsterData.filter(
      monster => monster.id === Number(id)
    );

    dispatch({ type: 'GET_SPEC', payload: monster[0] });
  } else {
    dispatch(loading());
    const response = await monsterhunter.get(`/monsters/${id}`);

    addSpecIcon(response.data);
    addSpecAilmentIcon(response.data);

    dispatch({ type: 'GET_SPEC', payload: response.data });
  }
};
// END MONSTERS
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// START SKILLS
const addSkillIcon = skills => {
  return skills.forEach(skill => {
    Object.assign(
      skill,
      _.chain(SkillIcons)
        .find({ id: skill.id })
        .value()
    );
  });
};

export const getSkills = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/skills');
  addSkillIcon(response.data);

  dispatch({ type: 'GET_SKILLS', payload: response.data });
};

// END SKILLS
/* -------------------------------------------------------------------------- */

const loading = () => dispatch => {
  dispatch({ type: 'LOADING' });
};
