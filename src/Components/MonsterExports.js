import {
  Aptonoth, Jagras, Mernos, Vespoid, Mosswine, Apceros, Kestodon, Noios, Gajau, Kelbi, Raphinos, Shamos, Girros, Hornetaur, Gastodon, Barnos, GreatJagras, KuluYaKu, PukeiPukei, Barroth, Jyuratodus, TobiKadachi, Anjanath, AzureRathalos, Bazelgeuse, Behemoth, Deviljho, Diablos, BlackDiablos, Dodogama, GreatGirros, Kirin, KulveTaroth, KushalaDaora, Lavasioth, Legiana, Lunastra, Nergigante, Odogaron, Paolumu, Radobaan, Rathalos, Rathian, PinkRathian, Teostra, TzitziYaKu, Uragaan, VaalHazak, Xenojiiva, ZorahMagdaros, Leshen, AncientLeshen} from '../exports/MonsterIconsExports';
  
  import {
    AptonothImg, JagrasImg, MernosImg, VespoidImg, MosswineImg, ApcerosImg, KestodonImg, NoiosImg, GajauImg,KelbiImg, RaphinosImg, ShamosImg, GirrosImg, HornetaurImg, GastodonImg, BarnosImg, GreatJagrasImg, KuluYaKuImg, PukeiPukeiImg, BarrothImg, JyuratodusImg, TobiKadachiImg, AnjanathImg, AzureRathalosImg, BazelgeuseImg, BehemothImg, DeviljhoImg, DiablosImg, BlackDiablosImg, DodogamaImg, GreatGirrosImg, KirinImg, KulveTarothImg, KushalaDaoraImg, LavasiothImg, LegianaImg, LunastraImg, NergiganteImg, OdogaronImg, PaolumuImg, RadobaanImg, RathalosImg, RathianImg, PinkRathianImg, TeostraImg, TzitziYaKuImg, UragaanImg, VaalHazakImg, XenojiivaImg, ZorahMagdarosImg, LeshenImg, AncientLeshenImg
  } from '../exports/MonsterImagesExports';
  
  // import {Water, Thunder, Ice, Dragon, Fire} from './ElementalExports'

  import { Blastblight, Bleeding, DragonBlight, EffluvialBuildup, Fireblight, Iceblight, Paralysis, Poison, Sleep, Stun, Thunderblight, Waterblight, WindPressure, DefenseDown, Muddy} from '../exports/BlightExports'

// Undefined at indexes 0, 45-48 due to API setup
const Monsters = [undefined, Aptonoth, Jagras, Mernos, Vespoid, Mosswine, Apceros, Kestodon, Noios, Gajau, Kelbi, Raphinos, Shamos, Girros, Hornetaur, Gastodon, Barnos, GreatJagras, KuluYaKu, PukeiPukei, Barroth, Jyuratodus, TobiKadachi, Anjanath, AzureRathalos, Bazelgeuse, Behemoth, Deviljho, Diablos, BlackDiablos, Dodogama, GreatGirros, Kirin, KulveTaroth, KushalaDaora, Lavasioth, Legiana, Lunastra, Nergigante, Odogaron, Paolumu, Radobaan, Rathalos, Rathian, PinkRathian, Teostra, undefined, undefined, TzitziYaKu, Uragaan, VaalHazak, Xenojiiva, ZorahMagdaros, Leshen, AncientLeshen];

const MonsterImages = [undefined, AptonothImg, JagrasImg, MernosImg, VespoidImg, MosswineImg, ApcerosImg, KestodonImg, NoiosImg, GajauImg, KelbiImg, RaphinosImg, ShamosImg, GirrosImg, HornetaurImg, GastodonImg, BarnosImg, GreatJagrasImg, KuluYaKuImg, PukeiPukeiImg, BarrothImg, JyuratodusImg, TobiKadachiImg, AnjanathImg, AzureRathalosImg, BazelgeuseImg, BehemothImg, DeviljhoImg, DiablosImg, BlackDiablosImg, DodogamaImg, GreatGirrosImg, KirinImg, KulveTarothImg, KushalaDaoraImg, LavasiothImg, LegianaImg, LunastraImg, NergiganteImg, OdogaronImg, PaolumuImg, RadobaanImg, RathalosImg, RathianImg, PinkRathianImg, TeostraImg, undefined, undefined, TzitziYaKuImg, UragaanImg, VaalHazakImg, XenojiivaImg, ZorahMagdarosImg, LeshenImg, AncientLeshenImg];
export const MonsterList = [];

// NOTE UNABLE TO USE DUE TO RETARD API DEV NOT USING AN ID
// const ElementalIcons =[undefined, Water, Thunder, Ice, Fire, Dragon];
// const ElementalNames = [undefined, 'water', 'thunder', 'ice', 'fire', 'dragon']
// export const ElementalList = [];


const BlightIcons = [undefined, Blastblight, Bleeding, DragonBlight, EffluvialBuildup, Fireblight, Iceblight, Paralysis, Poison, Sleep, Stun, Thunderblight, Waterblight, WindPressure, DefenseDown, Muddy] 
export const BlightList = [];


// FOR ICONS/IMAGES
for (let id = 1; id < Monsters.length; id++) {
  
  MonsterList.push({id: id, icon: Monsters[id], image: MonsterImages[id] })
  // skipping 46 & 47 here due to API indexes going from 45-48
   if(id === 45){
     id += 2;
   }
  
}
// FOR ELEMENTALS
// for (let id = 1; id < ElementalIcons.length; id++) {
//   ElementalList.push(ElementalNames[id], ElementalIcons[id])
  
// }

// FOR BLIGHTS
for (let id = 1; id < BlightIcons.length; id++) {
  BlightList.push({id: id, icon: BlightIcons[id]})
  
}