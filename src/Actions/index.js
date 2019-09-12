import monsterhunter from 'src/api/monsterhunter';
import _ from 'lodash';
import {
  MonsterList,
  BlightList
} from 'src/Components/Monsters/MonsterExports';
import { SkillIcons } from 'src/Components/Skills/SkillExports';

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
  dispatch(loading());
  const data = getState().data;

  if (data.monsterData.length !== 0 && data.monsterData.length > 2) {
    const monsterEle = data.monsterData.filter(
      monster => monster.id === Number(id)
    );

    dispatch({ type: 'GET_SPEC_MONSTER', payload: monsterEle[0] });
  } else {
    const response = await monsterhunter.get(`/monsters/${id}`);

    addSpecIcon(response.data);
    addSpecAilmentIcon(response.data);

    dispatch({ type: 'GET_SPEC_MONSTER', payload: response.data });
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

export const getSpecSkill = id => async (dispatch, getState) => {
  dispatch(loading());
  const skills = getState().skills;

  if (skills.skillData.length !== 0 && skills.skillData.length > 2) {
    const skillEle = skills.skillData.filter(skill => skill.id === Number(id));

    dispatch({ type: 'GET_SPEC_SKILL', payload: skillEle[0] });
  } else {
    const response = await monsterhunter.get(`/skills/${id}`);

    dispatch({ type: 'GET_SPEC_SKILL', payload: response.data });
  }
};
// END SKILLS
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// START CHARMS
export const getCharms = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/charms');

  dispatch({ type: 'GET_CHARMS', payload: response.data });
};

export const getSpecCharm = id => async (dispatch, getState) => {
  dispatch(loading());
  const charms = getState().charms;

  if (charms.charmData.length !== 0 && charms.charmData.length > 2) {
    const charmEle = charms.charmData.filter(charm => charm.id === Number(id));

    dispatch({ type: 'GET_SPEC_CHARM', payload: charmEle[0] });
  } else {
    const response = await monsterhunter.get(`/charms/${id}`);

    dispatch({ type: 'GET_SPEC_CHARM', payload: response.data });
  }
};
// END CHARMS
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// START ARMOR
export const getArmorSets = async dispatch => {
  const response = monsterhunter.get('/armor/sets');
  console.log(response);
};

// END ARMOR
/* -------------------------------------------------------------------------- */

const loading = () => dispatch => {
  dispatch({ type: 'LOADING' });
};
