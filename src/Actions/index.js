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
  const skills = _.chain(response.data)
    .sortBy('name')
    .value();
  addSkillIcon(response.data);

  dispatch({ type: 'GET_SKILLS', payload: skills });
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
  const charms = _.chain(response.data)
    .sortBy('name')
    .value();

  dispatch({ type: 'GET_CHARMS', payload: charms });
};

export const getSpecCharm = id => async (dispatch, getState) => {
  dispatch(loading());
  const charms = getState().charms;
  console.log(charms);
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
const addSlots = armor => {
  armor.pieces.forEach(piece => {
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
const addSlot = armor => {
  armor.slots.forEach(slot => {
    if (armor.slots.length === 0) {
      return;
    }
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
};

export const getLowArmorSets = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/armor/sets?q={"rank":"low"}');
  const armors = _.chain(response.data)
    .sortBy('name')
    .value();

  dispatch({ type: 'GET_LOW_ARMOR_SETS', payload: armors });
};

export const getHighArmorSets = () => async dispatch => {
  dispatch(loading());
  const response = await monsterhunter.get('/armor/sets?q={"rank":"high"}');
  const armors = _.chain(response.data)
    .sortBy('name')
    .value();

  dispatch({ type: 'GET_HIGH_ARMOR_SETS', payload: armors });
};

export const getSpecArmorSet = id => async (dispatch, getState) => {
  dispatch(loading());
  var data = getState().armors;

  if (data.armorData.length !== 0 && data.armorData.length > 2) {
    const armorEle = data.armorData.filter(armor => armor.id === Number(id));
    addSlots(armorEle[0]);

    dispatch({ type: 'GET_SPEC_ARMOR_SET', payload: armorEle[0] });
  } else {
    const response = await monsterhunter.get(`/armor/sets/${id}`);
    addSlots(response.data);

    dispatch({ type: 'GET_SPEC_ARMOR_SET', payload: response.data });
  }
};

export const getExactArmor = id => async dispatch => {
  dispatch(loading());

  const response = await monsterhunter.get(`/armor/${id}`);
  addSlot(response.data);

  dispatch({ type: 'GET_EXACT_ARM', payload: response.data });
};
// END ARMOR
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// START ITEMS

export const getSpecItem = id => async dispatch => {
  console.log(id);
};

/* -------------------------------------------------------------------------- */
// END ITEMS
const loading = () => dispatch => {
  dispatch({ type: 'LOADING' });
};
