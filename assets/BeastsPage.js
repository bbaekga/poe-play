var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a as useInterval, Q as QImg } from "./use-interval.js";
import { _ as _export_sfc, Q as QCheckbox } from "./plugin-vue_export-helper.js";
import { Q as QPage } from "./QPage.js";
import { a as axios } from "./axios2.js";
import { g as get } from "./get.js";
import { s as defineComponent, v as onMounted, o as onBeforeUnmount, r as ref, a as computed, y as openBlock, z as createBlock, A as withCtx, C as createBaseVNode, a3 as normalizeClass, B as createVNode, $ as createElementBlock, a4 as renderList, a0 as Fragment, a1 as toDisplayString, a2 as createCommentVNode, a7 as pushScopeId, a8 as popScopeId } from "./index.js";
class Beast {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "chaos");
    __publicField(this, "divine");
    __publicField(this, "selected");
    this.id = data.id || null;
    this.name = (data == null ? void 0 : data.detailsId) ? getBeastName(data.detailsId) : null;
    this.chaos = ((data == null ? void 0 : data.chaosValue) || 0).toFixed(1);
    this.divine = ((data == null ? void 0 : data.divineValue) || 0).toFixed(1);
    this.selected = false;
  }
}
function getBeastName(id) {
  const idMappings = {
    "cave-beast": "\uB3D9\uAD74 \uC57C\uC218",
    "enraptured-beast": "\uB3C4\uCDE8\uB41C \uC57C\uC218",
    "bone-cruncher": "\uBF08 \uAE68\uBB3C\uC774",
    "hairy-bonecruncher": "\uD138\uD22C\uC131\uC774 \uBF08\uAE68\uBB3C\uC774",
    "shaggy-monstrosity": "\uD138\uBD81\uC22D\uC774 \uAD34\uC218",
    "thicket-hulk": "\uC7A1\uBAA9\uB9BC \uAC70\uB300 \uACF0",
    "skeletal-beast": "\uD574\uACE8 \uC57C\uC218",
    "corrupted-beast": "\uD0C0\uB77D\uD55C \uC57C\uC218",
    "armour-cruncher": "\uBC29\uC5B4\uAD6C \uAE68\uBB3C\uC774",
    "forest-beast": "\uC232 \uC57C\uC218",
    "goatman": "\uC5FC\uC18C\uC778\uAC04",
    "elder-blessed-goatman": "\uC5D8\uB354\uC5D0\uAC8C \uCD95\uBCF5\uBC1B\uC740 \uC5FC\uC18C\uC778\uAC04",
    "goatman-stomper": "\uC5FC\uC18C\uC778\uAC04 \uBC18\uD56D\uC790",
    "bearded-devil": "\uC5FC\uC18C\uC778\uAC04 \uC545\uB9C8",
    "alpine-devil": "\uACE0\uC0B0 \uC545\uB9C8",
    "goatman-shaman": "\uC5FC\uC18C\uC778\uAC04 \uC8FC\uC220\uC0AC",
    "goatman-fire-raiser": "\uC5FC\uC18C\uC778\uAC04 \uBC29\uD654\uBC94",
    "bearded-shaman": "\uC5FC\uC18C\uC778\uAC04 \uC8FC\uC220\uC0AC",
    "bearded-skycaller": "\uC5FC\uC18C\uC778\uAC04 \uD558\uB298\uC18C\uD658\uC0AC",
    "alpine-shaman": "\uACE0\uC0B0 \uC8FC\uC220\uC0AC",
    "hill-devil": "\uC5B8\uB355 \uC545\uB9C8",
    "colossus-crusher": "\uCD08\uB300\uD615 \uD0C0\uC1C4\uC790",
    "arctic-wolf": "\uD55C\uAE30\uC758 \uB291\uB300",
    "snow-wolf": "\uB208 \uB291\uB300",
    "freezing-wolf": "\uB3D9\uACB0 \uB291\uB300",
    "dire-wolf": "\uC9C0\uB3C5\uD55C \uB291\uB300",
    "elder-blessed-hellion": "\uC5D8\uB354\uC5D0\uAC8C \uCD95\uBCF5\uBC1B\uC740 \uD5EC\uB9AC\uC628",
    "flame-hellion": "\uD654\uC5FC \uD5EC\uB9AC\uC628",
    "dune-hellion": "\uC0AC\uAD6C \uD5EC\uB9AC\uC628",
    "ruins-hellion": "\uC720\uC801 \uD5EC\uB9AC\uC628",
    "mountain-hellion": "\uC0B0\uB9E5 \uD5EC\uB9AC\uC628",
    "mountain-hellion-alpha": "\uC0B0\uB9E5 \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC",
    "enslaved-hellion": "\uB178\uC608 \uD5EC\uB9AC\uC628",
    "shackled-hellion": "\uC871\uC1C4 \uCC2C \uD5EC\uB9AC\uC628",
    "blood-ape": "\uD53C\uC758 \uC720\uC778\uC6D0",
    "dread-primate": "\uACF5\uD3EC\uC758 \uC601\uC7A5\uB958",
    "stygian-ape": "\uBA85\uACC4\uC758 \uC720\uC778\uC6D0",
    "infested-ape": "\uAC10\uC5FC\uB41C \uC720\uC778\uC6D0",
    "blood-chieftain": "\uD53C\uC758 \uBD80\uC871\uC7A5",
    "carnage-chieftain": "\uD559\uC0B4\uC758 \uBD80\uC871\uC7A5",
    "stygian-silverback": "\uBA85\uACC4\uC758 \uC218\uCEF7\uACE0\uB9B4\uB77C",
    "host-chieftain": "\uC219\uC8FC \uBD80\uC871\uC7A5",
    "carnage-ape": "\uD559\uC0B4\uC758 \uC720\uC778\uC6D0",
    "barrow-ape": "\uBB34\uB364\uC758 \uC720\uC778\uC6D0",
    "rhoa-mare": "\uC554\uCEF7 \uB85C\uC544",
    "elder-blessed-rhoa": "\uC5D8\uB354\uC5D0\uAC8C \uCD95\uBCF5\uBC1B\uC740 \uB85C\uC544",
    "albino-rhoa": "\uD770 \uB85C\uC544",
    "tercel-rhoa": "\uC218\uCEF7 \uB85C\uC544",
    "murk-runner": "\uC554\uD751 \uC9C8\uC8FC\uC790",
    "bone-rhoa": "\uBF08 \uB85C\uC544",
    "corrupted-rhoa": "\uD0C0\uB77D\uD55C \uB85C\uC544",
    "bone-scavenger": "\uBF08 \uCCAD\uC18C\uBD80",
    "zombie-rhoa": "\uC880\uBE44 \uB85C\uC544",
    "infested-rhoa": "\uAC10\uC5FC\uB41C \uB85C\uC544",
    "gravel-eater": "\uC790\uAC08 \uD3EC\uC2DD\uC790",
    "scrabbling-spitter": "\uAE01\uC5B4\uB300\uB294 \uC804\uAC08",
    "granite-eater": "\uD654\uAC15\uC554 \uD3EC\uC2DD\uC790",
    "rock-spitter": "\uBC14\uC704 \uC804\uAC08",
    "crustacean-sniper": "\uAC11\uAC01\uB958 \uC800\uACA9\uCDA9",
    "crustacean-pelter": "\uAC11\uAC01\uB958 \uD22C\uCC99\uCDA9",
    "infested-sniper": "\uAC10\uC5FC\uB41C \uC800\uACA9\uCDA9",
    "obsidian-eater": "\uD751\uC694\uC11D \uD3EC\uC2DD\uC790",
    "merveils-favoured": "\uBA38\uBCA0\uC77C\uC758 \uCD1D\uC560\uC790",
    "merveils-daughter": "\uBA38\uBCA0\uC77C\uC758 \uB538",
    "merveils-attendant": "\uBA38\uBCA0\uC77C\uC758 \uC218\uD589\uC6D0",
    "merveils-chosen": "\uBA38\uBCA0\uC77C\uC5D0 \uC120\uD0DD\uBC1B\uC740 \uC790",
    "merveils-retainer": "\uBA38\uBCA0\uC77C\uC758 \uC2E0\uD558",
    "singing-siren": "\uB178\uB798\uD558\uB294 \uC0AC\uC774\uB80C",
    "merveils-blessed": "\uBA38\uBCA0\uC77C\uC5D0 \uCD95\uBCF5\uBC1B\uC740 \uC790",
    "scrabbling-menace": "\uAE01\uC5B4\uB300\uB294 \uC704\uD611",
    "cave-crustacean": "\uB3D9\uAD74 \uAC11\uAC01\uB958",
    "invading-crustacean": "\uCE68\uB7B5\uD558\uB294 \uAC11\uAC01\uB958",
    "infested-crustacean": "\uAC10\uC5FC\uB41C \uAC11\uAC01\uB958",
    "deep-crustacean": "\uC2EC\uCE35 \uAC11\uAC01\uB958",
    "shield-crab": "\uBC29\uD328\uAC8C",
    "bleached-crustacean": "\uBC31\uC0C9 \uAC11\uAC01\uB958",
    "night-adder": "\uBC24 \uC0B4\uBB34\uC0AC",
    "host-adder": "\uC219\uC8FC \uC0B4\uBB34\uC0AC",
    "bramble-cobra": "\uAC00\uC2DC\uB098\uBB34 \uCF54\uBE0C\uB77C",
    "elder-blessed-cobra": "\uC5D8\uB354\uC5D0\uAC8C \uCD95\uBCF5\uBC1B\uC740 \uCF54\uBE0C\uB77C",
    "host-cobra": "\uC219\uC8FC \uCF54\uBE0C\uB77C",
    "acid-slitherer": "\uC0B0\uC131 \uBBF8\uB044\uB7FC\uBC40",
    "glade-mamba": "\uD480\uC232 \uD070\uB3C5\uC0AC",
    "cursed-spawn": "\uC800\uC8FC\uBC1B\uC740 \uC720\uCDA9",
    "fathom-screamer": "\uAE4A\uC740 \uACF3 \uBE44\uBA85\uC790",
    "sirens-spawn": "\uC0AC\uC774\uB80C\uC758 \uC720\uCDA9",
    "slimy-bloodsucker": "\uBB3C\uCEF9\uD55C \uAC70\uBA38\uB9AC",
    "unstable-larva": "\uBD88\uC548\uC815\uD55C \uC720\uC0DD",
    "slimy-nemesis": "\uBB3C\uCEF9\uD55C \uCC9C\uBC8C",
    "venomous-spawn": "\uB3C5\uC131 \uC720\uCDA9",
    "lurking-venom": "\uB3C4\uC0AC\uB9AC\uB294 \uB3C5\uC561",
    "vaal-recluse": "\uBC14\uC54C \uC740\uC790",
    "noxious-tarantula": "\uC720\uB3C5\uC131 \uD0C0\uB780\uD234\uB77C",
    "deadly-tarantula": "\uCE58\uBA85\uC801\uC778 \uD0C0\uB780\uD234\uB77C",
    "leaping-spider": "\uB3C4\uC57D \uAC70\uBBF8",
    "arakaalis-daughter": "\uC544\uB77C\uCE7C\uB9AC\uC758 \uB538",
    "webbed-spider": "\uAC70\uBBF8\uC904 \uB36E\uC778 \uAC70\uBBF8",
    "virulent-spider": "\uBCD1\uB3C5\uC131 \uAC70\uBBF8",
    "ink-spinner": "\uC789\uD06C \uAC70\uBBF8",
    "corrupted-arach": "\uD0C0\uB77D\uD55C \uAC70\uBBF8",
    "crypt-weaver": "\uC9C0\uD558\uC2E4 \uC9C1\uACF5",
    "mutant-arach": "\uBCC0\uC885 \uAC70\uBBF8",
    "crypt-ambusher": "\uC9C0\uD558\uC2E4 \uB9E4\uBCF5\uC790",
    "corrupted-spitter": "\uD0C0\uB77D\uD55C \uC804\uAC08",
    "cave-skitterer": "\uB3D9\uAD74 \uC7BD\uC2FC\uAC70\uBBF8",
    "spindle-spider": "\uBB3C\uB808 \uAC70\uBBF8",
    "hatchling": "\uC0C8\uB07C\uAC70\uBBF8",
    "brooding-tarantula": "\uC74C\uC6B8\uD55C \uD0C0\uB780\uD234\uB77C",
    "buried-tarantula": "\uB9E4\uC7A5\uB41C \uD0C0\uB780\uD234\uB77C",
    "maligaros-inspiration": "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uAC10\uD654",
    "enraptured-arachnid": "\uB3C4\uCDE8\uB41C \uAC70\uBBF8\uB958",
    "fetid-maw": "\uC545\uCDE8 \uB098\uB294 \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "filth-maw": "\uC624\uBB3C \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "infested-maw": "\uAC10\uC5FC\uB41C \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "plumed-chimeral": "\uAE43\uD138 \uD0A4\uBA54\uB784",
    "feral-chimeral": "\uC57C\uC0DD \uD0A4\uBA54\uB784",
    "chrome-touched-chimeral": "\uD06C\uB86C \uB3C4\uAE08 \uD0A4\uBA54\uB784",
    "chrome-infused-chimeral": "\uD06C\uB86C \uC8FC\uC785 \uD0A4\uBA54\uB784",
    "chimeric-croaker": "\uD0A4\uBA54\uB77C \uBB3C\uB801\uC774",
    "vaulting-croaker": "\uB700\uD2C0 \uBB3C\uB801\uC774",
    "chrome-touched-croaker": "\uD06C\uB86C \uB3C4\uAE08 \uBB3C\uB801\uC774",
    "carrion-queen": "\uBD80\uD328\uD558\uB294 \uC5EC\uC655",
    "carrion-minion": "\uBD80\uD328\uD558\uB294 \uC18C\uD658\uC218",
    "carrion-swarmer": "\uBD80\uD328\uD558\uB294 \uBB34\uB9AC",
    "carrion-burrower": "\uBD80\uD328\uD558\uB294 \uAD74\uCC29\uC790",
    "scum-crawler": "\uC4F0\uB808\uAE30 \uD30C\uD589 \uBC8C\uB808",
    "avian-retch": "\uAD6C\uC5ED\uC9C8\uB098\uB294 \uC0C8",
    "elder-blessed-retch": "\uC5D8\uB354\uC5D0\uAC8C \uCD95\uBCF5\uBC1B\uC740 \uB808\uCE58",
    "gluttonous-gull": "\uAC78\uC2E0\uB4E4\uB9B0 \uAC08\uB9E4\uAE30",
    "sewage-crawler": "\uC624\uC5FC\uB41C \uD30C\uD589 \uBC8C\uB808",
    "toxic-crawler": "\uB9F9\uB3C5\uC131 \uD30C\uD589 \uBC8C\uB808",
    "spine-serpent": "\uCC99\uCD94 \uB3C5\uC0AC",
    "infested-serpent": "\uAC10\uC5FC\uB41C \uB3C5\uC0AC",
    "barb-serpent": "\uAC00\uC2DC \uB3C5\uC0AC",
    "sand-serpent": "\uBAA8\uB798 \uB3C5\uC0AC",
    "porcupine-goliath": "\uD638\uC800 \uACE8\uB9AC\uC557",
    "chrome-touched-goliath": "\uD06C\uB86C \uB3C4\uAE08 \uACE8\uB9AC\uC557",
    "chrome-infused-goliath": "\uD06C\uB86C \uC8FC\uC785 \uACE8\uB9AC\uC557",
    "devourer": "\uD3EC\uC2DD\uC790",
    "soulless-watcher": "\uC601\uD63C \uC5C6\uB294 \uAC10\uC2DC\uC790",
    "drifting-eye": "\uB5A0\uB3C4\uB294 \uB208",
    "cavern-drifter": "\uC554\uAD74 \uB5A0\uB3CC\uC774",
    "sewer-drifter": "\uD558\uC218\uB3C4 \uB5A0\uB3CC\uC774",
    "plummeting-ursa": "\uACE4\uB450\uBC15\uC9C8 \uACF0",
    "tunnelfiend": "\uD130\uB110\uB9C8\uADC0",
    "infested-tunnelfiend": "\uAC10\uC5FC\uB41C \uD130\uB110\uB9C8\uADC0",
    "woods-ursa": "\uC232\uC18D \uACF0",
    "infested-ursa": "\uAC10\uC5FC\uB41C \uACF0",
    "mindless-scavenger": "\uBB34\uC2EC\uD55C \uCCAD\uC18C\uBD80",
    "scavenging-vulture": "\uCCAD\uC18C\uD558\uB294 \uC2DC\uCCB4\uB9E4",
    "rotting-vulture": "\uC369\uC5B4\uAC00\uB294 \uC2DC\uCCB4\uB9E4",
    "infested-vulture": "\uAC10\uC5FC\uB41C \uC2DC\uCCB4\uB9E4",
    "dust-scrabbler": "\uBA3C\uC9C0 \uB11D\uB9C8\uC8FC\uC774",
    "dirt-scrabbler": "\uD759 \uB11D\uB9C8\uC8FC\uC774",
    "infested-skitterer": "\uAC10\uC5FC\uB41C \uC7BD\uC2FC\uAC70\uBBF8",
    "lowlands-hopper": "\uC800\uC9C0\uB300 \uAE61\uCD1D\uC774",
    "sand-skitterer": "\uBAA8\uB798 \uC7BD\uC2FC\uAC70\uBBF8",
    "sand-leaper": "\uBAA8\uB798 \uB700\uBC15\uC774",
    "fury-hound": "\uAD11\uBD84\uD55C \uC0AC\uB0E5\uAC1C",
    "war-hound": "\uC804\uC7C1 \uC0AC\uB0E5\uAC1C",
    "pitbull-demon": "\uD22C\uACAC \uC545\uB9C8",
    "vicious-hound": "\uD3EC\uC545\uD55C \uC0AC\uB0E5\uAC1C",
    "rooster-fiend": "\uC218\uD0C9 \uB9C8\uADC0",
    "rooster-demon": "\uC218\uD0C9 \uC545\uB9C8",
    "talon-archer": "\uBC1C\uD1B1 \uAD81\uC218",
    "feral-fowl": "\uC57C\uC0DD\uB2ED",
    "fighting-bull": "\uC2F8\uC6C0\uC18C",
    "avalanche-rider": "\uC0AC\uD0DC \uAE30\uC218",
    "grazing-taurus": "\uC2DD\uC0AC\uD558\uB294 \uD669\uC18C\uC790\uB9AC",
    "savage-crab": "\uC0AC\uB098\uC6B4 \uAC8C",
    "infested-crawler": "\uAC10\uC5FC\uB41C \uD30C\uD589 \uBC8C\uB808",
    "infested-crab": "\uAC10\uC5FC\uB41C \uAC8C",
    "enraptured-crab": "\uB3C4\uCDE8\uB41C \uAC8C",
    "bleached-crawler": "\uBC31\uC0C9 \uD30C\uD589 \uBC8C\uB808",
    "spider-crab": "\uAC70\uBBF8\uAC8C",
    "parasite": "\uAE30\uC0DD\uCDA9",
    "ravenous-parasite": "\uAD76\uC8FC\uB9B0 \uAE30\uC0DD\uCDA9",
    "poisonous-parasite": "\uC911\uB3C5\uC131 \uAE30\uC0DD\uCDA9",
    "plated-parasite": "\uD310\uAE08 \uAE30\uC0DD\uCDA9",
    "spitting-parasite": "\uBC49\uB294 \uAE30\uC0DD\uCDA9",
    "vicious-parasite": "\uD3EC\uC545\uD55C \uAE30\uC0DD\uCDA9",
    "purge-hound": "\uC219\uCCAD \uC0AC\uB0E5\uAC1C",
    "plagued-arachnid": "\uC5ED\uBCD1 \uAC78\uB9B0 \uAC70\uBBF8\uB958",
    "diseased-arachnid": "\uC9C8\uBCD1 \uAC78\uB9B0 \uAC70\uBBF8\uB958",
    "maligaros-muse": "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uC2DC\uC778",
    "hybrid-arachnid": "\uC7A1\uC885 \uAC70\uBBF8\uB958",
    "scalding-arachnid": "\uB728\uAC70\uC6B4 \uAC70\uBBF8\uB958",
    "waste-lurcher": "\uD669\uBB34\uC9C0 \uB7EC\uCC98",
    "sulphurspawn": "\uC720\uD669\uC720\uCDA9",
    "wild-rhex": "\uD669\uC57C \uB809\uC2A4",
    "maternal-rhex": "\uC5B4\uBBF8 \uB809\uC2A4",
    "adolescent-rhex": "\uBBF8\uC219\uD55C \uB809\uC2A4",
    "escaped-rhex": "\uD0C8\uCD9C\uD55C \uB809\uC2A4",
    "black-scorpion": "\uAC80\uC740 \uC804\uAC08",
    "sulphuric-scorpion": "\uC720\uD669 \uC804\uAC08",
    "sand-scorpion": "\uBAA8\uB798 \uC804\uAC08",
    "predatory-scorpion": "\uC721\uC2DD \uC804\uAC08",
    "brine-vassal": "\uC5FC\uC218\uC758 \uBD09\uC2E0",
    "swarthy-mollusc": "\uAC70\uBB47\uD55C \uC5F0\uCCB4\uB958",
    "mountain-lynx": "\uC0B0\uB9E5 \uC2A4\uB77C\uC18C\uB2C8",
    "saqawine-rhoa": "\uC0AC\uCE74\uC648 \uB85C\uC544",
    "farric-tiger-alpha": "\uD398\uB8F0 \uD638\uB791\uC774 \uC6B0\uB450\uBA38\uB9AC",
    "farric-flame-hellion-alpha": "\uD398\uB8F0 \uD654\uC5FC \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC",
    "farric-frost-hellion-alpha": "\uD398\uB8F0 \uC11C\uB9AC \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC",
    "farric-lynx-alpha": "\uD398\uB8F0 \uC2A4\uB77C\uC18C\uB2C8 \uC6B0\uB450\uBA38\uB9AC",
    "farric-chieftain": "\uD398\uB8F0 \uBD80\uC871\uC7A5",
    "farric-ape": "\uD398\uB8F0 \uC720\uC778\uC6D0",
    "farric-goatman": "\uD398\uB8F0 \uC5FC\uC18C\uC778\uAC04",
    "farric-wolf-alpha": "\uD398\uB8F0\uC758 \uB291\uB300 \uC6B0\uB450\uBA38\uB9AC",
    "farric-magma-hound": "\uD398\uB8F0 \uB9C8\uADF8\uB9C8 \uC0AC\uB0E5\uAC1C",
    "farric-pit-hound": "\uD398\uB8F0 \uAD6C\uB369\uC774 \uC0AC\uB0E5\uAC1C",
    "farric-gargantuan": "\uD398\uB8F0 \uAC00\uB974\uAC15\uD280\uC544",
    "farric-ursa": "\uD398\uB8F0 \uACF0",
    "farric-taurus": "\uD398\uB8F0 \uD669\uC18C\uC790\uB9AC",
    "farric-goliath": "\uD398\uB8F0\uC758 \uACE8\uB9AC\uC557",
    "saqawine-retch": "\uC0AC\uCE74\uC648 \uB808\uCE58",
    "saqawine-vulture": "\uC0AC\uCE74\uC648 \uC2DC\uCCB4\uB9E4",
    "saqawine-rhex": "\uC0AC\uCE74\uC648 \uB809\uC2A4",
    "saqawine-cobra": "\uC0AC\uCE74\uC648 \uCF54\uBE0C\uB77C",
    "saqawine-blood-viper": "\uC0AC\uCE74\uC648 \uD53C \uB3C5\uC0AC",
    "saqawine-chimeral": "\uC0AC\uCE74\uC648 \uD0A4\uBA54\uB784",
    "fenumal-queen": "\uD398\uB204\uBB34\uC2A4 \uC5EC\uC655",
    "fenumal-scrabbler": "\uD398\uB204\uBB34\uC2A4 \uB11D\uB9C8\uC8FC\uC774",
    "fenumal-devourer": "\uD398\uB204\uBB34\uC2A4 \uD3EC\uC2DD\uC790",
    "fenumal-plagued-arachnid": "\uD398\uB204\uBB34\uC2A4 \uC5ED\uBCD1 \uAC78\uB9B0 \uAC70\uBBF8\uB958",
    "fenumal-hybrid-arachnid": "\uD398\uB204\uBB34\uC2A4 \uC7A1\uC885 \uAC70\uBBF8\uB958",
    "fenumal-widow": "\uD398\uB204\uBB34\uC2A4 \uACFC\uBD80 \uAC70\uBBF8",
    "fenumal-scorpion": "\uD398\uB204\uBB34\uC2A4 \uC804\uAC08",
    "craicic-vassal": "\uD06C\uB77C\uCE78\uC758 \uBD09\uC2E0",
    "craicic-squid": "\uD06C\uB77C\uCE78\uC758 \uC624\uC9D5\uC5B4",
    "craicic-watcher": "\uD06C\uB77C\uCE78\uC758 \uAC10\uC2DC\uC790",
    "craicic-sand-spitter": "\uD06C\uB77C\uCE78\uC758 \uBAA8\uB798 \uC804\uAC08",
    "craicic-shield-crab": "\uD06C\uB77C\uCE78\uC758 \uBC29\uD328\uAC8C",
    "craicic-savage-crab": "\uD06C\uB77C\uCE78\uC758 \uC0AC\uB098\uC6B4 \uAC8C",
    "craicic-spider-crab": "\uD06C\uB77C\uCE78\uC758 \uAC70\uBBF8\uAC8C",
    "craicic-maw": "\uD06C\uB77C\uCE78\uC758 \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "craicic-chimeral": "\uD06C\uB77C\uCE78\uC758 \uD0A4\uBA54\uB784",
    "farrul-first-of-the-plains": "\uD3C9\uC57C\uC758 \uCD5C\uCD08, \uD398\uB8F0",
    "saqawal-first-of-the-sky": "\uD558\uB298\uC758 \uCD5C\uCD08, \uC0AC\uCE74\uC648",
    "fenumus-first-of-the-night": "\uBC24\uC758 \uCD5C\uCD08, \uD398\uB204\uBB34\uC2A4",
    "craiceann-first-of-the-deep": "\uC2EC\uD574\uC758 \uCD5C\uCD08, \uD06C\uB77C\uCE78",
    "oozeback-bloom": "\uB4F1\uC9C4\uBB3C \uBB34\uC1E0\uBD80\uB9AC",
    "brood-princess": "\uC601\uCDA9 \uACF5\uC8FC",
    "the-dweller-of-the-deep": "\uC2EC\uC5F0\uC758 \uC8FC\uC778",
    "the-faun": "\uD310",
    "ungulath": "\uC6B4\uAD74\uB77C\uC2A4",
    "the-burning-menace": "\uBD88\uD0C0\uB294 \uC874\uC7AC",
    "ambrosia-daughter-of-merveil": "\uBA38\uBCA0\uC77C\uC758 \uB538 \uC554\uBE0C\uB85C\uC2DC\uC544",
    "amarissa-daughter-of-merveil": "\uBA38\uBCA0\uC77C\uC758 \uB538 \uC544\uB9C8\uB9BF\uC0AC",
    "the-great-white-beast": "\uAC70\uB300\uD55C \uBC31\uC0C9 \uC57C\uC218",
    "black-death": "\uC5B4\uB460\uC758 \uC0AC\uC2E0",
    "the-weaver": "\uC9C1\uACF5",
    "nadia-the-soothing": "\uC704\uB85C\uD558\uB294 \uB098\uB514\uC544",
    "aidan-the-frenzied": "\uACA9\uBD84\uD55C \uC5D0\uC774\uB2E8",
    "quru": "\uCFE0\uB8E8",
    "thistlesage": "\uC5C9\uAC85\uD034\uC138\uC774\uC9C0",
    "the-conqueror-wurm": "\uC815\uBCF5\uC790 \uC6DC",
    "paradisae-venenum": "\uADF9\uB77D\uC870\uC758 \uB3C5",
    "the-hundred-foot-shadow": "\uBC31 \uAC78\uC74C\uC758 \uADF8\uB9BC\uC790",
    "eyepecker": "\uB208\uBD80\uB9AC",
    "steelchaw": "\uAC15\uCCA0\uC6B0\uAC71",
    "raihara-tukohamas-loyal": "\uD22C\uCF54\uD558\uB9C8\uC758 \uCDA9\uACAC \uB77C\uC774\uD558\uB77C",
    "hollowskull-the-willing-host": "\uC790\uBC1C\uC801 \uC219\uC8FC \uD145\uBE48\uD574\uACE8",
    "the-encephalophage": "\uB1CC\uAC10\uC5FC\uADE0",
    "brinecrack": "\uC5FC\uC218\uADE0\uC5F4",
    "the-great-white-bones": "\uAC70\uB300\uD55C \uBC31\uC0C9 \uBF08",
    "tunnelworm": "\uD130\uB110\uBC8C\uB808",
    "boulderback": "\uBC14\uC704\uB4F1",
    "the-basilisk": "\uBC14\uC2E4\uB9AC\uC2A4\uD06C",
    "marrowcrush": "\uACE8\uC218 \uBD84\uC1C4\uC790",
    "the-cadaver-bull": "\uC0AC\uCCB4 \uD669\uC18C",
    "junglemare": "\uC815\uAE00\uBABD",
    "blood-stasis-": "\uD53C\uC758 \uC815\uCCB4\uAFBC",
    "blood-morpher": "\uD53C\uC758 \uBCC0\uD654\uAFBC",
    "spinesnap": "\uCC99\uCD94\uC6B0\uB450\uB451",
    "genesis-paradisae": "\uC2DC\uC870 \uADF9\uB77D\uC870",
    "death-from-above": "\uD558\uB298\uC5D0\uC11C \uB0B4\uB824\uC900 \uC8FD\uC74C",
    "guardian-of-the-mound": "\uC5B8\uB355\uC758 \uC218\uD638\uC790",
    "alpha-paradisae": "\uB300\uC7A5 \uADF9\uB77D\uC870",
    "mother-of-the-swarm": "\uBB34\uB9AC\uC758 \uC5B4\uBA38\uB2C8",
    "deathflutter": "\uC8FD\uC74C\uB0A0\uAC1C",
    "wrigglechaw": "\uAFC8\uD2C0\uAC70\uBBF8",
    "blinkflame": "\uAE5C\uBE61\uD654\uC5FC",
    "the-duchess": "\uACF5\uC791\uBD80\uC778",
    "shivershell": "\uC740\uC870\uAC00\uBE44",
    "razorleaf": "\uBA74\uB3C4\uB0A0\uBE44\uB298",
    "stranglecreep": "\uC0B4\uAE08\uAD50\uC0B4",
    "pewterfang": "\uBC31\uB78D\uC1A1\uACF3\uB2C8",
    "bladeback-guardian": "\uCE7C\uB0A0\uB4F1 \uC218\uD638\uC790",
    "strangledrift": "\uBE60\uB978\uAD50\uC0B4",
    "ghostram": "\uC720\uB839\uB9DD\uCE58",
    "tyrannursus-maximus": "\uD3ED\uAD70 \uB9C9\uC2DC\uBB34\uC2A4",
    "primal-beast": "\uC6D0\uC2DC \uC57C\uC218",
    "the-alpha-beast": "\uB300\uC7A5 \uC57C\uC218",
    "aboriginal-chieftain": "\uD1A0\uCC29 \uBD80\uC871\uC7A5",
    "bestial-maw": "\uC57C\uC218 \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "blue-frog": "\uD30C\uB780 \uAC1C\uAD6C\uB9AC",
    "common-frog": "\uC77C\uBC18 \uAC1C\uAD6C\uB9AC",
    "strange-frog": "\uC774\uC0C1\uD55C \uAC1C\uAD6C\uB9AC",
    "wild-chimeral": "\uD669\uC57C \uD0A4\uBA54\uB784",
    "nightmarish-crawler": "\uC545\uBABD\uAC19\uC740 \uD30C\uD589 \uBC8C\uB808",
    "nightmarish-carrion": "\uC545\uBABD\uAC19\uC740 \uBD80\uD328",
    "primitive-ape": "\uD0DC\uACE0\uC758 \uC720\uC778\uC6D0",
    "echo-of-the-verdant": "\uC2E0\uB85D\uC758 \uBA54\uC544\uB9AC",
    "lola-the-fierce": "\uD749\uC545\uD55C \uB864\uB77C",
    "rocco-the-bloodthirsty": "\uD53C\uC5D0 \uBAA9\uB9C8\uB978 \uB85C\uCF54",
    "ventarus": "\uBCA4\uD0C0\uB8E8\uC2A4",
    "primordial-rhoa": "\uD0DC\uACE0\uC758 \uB85C\uC544",
    "mystic-devourer": "\uC2E0\uBE44\uD55C \uD3EC\uC2DD\uC790",
    "ancient-devourer": "\uACE0\uB300 \uD3EC\uC2DD\uC790",
    "fossil-eater": "\uD654\uC11D \uD3EC\uC2DD\uC790",
    "tamipin": "\uD0C0\uBBF8\uD540",
    "tamulus": "\uD0C0\uBBAC\uB7EC\uC2A4",
    "fated-siren": "\uC608\uACAC\uB41C \uC0AC\uC774\uB80C",
    "maze-slitherer": "\uBBF8\uB85C \uBBF8\uB044\uB7FC\uBC40",
    "foreseen-spawn": "\uB0B4\uB2E4\uBCF4\uB294 \uC720\uCDA9",
    "maze-webspinner": "\uBBF8\uB85C \uAC70\uBBF8\uC904\uBC29\uC801\uAFBC",
    "maze-hatchling": "\uBBF8\uB85C \uC0C8\uB07C\uAC70\uBBF8",
    "maze-needleback": "\uBBF8\uB85C \uBC14\uB298\uB4F1",
    "spirit-of-aidan": "\uC5D0\uC774\uB2E8\uC758 \uD63C\uBC31",
    "spirit-of-nadia": "\uB098\uB514\uC544\uC758 \uD63C\uBC31",
    "balah-duke": "\uACF5\uC791 \uBC1C\uB77C",
    "mutewind-lynx": "\uACE0\uC694\uD55C \uBC14\uB78C\uB2E8 \uC2A4\uB77C\uC18C\uB2C8",
    "mother-of-the-hive": "\uBC8C\uB808\uC9D1\uC758 \uC5B4\uBA38\uB2C8",
    "the-all-seeing-eye": "\uC804\uC2DC\uC548",
    "konu-maker-of-wind": "\uBC14\uB78C \uC81C\uC791\uC790 \uCF54\uB204",
    "sheaq-maker-of-floods": "\uD64D\uC218 \uC81C\uC791\uC790 \uC250\uD06C",
    "kamaq-soilmaker": "\uD759 \uC81C\uC791\uC790 \uCE74\uB9C8\uD06C",
    "simi-the-nature-touched": "\uC790\uC5F0\uC758 \uC190\uAE38 \uC2DC\uBBF8",
    "cintiq-the-inescapable": "\uD0C8\uCD9C\uD560 \uC218 \uC5C6\uB294 \uC2E0\uD2F0\uD06C",
    "thornrunner": "\uAC00\uC2DC\uC8FC\uC790",
    "the-sunburst-queen": "\uD587\uC0B4 \uC5EC\uC655",
    "rima-deep-temptress": "\uB18D\uBC00\uD55C \uC694\uB140 \uB9AC\uB9C8",
    "inti-of-the-blood-moon": "\uD608\uC6D4\uC758 \uC778\uD2F0",
    "quetzerxi": "\uD018\uCCB4\uB974\uC2DC",
    "mutated-chieftain": "\uBCC0\uC885 \uBD80\uC871\uC7A5",
    "crazed-chieftain": "\uBBF8\uCCD0\uBC84\uB9B0 \uBD80\uC871\uC7A5",
    "infected-ambusher": "\uAC10\uC5FC\uB41C \uB9E4\uBCF5\uC790",
    "mutated-ursa": "\uBCC0\uC885 \uACF0",
    "rabid-maw": "\uAD11\uD3EC\uD55C \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "mutated-maw": "\uBCC0\uC885 \uD070\uD131\uAC1C\uAD6C\uB9AC",
    "mutated-croaker": "\uBCC0\uC885 \uBB3C\uB801\uC774",
    "putrid-chimeral": "\uAD6C\uC5ED\uC9C8 \uB098\uB294 \uD0A4\uBA54\uB784",
    "twisted-chimeral": "\uB4A4\uD2C0\uB9B0 \uD0A4\uBA54\uB784",
    "rabid-broodqueen": "\uAD11\uD3EC\uD55C \uC601\uCDA9\uC5EC\uC655",
    "mutated-broodqueen": "\uBCC0\uC885 \uC601\uCDA9\uC5EC\uC655",
    "rabid-minion": "\uAD11\uD3EC\uD55C \uC18C\uD658\uC218",
    "infected-rhoa": "\uAC10\uC5FC\uB41C \uB85C\uC544",
    "rabid-rhoa": "\uAD11\uD3EC\uD55C \uB85C\uC544",
    "mutated-rhoa": "\uBCC0\uC885 \uB85C\uC544",
    "fused-crawler": "\uC735\uD574\uB41C \uD30C\uD589 \uBC8C\uB808",
    "mutated-winterclaw": "\uBCC0\uC885 \uACA8\uC6B8\uBC1C\uD1B1",
    "mutated-adder": "\uBCC0\uC885 \uC0B4\uBB34\uC0AC",
    "infected-adder": "\uAC10\uC5FC\uB41C \uC0B4\uBB34\uC0AC",
    "putrid-serpent": "\uAD6C\uC5ED\uC9C8 \uB098\uB294 \uB3C5\uC0AC",
    "mutated-arachnid": "\uBCC0\uC885 \uAC70\uBBF8\uB958",
    "putrid-weaver": "\uAD6C\uC5ED\uC9C8 \uB098\uB294 \uC9C1\uACF5",
    "sickly-spinner": "\uBCD1\uC57D\uD55C \uBC29\uC801\uAFBC",
    "infected-spiker": "\uAC10\uC5FC\uB41C \uAC00\uC2DC\uB4F1",
    "infected-watcher": "\uAC10\uC5FC\uB41C \uAC10\uC2DC\uC790",
    "mutated-watcher": "\uBCC0\uC885 \uAC10\uC2DC\uC790",
    "infected-beast": "\uAC10\uC5FC\uB41C \uC57C\uC218",
    "risen-infested-beast": "\uC77C\uC5B4\uB09C \uAC10\uC5FC\uB41C \uC57C\uC218",
    "mutated-flamebeast": "\uBCC0\uC885 \uD654\uC5FC\uC57C\uC218",
    "crazed-flamebeast": "\uBBF8\uCCD0\uBC84\uB9B0 \uD654\uC5FC\uC57C\uC218",
    "bladetooth": "\uCE7C\uB0A0\uC774\uBE68",
    "cavestalker": "\uB3D9\uAD74 \uCD94\uC801\uC790",
    "azure-shrieker": "\uB2F4\uCCAD\uC0C9 \uBE44\uBA85\uC790",
    "charged-shrieker": "\uCDA9\uC804\uB41C \uBE44\uBA85\uC790",
    "azure-ape": "\uB2F4\uCCAD\uC0C9 \uC720\uC778\uC6D0",
    "gorgol-alpha": "\uACE0\uB974\uACE8 \uC6B0\uB450\uBA38\uB9AC",
    "cave-weta": "\uB3D9\uAD74 \uC6E8\uD0C0",
    "unstable-weta": "\uBD88\uC548\uC815\uD55C \uC6E8\uD0C0",
    "skitterling": "\uC0C8\uB07C \uC7BD\uC2FC\uAC70\uBBF8",
    "azurite-widow": "\uB0A8\uB3D9\uC11D \uACFC\uBD80",
    "wild-bristle-matron": "\uC57C\uC0DD \uD138\uC9D0\uC2B9 \uC5B4\uBBF8",
    "wild-hellion-alpha": "\uC57C\uC0DD \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC",
    "wild-brambleback": "\uC57C\uC0DD \uAC00\uC2DC\uB098\uBB34\uB4F1",
    "vivid-watcher": "\uD608\uAE30 \uAC10\uC2DC\uC790",
    "vivid-vulture": "\uD608\uAE30 \uC2DC\uCCB4\uB9E4",
    "vivid-abberarach": "\uD608\uAE30 \uC560\uBC84\uB77C\uB77C\uD06C",
    "primal-rhex-matriarch": "\uC6D0\uC2DC \uB809\uC2A4 \uC5B4\uBBF8",
    "primal-crushclaw": "\uC6D0\uC2DC \uBC15\uC0B4\uBC1C\uD1B1",
    "primal-cystcaller": "\uC6D0\uC2DC \uB0AD\uC885\uC18C\uD658\uC0AC",
    "black-morrigan": "\uAC80\uC740 \uBAA8\uB9AC\uAC74"
  };
  return get(idMappings, id, "");
}
var BeastsPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-02d4f71b"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row justify-center items-center q-mb-md q-gutter-x-md relative-position" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "row items-center reg-exp-box" }, " \uC740.\uBAA8 ", -1));
const _hoisted_4 = {
  class: "q-mx-auto",
  style: { "width": "300px" }
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "q-ml-sm" };
const _hoisted_7 = { class: "text-right col-grow" };
const _hoisted_8 = { class: "text-right col-grow" };
const _sfc_main = defineComponent({
  ...{
    name: "BeastsPage"
  },
  __name: "BeastsPage",
  setup(__props) {
    onMounted(async () => {
      await getMetaData();
      registerInterval(async () => {
        await getMetaData();
      }, 1e3 * 60 * 10);
    });
    onBeforeUnmount(() => {
      removeInterval();
    });
    const api = axios.create();
    const { registerInterval, removeInterval } = useInterval();
    const currencyType = ref("chaos");
    const chaosType = computed(() => currencyType.value === "chaos");
    const divineType = computed(() => currencyType.value === "divine");
    const showValuableBeast = ref(true);
    const originList = ref([]);
    const list = ref([]);
    async function getMetaData() {
      const response = await api.get("https://www.logisnet.co.kr/dev-api/poe/beasts/Mercenaries");
      const res = response.data.lines;
      res.forEach((data) => {
        originList.value.push(new Beast(data));
      });
      if (showValuableBeast.value) {
        list.value = originList.value.filter((beast) => Number(beast.chaos) >= 20);
      } else {
        list.value = originList.value;
      }
      onShowTypeChanged();
    }
    function priorityClass(chaos) {
      const value = Number(chaos);
      if (value >= 300) {
        return "text-red";
      } else if (value >= 200) {
        return "text-orange-7";
      } else if (value >= 100) {
        return "text-amber-7";
      } else if (value >= 50) {
        return "text-yellow-5";
      } else if (value >= 20) {
        return "text-yellow-2";
      }
      return "";
    }
    function onShowTypeChanged() {
      if (showValuableBeast.value) {
        list.value = originList.value.filter((beast) => Number(beast.chaos) >= 20);
      } else {
        list.value = originList.value;
      }
      makeRegExp();
    }
    function onBeastClicked(beast) {
      beast.selected = !beast.selected;
      makeRegExp();
    }
    function makeRegExp() {
      const selected = list.value.filter((b) => b.selected);
      console.log(selected);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createBaseVNode("div", {
              class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
              onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
            }, [
              createVNode(QImg, {
                src: "icons/chaos.png",
                width: "32px"
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
            }, [
              createVNode(QImg, {
                src: "icons/divine.png",
                width: "32px"
              })
            ], 2),
            createVNode(QCheckbox, {
              label: "20\uCE74 \uC774\uC0C1\uB9CC \uBCF4\uAE30",
              modelValue: showValuableBeast.value,
              "onUpdate:modelValue": [
                _cache[2] || (_cache[2] = ($event) => showValuableBeast.value = $event),
                onShowTypeChanged
              ],
              dense: ""
            }, null, 8, ["modelValue"])
          ]),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (beast, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(["row items-center q-mb-sm cursor-pointer", priorityClass(beast.chaos)]),
                onClick: ($event) => onBeastClicked(beast)
              }, [
                createVNode(QCheckbox, {
                  modelValue: beast.selected,
                  "onUpdate:modelValue": [($event) => beast.selected = $event, makeRegExp],
                  dense: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createBaseVNode("div", _hoisted_6, toDisplayString(beast.name), 1),
                chaosType.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", _hoisted_7, toDisplayString(beast.chaos), 1),
                  createVNode(QImg, {
                    src: "icons/chaos.png",
                    class: "q-ml-xs",
                    width: "20px"
                  })
                ], 64)) : createCommentVNode("", true),
                divineType.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_8, toDisplayString(beast.divine), 1),
                  createVNode(QImg, {
                    src: "icons/divine.png",
                    class: "q-ml-xs",
                    width: "20px"
                  })
                ], 64)) : createCommentVNode("", true)
              ], 10, _hoisted_5);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
});
var BeastsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02d4f71b"]]);
export { BeastsPage as default };
