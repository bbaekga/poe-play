var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Q as QImg } from "./QImg.js";
import { Q as QPage } from "./QPage.js";
import { s as defineComponent, v as onMounted, r as ref, y as openBlock, aa as createElementBlock, B as createVNode, A as withCtx, T as Transition, ab as Fragment, U as withDirectives, ac as vShow, C as createBaseVNode, as as withModifiers, D as createTextVNode, al as createCommentVNode, am as renderList, F as toDisplayString, ad as pushScopeId, ae as popScopeId } from "./index.js";
import { api } from "./axios.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
import { i as identity, a as isArray, b as baseEach, o as orderBy } from "./orderBy.js";
import "./axios2.js";
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function castFunction(value) {
  return typeof value == "function" ? value : identity;
}
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}
var uniqueList = [
  {
    name: "\uC6D0\uC8C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5e5bedfe240bc41900ba7596ec8d3e9735137a770cfa9440b1aa9014a4d535b",
    id: "Original Sin",
    weightValue: "1128.89",
    defaultDustAmount: "2257780",
    quantityDustAmount: "2709336"
  },
  {
    name: "\uC6B4\uBA85\uC758 \uC800\uD56D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1bc3d1f0836c10381f2bf813810490faeb61a5c4fcbe4dbdc4eead98c139a78f",
    id: "Defiance of Destiny",
    weightValue: "891.16",
    defaultDustAmount: "1782320",
    quantityDustAmount: "2138784"
  },
  {
    name: "\uC554\uCD08\uC758 \uD30C\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/505a421b443798ecb4d4718ac579527999088058bfd6c0529923d883a13b105b",
    id: "Reefbane",
    weightValue: "851.24",
    defaultDustAmount: "1702480",
    quantityDustAmount: "2042976"
  },
  {
    name: "\uBB34\uAD11\uC758 \uC5F0\uB9C9 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ea8d488bbef13a09b8504ce71bf28c25bd0973a14e143b449b0610cf0a8b1e0",
    id: "Replica Shroud of the Lightless",
    weightValue: "791.78",
    defaultDustAmount: "1583560",
    quantityDustAmount: "1900272"
  },
  {
    name: "\uC815\uCCB4 \uAC10\uC625",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/988c4e2d7ff67e0f34da26bec239f7a2437a408d21c8ef0e2aed4ce835e5b34d",
    id: "Stasis Prison",
    weightValue: "791.78",
    defaultDustAmount: "1583560",
    quantityDustAmount: "1900272"
  },
  {
    name: "\uC885\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b2207a8c8161af5a6e169cb9b12ce40cd1a683126bf43c85334231de74efa559",
    id: "The Squire",
    weightValue: "768.72",
    defaultDustAmount: "1537440",
    quantityDustAmount: "1844928"
  },
  {
    name: "\uB77C\uD0A4\uC544\uD0C0\uC758 \uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0cb949799cc3b638c762506eb308ede215eb6895c8272f69f7d8f75a2fbaa4ad",
    id: "Rakiatas Dance",
    weightValue: "768.72",
    defaultDustAmount: "1537440",
    quantityDustAmount: "1844928"
  },
  {
    name: "\uB09A\uC2DC\uAFBC\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/82afc3df8248c230c8cb461ab3292716394b07a6ba60494084ee05fdff9bbe87",
    id: "Anglers Plait",
    weightValue: "734.29",
    defaultDustAmount: "1468580",
    quantityDustAmount: "1762296"
  },
  {
    name: "\uD5E4\uB4DC\uD5CC\uD130",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/605d3dd39ba27df505ec7b8ca6df0012ddb561d9d8bc7d95d507b5b44b4dce60",
    id: "Headhunter",
    weightValue: "891.16",
    defaultDustAmount: "1782320",
    quantityDustAmount: "2138784"
  },
  {
    name: "\uACF5\uD5C8\uC758 \uD0C4\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7fe8e9bba57589884c93f42ddf10f35bd0ad851aaed6e1ef669f633e533aef80",
    id: "Voidforge",
    weightValue: "703.49",
    defaultDustAmount: "1406980",
    quantityDustAmount: "1688376"
  },
  {
    name: "\uCF69\uACE0\uB974\uC758 \uB05D\uC5C6\uB294 \uACA9\uB178 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9d8a5f9f76a1e713fb94cb53c2c55935d8b8ab26d739cc63850194d89f5ed37",
    id: "Replica Kongors Undying Rage",
    weightValue: "703.49",
    defaultDustAmount: "1406980",
    quantityDustAmount: "1688376"
  },
  {
    name: "\uBA54\uC544\uB9AC\uC758 \uD0C4\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4fa89fe2d7f6d4b14037c8a8551d2141f9f48c806ae69fca420895edfc6f4b2d",
    id: "Echoforge",
    weightValue: "703.49",
    defaultDustAmount: "1406980",
    quantityDustAmount: "1688376"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uC12C\uAD11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/07267a0673684f1f4faf76a5c642f6e0f09ecbf887c6b4f818e6090e263076d6",
    id: "Lioneyes Glare",
    weightValue: "683",
    defaultDustAmount: "1366000",
    quantityDustAmount: "1639200"
  },
  {
    name: "\uBCC4\uC758 \uD0C4\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/699ed1fbd92e90c074b6f7aa293d546290faa1dad3296dc9863591a4467cce3f",
    id: "Starforge",
    weightValue: "703.49",
    defaultDustAmount: "1406980",
    quantityDustAmount: "1688376"
  },
  {
    name: "\uCF54\uD14D\uC2A4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5ae7602d3fbc013168d5abea9293daa8de6667d48a9b2db686318c26c6c1b2b2",
    id: "Replica Cortex",
    weightValue: "1064.09",
    defaultDustAmount: "2128180",
    quantityDustAmount: "2553816"
  },
  {
    name: "\uB9C8\uBC95\uC0AC\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f9c65d856457d5dcc6db0f6fdfd9e70b822b8b5b196bdc31dd51823dfdfca025",
    id: "Mageblood",
    weightValue: "891.16",
    defaultDustAmount: "1782320",
    quantityDustAmount: "2138784"
  },
  {
    name: "\uD53C\uC758 \uC815\uC218",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/abb7dc56c1016b2c5202185403815e3686ddfa47bb3f8ff3dda47e8a36849725",
    id: "Essentia Sanguis",
    weightValue: "683",
    defaultDustAmount: "1366000",
    quantityDustAmount: "1639200"
  },
  {
    name: "\uC804\uB3C4\uC131 \uADE0\uC5F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e9f2898ffc8affad474ad3d8f3e640fc353dc92f04c4d359bb7188d811640a8",
    id: "Voltaxic Rift",
    weightValue: "643.79",
    defaultDustAmount: "1287580",
    quantityDustAmount: "1545096"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uACBD\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4932ed60ffdebda6720e0942a15404a127d57d31c758e0b2cdd3d1d7083e4a40",
    id: "Atziris Disfavour",
    weightValue: "643.79",
    defaultDustAmount: "1287580",
    quantityDustAmount: "1545096"
  },
  {
    name: "\uBC14\uB8E8\uB098\uC2A4\uD2B8\uB77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/140710ae4904e8f48a1efab5debcf9b134d2d621ff03b50755c06409f8f10a64",
    id: "Varunastra",
    weightValue: "643.79",
    defaultDustAmount: "1287580",
    quantityDustAmount: "1545096"
  },
  {
    name: "\uD669\uD63C\uC758 \uC544\uCE68 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/475dcad860adfc113bf44da4bcfa5b771730fff289a72f3e1bc882d8384b7217",
    id: "Replica Duskdawn",
    weightValue: "643.79",
    defaultDustAmount: "1287580",
    quantityDustAmount: "1545096"
  },
  {
    name: "\uD53C\uC758 \uD0D0\uC0C9\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7b758e9834e8652007c64b90f92624e82852159f7d00527dcc947d47359649ca",
    id: "Bloodseeker",
    weightValue: "606.84",
    defaultDustAmount: "1213680",
    quantityDustAmount: "1456416"
  },
  {
    name: "\uAD6C\uC6D0\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ed9998c0c757736c64968be46512c24aeb0299e5324a6cf04667a4358f3eae71",
    id: "The Saviour",
    weightValue: "606.84",
    defaultDustAmount: "1213680",
    quantityDustAmount: "1456416"
  },
  {
    name: "\uB514\uBE44\uB098\uB9AC\uC6B0\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/397d2541159d25d3be0676bcfe5b9c85dcec9ed2ee4e00d031a78e617fe33102",
    id: "Divinarius",
    weightValue: "683",
    defaultDustAmount: "1366000",
    quantityDustAmount: "1639200"
  },
  {
    name: "\uD22C\uCF54\uD558\uB9C8\uC758 \uC694\uC0C8 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b234ded305b3eceac1ad534af64d93b8d7f2f104c8685b319beeb236a2c7856e",
    id: "Replica Tukohamas Fortress",
    weightValue: "589.16",
    defaultDustAmount: "1178320",
    quantityDustAmount: "1413984"
  },
  {
    name: "\uC2E4\uC138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9061b2b2d8efc84c00f2192a1deb1ee96dba1aa38a84dae0d8a02ed545bbd4b5",
    id: "Kingmaker",
    weightValue: "683",
    defaultDustAmount: "1366000",
    quantityDustAmount: "1639200"
  },
  {
    name: "\uC601\uD63C \uC218\uD655\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f32e021c1ec22b4e50db649806689e62b5f2d5c94025b08e38748f9090409dbd",
    id: "Soul Taker",
    weightValue: "663.11",
    defaultDustAmount: "1326220",
    quantityDustAmount: "1591464"
  },
  {
    name: "\uCE7C\uB780\uB4DC\uB77C\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b4ddea4fbee60b8f6f2122c994a8f65607e51b98181aab024f9eccb145161ba5",
    id: "Kalandras Touch",
    weightValue: "572",
    defaultDustAmount: "1144000",
    quantityDustAmount: "1372800"
  },
  {
    name: "\uBE44\uB178\uC758 \uBD80\uC5CC\uCE7C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8b9aa5a82d8474a022ff81c8a243de785202a9653912c7d9953e4239d97c27ae",
    id: "Binos Kitchen Knife",
    weightValue: "539.17",
    defaultDustAmount: "1078340",
    quantityDustAmount: "1294008"
  },
  {
    name: "\uB9C8\uB85C\uD788 \uC5D0\uB974\uD0A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/077636b9a17cad209fad05537dcc7c218e71d34b5412e29263e261d3cd5e09d1",
    id: "Marohi Erqi",
    weightValue: "523.46",
    defaultDustAmount: "1046920",
    quantityDustAmount: "1256304"
  },
  {
    name: "\uC219\uBA85\uC758 \uBC14\uB78C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e0736ce68bd5cdec06d75d52f5fa0125c7c081e6f5415bdda4f45139ddde75e",
    id: "The Winds of Fate",
    weightValue: "493.41",
    defaultDustAmount: "986820",
    quantityDustAmount: "1184184"
  },
  {
    name: "\uC99D\uC624\uC758 \uD0C4\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f59a29de3423d5ba9ad4aefd3ffa894aff88830fa3394e721a9d7dbddd73e8b4",
    id: "Hateforge",
    weightValue: "389.5",
    defaultDustAmount: "779000",
    quantityDustAmount: "934800"
  },
  {
    name: "\uC6B8\uB124\uD1A8\uC758 \uB9F9\uC138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d7810e52f86fa49a7ea3cd5b5ab19b8fcca3f3d860bc8e2ac73df38d6d74254f",
    id: "Uul-Netols Vow",
    weightValue: "367.15",
    defaultDustAmount: "734300",
    quantityDustAmount: "881160"
  },
  {
    name: "\uC601\uD63C \uC2B9\uCC9C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ce76f5b010e38636fbc36b794c93f735190af6ceac087a2c96d139d704585c07",
    id: "Soul Ascension",
    weightValue: "317.64",
    defaultDustAmount: "635280",
    quantityDustAmount: "762336"
  },
  {
    name: "\uB2C8\uBBF8\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c99f00a832b0730e866e0b2215fbf078177dedbae3c6bb076fafb50b5f0dd329",
    id: "Nimis",
    weightValue: "317.64",
    defaultDustAmount: "635280",
    quantityDustAmount: "762336"
  },
  {
    name: "\uD5E4\uB4DC\uD5CC\uD130 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a05d92e2e2085884f540acc2ae09390ccdf4e7322858802d22ced29dcdf598c9",
    id: "Replica Headhunter",
    weightValue: "316.7",
    defaultDustAmount: "633400",
    quantityDustAmount: "760080"
  },
  {
    name: "\uB367\uC5C6\uB294 \uCE7C\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/913f9a2749cb8fd48e3e7828fac0628a860a07fd018d8bd66cd02744060ddd77",
    id: "Ephemeral Edge",
    weightValue: "250.01",
    defaultDustAmount: "500020",
    quantityDustAmount: "600024"
  },
  {
    name: "\uC2DC\uB828\uC758 \uD0D1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f22906fe9f99282ade66021d2c90491da26275a7255cc03c0bed4bbfe67ecab6",
    id: "The Tower of Ordeals",
    weightValue: "282.22",
    defaultDustAmount: "564440",
    quantityDustAmount: "677328"
  },
  {
    name: "\uC57D\uD574\uC9C4 \uC228\uACB0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ec58ebf1406701cdbe6fdafa06e603bf4bf1158291b280ee959a8b07091f7446",
    id: "Replica Bated Breath",
    weightValue: "206",
    defaultDustAmount: "412000",
    quantityDustAmount: "494400"
  },
  {
    name: "\uAD50\uC0B4\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9a77e95f0cbf07285d64202a91228c2d1d854648d65633a7f98d81bc9582f2df",
    id: "Stranglegasp",
    weightValue: "203.28",
    defaultDustAmount: "406560",
    quantityDustAmount: "487872"
  },
  {
    name: "\uD398\uB8F0\uC758 \uBAA8\uD53C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c37ec5390766c5093054b3896664a90b4bb05e97e0d920d2a58d02480315c812",
    id: "Replica Farruls Fur",
    weightValue: "186.58",
    defaultDustAmount: "373160",
    quantityDustAmount: "447792"
  },
  {
    name: "\uD0A4\uD0C0\uBC14\uC758 \uC5F0\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/98223ba232a4f62acc5733841c288be14622adfc3976bb35878389a5db040d6c",
    id: "Kitavas Feast",
    weightValue: "181.15",
    defaultDustAmount: "362300",
    quantityDustAmount: "434760"
  },
  {
    name: "\uC131\uC6B4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/09e10c393fcccecb68378f9dcedc44fca1e98c98f775a759c0d2a9eaf2771cb5",
    id: "Replica Nebulis",
    weightValue: "181.15",
    defaultDustAmount: "362300",
    quantityDustAmount: "434760"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f421094561e04288da8c9e865cda9ef7ce577c9edca67f6c6dc347973965d09",
    id: "Malachais Mark",
    weightValue: "175.87",
    defaultDustAmount: "351740",
    quantityDustAmount: "422088"
  },
  {
    name: "\uC708\uB4DC\uB9AC\uD37C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ed41bc273396b987c4785ee5bdeef16a6216f0280729ff3d42a57a9ad8f96f0",
    id: "Replica Windripper",
    weightValue: "170.75",
    defaultDustAmount: "341500",
    quantityDustAmount: "409800"
  },
  {
    name: "\uACE0\uD1B5\uC758 \uBA4D\uC5D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ea7f098d111ef1c3c7996d64cadaa6200babbf5bdef4914ab05afac1cf87df5a",
    id: "Yoke of Suffering",
    weightValue: "236.36",
    defaultDustAmount: "472720",
    quantityDustAmount: "567264"
  },
  {
    name: "\uC601\uC6D0\uC758 \uC5F0\uB9C9 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/90feeecfa9107a3c35b28286d6b81234847309fd4d8a6e753ee06b57325114a4",
    id: "Replica Eternity Shroud",
    weightValue: "165.78",
    defaultDustAmount: "331560",
    quantityDustAmount: "397872"
  },
  {
    name: "\uC804\uBA78\uC758 \uC811\uADFC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2e9cf434831b43b93b253f504d2908180f5fbbfe6a1571dbe23970d08c7f857f",
    id: "Annihilations Approach",
    weightValue: "165.78",
    defaultDustAmount: "331560",
    quantityDustAmount: "397872"
  },
  {
    name: "\uC601\uC6D0\uD55C \uC9C0\uC625",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/427b107f65699d70423088daea6e4f7959546f09a3ebb71f0d2312bd547a3dd2",
    id: "Eternal Damnation",
    weightValue: "165.78",
    defaultDustAmount: "331560",
    quantityDustAmount: "397872"
  },
  {
    name: "\uD669\uD63C\uC758 \uC544\uCE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ac2ddcf5b5e026c3d7380a2fba54d253628c6af72c5e50ab8c43366b57c1598",
    id: "Duskdawn",
    weightValue: "160.95",
    defaultDustAmount: "321900",
    quantityDustAmount: "386280"
  },
  {
    name: "\uC5FC\uC218 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0cb09f8f6e96b1a6eca2062cef6da390379f0c9021b7166326e31b97f425006e",
    id: "The Brine Crown",
    weightValue: "156.26",
    defaultDustAmount: "312520",
    quantityDustAmount: "375024"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uC608\uB9AC\uD568 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/83b6717dcf19a8cd324813de37cd69c94c801065dc574a9fe4464abf280e40a1",
    id: "Replica Atziris Acuity",
    weightValue: "156.26",
    defaultDustAmount: "312520",
    quantityDustAmount: "375024"
  },
  {
    name: "\uAC00\uB8E8\uCE78\uC758 \uBE44\uD589",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/56dcf3c09d0b66245975dcd694c78fdf7d5da5362b619e4743b55d9ed364628d",
    id: "Garukhans Flight",
    weightValue: "151.71",
    defaultDustAmount: "303420",
    quantityDustAmount: "364104"
  },
  {
    name: "\uADF9\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/77eddef4bac5a62410b9e730e22c2dd9c460a1aea2a3d0e45d5f8b367e335760",
    id: "The Utmost",
    weightValue: "151.26",
    defaultDustAmount: "302520",
    quantityDustAmount: "363024"
  },
  {
    name: "\uD22C\uCF54\uD558\uB9C8\uC758 \uC694\uC0C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f7b26ee73fd7e001a9fb4a16313f75543d378c070246917e23dd0222d5b3373d",
    id: "Tukohamas Fortress",
    weightValue: "147.29",
    defaultDustAmount: "294580",
    quantityDustAmount: "353496"
  },
  {
    name: "\uB9C8\uB098\uD3ED\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7755850110f60da5d1aaf9586f929696c42dc83d56c77c153aecc0a05322cbc",
    id: "Manastorm",
    weightValue: "210",
    defaultDustAmount: "420000",
    quantityDustAmount: "504000"
  },
  {
    name: "\uBB3C\uACB0 \uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/34d947f97f873a52aceea5856bc3134f953c52ac0c7730cfb72ce65c8bd890f4",
    id: "Tidebreaker",
    weightValue: "165.78",
    defaultDustAmount: "331560",
    quantityDustAmount: "397872"
  },
  {
    name: "\uC608\uC5B8\uC790\uC758 \uD3EC\uB3C4\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c09b6840c42beb3304ea22e47bab7aa24a87f0e8408e8dca2854e0a27c276c25",
    id: "Wine of the Prophet",
    weightValue: "139.53",
    defaultDustAmount: "279060",
    quantityDustAmount: "334872"
  },
  {
    name: "\uD478\uC5B4\uC870\uC774\uC758 \uC740\uC2E0\uCC98 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa0eb7b7668e94cd0478bee09d46b3dadf9a6ad82ac2adbfac686c73b736d8be",
    id: "Replica Poorjoys Asylum",
    weightValue: "229.47",
    defaultDustAmount: "458940",
    quantityDustAmount: "550728"
  },
  {
    name: "\uBCC4\uC744 \uBD80\uB974\uB294 \uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7d4cc0da1fa7ea1f464d719d44871b2ccd1ac3cb377f5d5bc389e87789435ac0",
    id: "Starcaller",
    weightValue: "139.53",
    defaultDustAmount: "279060",
    quantityDustAmount: "334872"
  },
  {
    name: "\uC7A5\uBBF8\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fe2cf4a0f5c458cfea8e410990d8001c0d67c5eee750800fef8a5711c7ca6c9e",
    id: "Legacy of the Rose",
    weightValue: "139.53",
    defaultDustAmount: "279060",
    quantityDustAmount: "334872"
  },
  {
    name: "\uC5D4\uD2B8\uB85C\uD53C\uC758 \uC720\uB9B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c60443f661a43ba2d64014795c8193f52e986ca2f4a4a2fbb2992ca732b17a36",
    id: "Entropic Devastation",
    weightValue: "134.79",
    defaultDustAmount: "269580",
    quantityDustAmount: "323496"
  },
  {
    name: "\uC9D3\uBB34\uB974\uB294 \uC6D0\uD55C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1948ce4c3e52b64ee424248be3ee217f084f10268416a52619a0ec392dcf0129",
    id: "Festering Resentment",
    weightValue: "130.43",
    defaultDustAmount: "260860",
    quantityDustAmount: "313032"
  },
  {
    name: "\uD0D0\uC704\uB974 \uC774\uC2AC\uB9AC\uC758 \uB9DD\uD1A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ce8967009b82d163633ce307a6782a6776810043121b4b446016283113fb223b",
    id: "Cloak of Tawmr Isley",
    weightValue: "127.05",
    defaultDustAmount: "254100",
    quantityDustAmount: "304920"
  },
  {
    name: "\uBE44\uB8E1\uC758 \uB0A0\uAC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/65bd80d254ad89fde76ea7589a392f212db544f25836417a3224d0be783b8806",
    id: "Wing of the Wyvern",
    weightValue: "122.94",
    defaultDustAmount: "245880",
    quantityDustAmount: "295056"
  },
  {
    name: "\uAE08\uBE5B \uC0AC\uAE30\uAFBC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/34ee9e367183264e97656152b807c61016dc710a76c9a314edcb5a9dae90a347",
    id: "The Golden Charlatan",
    weightValue: "119.36",
    defaultDustAmount: "238720",
    quantityDustAmount: "286464"
  },
  {
    name: "\uC774\uB2E8\uC758 \uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e0be7d2a75c3abdf4114dcd24af63be9cffb7f507c5a793ae81edd43b392e0a9",
    id: "Hand of Heresy",
    weightValue: "116.86",
    defaultDustAmount: "233720",
    quantityDustAmount: "280464"
  },
  {
    name: "\uC194\uB77C\uB9AC\uC2A4\uC758 \uC1E0\uD1F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/54d6d3d71cbbf9f279c542b3cf5c6f74b225c6ff42eac6a2e9f676e49ddd6e77",
    id: "Eclipse Solaris",
    weightValue: "116.27",
    defaultDustAmount: "232540",
    quantityDustAmount: "279048"
  },
  {
    name: "\uC544\uB77C\uCE7C\uB9AC\uC758 \uC1A1\uACF3\uB2C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c5d5c64b27ea2ab3eb2a9fed5d91bc6e95a8cf953f1d0c03f704609bfe5eea38",
    id: "Arakaalis Fang",
    weightValue: "116.27",
    defaultDustAmount: "232540",
    quantityDustAmount: "279048"
  },
  {
    name: "\uACB0\uBC31\uD55C \uC21C\uAD50\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6fc2f1e170a23789974e82e6abd78e05f548016f069079811a6220175bf7ab8d",
    id: "Martyr of Innocence",
    weightValue: "112.89",
    defaultDustAmount: "225780",
    quantityDustAmount: "270936"
  },
  {
    name: "\uC0AC\uC774\uB80C\uC758 \uB178\uB798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/381141b848f652db6202e166864958a59d2a61a065a276ec3f07fb7eb41b27d0",
    id: "Song of the Sirens",
    weightValue: "111.95",
    defaultDustAmount: "223900",
    quantityDustAmount: "268680"
  },
  {
    name: "\uC81C\uB974\uD53C\uC758 \uB9C8\uC9C0\uB9C9 \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/87eb0451891447f656539bf3235dc53a9de2dbef2bf5db86fa9d9c6d6598844f",
    id: "Zerphis Last Breath",
    weightValue: "106.41",
    defaultDustAmount: "212820",
    quantityDustAmount: "255384"
  },
  {
    name: "\uC54C\uBCA0\uB978\uC758 \uC801\uB300 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/08d920703fb7dfbd44c9c50e5046f8b8731718eb9a08e7afd6ec3fb74c36719d",
    id: "Replica Alberons Warpath",
    weightValue: "103.31",
    defaultDustAmount: "206620",
    quantityDustAmount: "247944"
  },
  {
    name: "\uD53C\uB85C \uBB3C\uB4E0 \uBCF5\uC218\uC758 \uAD6C\uC18D\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/82554f3c120412d51dc584a2c4af152d6aa0694594442119bdb6ff9727ceb0c0",
    id: "Binds of Bloody Vengeance",
    weightValue: "100.8",
    defaultDustAmount: "201600",
    quantityDustAmount: "241920"
  },
  {
    name: "\uB9D0\uB85C\uB2C8\uC758 \uAE30\uACC4 \uC7A5\uCE58 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8b73175944e106419047a8a8145ef9182a60285de8efb4176030304803f21f3e",
    id: "Replica Maloneys Mechanism",
    weightValue: "91.79",
    defaultDustAmount: "183580",
    quantityDustAmount: "220296"
  },
  {
    name: "\uD2B8\uB9AC\uD30C\uB17C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6f785ec46d4d78418108e27311fc565c7e4528d00c92d23920cf56aa97bba8ce",
    id: "Replica Trypanon",
    weightValue: "79.18",
    defaultDustAmount: "158360",
    quantityDustAmount: "190032"
  },
  {
    name: "\uB784\uB77C\uCF00\uC26C\uC758 \uC870\uBC14\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e7de8e2dbc3b506970fe94766ec43bbf39a3c07170141ad4a32eba72fddceb0a",
    id: "Ralakeshs Impatience",
    weightValue: "70.35",
    defaultDustAmount: "140700",
    quantityDustAmount: "168840"
  },
  {
    name: "\uD558\uB298 \uB2EC\uB9AC\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/944767c222045e73b730353bf104d849ab7fde7978930eb519d02552469624b6",
    id: "Skyforth",
    weightValue: "69.77",
    defaultDustAmount: "139540",
    quantityDustAmount: "167448"
  },
  {
    name: "\uC8FC\uC785\uB41C \uAD50\uB450\uBCF4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/302bb9bed09e39630f109f2022defc2b1431cb5a9f731aa7c7d6930548124ffd",
    id: "Infused Beachhead",
    weightValue: "67.73",
    defaultDustAmount: "135460",
    quantityDustAmount: "162552"
  },
  {
    name: "\uC545\uB839 \uAD70\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/69908b8c53fb1b9d0f6947522ef8f12218b1be2e10dc360682ca44d1bc7d88df",
    id: "Wraithlord",
    weightValue: "66.31",
    defaultDustAmount: "132620",
    quantityDustAmount: "159144"
  },
  {
    name: "\uC704\uB300\uD55C \uB291\uB300\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c232e1a7880a16f1a35fe9f906cedaa5fb69073c6557b03c6540e21fbb4250a4",
    id: "Eyes of the Greatwolf",
    weightValue: "65.76",
    defaultDustAmount: "131520",
    quantityDustAmount: "157824"
  },
  {
    name: "\uC5B4\uB460 \uC608\uACAC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/10d65b9b155f80fabd179f813182333a816b3ca582c22ef00595c1bf72d2525e",
    id: "The Dark Seer",
    weightValue: "62.5",
    defaultDustAmount: "125000",
    quantityDustAmount: "150000"
  },
  {
    name: "\uB9AC\uC2AC\uB77C\uC0AC\uC758 \uAC10\uAC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7eff53ab14483d733d2f198da2bd00cfcf2276e487c5eb4f17cd00d47a7aacad",
    id: "Ryslathas Coil",
    weightValue: "62.5",
    defaultDustAmount: "125000",
    quantityDustAmount: "150000"
  },
  {
    name: "\uBE59\uD0C0 \uAD11\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d14a3e3d51924a111ac612c3e047c086124ac88b4b2be422415b307ccf724f8f",
    id: "The Vinktar Square",
    weightValue: "61.99",
    defaultDustAmount: "123980",
    quantityDustAmount: "148776"
  },
  {
    name: "\uC6D0\uD55C\uC758 \uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/61f9e612535d3a9a8ec919f2fe2a1bc96e88ad78982f7576b7e39e95cbc5d69e",
    id: "Enmitys Embrace",
    weightValue: "61.99",
    defaultDustAmount: "123980",
    quantityDustAmount: "148776"
  },
  {
    name: "\uC6B4\uBA85\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/64ec13f8bb4152bb443a7b567938f7c3dc29a26e3716e9b3c4b4bba196901d9a",
    id: "Bound By Destiny",
    weightValue: "60",
    defaultDustAmount: "120000",
    quantityDustAmount: "144000"
  },
  {
    name: "\uB62C\uB9AC\uB97C \uD2B8\uB294 \uC18D\uC0AD\uC784",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc8ba0849c32e6b1082f809681046f75471538fcbbca1bcf8f8a9eed6eefdf8f",
    id: "Coiling Whisper",
    weightValue: "59.7",
    defaultDustAmount: "119400",
    quantityDustAmount: "143280"
  },
  {
    name: "\uC194\uB77C\uB9AC\uC2A4\uC758 \uADF8\uB298",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a8f0b173cdd0646471cb901405d7188b6fe98f575a205a812e975273b11a00ed",
    id: "Shade of Solaris",
    weightValue: "58.91",
    defaultDustAmount: "117820",
    quantityDustAmount: "141384"
  },
  {
    name: "\uBC30\uC2E0\uC758 \uC4F4\uB9DB",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ee3a1ed9bb011e9c81c888ddc6e13cc74fc971ff5be3ec35038c42932734140e",
    id: "Betrayals Sting",
    weightValue: "58.43",
    defaultDustAmount: "116860",
    quantityDustAmount: "140232"
  },
  {
    name: "\uBD80\uD328\uC758 \uC885\uBCF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/81e70dc3364d2d7929bbbb7baf62754086255bb6d5dd0f8847edceedd37f80b9",
    id: "Servant of Decay",
    weightValue: "58.43",
    defaultDustAmount: "116860",
    quantityDustAmount: "140232"
  },
  {
    name: "\uACF5\uD5C8 \uCDA9\uC804\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9793d50498658e23826e40cbd03166f72382417dd02446f4ab3c4f35349a1d56",
    id: "Void Battery",
    weightValue: "56.73",
    defaultDustAmount: "113460",
    quantityDustAmount: "136152"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uD654\uC0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1559919cf97ac5620eb6a24cfcd8ddf4ea8c74cad3c1a155645bdca40e3bce5b",
    id: "Rigwalds Quills",
    weightValue: "56.73",
    defaultDustAmount: "113460",
    quantityDustAmount: "136152"
  },
  {
    name: "\uD669\uB3D9 \uCCA0\uAC11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/da232a9848ad6545f9481fed2e4a081fe8f66a3cbbc39e4fedef1ccab540666c",
    id: "The Brass Dome",
    weightValue: "56.73",
    defaultDustAmount: "113460",
    quantityDustAmount: "136152"
  },
  {
    name: "\uB8E8\uB098\uB9AC\uC2A4\uC758 \uBE5B",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/51f3a12ac8ae275529be8cbd366bf2473b0de70d4320a38d0c7bde726746c30c",
    id: "Light of Lunaris",
    weightValue: "55.53",
    defaultDustAmount: "111060",
    quantityDustAmount: "133272"
  },
  {
    name: "\uB514\uC54C\uB77C\uC758 \uC545\uD589",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/968845ca6082496d2e8c4a70cbfc9666b037d319a2934b089404e6bf9a29697e",
    id: "Diallas Malefaction",
    weightValue: "72.46",
    defaultDustAmount: "144920",
    quantityDustAmount: "173904"
  },
  {
    name: "\uC601\uD63C \uAC70\uC5F4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0159b86ea5f21407f9251f99d790f1cc48d9a144bb4977b3a89cb36b4a57b666",
    id: "Soul Ripper",
    weightValue: "53.91",
    defaultDustAmount: "107820",
    quantityDustAmount: "129384"
  },
  {
    name: "\uADF8\uB8E8\uC2A4\uCEEC\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/950028db71418e02c47951035235490a44bd78b003fab9a789cd681153e0b045",
    id: "Gruthkuls Pelt",
    weightValue: "74.63",
    defaultDustAmount: "149260",
    quantityDustAmount: "179112"
  },
  {
    name: "\uC52C\uC758 \uBD80\uD65C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/60d68b86bf0e3bbf5868d396d8a2d62114aeac3463a967c633384250d89bd3f5",
    id: "Sins Rebirth",
    weightValue: "53.91",
    defaultDustAmount: "107820",
    quantityDustAmount: "129384"
  },
  {
    name: "\uBC14\uB78C\uC758 \uAC78\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/540dd71298463323be78abaaaf279424b54fb71204e50fefe9991e3c52fa131f",
    id: "Seven-League Step",
    weightValue: "53.47",
    defaultDustAmount: "106940",
    quantityDustAmount: "128328"
  },
  {
    name: "\uAE30\uB85D\uAD00\uC758 \uB3C4\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a36351dda9b6aa7d29c8e37e07bef8fe117de672a0c9ebb83b5e671df9bb9165",
    id: "The Arkhons Tools",
    weightValue: "52.61",
    defaultDustAmount: "105220",
    quantityDustAmount: "126264"
  },
  {
    name: "\uC544\uB8EC\uC758 \uAE30\uB465 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c01026aa0b8888eee8a033333c40ea59ea46eb1c17427c9ff4d2c54d3d54910",
    id: "Replica Pillars of Arun",
    weightValue: "51.91",
    defaultDustAmount: "103820",
    quantityDustAmount: "124584"
  },
  {
    name: "\uBB34\uD55C\uC758 \uC18D\uC0AD\uC784",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3f9ed385c600253ad589334533d68e869c1a14d1d3937a9a24caf51cae73196d",
    id: "Whispers of Infinity",
    weightValue: "51.91",
    defaultDustAmount: "103820",
    quantityDustAmount: "124584"
  },
  {
    name: "\uBE44\uD638\uC758 \uC624\uB85C\uB77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/04362f7089645d0a2c24f2da19efb881e3e8eda165c33852998e7a02a5146a6e",
    id: "Aegis Aurora",
    weightValue: "50.4",
    defaultDustAmount: "100800",
    quantityDustAmount: "120960"
  },
  {
    name: "\uC2DC\uAC04\uC758 \uD30C\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/04d4b2357d851b90e99ad9417b84cb04c58cf83c38dafe43e483189675df37c0",
    id: "The Tides of Time",
    weightValue: "50.4",
    defaultDustAmount: "100800",
    quantityDustAmount: "120960"
  },
  {
    name: "\uC77C\uACF1 \uAC1C\uC758 \uAC00\uB974\uCE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6663627f70c6802ebed6c235102912baaa009fe89c5b216e42e8f9c6e2abb230",
    id: "Seven Teachings",
    weightValue: "50",
    defaultDustAmount: "100000",
    quantityDustAmount: "120000"
  },
  {
    name: "\uAC00\uC2DC\uC6B0\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b21e48169132eb463259c39f0c588503cdbca703d8e7a5f5d83d3f3e81ef95fd",
    id: "Spinehail",
    weightValue: "49.34",
    defaultDustAmount: "98680",
    quantityDustAmount: "118416"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uC704\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a795704e35182598bbf805f66baa31acbba5335ed13829012c09268bc387da4",
    id: "Atziris Splendour",
    weightValue: "48.93",
    defaultDustAmount: "97860",
    quantityDustAmount: "117432"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uAE30\uACC4\uC2E4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0a92b90295920c392c8d15041d1ae16945bca976d34e1567c0dfd113ba114e46",
    id: "Doryanis Machinarium",
    weightValue: "48.93",
    defaultDustAmount: "97860",
    quantityDustAmount: "117432"
  },
  {
    name: "\uBB34\uAD11\uC758 \uC5F0\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4adb18086ba2ff70cc2ad67d76400ee3a9e87879f4f03caf2be01ef0eefe187d",
    id: "Shroud of the Lightless",
    weightValue: "47.51",
    defaultDustAmount: "95020",
    quantityDustAmount: "114024"
  },
  {
    name: "\uC5B4\uB460\uC758 \uAD6D\uC655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5119c045b733d30728077652bf1d4066b5cb3274318f813c8b166a155f2db0e7",
    id: "The Dark Monarch",
    weightValue: "46.51",
    defaultDustAmount: "93020",
    quantityDustAmount: "111624"
  },
  {
    name: "\uBCFC\uC758 \uD5CC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/940897a2c2f0d462f526061208d764d0da804e1a19ec5b2dae5e62990f756078",
    id: "Volls Devotion",
    weightValue: "46.12",
    defaultDustAmount: "92240",
    quantityDustAmount: "110688"
  },
  {
    name: "\uC0E4\uBE0C\uB860\uC758 \uACC4\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ffd2e77d2e31e475d9e87d533ce1768497571bebf95f7f6ebe8867f638a642d",
    id: "Shavronnes Revelation",
    weightValue: "46.12",
    defaultDustAmount: "92240",
    quantityDustAmount: "110688"
  },
  {
    name: "\uC708\uB4DC\uB9AC\uD37C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/64a198b2a33fb79d6652426d949ab7830ff4b72e80ae83617b72ac3f42ff1b5d",
    id: "Windripper",
    weightValue: "46.12",
    defaultDustAmount: "92240",
    quantityDustAmount: "110688"
  },
  {
    name: "\uCEE4\uB2E4\uB780 \uC77C\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7dfbc541ee96bb1c8ded95650f1b9407fda76c8553da1b83f5bde7a23e4cc6ff",
    id: "Magna Eclipsis",
    weightValue: "46.12",
    defaultDustAmount: "92240",
    quantityDustAmount: "110688"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uC8FC\uBA39",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/44033dfdab9690f325f30a8bda31dd52f77095eba4303f892b7f208d11fe1b09",
    id: "Doryanis Fist",
    weightValue: "44.78",
    defaultDustAmount: "89560",
    quantityDustAmount: "107472"
  },
  {
    name: "\uD398\uB8F0\uC758 \uBAA8\uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a4d3dc3f04b12471f7f5a23dde522e150f0818bc216ac66919b555c89e29fd04",
    id: "Farruls Fur",
    weightValue: "44.78",
    defaultDustAmount: "89560",
    quantityDustAmount: "107472"
  },
  {
    name: "\uC778\uB514\uACE4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fe1e869228af52217ac40aaf043783cbb3537933cf82d00d4bef25f01e5bb67b",
    id: "Indigon",
    weightValue: "44.78",
    defaultDustAmount: "89560",
    quantityDustAmount: "107472"
  },
  {
    name: "\uD398\uB8F0\uC758 \uCD94\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6809d4c0a28a895435a3f9390d733249f34779195ac856bcc8487e98ef9c0aac",
    id: "Farruls Chase",
    weightValue: "44.78",
    defaultDustAmount: "89560",
    quantityDustAmount: "107472"
  },
  {
    name: "\uD569\uB9AC\uC801\uC778 \uAD50\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ed2e351226f9a7264b70f1d26a7f696cae9f8ccec350d7f845c74b113c3ff6f",
    id: "Rational Doctrine",
    weightValue: "43.84",
    defaultDustAmount: "87680",
    quantityDustAmount: "105216"
  },
  {
    name: "\uCE74\uC634\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cffa6f14356da0f9ce9e211ad44f02fc71d97077640701c18346560fe81dc6e1",
    id: "Kaoms Heart",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uC6B0\uC8FC\uC758 \uC601\uC0AC\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7b9c40175168d7fe8386b4726bdd262d53a4fb4852be1c603146116ab2948c9f",
    id: "Astral Projector",
    weightValue: "53.47",
    defaultDustAmount: "106940",
    quantityDustAmount: "128328"
  },
  {
    name: "\uBD84\uAD11\uC758 \uC218\uD638\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/315e5424bcdcb3cb7e41840b5dcdc531f69b932ea33857ac56fa800286d5a2c1",
    id: "Prism Guardian",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uC804\uC0AC\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/86aa9e05459c2ecd1b5c350eab2fb0adffedd21226955bde014f3537e86f8424",
    id: "Warriors Legacy",
    weightValue: "53.47",
    defaultDustAmount: "106940",
    quantityDustAmount: "128328"
  },
  {
    name: "\uB798\uC2A4\uD53C\uC2A4 \uAD6C\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3c567d89c14ee711f580e5cefd9d72ee3d0f4f3141359e4d7ba60b41fbf1359e",
    id: "Rathpith Globe",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uBD80\uC11C\uC9C4 \uBBFF\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/640a41bb6cce87b6809eb82632bf32b85db3e02638588db0b28b5547e934f6cb",
    id: "Broken Faith",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uBCA0\uB098\uB9AC\uC6B0\uC2A4\uC758 \uAD00\uCE21\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/efd9da3aad2a1550f11e7d6cc4fd155ff1e2208a5fec842380ef701358345b1c",
    id: "Venarius Astrolabe",
    weightValue: "53.47",
    defaultDustAmount: "106940",
    quantityDustAmount: "128328"
  },
  {
    name: "\uCF54\uC2A4\uD504\uB9AC\uC758 \uC7A5\uB09C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7d6ad72d2dd60b29d37ecb203e1b00f87517caa7fd3c9394e7cd7593b498b45",
    id: "Cospris Malice",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uC778\uD384\uC0AC\uC758 \uC0C1\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7511464be9fc2a4449d459b3cee559ae290e3f237b5945a40140d04ea13bcada",
    id: "Inpulsas Broken Heart",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uAE30\uB9CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1c8c9b76c3ee195e3d39acc3cfd3344b921ca949a4b7b15364de4a04957fdd6d",
    id: "Doryanis Delusion",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uC5EC\uC655\uC758 \uAC08\uB9DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/17f4e2640cfea6876a1379d8febda46a2d6a48795403b08d4168e13ab48e8533",
    id: "The Queens Hunger",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uB9D0\uB85C\uB2C8\uC758 \uAE30\uACC4 \uC7A5\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/10038922778331d3bbcc4bb265477023a15f246b9872491ee175ae9e178e0b1b",
    id: "Maloneys Mechanism",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uCE74\uC634\uC758 \uC2EC\uC7A5 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ea0068467e9239d3263767d361688007f606dcbbe50a8e27b096f7881a9927d3",
    id: "Replica Kaoms Heart",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uBD89\uC740 \uBC1C\uC790\uCDE8 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/29fcaf09a6c255b8ae81dfbd5f786b3e8c58d6ad3d56c4dcde9e87f1663eb9a8",
    id: "Replica Red Trail",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uBE44\uB9AC\uB514\uC758 \uC7A5\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f82dc5de50498e9236a5148a2c1b6c132b7590b2215e0b81fd13a540c9097be0",
    id: "Viridis Veil",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uB3C4\uD50C\uAC31\uC5B4 \uC704\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0aa7dbc6f3acbdb96e84e796a714340de79e3ce4fd88c420f67ef63d4f1da885",
    id: "Doppelg%C3%A4nger Guise",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uC5EC\uC2E0\uC758 \uC740\uCD1D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5b410cffa436bb08b9ca644c62973a29f3acb0a653d8beb912d88f64176f5fbf",
    id: "Grace of the Goddess",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uCC9C\uB465 \uC8FC\uBA39",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5ab8df81714bc5cde22cb500665391927d2f6a9c412c89048c534e176eaf050",
    id: "Thunderfist",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uC2A4\uD14C\uD310 \uC57C\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d6e03c9f351d3985c30327814dffd7b108b1b66cd17395e7a53b379e833fb833",
    id: "Steppan Eard",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uC774\uB2E8\uC790\uC758 \uBA74\uC0AC\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/092249d622140eb4564c9ff6cd92a17d8745407fd6be95a1f92830e14686d7ef",
    id: "Heretics Veil",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uB9C8\uD0A4\uB098 \uBBF8\uD2B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3434cc1519fb0e32841c5e655ca0b9a1c76f2392ae6bac1b58802a7f4b3d7e17",
    id: "Machina Mitts",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uD3EC\uC790 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/75dd288fd1441c34aa0a5523aaf975c9eb8d1c1c60fd184a8be2d7697911ca27",
    id: "Sporeguard",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uD504\uB85C\uD1A0\uD0C0\uC785",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e1ee1791bbc466780506681241a20b7432c503477376340a5be9099ebb168f52",
    id: "Doryanis Prototype",
    weightValue: "42.21",
    defaultDustAmount: "84420",
    quantityDustAmount: "101304"
  },
  {
    name: "\uC804\uCC3D\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab1c64910620dbe18c02416999dbaba5460b14d68555fb23d5dabe58e67fda2f",
    id: "Progenesis",
    weightValue: "41.32",
    defaultDustAmount: "82640",
    quantityDustAmount: "99168"
  },
  {
    name: "\uBAA8\uC21C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bf39a3b9ace2f14522a44ab659c6a6f542cd39dc6a4a646b04603608dcc60c8b",
    id: "Paradoxica",
    weightValue: "40.98",
    defaultDustAmount: "81960",
    quantityDustAmount: "98352"
  },
  {
    name: "\uB204\uADF8\uB7EC\uC9C4 \uD544\uBA78\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5096d5a74d2f4a9e83069cd6c973d999a9fdcdebe119560e6de83432e0f0558d",
    id: "The Yielding Mortality",
    weightValue: "40.98",
    defaultDustAmount: "81960",
    quantityDustAmount: "98352"
  },
  {
    name: "\uBAA8\uC21C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7fd9d4411b19008dfe47afa2255f3f60760883146306912f238bb40a491c8d11",
    id: "Replica Paradoxica",
    weightValue: "40.98",
    defaultDustAmount: "81960",
    quantityDustAmount: "98352"
  },
  {
    name: "\uB9E4\uD639 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a4cd57bfe86ae55ce7bf94c359150193db207c310f60e491ae197f6446be6273",
    id: "Replica Allure",
    weightValue: "40.98",
    defaultDustAmount: "81960",
    quantityDustAmount: "98352"
  },
  {
    name: "\uC794\uC778\uD55C \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2adc2fa5cb1f2dfb40af5fd17dd50851c713a37deaf8765cde778afe2b00f07a",
    id: "Brutal Restraint",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uB178\uC5EC\uC6C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/28ad601fc2e969ce2140d94c8038dd34a59fddff08e3935ff5a91a84482d2952",
    id: "Hyrris Ire",
    weightValue: "39.79",
    defaultDustAmount: "79580",
    quantityDustAmount: "95496"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dc3117ffa697d20fcfbe7da39de6c7ee4496f98dd79f735447b51294d4eeb5a0",
    id: "Doedres Skin",
    weightValue: "39.79",
    defaultDustAmount: "79580",
    quantityDustAmount: "95496"
  },
  {
    name: "\uC601\uC6D0\uC758 \uC5F0\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d5e703470bc21cce95f6790430f28c2d8cd950099cea405c33d677d8a0d23848",
    id: "The Eternity Shroud",
    weightValue: "39.79",
    defaultDustAmount: "79580",
    quantityDustAmount: "95496"
  },
  {
    name: "\uD615\uC81C\uB2E8\uC758 \uC99D\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6b8deee944ca2be046b348a53b58f36cf2d7617cec7cff27ccbe8d8faf87489e",
    id: "Badge of the Brotherhood",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uBD88\uBA78\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1bea6884ae66e1ca01eb76dd9c9b3ef298076730412045ffde8fd668a5ba3913",
    id: "The Immortal Will",
    weightValue: "43.48",
    defaultDustAmount: "86960",
    quantityDustAmount: "104352"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uC0AC\uB0E5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3a638f8623bf4bdf5b3ef464032452ff320f4ad09bc2c7af3f03e24c86237018",
    id: "Rigwalds Hunt",
    weightValue: "40.98",
    defaultDustAmount: "81960",
    quantityDustAmount: "98352"
  },
  {
    name: "\uC644\uBCBD\uD55C \uAD6C\uC870 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/789e59684837c9ba9eccd9ba6ac5c73237fa72730f46373e9aea8d11a18ada52",
    id: "Replica Perfect Form",
    weightValue: "39.79",
    defaultDustAmount: "79580",
    quantityDustAmount: "95496"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uB178\uC5EC\uC6C0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7d34069826f5f63a85593d6be3c1368ba17484500d2eff7a226ece7f0ca94c6f",
    id: "Replica Hyrris Ire",
    weightValue: "39.79",
    defaultDustAmount: "79580",
    quantityDustAmount: "95496"
  },
  {
    name: "\uD3EC\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/baacc378618c4ee4c9805804244ff48d7e58782b39add996b0743f00d40f41de",
    id: "The Surrender",
    weightValue: "38.63",
    defaultDustAmount: "77260",
    quantityDustAmount: "92712"
  },
  {
    name: "\uD30C\uC1C4\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8fc61559a8817f641f1c28206aafab700c4fa1a87d857ee388dd3d94e878dc5",
    id: "Disintegrator",
    weightValue: "38.63",
    defaultDustAmount: "77260",
    quantityDustAmount: "92712"
  },
  {
    name: "\uC9C0\uC2DD\uC758 \uB9E4\uB4ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f9a9c6aa586b355be2733d2ba70bbdf07d65b8ab8fb6f6b9298ef87dc8168bca",
    id: "Loreweave",
    weightValue: "38.63",
    defaultDustAmount: "77260",
    quantityDustAmount: "92712"
  },
  {
    name: "\uC815\uC2E0 \uD3EC\uC2DD\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab4ae4bf75ffa81863506582f993c5b5953a2e2fd29fc2c065dd63cb0e8cae8b",
    id: "The Devourer of Minds",
    weightValue: "37.5",
    defaultDustAmount: "75000",
    quantityDustAmount: "90000"
  },
  {
    name: "\uC0E4\uBE0C\uB860\uC758 \uAC89\uC637",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/885432843fa3fcaf428be9f85303966fc1c5c2224b0db75a06874aa7e59fcabb",
    id: "Shavronnes Wrappings",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC5B4\uB450\uC6B4 \uB0C9\uC18C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1018f5d7a211d902b3a84bed48de3f1f3e32afd9fdb0d9558bc3dff0f16198f7",
    id: "Darkscorn",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uD0A8\uCE20\uD0A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d8a1f349a22d6f496d90f4482b3ae8ca8ea9791f8702147ca41fbfb21931e40b",
    id: "Kintsugi",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC544\uBCF4\uB9AD\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bcd363ff726110404e4fbefabc4f6f72d44b4611cfcd43f857678c9ccb82b26f",
    id: "Arborix",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC544\uD3A9\uC758 \uD328\uAD8C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1eed18ba5219f5a478af36458a1cf26a6765f225b49379c470cc82b716df7abb",
    id: "Apeps Supremacy",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC1C4\uB3C4\uD558\uB294 \uC0DD\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9102586732dbc8d84f2dacc9a0ed6e0bbb54c0b3bda7f784bc1ab7730671a60c",
    id: "The Surging Thoughts",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uB0A0\uBD99\uC774 \uB05D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f64de08e0ce0f3c1fb58b705209a85ad53b31e89b87e2d221c86e31d41f71eb8",
    id: "Replica Cold Iron Point",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uD234\uC758 \uBAB0\uB77D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8a2b7640c08d1749d65765a8d6460047074cf03e9a1d4bd89347b8ea0357ad03",
    id: "Replica Tulfall",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC81C\uB3C5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/042b41cc0fe5ab0bcb9e270e88ce2448305bd8c483ee3dd96df0b09b9ba0165b",
    id: "The Admiral",
    weightValue: "36.41",
    defaultDustAmount: "72820",
    quantityDustAmount: "87384"
  },
  {
    name: "\uC544\uBC84\uB77C\uC2A4\uC758 \uBC1C\uAD7D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/89d8288e8e28cf1eeac7f2f29a66faedf5b169787516cdbcb916fece17955544",
    id: "Abberaths Hooves",
    weightValue: "34.61",
    defaultDustAmount: "69220",
    quantityDustAmount: "83064"
  },
  {
    name: "\uBB20\uB2C8\uB974",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4783c04e9bdbbfd39bf38290bcb7d11a34f4a7c9828e677b0b72bb8937d930ed",
    id: "Mj%C3%B6lner",
    weightValue: "34.32",
    defaultDustAmount: "68640",
    quantityDustAmount: "82368"
  },
  {
    name: "\uAE4A\uC740 \uC2EC\uC5F0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8bcdf7db27f78181c1de88627531424327331340826b7108ee8c5cca611c487",
    id: "Replica Abyssus",
    weightValue: "34.32",
    defaultDustAmount: "68640",
    quantityDustAmount: "82368"
  },
  {
    name: "\uC548\uAC1C \uBCBD \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e02440c46eae8558f9a0ccc640d88a1e8d6438f292d4a10ae7052d5ab7db0b70",
    id: "Replica Mistwall",
    weightValue: "34.32",
    defaultDustAmount: "68640",
    quantityDustAmount: "82368"
  },
  {
    name: "\uC9C0\uC2DD\uC758 \uB9E4\uB4ED \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dc993bb1d42f1a04a87202ed8241afc2b0b235ef0fe1c96c84959e15412bf1bf",
    id: "Replica Loreweave",
    weightValue: "38.63",
    defaultDustAmount: "77260",
    quantityDustAmount: "92712"
  },
  {
    name: "\uD398\uB8F0\uC758 \uAE09\uC2B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ed3b6781ca9b8790e0b6f31ece653b1e1deb03bf9e248d80940c7c281a0a2bc",
    id: "Farruls Pounce",
    weightValue: "33.32",
    defaultDustAmount: "66640",
    quantityDustAmount: "79968"
  },
  {
    name: "\uC0B4\uC810\uC870\uAC01\uC0AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc808844a065bf739ecc1f8c6fd722d591aa1a8677942f83555f5cb1ce1a726f",
    id: "Fleshcrafter",
    weightValue: "33.32",
    defaultDustAmount: "66640",
    quantityDustAmount: "79968"
  },
  {
    name: "\uBB34\uB364\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3346a994fb5ee6a4cf2d342c73225a92089294e50daec74803a4b1e648ac7888",
    id: "Gravebind",
    weightValue: "33.32",
    defaultDustAmount: "66640",
    quantityDustAmount: "79968"
  },
  {
    name: "\uCE74\uC634\uC758 \uD0C1\uC6D4\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b63c94b87f9d5e9981acb0d2a53381d5c193ee80421a4aa0522a8f2b449f45ce",
    id: "Kaoms Primacy",
    weightValue: "32.35",
    defaultDustAmount: "64700",
    quantityDustAmount: "77640"
  },
  {
    name: "\uD3ED\uAD70\uC758 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8ac5bec0fa1373d6d5714efa83eca14ff4032413613f26412091d98d83be16dc",
    id: "Crown of the Tyrant",
    weightValue: "32.35",
    defaultDustAmount: "64700",
    quantityDustAmount: "77640"
  },
  {
    name: "\uAC08\uB9DD\uC758 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b8d5bccf5ee9639f75cadf1035f678b4cf0d3c0bbc990b411c99b9f51cd43cd5",
    id: "Crest of Desire",
    weightValue: "32.35",
    defaultDustAmount: "64700",
    quantityDustAmount: "77640"
  },
  {
    name: "\uC783\uC5B4\uBC84\uB9B0 \uD569\uC77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0756fe94567cd542c4c778144f3de6b4f7ce30e8aac5b592a5f3a170ee411fd2",
    id: "Lost Unity",
    weightValue: "31.67",
    defaultDustAmount: "63340",
    quantityDustAmount: "76008"
  },
  {
    name: "\uD398\uB8F0\uC758 \uC774\uBE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eb9022e8a5c20d34ec440fa8e164c94701d319afa64cef7192c375774e2eae22",
    id: "Farruls Bite",
    weightValue: "31.41",
    defaultDustAmount: "62820",
    quantityDustAmount: "75384"
  },
  {
    name: "\uB3C5\uC0AC\uC5D0\uAC8C \uBC14\uCE58\uB294 \uACF5\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ce14d3befb482e0bbde5032998dc96c2bcb336f9e41e22c5397323f568a82911",
    id: "Offering to the Serpent",
    weightValue: "31.41",
    defaultDustAmount: "62820",
    quantityDustAmount: "75384"
  },
  {
    name: "\uC624\uB9AC\uC544\uC2A4\uC758 \uC885\uB9D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0b3f68ae5f136c59d03440b0f9d76f3479f739f9db71ad540550e9fa446a061a",
    id: "Oriaths End",
    weightValue: "30.75",
    defaultDustAmount: "61500",
    quantityDustAmount: "73800"
  },
  {
    name: "\uB367\uC5C6\uB294 \uC790\uC758 \uC758\uBCF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6f017257e218a8a4e55d5c055732565a737f9551c104f7c3f58ff53b901cc49e",
    id: "Garb of the Ephemeral",
    weightValue: "30.49",
    defaultDustAmount: "60980",
    quantityDustAmount: "73176"
  },
  {
    name: "\uB9C8\uC544\uD0C0\uC758 \uAC00\uB974\uCE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/89eb78557a09624aab9537b6d01de5be8db4f3cebb271ebcf6c9e1452fc2ee53",
    id: "Maatas Teaching",
    weightValue: "30.49",
    defaultDustAmount: "60980",
    quantityDustAmount: "73176"
  },
  {
    name: "\uC2DC\uCCB4 \uBCF4\uD589\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3b4045379ba5e4be847d4643dcc2fa4acd57f90934799fd9a90216ff1538d275",
    id: "Corpsewalker",
    weightValue: "29.6",
    defaultDustAmount: "59200",
    quantityDustAmount: "71040"
  },
  {
    name: "\uB124 \uBC88\uC9F8 \uB9F9\uC138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/23b94f9ae8743d0a728e4c4ad403f1ff18ba957b9f7bbb3146238aafffec80e4",
    id: "The Fourth Vow",
    weightValue: "29.6",
    defaultDustAmount: "59200",
    quantityDustAmount: "71040"
  },
  {
    name: "\uCCA0\uC758 \uC694\uC0C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/285444dcde5f292053b0858c1ac6ec299c941eacb21a1aa3e140aed87b9539e6",
    id: "The Iron Fortress",
    weightValue: "33.32",
    defaultDustAmount: "66640",
    quantityDustAmount: "79968"
  },
  {
    name: "\uC57C\uC624\uB9E5\uC758 \uD569\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2cc427d99667da169570c7cc78f1cd9379d4a848bf30a54be8011d23fa34a201",
    id: "Yaomacs Accord",
    weightValue: "38.63",
    defaultDustAmount: "77260",
    quantityDustAmount: "92712"
  },
  {
    name: "\uCFFC\uD2B8\uB77C\uC758 \uC81C\uC5B4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/86637243665621411771f89be1342b811e4a723eb79ab460e62bc12d60ef5a90",
    id: "Qotras Regulator",
    weightValue: "28.74",
    defaultDustAmount: "57480",
    quantityDustAmount: "68976"
  },
  {
    name: "\uC1C4\uB3C4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5c13208917ad772503a5076ff6d8bb6f032647f2adebf812457fc5f700cae5e1",
    id: "Replica Stampede",
    weightValue: "37.5",
    defaultDustAmount: "75000",
    quantityDustAmount: "90000"
  },
  {
    name: "\uBAB0\uB824\uC624\uB294 \uD3ED\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e6befa3d3dd1298ab617dcf864efbc464c51d969a6e7a752ce5ea801b723b5fd",
    id: "The Tempest Rising",
    weightValue: "28.74",
    defaultDustAmount: "57480",
    quantityDustAmount: "68976"
  },
  {
    name: "\uC6B0\uD234\uB77C\uC758 \uAD76\uC8FC\uB9BC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/769f2946c6eff60faf832642649e11f80fc5713f7b9550334c26575c5ada7433",
    id: "Utulas Hunger",
    weightValue: "27.91",
    defaultDustAmount: "55820",
    quantityDustAmount: "66984"
  },
  {
    name: "\uCC9C\uACF5\uC758 \uC8D4\uC1E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dc65757f99aa89948350dac4d055482ab5da57fa7989b5e889094749dc7af81a",
    id: "The Celestial Brace",
    weightValue: "27.91",
    defaultDustAmount: "55820",
    quantityDustAmount: "66984"
  },
  {
    name: "\uC800\uD56D\uC758 \uB9DD\uD1A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3a4b8654b1d3d98221cf109a940b55a6ab4148da64fdaa169ca5f300b929a7e4",
    id: "Cloak of Defiance",
    weightValue: "27.09",
    defaultDustAmount: "54180",
    quantityDustAmount: "65016"
  },
  {
    name: "\uBAA8\uB798 \uD3ED\uD48D\uC758 \uC5BC\uAD74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/68ffe47cda2728f6ccc205f9aacf2b0fe57862518616cbe5d71d5d19423b2aae",
    id: "Sandstorm Visage",
    weightValue: "28.74",
    defaultDustAmount: "57480",
    quantityDustAmount: "68976"
  },
  {
    name: "\uC81C\uB974\uD53C\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a41a55cb32361f26a3353df046b17c6e41362eeb41a2a8e1b8f80da1128f379a",
    id: "Zerphis Heart",
    weightValue: "26.52",
    defaultDustAmount: "53040",
    quantityDustAmount: "63648"
  },
  {
    name: "\uC99D\uC624\uC758 \uB9DB",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a499b4f52b769d39da02f4bd302e40a11fb892d2d5057ad2ed5d1bdd337e64ff",
    id: "Taste of Hate",
    weightValue: "25.54",
    defaultDustAmount: "51080",
    quantityDustAmount: "61296"
  },
  {
    name: "\uD0C1\uC6D4\uD55C \uD559\uC2B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/22be498f8f4a6ae30e0a83a6dd5b21673ca7c5b3a580e4a73f36ddb40763a8e4",
    id: "Inspired Learning",
    weightValue: "25.54",
    defaultDustAmount: "51080",
    quantityDustAmount: "61296"
  },
  {
    name: "\uC11C\uB9AC \uC228\uACB0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/084eacc0e262d5f0e4495115dc56fd94b35408d35c90981c51fae75728a49c7e",
    id: "Replica Frostbreath",
    weightValue: "25.54",
    defaultDustAmount: "51080",
    quantityDustAmount: "61296"
  },
  {
    name: "\uAD70\uC8FC\uC758 \uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/15b2e6dcd0c379fafa4d373f782765fdd86ba8494537c0ab5ce9ef439e45bd9a",
    id: "Hand of the Lords",
    weightValue: "25.54",
    defaultDustAmount: "51080",
    quantityDustAmount: "61296"
  },
  {
    name: "\uACC4\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4475e1fd80c5c9dc39601d9d38767f34e6b1a908b432362691da1330a3576282",
    id: "The Covenant",
    weightValue: "24.79",
    defaultDustAmount: "49580",
    quantityDustAmount: "59496"
  },
  {
    name: "\uADF9\uD55C\uC758 \uD610\uC624",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/21ebf79bb409d740a92ec5f1dcdd25f59c2b2352e6ec826c8f74076d5a2d6f56",
    id: "Anathema",
    weightValue: "24.79",
    defaultDustAmount: "49580",
    quantityDustAmount: "59496"
  },
  {
    name: "\uAC78\uC2E0\uB4E4\uB9B0 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a80e9468a7362d88bae68e265a1ffca758da46b6b8ac4c34e718d99ec5a42aef",
    id: "The Devouring Diadem",
    weightValue: "28.74",
    defaultDustAmount: "57480",
    quantityDustAmount: "68976"
  },
  {
    name: "\uBCC0\uD654\uC758 \uBC14\uB78C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/96bd3227e41109cf2284bf054ab26a48d21f0808b274feb5dcb9fa6efca4a837",
    id: "Winds of Change",
    weightValue: "23.37",
    defaultDustAmount: "46740",
    quantityDustAmount: "56088"
  },
  {
    name: "\uC2A4\uBC1C\uB9B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a9505b9f96b66e0fbae9e2060a4d9d76e43c847009ddc7d79f31f22c9089072e",
    id: "Svalinn",
    weightValue: "26.3",
    defaultDustAmount: "52600",
    quantityDustAmount: "63120"
  },
  {
    name: "\uD669\uC81C\uC758 \uCCA0\uC57C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8968d72bb8d81a14792b24f7501586a6d016338d445cd7ecb4b6d2d83157f69d",
    id: "Emperors Vigilance",
    weightValue: "22.69",
    defaultDustAmount: "45380",
    quantityDustAmount: "54456"
  },
  {
    name: "\uACC4\uC57D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/db971c57c2d5c1275487964bed94a6dcc75def94455623720b9eae64affe8267",
    id: "Replica Covenant",
    weightValue: "24.79",
    defaultDustAmount: "49580",
    quantityDustAmount: "59496"
  },
  {
    name: "\uBD80\uB791\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/32fa98ef72b0d1f3a70ab1573369942088d2b396c4ad227b1113dd69207ebd7a",
    id: "The Pariah",
    weightValue: "22.03",
    defaultDustAmount: "44060",
    quantityDustAmount: "52872"
  },
  {
    name: "\uD610\uC624\uC2A4\uB7EC\uC6B4 \uCDE8\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f81ee942d30814f79f0cb27fcf9855475396a7377753b8e88a1e2ee49663ea69",
    id: "Abhorrent Interrogation",
    weightValue: "22.03",
    defaultDustAmount: "44060",
    quantityDustAmount: "52872"
  },
  {
    name: "\uD3ED\uD48D\uC758 \uD574\uBC29",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7c4cb580b772915399a3c4806ff08865236b680ca4b1d43d1ccc8dee9773612f",
    id: "The Tempests Liberation",
    weightValue: "22.03",
    defaultDustAmount: "44060",
    quantityDustAmount: "52872"
  },
  {
    name: "\uBD89\uC740 \uC545\uBABD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7d47d89fb80b39dca2c6faa1be8b6529d70b48bbd174db86c22ba74b19f82887",
    id: "The Red Nightmare",
    weightValue: "21.92",
    defaultDustAmount: "43840",
    quantityDustAmount: "52608"
  },
  {
    name: "\uB179\uC0C9 \uC545\uBABD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cbf264b2a51565615a4edc399503bb874b916e532084b9083dd9c7b9e1ec0e8d",
    id: "The Green Nightmare",
    weightValue: "21.92",
    defaultDustAmount: "43840",
    quantityDustAmount: "52608"
  },
  {
    name: "\uD30C\uB780 \uC545\uBABD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ccc624197f0153b809979df1da9dbfedcf91f9d928617e9952374b110dfd1f3",
    id: "The Blue Nightmare",
    weightValue: "21.92",
    defaultDustAmount: "43840",
    quantityDustAmount: "52608"
  },
  {
    name: "\uBC30\uBC18",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4caf914ef94cc03f55f3e4f975f7d021e17c69fc3904250a85a6a759e9f0b613",
    id: "Perfidy",
    weightValue: "21.92",
    defaultDustAmount: "43840",
    quantityDustAmount: "52608"
  },
  {
    name: "\uB9C8\uD6C5\uC18C\uD2C0\uC758 \uACC4\uCC45",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/638f78ef909287cf3344aae2682316212d085758bebab146088214b49f9d1f81",
    id: "Mahuxotls Machination",
    weightValue: "22.69",
    defaultDustAmount: "45380",
    quantityDustAmount: "54456"
  },
  {
    name: "\uCF54\uD14D\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6ca8d5d2c08ae2545b756ce5b8c123d2808acbe674722d7c29eff861a5342413",
    id: "Cortex",
    weightValue: "21.28",
    defaultDustAmount: "42560",
    quantityDustAmount: "51072"
  },
  {
    name: "\uB4A4\uBC14\uB010 \uD76C\uBBF8\uD55C \uAE30\uC5B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc4a56bff2e8bb7c5d52e45f4d52314c951053a45a4fe10093c1f362efc5d700",
    id: "Altered Distant Memory",
    weightValue: "21.28",
    defaultDustAmount: "42560",
    quantityDustAmount: "51072"
  },
  {
    name: "\uAC15\uD654\uB41C \uD76C\uBBF8\uD55C \uAE30\uC5B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/245a855646080430f76bbc19b1dc48edfd3228210d18b8ea511c4283684e1780",
    id: "Augmented Distant Memory",
    weightValue: "21.28",
    defaultDustAmount: "42560",
    quantityDustAmount: "51072"
  },
  {
    name: "\uB4A4\uD2C0\uB9B0 \uD76C\uBBF8\uD55C \uAE30\uC5B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bd321524150f5154a5938e0b00e6c05eb21144266386eaab0eb5d2fe57ec230f",
    id: "Twisted Distant Memory",
    weightValue: "21.28",
    defaultDustAmount: "42560",
    quantityDustAmount: "51072"
  },
  {
    name: "\uB2E4\uC2DC \uC4F0\uC778 \uD76C\uBBF8\uD55C \uAE30\uC5B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/29b2e33d8eaf8de833376679ea6ebbc386c199f6fd94f4be22d8ce056ae410af",
    id: "Rewritten Distant Memory",
    weightValue: "21.28",
    defaultDustAmount: "42560",
    quantityDustAmount: "51072"
  },
  {
    name: "\uC2E0\uBE44\uD55C \uAD74\uC808\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9300d9ae3c68a76204bc1b61b91b87babf194cc3576b735c972f1084cdfd62f7",
    id: "Mystic Refractor",
    weightValue: "21.22",
    defaultDustAmount: "42440",
    quantityDustAmount: "50928"
  },
  {
    name: "\uC5F4\uB82C\uD55C \uC790\uC758 \uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5eead9029bc9ef6475f9b56243d2cb903706e6578cad3c72ada1796b0904e87b",
    id: "Hand of the Fervent",
    weightValue: "20.76",
    defaultDustAmount: "41520",
    quantityDustAmount: "49824"
  },
  {
    name: "\uBB34\uC874\uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d2423c12a68b93885820fd187a4cc7a2b9277086004b904a084c211242751b56",
    id: "Impresence",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uACF5\uACA9\uBCD1\uB3D9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b8539cd2cc77e100b54a79336d551ab58c1774656274f4fa8a7ce7821a9dc54",
    id: "Assailum",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uD14C\uD06C\uB85C\uB4DC\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/76cee79e6acff3f06ad7f45bac3b986c7d0655726a483ac718fce8094d74260a",
    id: "Tecrods Gaze",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uC6B8\uB77C\uB9CC\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/18142237a0e131cc88a081043fc495f36d7b217c2a514b004e34b4b721a31a9c",
    id: "Ulamans Gaze",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uC544\uB9C8\uB098\uBB34\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/279d1c6bb11ce75686f9d641d6360c3c6c53ba49aa3c2629ff1866ed005afbc2",
    id: "Amanamus Gaze",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uCFE0\uB974\uAC08\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a436fd2bdf0b5132cd9a0ddce1a48fb38f29274025dec92ae75d3d76f248bbd",
    id: "Kurgals Gaze",
    weightValue: "20.66",
    defaultDustAmount: "41320",
    quantityDustAmount: "49584"
  },
  {
    name: "\uC5D8\uB354\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/85ed13faf08990aa9622a5c826a15ce29d1c376320d1d33839414a3d802c81ee",
    id: "Mark of the Elder",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uC131\uCC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/705ef1d019c6f958eb1ac01f056f15058bdc43451a043c292ac1885a374f043e",
    id: "Atziris Reflection",
    weightValue: "28.74",
    defaultDustAmount: "57480",
    quantityDustAmount: "68976"
  },
  {
    name: "\uC250\uC774\uD37C\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eae42959c344d9e2bcb99ae910301ad4f30604c49c8bcacd754bd96f6329f81f",
    id: "Mark of the Shaper",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uBCF4\uC774\uC9C0 \uC54A\uB294 \uBE5B\uAE54",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fa3975b7f6f758fb871480cfdfec28025f3470929bc432ba7de0ceb938bfcba5",
    id: "The Unseen Hue",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uACE0\uB9BD \uC18D\uC758 \uD53C\uB09C\uCC98",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8256ca3af54f29612a86d639e431f116bec1fe31184191ca62bc352ad327efdb",
    id: "Refuge in Isolation",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uBE44\uC560\uC758 \uAC00\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7741315aa45bc23eb49fb5c23cb0151477326712851a175df7ad3191939570b5",
    id: "Woespike",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC7AC\uCD09",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0becf93dee5fa083742b4116e442a7056c1722cc0b36c6af70bf3cca4ef8cc72",
    id: "Death Rush",
    weightValue: "22.69",
    defaultDustAmount: "45380",
    quantityDustAmount: "54456"
  },
  {
    name: "\uC601\uD63C\uC758 \uC77C\uACA9 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/716d726914159df73275b8a0b2602591e86fb6142c7dc6f4a5b0166e9c7a719e",
    id: "Replica Soul Strike",
    weightValue: "19",
    defaultDustAmount: "38000",
    quantityDustAmount: "45600"
  },
  {
    name: "\uC2EC\uC57C\uC758 \uAD50\uC12D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b021c67897630890b37f710ebe9ba37214f0775a468401d88946342ac9c974ff",
    id: "Replica Midnight Bargain",
    weightValue: "19",
    defaultDustAmount: "38000",
    quantityDustAmount: "45600"
  },
  {
    name: "\uBC40 \uAD6C\uB369\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/77553df6f4043e8b2a2faafe6b42ed619395312aab025af4b4ef51a4754248a6",
    id: "Snakepit",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uC694\uB3D9\uCE58\uB294 \uB450\uB1CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ebdacc108059c6f0687df61074dc40e0ee4549e0c14761abd730820e2d1ff375",
    id: "Brain Rattler",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uB0A0\uCE74\uB85C\uC6B4 \uC77C\uACF1 \uBC88\uC9F8 \uD0DC\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9fc04ee3bc4bd109e429945889365ce12e961171d088b0e6cdb2a1e465a74b32",
    id: "Razor of the Seventh Sun",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uAE30\uC5B5\uC758 \uAE08\uACE0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6f85b321ac3ba70ae153d9d6c6e5d135797593582dfdfbf3523c3b79c4dec891",
    id: "Memory Vault",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uADF8\uB86C\uD321",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7c39604eeecf142fd80fe3b44f0dff2895fda4c8cb0d4d1596aa5726cd72e5bb",
    id: "Gloomfang",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uC7AC\uC559",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f88fb1df06215f0586c3c4e211d01c45768c255b491c3b6723d769f6d816ce63",
    id: "The Scourge",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uAD76\uC8FC\uB9B0 \uC5F4\uC815",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c83c67d7dc88eb4bbfbeecec3d8443a8be2b836bb9d73d79653d3cc0251ae08a",
    id: "Ravenous Passion",
    weightValue: "21.39",
    defaultDustAmount: "42780",
    quantityDustAmount: "51336"
  },
  {
    name: "\uADF8\uB810\uB098\uBB34 \uC790\uB8E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6c585da93f4df89126c547d5762369e418a5817c2024bcff39614b6f308abb27",
    id: "Grelwood Shank",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uC624\uADC0\uB974",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3cb7b80c6b3141e664e2cc7ce48221c2aeba7038cf2e54a4043eaeb63ed38153",
    id: "Augyre",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uBD88\uCEE4\uB204\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab65e2d23b64694e945aa11d61e94f79e940e79dca1c443ea7e6b26bca9bb383",
    id: "Vulconus",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uD669\uD63C\uC758 \uC0AC\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a72db0498e8ac5b057b8e8c8e7b189fa887e66cf33d7dfc90ae5a45c1accb15f",
    id: "The Twilight Temple",
    weightValue: "18.36",
    defaultDustAmount: "36720",
    quantityDustAmount: "44064"
  },
  {
    name: "\uADF9\uC131\uC758 \uC720\uB9B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/359652746493acff74f0f7fe4c55c9e177e22e5c5c8781bcce34bc7c220a1768",
    id: "Polaric Devastation",
    weightValue: "19.48",
    defaultDustAmount: "38960",
    quantityDustAmount: "46752"
  },
  {
    name: "\uBCA8\uD300\uBC84 \uAC80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2a1626e56ee3a96d752a3eb85f5a377e12d670cb903f3ab4e44f4e0c810c848d",
    id: "Beltimber Blade",
    weightValue: "18.91",
    defaultDustAmount: "37820",
    quantityDustAmount: "45384"
  },
  {
    name: "\uAC08\uB9E4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a1806b54f6ff2482e19e2dcba76550fee2ea01cc539777a049d9a6c3684dbbd0",
    id: "The Gull",
    weightValue: "17.91",
    defaultDustAmount: "35820",
    quantityDustAmount: "42984"
  },
  {
    name: "\uAC80\uC740\uD654\uC5FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/042ca2739f74dbaadd735f8957a7c3041a441b3f5b05eb35c146c4e3d82b9bc4",
    id: "Blackflame",
    weightValue: "17.91",
    defaultDustAmount: "35820",
    quantityDustAmount: "42984"
  },
  {
    name: "\uD398\uB780\uB450\uC2A4 \uC778\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bd84551edac1e5c8b9f8594bdc58a3eca435b5dabc9c67793e4e56ec1f253de0",
    id: "Perandus Signet",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uC544\uC138\uB098\uC2A4\uC758 \uBD80\uB4DC\uB7EC\uC6B4 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ac137f27b36cc9e73aaf0fd9ebe2234a776fdcabeb1b162300cc4e37503b9f61",
    id: "Asenaths Gentle Touch",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uAE30\uAD50",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/31f41fdae3d9a8bf5b84762086e28544922aa960ae94cf9889e77f8b1b00e27b",
    id: "Maligaros Virtuosity",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uC228\uACA8\uC9C4 \uC7A0\uC7AC\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/00ec70ce42a9598c1718818f5701116c2e959d56b7c1efd1549ea1b3bb1c80dc",
    id: "Hidden Potential",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uC26C\uBA38\uB860",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2444ed96bb3921df9d37d66bc7c17877a10f3d869263e50a171d4e5d56417422",
    id: "Shimmeron",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uD76C\uB9DD \uC885\uACB0\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e2004db1674e804f8a1ee94e40225c6fce4d5996bcb879c874406ac59619e18",
    id: "Hopeshredder",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uB124\uBDF8\uB85D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e70a1dce8fa6e54fd2fa80fbe2edce4b1373b145f6b3ad9db72202d3f506d041",
    id: "Nebuloch",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uAD11\uAE30\uC758 \uC2E0\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e7b251dfc3f6878a22b5cb1c20bbf983c880ffc9fcbfdb52c199faa658675227",
    id: "Beacon of Madness",
    weightValue: "17.82",
    defaultDustAmount: "35640",
    quantityDustAmount: "42768"
  },
  {
    name: "\uD0DC\uC591\uC758 \uD30C\uB3D9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6b7dfd7798a364b04b8720e37f73ab03d1a167de20a0e89c9298d96ed902a14f",
    id: "Sunblast",
    weightValue: "17.39",
    defaultDustAmount: "34780",
    quantityDustAmount: "41736"
  },
  {
    name: "\uB454 \uD050\uBE44\uC57C\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2968c865f5b52d605536056ff4570ffb1769d2b95b03a719ce10427d70133466",
    id: "Doon Cuebiyari",
    weightValue: "17.3",
    defaultDustAmount: "34600",
    quantityDustAmount: "41520"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uBB38\uD131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4f096ccece6beefc06112feff23560dca29e1980c2194a74486c68e686a77dd0",
    id: "Deaths Door",
    weightValue: "17.3",
    defaultDustAmount: "34600",
    quantityDustAmount: "41520"
  },
  {
    name: "\uC624\uC2DC\uC6C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7c5df7e9721326faa6f55f57153021a9b2fd1a178062af6d1cd75df66ec638a",
    id: "Auxium",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uCC9C\uB465 \uC2DC\uC57C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1249e30f3d164a0c04a24e152f1e141984e36bb44b73d0c128b5b946da8e7f63",
    id: "Thundersight",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uBD09\uD5CC\uC758 \uAC00\uC8FD\uB048",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3a7cb9ac9aadb9e8a19a417ae13d3577814600660ccc4b84bf4ebd27d6e4f904",
    id: "Leash of Oblation",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uC548\uAC1C \uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/56f940007caa4af6a453e8607383eba26083b0d9a5aadf20a4361bab7954d497",
    id: "Mistwall",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uC0C1\uC544\uD0D1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a6e2c3e1e794c8fbb2282acd384bc87c49cbe7410330cd0b2a4864c4c31fba3",
    id: "The Ivory Tower",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uB9D0\uC37D\uC758 \uB098\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f76a336ff9b11bdcdb1cca19c2a14516b33250533a33d817d04f9866f6f6dce3",
    id: "Maw of Mischief",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uBC84\uAC70\uC6B4 \uC9C4\uC2E4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8cc659de9950cf60a500aeb3e218f2d125aafe12a0ad0acbbab79b7056ddb28c",
    id: "The Burden of Truth",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uAC70\uB8E9\uD55C \uAD6D\uC655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c0496a3e4d1bdc20507953dd96028ea2963b3f892f448b13a01b99d674535d84",
    id: "The Hallowed Monarch",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uBC30\uAD50\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a53c835b08fc915ffb573efa499fe301cef423dde87d2a910ab4fbb0dfa11ba9",
    id: "The Apostate",
    weightValue: "16.39",
    defaultDustAmount: "32780",
    quantityDustAmount: "39336"
  },
  {
    name: "\uADF8\uB9BC\uC790 \uBD09\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5f72e39e21da6f60cad3372efeddcebbb1736b526d0b706d07275552903e0d5c",
    id: "Shadowstitch",
    weightValue: "16.31",
    defaultDustAmount: "32620",
    quantityDustAmount: "39144"
  },
  {
    name: "\uD328\uAD8C\uC758 \uC2DC\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/776e551a24b7413e2d9f6c9e0132dc2a296fb7b027a8d57a67a096a2413d7e67",
    id: "Hegemonys Era",
    weightValue: "15.84",
    defaultDustAmount: "31680",
    quantityDustAmount: "38016"
  },
  {
    name: "\uB04A\uC784\uC5C6\uB294 \uC218\uD638 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb2e52497f8ef303c06f6eff145ed986c653c100b533cc7845c922fddcc2ab3e",
    id: "Replica Restless Ward",
    weightValue: "15.84",
    defaultDustAmount: "31680",
    quantityDustAmount: "38016"
  },
  {
    name: "\uBC31\uC5F4\uD558\uB294 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2cd4f992b85260cd18b5f278271818922d87be64793fdaff2b9e3770da5ecb8f",
    id: "Incandescent Heart",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uD6C4\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f788ec3df84f9be288aaa516faa2c3f6ea7ce24dcb2891eacdc257977683d2a",
    id: "Lioneyes Remorse",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uB8E8\uBBF8\uC758 \uD63C\uD569\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab865c8c640660eee11c6ff1ecfff07d820d2617f72cc373bd6ab02ebc58eeff",
    id: "Rumis Concoction",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uBF08\uACB0\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/deb98298a17b45085d82c9e8787428de5b7151934acd876d723f12585c995555",
    id: "Bonemeld",
    weightValue: "17.3",
    defaultDustAmount: "34600",
    quantityDustAmount: "41520"
  },
  {
    name: "\uD5C8\uAE30\uC9C4 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7f89ff01a6d9679560dce3d255ec946ea0603129f45f6f3b0ba49271f747d0fb",
    id: "The Hungry Loop",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uC9C0\uD718\uAD00\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/684baf5d3883cdc20fb749a4d7bbffce8efac30bc7a03d8c081bbd2ca3266f8f",
    id: "Chains of Command",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uAC80\uC740 \uBD81\uADF9\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/90d7857d3c36ab541281d7c391cc94ddab7bb5d7efc461de445a326435903517",
    id: "Black Zenith",
    weightValue: "15.37",
    defaultDustAmount: "30740",
    quantityDustAmount: "36888"
  },
  {
    name: "\uB208\uC54C \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/28669bbb9d8c50b1b0de5e826edc609a101d0cdc1074dee0dcd4923b249b1ab4",
    id: "Crown of Eyes",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uC77C\uD504\uBC34\uC758 \uACC4\uB7B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b3349de61ee2de4ef9eb2814f1aa967691f0bff9a8fe9043bb914fa4e932e44",
    id: "Ylfebans Trickery",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uACF5\uD5C8 \uBCF4\uD589\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2ed0f0d0a1f12a2355204dbc3a425e18015adf1ff307c4cf836a0c0bf64a42f",
    id: "Voidwalker",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC790\uCDE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7babb5ceb502e738ceb8c9586407528df9f9d0fe2d81e40ac19c043106bac351",
    id: "Bubonic Trail",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uD06C\uB77C\uCE78\uC758 \uC9D1\uAC8C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eb93e59ea0be86b4b80bb4fd65786d5019d8cdb2ed87c69f930b9dc89d31923d",
    id: "Craiceanns Pincers",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uCC2C\uD0C8\uC790\uC758 \uC18D\uC8C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c45e2b13712542d7cf8d398b3549463c49a38a757aa3e58b511826066796c963",
    id: "Usurpers Penance",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uACF5\uD5C8 \uBCF4\uD589\uC790 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/72883f3ce392ef3ea85edbee1066d1800e4f593afb0fe04cfdb1c74c052a1ff0",
    id: "Replica Voidwalker",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uBCF4\uB77C\uB098\uC758 \uD589\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/30563d3008be264baaca67b73c728d59aafcd545e396d382e54996c419ac0e17",
    id: "Voranas March",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uCE74\uC634\uC758 \uD63C\uBC31",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/878a50ecd48a916addd67354c4f42104061a7b33614e7973135ca2850706ef24",
    id: "Kaoms Spirit",
    weightValue: "14.93",
    defaultDustAmount: "29860",
    quantityDustAmount: "35832"
  },
  {
    name: "\uAFC8\uD2C0\uAC70\uB9AC\uB294 \uACF5\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5f3721cfa6238b2d789677dfe96bf45e3ab5fef94d7d29fded42851b4a6c9b8e",
    id: "Squirming Terror",
    weightValue: "14.69",
    defaultDustAmount: "29380",
    quantityDustAmount: "35256"
  },
  {
    name: "\uC0B0\uC0B0\uC774 \uC870\uAC01\uB09C \uC2E0\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/46edcd8b13056dfa57638252ca64a617a5dfc8547fe1c8dba140ec77916b8494",
    id: "The Shattered Divinity",
    weightValue: "14.56",
    defaultDustAmount: "29120",
    quantityDustAmount: "34944"
  },
  {
    name: "\uBD88\uAF43 \uC2DC\uC57C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6d970f4d5ddd4d48da446c1370958242ff0dce6e2eb0b0e06e66dba90436e614",
    id: "Flamesight",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uCE74\uC634\uC758 \uADFC\uBCF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b09a67615bb9b9dbfe772519b2557bcf5ddf783889ee6ccaa24e1878f9396439",
    id: "Kaoms Roots",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC190\uC73C\uB85C \uB9FA\uC740 \uC11C\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/53b4a7f3df63bcc905d45202ec818c15cce76c4c01bb3044cae3f4611837ebe5",
    id: "Pledge of Hands",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uAC15\uD48D \uC2DC\uC57C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab692c3672ef552e6f57072c80b310e4b7649014cec8dc6a1d9415d3f9df80f3",
    id: "Galesight",
    weightValue: "16.8",
    defaultDustAmount: "33600",
    quantityDustAmount: "40320"
  },
  {
    name: "\uCF54\uC2A4\uD504\uB9AC\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/392f1c2fa484a2d10097315eccb906c34ee9c1853920d83eb9723a57f43c0486",
    id: "Cospris Will",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uBAAC\uD2B8\uB808\uAD74\uC758 \uC7A5\uC545",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cfd5ca098be8bfff38d93d38ae95f28f5fc4821090ae55dbfcd005cc34b14a4f",
    id: "Montreguls Grasp",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uD1B1\uB2C8\uC758 \uBCF4\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/42742fc0a5d80605407a1540ee149e43acc5b7686582f58c0112217a64e646b4",
    id: "Tinkerskin",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uBCFC\uC758 \uC2DC\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1e089a9c75d3fa5d8ed4f4cf7524275f3124af611b59c7570e174b81abc8180",
    id: "Volls Vision",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uC2DC\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dd08b48913e2c128fd16a083044fcc1ba1b6b85faa5e6f6ecba2ffaf23e553f7",
    id: "Malachais Vision",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uBD88\uAD74\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e202347dcc2d5723fed9ee8751a70ad55a6b034b45e72e66f99e795f733c985",
    id: "The Unshattered Will",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC9C0\uC9C0 \uC54A\uB294 \uD0DC\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6b4d457fb6f317257d50443a99cc91dcc9b39548fe8a9faa128fc6740629568e",
    id: "Invictus Solaris",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uD0A4\uD074\uB85C\uD504\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8089464c0daeaa8753ae6af9b6a0b1d1257a62aa2b85596c952632d92e23c41e",
    id: "Cyclopean Coil",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC131\uC6B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7a4f6c2eb9876571116d913a2f3f93b7431a583ad916ff655ea48b5b732e0671",
    id: "Nebulis",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uCC2C\uB780\uD55C \uD5C8\uC601\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9bdb60c2c7d14850044dca0d8d7cc6784dfb10598322e7c6f9cbb55527818cc8",
    id: "Glorious Vanity",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uD638\uC804\uC801\uC778 \uC2E0\uB150",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d9296c244e42b931ef62faaba6bb85d97f08efccd0282b2eaf5b7e28ea0db0c9",
    id: "Militant Faith",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uACE0\uC0C1\uD55C \uC624\uB9CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e0c5dc23930729b09d269d815b4acc2076a5f4a220d5e46fba2618ce1fe70749",
    id: "Elegant Hubris",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uCE58\uBA85\uC801\uC778 \uAE0D\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d3a2af8943ada697ed287120aa7385c9456f7bb851ca83119fd28fcf09fa1eac",
    id: "Lethal Pride",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uD1B5\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/53bab79d6b248a54a8992a50bb38521824887934cb8ff2ea145b56737bcdbdb1",
    id: "Atziris Rule",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uCE90\uB514\uAC74\uC758 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5fa13f22cfd51ee7d4b8e0655f36a2e681651dfeb88237f2de793629101865db",
    id: "Cadigans Crown",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uD3EC\uD6A8\uADE0\uC5F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7cfda28b5f8ddb39aaff1b5cbd6988f9e70407bb2d8682168c79cbd2054d637f",
    id: "Howlcrack",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC870\uB828",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/231655236a0ab7a8215409372099fd01ed8cf7775e388c61faf3e346b06bf0f3",
    id: "The Taming",
    weightValue: "14.14",
    defaultDustAmount: "28280",
    quantityDustAmount: "33936"
  },
  {
    name: "\uC57C\uC2EC\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/affb7a0c4d084055c3a76e2d4fe394a72172c6838504dbb953bd29e131101de3",
    id: "Circle of Ambition",
    weightValue: "14.14",
    defaultDustAmount: "28280",
    quantityDustAmount: "33936"
  },
  {
    name: "\uBE44\uC758 \uC778\uB3C4\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9aac319c33c33c49505669abb68cbb9c5f40623abcf82151a65baa554da764d0",
    id: "The Bringer of Rain",
    weightValue: "14.07",
    defaultDustAmount: "28140",
    quantityDustAmount: "33768"
  },
  {
    name: "\uC624\uB85C\uC758 \uD76C\uC0DD \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/55a0537d6263fb47506bfa6fc53c80d6265128a48f340c51c51ab063270c124f",
    id: "Replica Oros Sacrifice",
    weightValue: "14.07",
    defaultDustAmount: "28140",
    quantityDustAmount: "33768"
  },
  {
    name: "\uD68C\uC0C9 \uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fc451eac992db867b93a8f5d761bf805167aa134afd655c77cddff7490a0add9",
    id: "The Grey Spire",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uAFC8\uC758 \uAE43\uD138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ff0925d6a1b5fdead93f1a4fcf6fb11cbca6a4d60f929296e23575cdb5ccf1a4",
    id: "Dreamfeather",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uCC38\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c948fbe3ab25e0243a85a4d698608b2992b11c6af0e5ddba4ddccf0cc22d642d",
    id: "Repentance",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uC250\uC774\uD37C\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/19970c312f903ea7c6c639d7310580caa1fefbbaabc68322714dd7f563c68f74",
    id: "Shapers Touch",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uC99D\uC624\uC758 \uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d171c6c2e22f15f58263adf7789b3f3dcbbe6a7e2195db53382e569e93ef9b3",
    id: "The Enmity Divine",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uBD88\uAD74\uC758 \uB2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/94598ce91b85258d25b2c41af868e62ee4629b9376437ae7038d04c5b4bcd452",
    id: "Vix Lunaris",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uACF5\uD5C8 \uD654\uC0B4\uAE43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/db0153c4612dc2c2e6c16cb15b1e70310fdb70c6d3cffeb740ccf6202f74d106",
    id: "Voidfletcher",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uACE0\uC704 \uD15C\uD50C\uB7EC\uC758 \uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f3465d66ccec6d4b131dec05310f1405d3e66fc67ff68ea2ab09121740d4e67f",
    id: "Hands of the High Templar",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uAFC8\uC758 \uAE43\uD138 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1649d9a65e1e03e675b86b3eb7ff0b4fec9942a7521f8d6a0746321ee7a494fa",
    id: "Replica Dreamfeather",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uCC9C\uB465\uC758 \uC0D8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e22f1623cb24c4c497c4e487d4cdf3d42275351e4fa740669a8e1e2919f63609",
    id: "Font of Thunder",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uC9C0\uCF70\uB2C8\uC758 \uC7A0\uC7AC\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d839a6762ff606c91c463773b27f451bcf44b6c40e2c9407a2b61cec480e6d3e",
    id: "Jiquanis Potential",
    weightValue: "13.66",
    defaultDustAmount: "27320",
    quantityDustAmount: "32784"
  },
  {
    name: "\uACBD\uBA78\uBC1B\uB294 \uC5EC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bd3b71ba2b0b50f37445688abc462a2d38af08b8378aae8c14589453fdf29120",
    id: "The Goddess Scorned",
    weightValue: "13.33",
    defaultDustAmount: "26660",
    quantityDustAmount: "31992"
  },
  {
    name: "\uBC0D\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9e2c1080b30e7cb507350d1f43eb120645ae1a8b2b35cceff1c79073b9cba37e",
    id: "Mings Heart",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uC9C0\uC625\uBD88 \uC678\uD22C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ca1470843d914f3dbfa1305d23d0a17bc551b6e2f55dc9bfc088c6dac0d59521",
    id: "Infernal Mantle",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uB0C9\uAE30\uC758 \uC2DC\uC120",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/073597fd68208e14391f0fb5259659b66c099e0a12ca4602aa142e38cc2ebcc8",
    id: "Rime Gaze",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uBA78\uB9DD \uC720\uBC1C\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/015083ec87919041e656ecc78126b2206cb5450ffe06143ad1182fbd01a9bdb5",
    id: "Doomsower",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uAFB8\uC9D6\uC74C\uC758 \uAD74\uB808",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3f00fd9318f289a7feb508bcf29d10cdee4772b3096ca4e94f678d2eb21e97e7",
    id: "Scolds Bridle",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uB3C4\uB07C\uB9C8 \uC7AD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/939f3d6ed02b66663c6b34c578ece79087b00758d3692af0ec11a5f25e06d7ad",
    id: "Jack%2C the Axe",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uAD70\uC8FC\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cbdca357ed5341b0f12fcb7a2d12c482abc70a6b39c619abc5389d61ff3079e4",
    id: "Skin of the Lords",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uD398\uB204\uBB34\uC2A4\uC758 \uC5F0\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/30f08c1a95b36591e693efc56f1d26d63d6fec3ff6885cd68d3c1d30f9e74f6b",
    id: "Fenumus Shroud",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uC2E0\uC131 \uBAA8\uB3C5\uC790\uC758 \uC7A5\uC545",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49f2f70d07fc37078207009d982c8fe5b4658d13d17ef7f7196f48fc01cc05a9",
    id: "Blasphemers Grasp",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uC0AC\uCE74\uC648\uC758 \uB465\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5e8ed4b1aef2dfab67f9ec6d5859f0cf755dfe5f729bc3640af9ab0380d0a5ca",
    id: "Saqawals Nest",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uAC74\uC7A5\uD55C \uBD80\uC815\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/11483a277afcabd2ec384df86bfdf9d26e99ac114d2b68d763ef38ff1c1671c7",
    id: "Hale Negator",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uC4F0\uB77C\uB9B0 \uC18D\uBC15\uC758 \uB05D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f73739328b48ea977e5b6c87037b4a8bdb0ec79a478a9aa969788014328ba378",
    id: "Bitterbind Point",
    weightValue: "14.49",
    defaultDustAmount: "28980",
    quantityDustAmount: "34776"
  },
  {
    name: "\uCC3D\uC870\uC758 \uBA54\uC544\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e689c578f3fd32c8a8baf4f3de3c8efee9c68c5182927de14bef47c71f37b1e",
    id: "Echoes of Creation",
    weightValue: "13.26",
    defaultDustAmount: "26520",
    quantityDustAmount: "31824"
  },
  {
    name: "\uBCD1\uC5D0 \uB2F4\uAE34 \uBBFF\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c6baa94522c15284fdd5b0e2df8f2c43a217364de10fecd8777ece91b0291f78",
    id: "Bottled Faith",
    weightValue: "12.94",
    defaultDustAmount: "25880",
    quantityDustAmount: "31056"
  },
  {
    name: "\uC5EC\uBA85 \uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3f9b1095064e3b2d793a489d9b6f0981da97bfe8361917319cfbb2d3155de64c",
    id: "Dawnbreaker",
    weightValue: "14.07",
    defaultDustAmount: "28140",
    quantityDustAmount: "33768"
  },
  {
    name: "\uB8E8\uBBF8\uC758 \uD63C\uD569\uBB3C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e0fe3e494fd1b46a2359345f769d178ba5c7ded0715ff7f24d52a05ca98055b",
    id: "Replica Rumis Concoction",
    weightValue: "12.94",
    defaultDustAmount: "25880",
    quantityDustAmount: "31056"
  },
  {
    name: "\uC6B0\uB450\uBA38\uB9AC\uC758 \uC6B8\uBD80\uC9D6\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b79c6426c90767c7eacbc3211370764cf34561708383815863e5a76456db3c04",
    id: "Alphas Howl",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uD0C0\uB9B0\uC758 \uC624\uD55C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f6097cf92c314da9e5de26b719c0e56fa6e2cc814070593e8966ae0cee6bad2b",
    id: "Taryns Shiver",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uC758\uD68C\uC758 \uC5ED\uB7C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/68ad7bbab74bb740ff7eec86dea717af26b7c20dd3b9f29fd742f5da2fa7ee99",
    id: "Reach of the Council",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uAE30\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3bb6f316278cca7039b35f2b0c67532ef91eae37370c442cbbe641e3348124cd",
    id: "The Anticipation",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uC6B0\uB450\uBA38\uB9AC\uC758 \uC6B8\uBD80\uC9D6\uC74C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/081a93a82e34a459c879b48350d84b8898af5138343cf4821f9cf2a66dc1ce9b",
    id: "Replica Alphas Howl",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uBC14\uC54C\uC758 \uC9C8\uCC45",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a1d813efce0c0b4cb183a7f891eacb64ffe206a0e71c833281b672eb4f3fb10a",
    id: "Rebuke of the Vaal",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uAC81\uC7C1\uC774\uC758 \uD1B5\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4b77e2dbd5981391bd7c0c366b6720b4ab751f940796fcf81db306f975773fe0",
    id: "Cowards Wail",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uB2E4\uB808\uC18C\uC758 \uC800\uD56D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e08a8652fd922bca8aae77798b44e5c41de0764c530490fb461e51f81aa7092b",
    id: "Daressos Defiance",
    weightValue: "12.5",
    defaultDustAmount: "25000",
    quantityDustAmount: "30000"
  },
  {
    name: "\uD5E4\uC988\uB9C8\uB098\uC758 \uC720\uD608 \uCDA9\uB3D9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/21350c43f76e05e90f9d6a5727a2b13c669d40eef7999cbcd69d317cac88fa91",
    id: "Hezmanas Bloodlust",
    weightValue: "12.88",
    defaultDustAmount: "25760",
    quantityDustAmount: "30912"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uC608\uB9AC\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/986dfeae173fee1f2a9f06ee1120a31f668d365e5db116876769e0fd5eb32268",
    id: "Atziris Acuity",
    weightValue: "12.5",
    defaultDustAmount: "25000",
    quantityDustAmount: "30000"
  },
  {
    name: "\uC62C\uB85C\uC2A4\uC758 \uACB0\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/918d55d5c02309298116e988e30d3030185ce2b8368b0105f5c22fd3b24dd036",
    id: "Olroths Resolve",
    weightValue: "12.94",
    defaultDustAmount: "25880",
    quantityDustAmount: "31056"
  },
  {
    name: "\uD398\uB204\uBB34\uC2A4\uC758 \uBC29\uC0AC \uB3CC\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a9810cd8a3b369bc141bf391c2cc52f013783d5f4e653cce6fbce3f45eca5ff8",
    id: "Fenumus Spinnerets",
    weightValue: "12.5",
    defaultDustAmount: "25000",
    quantityDustAmount: "30000"
  },
  {
    name: "\uC2EC\uC548\uC758 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/636a1d7a944e4e91eedcf1b0e4e7c101f32c0d8f5f60a86d8c1fbd82f1d67b98",
    id: "Crown of the Inward Eye",
    weightValue: "12.5",
    defaultDustAmount: "25000",
    quantityDustAmount: "30000"
  },
  {
    name: "\uBCC4\uC758 \uBCF4\uC11D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8e0077e1f94d260122a603a4562074fb154e0cc144802a4eeae56403b0dcbdd7",
    id: "Astramentis",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uCC28\uC728\uB77C\uC758 \uC874\uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/153d74f106630d1823a005bae5df374e7074603461f8fe0269d3387c2d6bc550",
    id: "Presence of Chayula",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uD1B5\uC194\uB825\uC758 \uAC00\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3dfae90742b5952e29444722211b3d2fddf5736dc50193b4b7f00aca5a15ffa5",
    id: "Leaderships Price",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uB3D9\uC9D3\uB0A0 \uBC24",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6df22b54c917cfdb84113276f9b584af928e09a0a1b70b70ee26711d7b299c24",
    id: "Solstice Vigil",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uD0DC\uD48D\uBD88\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ec30c37febf513ab2a00e003169be1c974f8a259b0c8ec66567451b444d22ea3",
    id: "Stormfire",
    weightValue: "12.17",
    defaultDustAmount: "24340",
    quantityDustAmount: "29208"
  },
  {
    name: "\uACB0\uC815\uD654\uB41C \uC804\uC9C0\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5f4da732da91b953e81d8b838f37046d5974e84c31d3ef93f35ec99257e6348c",
    id: "Crystallised Omniscience",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC11C\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fe3d3cb0889ef8be2dd8b1a55b99eb32d64fa3339491123e7b6d6c5d94ce6f88",
    id: "Deaths Oath",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC544\uC6B8\uC758 \uBC18\uB780",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/64d95b12997585a63657badc166d4194c67a5cdc5dd2432f9e0f6acb0de423a4",
    id: "Auls Uprising",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uC774\uAE00\uAC70\uB9AC\uB294 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8d8881dbb3aa2d05772cf845e20b0cb7cdcbade1f9f541d5c3828e72d50c2aad",
    id: "The Searing Touch",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC774\uB9AC\uC5D8\uC758 \uD6C8\uC721",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0328d8d5d079d01c33fb25b2cff6aad9354ab300dc96f0db84d6a7cc9f06e07f",
    id: "Yriels Fostering",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uD37C\uC838\uB098\uAC00\uB294 \uC0DD\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7b5800a6294323a1f2fc0dee013586c0f4068fc3207a4bd7a092e5562f82a03",
    id: "The Rippling Thoughts",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC601\uAD6C\uC7A5\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ca514a45438f2989f1f9c8a01d57d74f169cd4b8779afa048ccd7d68291e7219",
    id: "Perepiteia",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uD504\uB799\uD138 \uC0AC\uC0C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9c7bbcfb34f0e6e24d07816fef3aabdcb3c3510fdadf62025195469baef101f",
    id: "Fractal Thoughts",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uB0A0\uBD99\uC774 \uB05D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a612db6404d0b511f48e564ef274ef3695e0fbab0b80cc8fb63be74fd3e6f441",
    id: "Cold Iron Point",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uD669\uC57C\uC758 \uBC95\uCE59",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1111071a7334085b6d88684386a80251dff9fbabf77937cbe96ca265023d5bde",
    id: "Law of the Wilds",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uBE14\uB7F0\uB354\uBCF4\uC5B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c5f6d7d2514a40873236bd015b1f77cd9520d0ab76493ff390eac1673f9bc43f",
    id: "Blunderbore",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC5D4\uD2B8\uB85C\uD53C\uC758 \uB0A0\uAC1C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/487b89d3df38e6e553811548462a096eaeb0af0177eaaa57cafb0fcd5fd0abd4",
    id: "Replica Wings of Entropy",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uD63C\uB3C8\uC758 \uC12C\uAD11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6608317d1617721f398fefdaccab44af234406d28b6311badce41ca662968fa7",
    id: "Glimpse of Chaos",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC5EC\uBA85 \uC9C8\uC8FC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c27749b2c8fcdc6a2ebfca8c59461f1532c72ed1c170b6a0a83a3d66a5735d03",
    id: "Dawnstrider",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uCE90\uB514\uAC74\uC758 \uAD8C\uC704",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/da31560fbe14b7fec2565f9ae48714de631b27d54029cfb53ecb0655a5c4019f",
    id: "Cadigans Authority",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC4F0\uB77C\uB9B0 \uBCF8\uB2A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1467c44b9b9a828728af399944ce2be6466ae279fe8500cf8846aab80aed4b1",
    id: "Bitter Instinct",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uBCC4\uC758 \uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e76fde313150af0b152979075dcbc418d13c330a0221dae10e8b28478b183317",
    id: "Ashes of the Stars",
    weightValue: "12.2",
    defaultDustAmount: "24400",
    quantityDustAmount: "29280"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uC57C\uB9CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2705f3f1b36bf0225188197e5987d8d91e74625a313a05d7658865b6e172866",
    id: "Rigwalds Savagery",
    weightValue: "11.82",
    defaultDustAmount: "23640",
    quantityDustAmount: "28368"
  },
  {
    name: "\uCD5C\uC815\uC810",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fe0e8d11beeb79a59a0e7c591ae1af691173f6c8fc8adc57f6186d37e05503dc",
    id: "The Vertex",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uBA85\uB839",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cf4e4b54348ffa8e3577fdb6a22fe567dd777476cdcf81d070f4f1bd5b24945a",
    id: "Rigwalds Command",
    weightValue: "11.82",
    defaultDustAmount: "23640",
    quantityDustAmount: "28368"
  },
  {
    name: "\uBABD\uB9E4\uC8FC\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f5f70f14838a8164462645330340250dacd36108b6fea3946d6b26c20fef0b7",
    id: "Obscurantis",
    weightValue: "11.82",
    defaultDustAmount: "23640",
    quantityDustAmount: "28368"
  },
  {
    name: "\uC2AC\uB9AC\uBC84\uD145",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2d0d9af971b365958bf9a756b7ed6cc535bd8e2b17c3a02bf63397ce3e41a84",
    id: "Slivertongue",
    weightValue: "11.82",
    defaultDustAmount: "23640",
    quantityDustAmount: "28368"
  },
  {
    name: "\uC2DC\uCCB4 \uC0C1\uC778",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a999c0b84e9ee224293a30b1a689afb30b00a8a66c35eab5ab6b4963e3d70597",
    id: "Carcass Jack",
    weightValue: "12.14",
    defaultDustAmount: "24280",
    quantityDustAmount: "29136"
  },
  {
    name: "\uC774\uB0D0\uC758 \uD1B5\uCC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a106d6b2e2aade77fdc93ebe62b63f6b50a8fa5c6cff7677080076830e8a085",
    id: "Inyas Epiphany",
    weightValue: "11.78",
    defaultDustAmount: "23560",
    quantityDustAmount: "28272"
  },
  {
    name: "\uC774\uB0D0\uC758 \uD1B5\uCC30 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d68e82a4c198f9868fbef2eefc86f4d2a99642f5e1abed4e42d63e80db0571b5",
    id: "Replica Inyas Epiphany",
    weightValue: "11.78",
    defaultDustAmount: "23560",
    quantityDustAmount: "28272"
  },
  {
    name: "\uC0B4\uC544\uC788\uB294 \uCE7C\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f734c9fcdbc5e21896aee0569d4bc21975ab2173d691572782929fce3215fb8d",
    id: "The Living Blade",
    weightValue: "11.78",
    defaultDustAmount: "23560",
    quantityDustAmount: "28272"
  },
  {
    name: "\uBC88\uAC1C \uB3C4\uC120",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7fc5e7af4f696b784c8f3c8450c328391252983d0f30ada2f4c06476794bd9ba",
    id: "Lightning Coil",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uAE4A\uC740 \uC2EC\uC5F0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f4bf4aad71dfc5b0391c22cfb22deda57fb04dc5d04ddf541e9a976c73b5918f",
    id: "Abyssus",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uBAB0\uC0B4 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a29e8cc22aa74186b6797e37e200e14e3ef35b1f9b4f7977a763a50aac11ae17",
    id: "Nulls Inclination",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uC30D\uB465\uC774\uC758 \uC5EC\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/691a6e533ab69c8f07d5adb4b39bf05f2a4b99b723ca898ccf338ec6060d4064",
    id: "Dyadian Dawn",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uC800\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6a9bc5ec49f7655c4ae1fbed1f12521e0525403d780c98798937c7e916c0f536",
    id: "Rigwalds Curse",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uC758\uD68C\uC758 \uC7A5\uC545",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/98b33e05d2456feeeac9e446a23d4fcc5345ea786fb9afbd1a72e74c89ffd27a",
    id: "Grip of the Council",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uCE74\uBA54\uB9AC\uC544\uC758 \uD0D0\uC695",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6db998dc9d812dc1bb84be67ab966bf7a549f55c04382371042e812e6eb04551",
    id: "Camerias Avarice",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uC0AC\uCE74\uC648\uC758 \uBB34\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e9104e8483c8e61d62470d7272e02edaf0719313f23488379226356e813b69c4",
    id: "Saqawals Flock",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uCCA0\uC81C \uC6B4\uC9D1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/44c16096451b3fc2c1cd9acb22abb66e7ae7bcd07653231b0f0f62b5c35d1500",
    id: "The Iron Mass",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uC758\uD68C\uC758 \uC7A5\uC545 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ec92608be80405f4dd2214bd9500a165c680a90bf8dfcbaa17e215280582fb7a",
    id: "Replica Grip of the Council",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uC228\uACA8\uC9C4 \uCE7C\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a457e64050c37d2cbbc1d824990ccba2a76796039ddc7fd35723f73255945a72",
    id: "The Hidden Blade",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uBC84\uD300\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6b839758a930b830949371715ade14ae79c0aa1a8a8f5aa51cc2051c18cc6724",
    id: "The Fulcrum",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uB0B4\uBA74\uC758 \uC2F8\uC6C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/81cfbd5a22c16edcb35461367530773fcca5e30d51120ef9336be1705e22fe77",
    id: "The Battle Within",
    weightValue: "11.44",
    defaultDustAmount: "22880",
    quantityDustAmount: "27456"
  },
  {
    name: "\uACC4\uC57D: \uC30D\uB465\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49129aec6332d7a331d3eb3746bde45e6de0fe51cee2602d68f5246d12e905f9",
    id: "Contract%3A The Twins",
    weightValue: "11.29",
    defaultDustAmount: "22580",
    quantityDustAmount: "27096"
  },
  {
    name: "\uB450 \uBC88\uC9F8 \uC131\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c4c279185d188fd5aa7920d8701a8246acf2656dc4a19aa2ccb30d4b25d44e4c",
    id: "The Second Sacrament",
    weightValue: "11.29",
    defaultDustAmount: "22580",
    quantityDustAmount: "27096"
  },
  {
    name: "\uC6D0\uD615\uC758 \uC131\uC11C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eb90d44ca5f7bac1e8b9dc44fd67da004bec3f3a0c30c050154c854700605106",
    id: "The Original Scripture",
    weightValue: "11.29",
    defaultDustAmount: "22580",
    quantityDustAmount: "27096"
  },
  {
    name: "\uC0AC\uD6C4 \uB0C9\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7cccad9990c41b4844ff0b458e4e1bd43c06ceea90060776b305cffa77bb50d9",
    id: "Algor Mortis",
    weightValue: "11.14",
    defaultDustAmount: "22280",
    quantityDustAmount: "26736"
  },
  {
    name: "\uC232\uC758 \uC5EC\uC655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/775f45f4a9b5824974459993b744d790891f7e5c452163ae15d89c3f05137968",
    id: "Queen of the Forest",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uC0AC\uD3A0\uC758 \uACE8\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27f6919cfc62936964a10e62d6c46b29f1e176f236ead4da43fe23a682aeb6f4",
    id: "Saffells Frame",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uC228\uACB0\uAC15\uD0C8\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b843fb09835f9ce9e59d54f5aa8d57887539ea71b768a512d88f6dfee2ad3260",
    id: "Breathstealer",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uC0AC\uCE74\uC648\uC758 \uBC1C\uD1B1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9013d4228d1605f8caf35c9e9aa815c218245c64e8905b6514f8a53e480b3f78",
    id: "Saqawals Talons",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uC9D1\uC911\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5d7b63a8f5dc8acf0faf14389611d7dddd99c6515d2999b7c41433766eeab42",
    id: "First Piece of Focus",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uC9D1\uC911\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/876c2900d547e8a9a5d0e7eaacd8d3aebfdb6ed8c1e2a8099c20abf3ad51328c",
    id: "Second Piece of Focus",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uC9D1\uC911\uC758 \uC138 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c8dec974ab0a157e85e3645855389ac975d685bd92653cae57dd3487b03433ee",
    id: "Third Piece of Focus",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uC9D1\uC911\uC758 \uB124 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ee7685f43ca443cd8fc245840b93e47e4989e72b6feb68cd3975b93d12c49068",
    id: "Fourth Piece of Focus",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1e42e20acda5f04cf3d76bcfc77b41526aee0c794fb22ac8a7606615f9ebe2ec",
    id: "First Piece of Storms",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d3080cb59e7156b1b10730246f8b2251c32f3c199d21a3ad03754802172dd096",
    id: "Second Piece of Storms",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uC138 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9d3cc4a01c77e90f1d335af3d7ee0f9536cfc82843b0e4fb0ac544021380c6e",
    id: "Third Piece of Storms",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uACC4\uC57D: \uB2E4\uB098\uC6B0\uC5D0\uAC8C \uC8FD\uC74C\uC744",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bfc33bdd519122f2b12277f50ea8fccbce3327af2ba422478009079893302046",
    id: "Contract%3A Death to Darnaw",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uCD5C\uCD08\uC758 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e49dc799d7141596a19e7c84bc6dce1c03646bae0719e682d3dac234df179cd8",
    id: "The First Crest",
    weightValue: "10.96",
    defaultDustAmount: "21920",
    quantityDustAmount: "26304"
  },
  {
    name: "\uC644\uACE0\uD55C \uBD88\uAF43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/afc25bc464f73f39023135aeba493b06203374ac7af5aa2009003a23330645f2",
    id: "Unyielding Flame",
    weightValue: "10.82",
    defaultDustAmount: "21640",
    quantityDustAmount: "25968"
  },
  {
    name: "\uD06C\uB77C\uCE78\uC758 \uD0A4\uD2F4\uC9C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/65c9ad5fdcdfaa9daa74aeb64f75bf8448e23e37f7fd8d4a193a89cff14f295e",
    id: "Craiceanns Chitin",
    weightValue: "10.78",
    defaultDustAmount: "21560",
    quantityDustAmount: "25872"
  },
  {
    name: "\uAFF0\uB9E8 \uC545\uB9C8\uC758 \uAC00\uBA74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0937073b152de90d0102f51c1c72bcdd3dbb5984c26ac2ea300ae60ba7a77bbc",
    id: "Mask of the Stitched Demon",
    weightValue: "10.78",
    defaultDustAmount: "21560",
    quantityDustAmount: "25872"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uC120\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ec66131ab39560f79a1da81ae2e2246d31552479c6de9c0a5a0e47065cd6b2e",
    id: "Storms Gift",
    weightValue: "10.78",
    defaultDustAmount: "21560",
    quantityDustAmount: "25872"
  },
  {
    name: "\uB3C4\uBC15\uC9C8\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8a693dbcfb904a5bf14f0026fb49b6ed6bcafc7ee1596e02ac6638ee0e7bcce6",
    id: "Gamblesprint",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uACC4\uC57D: \uC790\uB9CC\uB77C\uC758 \uD734\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3d48fa4e95b79d9e37c46465d5c1098e771d5be0f23b35a788197faf3a1a689b",
    id: "Contract%3A Jamanras Rest",
    weightValue: "10.64",
    defaultDustAmount: "21280",
    quantityDustAmount: "25536"
  },
  {
    name: "\uACC4\uC57D: \uC601\uAD11\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1496f67b3e4d08a3b0c957fd68d0de270b3115a307d744655c4f700376e42e60",
    id: "Contract%3A Heart of Glory",
    weightValue: "10.64",
    defaultDustAmount: "21280",
    quantityDustAmount: "25536"
  },
  {
    name: "\uAC70\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/225e10be63dbeaa6e876c45b85ec4129d70dd94b34a4a53ed892f6936c82b9ee",
    id: "The Magnate",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC9C1\uAD00\uC758 \uB3C4\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/402cb6458ecd59da100e1cf767aa4b9d7f88dd7f42afce866d3903bd623b2ec0",
    id: "Intuitive Leap",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uBAB0\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8f45bea0f34ffd29457d8707770d9def467637add1cf779e68190f7f0dc61a9c",
    id: "Lioneyes Fall",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uB9DD\uC790\uC758 \uD310\uB2E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0923c0cdb9d7b31988614a9aaf2e3d04c6937ae6dcd5b4dbbae03818ddbc80b2",
    id: "Dead Reckoning",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC7AC\uD310\uC18C\uC758 \uAC00\uBA74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b251e03f25134c357235ae3c58cd068e8f4bbe312df5bc682abae2e586442aae",
    id: "Mask of the Tribunal",
    weightValue: "10.78",
    defaultDustAmount: "21560",
    quantityDustAmount: "25872"
  },
  {
    name: "\uD669\uC81C\uC758 \uC794\uAF80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6c327a048c80f271dde4b8b09283e1ea25bb4951f58f3c960b364b151e2cb24c",
    id: "Emperors Cunning",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD669\uC81C\uC758 \uC7AC\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/baec4785cf1e8d8e545e83d6f4b7002a9b10218491b6d3618e6a5cb24add05ef",
    id: "Emperors Wit",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD669\uC81C\uC758 \uC644\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f471f66a2c7be017424d08786cfbe3430f7c0f704a1398c63dc3d8943ef2128",
    id: "Emperors Might",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC7A5\uB300\uD55C \uD30C\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/41c995a0ccb1bd586f3ec4260662a8fa274e267bb152a12ed6404bb5c6b2e98b",
    id: "Grand Spectrum",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD0D0\uD5D8\uC758 \uB05D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3cf8d710d1605da919ef786644ce526c6623a92bb21213e832d8a977c219ffe8",
    id: "Expeditions End",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uB05D\uC5C6\uB294 \uD5C8\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/66ff2341b9943d15b64ce071b42a07f66ed14c012019ed04c4dd5feca8e3a13b",
    id: "Unending Hunger",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD0C0\uACE0\uB09C \uC7AC\uB2A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f6e568a0d95d3bf30d6a1e7c17403cd452852beb5dd8a787be955dd664634921",
    id: "Pure Talent",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC628\uC720\uC758 \uD798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/16a99e0ad9ca7d86eb15c1c03f40ce49dca881a515bf0109ac8a7817ed498da9",
    id: "Might of the Meek",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uCD08\uC6D4\uD55C \uB9C8\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3200da035db0df25de20bf2e28c212b7e2c3e88d7f867d97735221d0b12fcd02",
    id: "Transcendent Mind",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uAE30\uC774\uD55C \uBCF8\uB2A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ad56dd903f93b45d1e352216555913d65156e7f7c0dcfb3550f89e0bb5f2dff",
    id: "Unnatural Instinct",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uACA9\uB958\uC758 \uAD50\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/69fb6c1235a316373eb83acfaf5456af4b6caa110738dbdf77e8fa6597191197",
    id: "The Torrents Reclamation",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC601\uD63C \uC62C\uAC00\uBBF8 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a671189f902aafc5cb8423ff27f3d45ee67c26575f437af8cf1bf678f90128a6",
    id: "Replica Soul Tether",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC70C\uB9C8\uC758 \uBCF4\uB2F5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/78c52b380239adf545a6abe6781ae8ccda775809ddcca5544cad34da34019ff4",
    id: "Wilmas Requital",
    weightValue: "11.11",
    defaultDustAmount: "22220",
    quantityDustAmount: "26664"
  },
  {
    name: "\uC6C5\uD790\uC758 \uD22C\uBC15\uD568 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4c3b2e166091fb6a6e9c2f871ffb49bc86f9cf3df860ff73544ccc89d998126c",
    id: "Replica Ungils Gauche",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD0DC\uACE0\uC758 \uC644\uB825 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/07fa378f6b14efda9a3f3f2f7f3f05d4a249e237cd198bd6b912589963e714fe",
    id: "Replica Primordial Might",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC0B4\uC810\uC758 \uC735\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/764f8229a8f05eab4bfecb50c8d8ce3545538accdc9999f62c71c53ae617c2d7",
    id: "Melding of the Flesh",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uB9C8\uB140\uC758 \uD30C\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d935931818da5750caaa20ec41737a13625dec7806afe88c418a1ef78076c606",
    id: "Witchbane",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uBD88\uC758 \uB178\uB798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e8109adb830e82dc9205dffd4879a83eb96675b97eeb3c086964a9d894367f2",
    id: "Firesong",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD3ED\uD48D\uC5F0\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/186c1fc2e50dd2c79138083e3906804e645774436384b1a895824f3a3dd13c8e",
    id: "Stormshroud",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uACF5\uD3EC\uC758 \uADE0\uD615",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/149428f5ca2620319b352b0a8837ed57b4096ff4074c1d5aca5427edc8688074",
    id: "The Balance of Terror",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uBD88\uBCC0\uC758 \uD798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d1b49ad7417d25d75cb6a117894bea88e47ec4c79d099483606b75470caf5f54",
    id: "Immutable Force",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC120\uB300\uC758 \uD658\uC601",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/106d7af764e4322cb6bfe2dcb4830bebb6a544aeb5b7bba077c2faee9293f0f8",
    id: "Ancestral Vision",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC0B4\uC810\uC758 \uC735\uD574",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/301fefb8b8f880f0b81f37db80b7a3041c0a9e7a28fa71988c6b84889298c703",
    id: "Dissolution of the Flesh",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC804\uC0AC\uC758 \uC774\uC57C\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bf85a73c421520a2fc5cee5975c429bf600b340361e49af4e18111da96ceaff1",
    id: "Warriors Tale",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD615\uC81C\uB2E8\uC758 \uC99D\uD45C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de5120d1862ee46e3103cb3e53e8cac4b09fc1a3ded818fdadab5500f3bba441",
    id: "Replica Badge of the Brotherhood",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uD53C\uC758 \uC624\uB2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/404b84770634ba53f940b7683ec9dc6feef7a628b14e08af2c5864c94fd1730b",
    id: "Bloodnotch",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uCE58\uC7A5\uD55C \uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6faa497983c069597b25f42f037d975a0c79b6a1e1d98245643d552f288d8ce1",
    id: "The Adorned",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC0AC\uB85C\uC7A1\uB294 \uAE30\uC5B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8b7ae8b32679420353940a696bdbfc3ec74f817d5e2b755fa75a9b16a1475d90",
    id: "Haunting Memories",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC778\uB0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4f3f5e804ea5878043a01a76a737568214b3928b4828dd2337bc9117b3d0e68f",
    id: "Perseverance",
    weightValue: "10.5",
    defaultDustAmount: "21000",
    quantityDustAmount: "25200"
  },
  {
    name: "\uAC80\uC740 \uC9C0\uD321\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a0127dcba630e33cf422ca94821d32e7be28e008c30b4aadb502c0cd10cc540c",
    id: "The Black Cane",
    weightValue: "10.5",
    defaultDustAmount: "21000",
    quantityDustAmount: "25200"
  },
  {
    name: "\uCD08\uC6D4\uD55C \uC815\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d4a911199ff1a87d4601364b6bec0258835be5fbf2c2656110e363a494eaae21",
    id: "Transcendent Spirit",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uACE0\uB300 \uD574\uACE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bd15182cc0baac059f98aea6015bd3b014e4c3150d3aacccc7b4d8c19e743ebe",
    id: "Ancient Skull",
    weightValue: "10.5",
    defaultDustAmount: "21000",
    quantityDustAmount: "25200"
  },
  {
    name: "\uC758\uD68C\uC758 \uC815\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c0ef2d4f86cfb3fa6664b42ab78182f9c1d5f46b26cd40c1f189aac98ebc929",
    id: "Mind of the Council",
    weightValue: "10.47",
    defaultDustAmount: "20940",
    quantityDustAmount: "25128"
  },
  {
    name: "\uC801\uC758\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6334e7095dab5de5690aca04947aeeceb2793b21f8e42ff9d06905cb4c85ec2f",
    id: "Eye of Malice",
    weightValue: "10.5",
    defaultDustAmount: "21000",
    quantityDustAmount: "25200"
  },
  {
    name: "\uCE74\uC634\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8842d260ef42352e288573a12738407b03437159de78bbcd9905ca6b2f87d56f",
    id: "Kaoms Binding",
    weightValue: "10.47",
    defaultDustAmount: "20940",
    quantityDustAmount: "25128"
  },
  {
    name: "\uACC4\uC57D: \uD30C\uAD34 \uBD88\uAC00\uB2A5\uD55C \uC874\uC7AC \uD30C\uAD34\uD558\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6fe82aa4fff9a42d424b871ec22c8661a5d0624ef2db1f6b5b6c00523a78c86b",
    id: "Contract%3A Breaking the Unbreakable",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uACC4\uC57D: \uB178\uC608\uC0C1\uC758 \uC655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e669e65a34be133539c0e848f4aea88c72a5bc2e74d41181e3d7e1d0f1237698",
    id: "Contract%3A The Slaver King",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uBCF5\uC218\uC758 \uCC9C\uC0AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/df0659ee4ce9a4862b970f3fd0bfe21b8279e47d4bc578dab0ae566a54ae155e",
    id: "The Angel of Vengeance",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uAE68\uB2EC\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8c15c6fbf93aa37311677a6e194a0b9c577ee8fe6f7bc96c6ed120e88367f37c",
    id: "The Epiphany",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uB4A4\uD2C0\uB9B0 \uC0BC\uC704\uC77C\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bb2b836dc6288dc5380299ff5f49f752828028469fcfd20b81f77b8bdada86ee",
    id: "The Twisted Trinity",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uB0A0\uB6F0\uB294 \uD3ED\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3015d91a9b548b79cc230c56ce70d61126c5ea6ebc828d18865ddca3ad17b860",
    id: "The Unbridled Tempest",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uC790\uAE30\uB3C4\uCDE8\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fed13ca224afc7f5563b4620b4aa5fe4179bfcb68c9c9d731f9209ef762d985e",
    id: "The Narcissist",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uBD80\uD328\uD55C \uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5a67899efb2e2f58e902118c7c725d08f44ce599fbad2c794d9d330eb581e9c7",
    id: "The Depraved",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uC9C4\uD64D\uC0C9 \uD0DC\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7744baeb32b6c2ec0aca7978b085067d1c2e4ab7f7233bca1680d03ba3b36d13",
    id: "The Crimson Storm",
    weightValue: "10.47",
    defaultDustAmount: "20940",
    quantityDustAmount: "25128"
  },
  {
    name: "\uCD08\uC6D4\uD55C \uC721\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0f44863cbf0c66ff826e443806a1434e5a90dfef89cebcdaf06bdbb0ad9f2415",
    id: "Transcendent Flesh",
    weightValue: "10.52",
    defaultDustAmount: "21040",
    quantityDustAmount: "25248"
  },
  {
    name: "\uC9D5\uACC4\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b3bb4980335f7689fb6c9d989f32108546973e518d9f080d7ba85f1a54cb0c83",
    id: "The Chains of Castigation",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uD798\uACFC \uC57D\uC18D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/edce7760d3b8523cd07e93dc1c9288ef31583dcf88d53ca64dee464b6044b432",
    id: "The Power and the Promise",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uC950\uB36B",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f82f5ae9f47658847647b39ad92fff8a94e6ecab7053e9ef2b15b311c5e9fb55",
    id: "The Rat Cage",
    weightValue: "10.16",
    defaultDustAmount: "20320",
    quantityDustAmount: "24384"
  },
  {
    name: "\uD06C\uB77C\uCE78\uC758 \uB4F1\uB531\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6d4b8f44f7b61c5dc244a5d30e5798d3c871a31e16dfc2e5454ed5380706f4e8",
    id: "Craiceanns Carapace",
    weightValue: "10.16",
    defaultDustAmount: "20320",
    quantityDustAmount: "24384"
  },
  {
    name: "\uBC14\uC54C\uC758 \uC6B4\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4de723f8ff4317d98aa65f2e1f6d3814050fb02914f49d70af4e165fc94b80cf",
    id: "Fate of the Vaal",
    weightValue: "10.16",
    defaultDustAmount: "20320",
    quantityDustAmount: "24384"
  },
  {
    name: "\uC6A9\uC1A1\uACF3\uB2C8\uC758 \uBE44\uC0C1 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ef8dd60e5d89fafda624c7973d8a629cc42dc794958efb71af94faded7bbba01",
    id: "Replica Dragonfangs Flight",
    weightValue: "10.16",
    defaultDustAmount: "20320",
    quantityDustAmount: "24384"
  },
  {
    name: "\uBE59\uD0C0\uC758 \uADF8\uB987",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fd1f00762e86a7084d3dd86d9c3406855fa9ae04ca893e23419fe30ee7cf92af",
    id: "Vessel of Vinktar",
    weightValue: "9.92",
    defaultDustAmount: "19840",
    quantityDustAmount: "23808"
  },
  {
    name: "\uACA9\uB178\uD558\uB294 \uC9C0\uC625\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9cf01aedd6dc0990faa8dafb3c238f79a15a62949e612423af8c54ef4dc1512",
    id: "The Raging Inferno",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uC2DC\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/efe0085d02ac312d207da0202ca0214b78109babb06143cb8f5e6b66a69a53c6",
    id: "Lioneyes Vision",
    weightValue: "9.9",
    defaultDustAmount: "19800",
    quantityDustAmount: "23760"
  },
  {
    name: "\uBD80\uD328\uD55C \uC5FC\uC218\uB2E8 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/53a3fe0cd16bcaddb65f270ca415f4ff7f7c6b16fb74f7e131ae74daa3913d56",
    id: "Brinerot Mark",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC801\uAC80\uB2E8 \uAC00\uB77D\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9e0c0716ac508aefb5b3c4d427c5e3eaecc0f4b918fa441b12d674c925005da4",
    id: "Redblade Band",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC8FD\uC5B4\uAC00\uB294 \uD574",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab97bd6972f473708a08022840ca566cb56beae2941d36f2968c51de139ac44a",
    id: "Dying Sun",
    weightValue: "9.92",
    defaultDustAmount: "19840",
    quantityDustAmount: "23808"
  },
  {
    name: "\uB098\uB9C8\uD6C4\uC758 \uBD88\uAF43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b4c4c87d78b68f952c0fba1a53f7bc4012b3b00fe2087bdf901c470021b16c66",
    id: "Ngamahus Flame",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC624\uBA54\uC774\uC624\uCE78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ae5d47b1d2df62385680909f9b5dfe3f11b21a583094256cc49081496e7e39a",
    id: "Omeyocan",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uD0C0\uBD80\uCE74\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/71ff9bc2b1ced946bade4b8ddc90851fcce6e87fcf90ed3beb5fa0cad1b03f83",
    id: "Tavukai",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC0BC\uB2E8 \uACF5\uACA9 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ccabc1eda92e6012ce311fd92464c52f83121c26250d593ea3a191eed554486e",
    id: "Replica Three-step Assault",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC720\uD639\uC758 \uBC1C\uAC78\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e499b429c76627c439c756673ea00bad556c643dbfee61bfcb3d05fa92c53900",
    id: "Temptation Step",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC704\uB300\uD55C \uACE0\uB300 \uC2E0\uC758 \uCD09\uC218",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1d4ca1d9caacb2175c71f50e3017f1151abb84da1111859f96f878ffc98e65f3",
    id: "Great Old Ones Tentacles",
    weightValue: "9.61",
    defaultDustAmount: "19220",
    quantityDustAmount: "23064"
  },
  {
    name: "\uB04A\uC784\uC5C6\uB294 \uC5F0\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9ac28a342ac1de2669939b58edb2c10fd12ffbe07784d9112b6e3a7de4eea7d",
    id: "Ceaseless Feast",
    weightValue: "9.61",
    defaultDustAmount: "19220",
    quantityDustAmount: "23064"
  },
  {
    name: "\uBC84\uB4DC\uB098\uBB34 \uC120\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/307998c74017ba070250e5198da297451193126cb10fd4576d26f1c5131dcc2c",
    id: "Willowgift",
    weightValue: "10.5",
    defaultDustAmount: "21000",
    quantityDustAmount: "25200"
  },
  {
    name: "\uCE58\uD22C\uC2A4\uC758 \uC815\uC810",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8aba7d4c02e257fdf41afdf6efa6d351a9d14e9e015dcbd1a9fb9669a3bae0e0",
    id: "Chitus Apex",
    weightValue: "9.58",
    defaultDustAmount: "19160",
    quantityDustAmount: "22992"
  },
  {
    name: "\uB2E4\uB808\uC18C\uC758 \uC6A9\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/42f1e7938547246017224b4f6aa272cf16ea98cc254a92cf3ffe61379cb0a008",
    id: "Daressos Courage",
    weightValue: "9.58",
    defaultDustAmount: "19160",
    quantityDustAmount: "22992"
  },
  {
    name: "\uD06C\uB77C\uCE78\uC758 \uBC1C\uC790\uAD6D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/617c5b22850175eabc5cc8c7748739dd6e84ecc4b27aa653515fd5dd12f1d0c0",
    id: "Craiceanns Tracks",
    weightValue: "9.58",
    defaultDustAmount: "19160",
    quantityDustAmount: "22992"
  },
  {
    name: "\uD398\uB204\uBB34\uC2A4\uC758 \uB3C5\uC18C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/43b9b9cd8846025c77b71370d562a0c8183e016bf18f387d85609bc80fd618b9",
    id: "Fenumus Toxins",
    weightValue: "9.58",
    defaultDustAmount: "19160",
    quantityDustAmount: "22992"
  },
  {
    name: "\uB808\uC774\uD074\uB77C\uC2A4\uD2B8 \uD310\uD14C\uC628",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1098a0584fb59ae214f7b9fd506beb0c2ce49c4e982ef809dff3282e2a5c5d14",
    id: "Wraeclast Pantheon",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uD398\uB780\uB450\uC2A4 \uC800\uD0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6d65f617f40424f8a920b48625dadcd9a66853fe97b81d54d109ac63a8c211bc",
    id: "The Perandus Manor",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uBD88\uBA74\uC99D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa10b900cf78c69a67ada5c577a8bb0d5192577103820686309630f8dcc64042",
    id: "Insomnia",
    weightValue: "10.33",
    defaultDustAmount: "20660",
    quantityDustAmount: "24792"
  },
  {
    name: "\uACB0\uBC31\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d4b48900a711b5280222aa3525664babecc21322d0db32321902f09bb76ee8e1",
    id: "Eye of Innocence",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uC794\uC778\uC131\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cd6cbab79a71f742754442a743a94ab3d78329c56c391eb6b27ffd02e9001845",
    id: "First Piece of Brutality",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uBD88\uAC00\uBD84\uD55C \uC6B4\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/741ef85fe58d68c26253aa14cc32acded39ae3554326c98ca82db095b0ffc6ae",
    id: "Inextricable Fate",
    weightValue: "9.61",
    defaultDustAmount: "19220",
    quantityDustAmount: "23064"
  },
  {
    name: "\uBC29\uD5A5\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8118489f5e41f5b0f4910929a146f96c8be798eddcc69884cdbc87c724a81ae4",
    id: "First Piece of Directions",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uBC29\uD5A5\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8f922393477ccdbc89f04aea6764d0b9c2cbaeff2eb692a728840913ed588a66",
    id: "Second Piece of Directions",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uBC29\uD5A5\uC758 \uC138 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f7a685c193a325b9547e5ff0404a3791834233d7ba362eefb7360f61d8689874",
    id: "Third Piece of Directions",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uB098\uBCD1 \uD658\uC790\uC758 \uC790\uC120",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6cc6da8ad4b53d798edfba871765305e3f2df31ab794fbb1dbf0abc01b1994b6",
    id: "Lepers Alms",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uC794\uC778\uC131\uC758 \uC138 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fcdf041f107ef15ae1ae350a849761ce8cee15bb82921210355ca270acb99626",
    id: "Third Piece of Brutality",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uACE0\uC694\uD55C \uBC14\uB78C\uB2E8 \uBD09\uC778",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9a426776f374c56000024648a0eeac13d7e6d70f51da4205bc6ac49e6a3f6779",
    id: "Mutewind Seal",
    weightValue: "9.87",
    defaultDustAmount: "19740",
    quantityDustAmount: "23688"
  },
  {
    name: "\uC794\uC778\uC131\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dd38bf108cab4b48afb8244e6e7fe1b01633a092c2713cd604eb581749633ddd",
    id: "Second Piece of Brutality",
    weightValue: "9.45",
    defaultDustAmount: "18900",
    quantityDustAmount: "22680"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uACB0\uC810",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a172d84ae997888b145d7307598e3355589027cf3893ad90ea3e515972e20e7b",
    id: "Atziris Foible",
    weightValue: "9.35",
    defaultDustAmount: "18700",
    quantityDustAmount: "22440"
  },
  {
    name: "\uC789\uAC78\uBD88 \uC9C0\uD53C\uAE30 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f7a72b1136345e4233b69da48004356e5f4db4b485f188b08e30c1a09fd96183",
    id: "Replica Emberwake",
    weightValue: "9.35",
    defaultDustAmount: "18700",
    quantityDustAmount: "22440"
  },
  {
    name: "\uC544\uCF08\uB9AC\uC758 \uCD08\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7675aa41dfeee478abbd3c44287877c54aa5a7d03aa63cce66f6502493c5f936",
    id: "Ahkelis Meadow",
    weightValue: "9.35",
    defaultDustAmount: "18700",
    quantityDustAmount: "22440"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uAC78\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a0fe695b97f7a1f9da8fb580ed3a75e18d7de89d342d5602a4e18fd39e51e8f",
    id: "Atziris Step",
    weightValue: "9.33",
    defaultDustAmount: "18660",
    quantityDustAmount: "22392"
  },
  {
    name: "\uB514\uC544\uB450\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/06bb23950149dc336d369306b55a2162cf07ccee60423bd8c89dd54423015c34",
    id: "Dyadus",
    weightValue: "9.33",
    defaultDustAmount: "18660",
    quantityDustAmount: "22392"
  },
  {
    name: "\uCCB4\uB8E8\uBE54\uC758 \uC545\uD589",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bfc2871168ae8b5773ff2df971edfaa1c1799a35cddd59c689e2b102bbfa4e56",
    id: "Cherrubims Maleficence",
    weightValue: "9.33",
    defaultDustAmount: "18660",
    quantityDustAmount: "22392"
  },
  {
    name: "\uC774\uBC84\uC758 \uD1B5\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/992434065e6bcb9b4d25f419436d1287e8e7255b7a137d0e7741d96955b2c7b3",
    id: "Ebers Unification",
    weightValue: "9.33",
    defaultDustAmount: "18660",
    quantityDustAmount: "22392"
  },
  {
    name: "\uBA54\uB4DC\uBCA0\uB4DC\uC758 \uB3C4\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f0aa8bafc32953d37ed8fe61813b720a06936bb05c39eb9557883d50a2a2571c",
    id: "Medveds Challenge",
    weightValue: "9.33",
    defaultDustAmount: "18660",
    quantityDustAmount: "22392"
  },
  {
    name: "\uBB34\uC9C0\uAC2F\uBE5B \uBC1C\uAC78\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dfa8031e7b1493c8343a4c97c3449f56af5d54cabee78639df546e3e0e2747ce",
    id: "Rainbowstride",
    weightValue: "9.3",
    defaultDustAmount: "18600",
    quantityDustAmount: "22320"
  },
  {
    name: "\uC544\uD3A9\uC758 \uACA9\uB178",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3f2e4660df4df54356f946b4a58750804343fea551234784c3df0a4454e4e880",
    id: "Apeps Rage",
    weightValue: "9.3",
    defaultDustAmount: "18600",
    quantityDustAmount: "22320"
  },
  {
    name: "\uBE5B\uC758 \uBC00\uB835\uAFBC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a082fd8fcd90dd322be93c8bb1e2d49deba38843b04840bb4dd415b4acf7bfe4",
    id: "Lightpoacher",
    weightValue: "9.3",
    defaultDustAmount: "18600",
    quantityDustAmount: "22320"
  },
  {
    name: "\uAE08\uB2E8\uC758 \uC0E4\uCF54",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cd35fa9d06682f54fdb72ab60a17301aa814d0652391ee38cab26a478f17add5",
    id: "Forbidden Shako",
    weightValue: "9.3",
    defaultDustAmount: "18600",
    quantityDustAmount: "22320"
  },
  {
    name: "\uCE68\uBC94\uC790 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/87a89ed734914db6abe5ec400e7b3492b9d7e13eb701a9e55b5f62938abf0bcd",
    id: "Replica Infractem",
    weightValue: "9.3",
    defaultDustAmount: "18600",
    quantityDustAmount: "22320"
  },
  {
    name: "\uC545\uCDE8 \uB098\uB294 \uC218\uB3C4\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9e97a578981577255a3f5454c363a2b4ab489fdc7e310ae45f623b806f7f79f",
    id: "The Putrid Cloister",
    weightValue: "9.18",
    defaultDustAmount: "18360",
    quantityDustAmount: "22032"
  },
  {
    name: "\uBE44\uD1B5\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3fcc48fd7edccff7b9266eaed90cbdc3cfb1d180ec5e8b044bbdcf426c8ba478",
    id: "Touch of Anguish",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uACBD\uBA78\uC735\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e74ebce2a19e67b986118a4d57e20376d60f4d8a168d17b00a2a996b5e653f72",
    id: "Scornflux",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uC544\uC790\uB514 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1fa0edef3e7f602a591613893e4104f288be41c9cfd912dcbabbd54281aae2c",
    id: "Azadi Crest",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uACE0\uB974\uACE4\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/628bd956be2c690af4b088a2250feb3d7f01907fd3bdb4bc6fe939f083c772a1",
    id: "Gorgons Gaze",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uBD80\uC815\uD55C \uB300\uB9AC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/135d9ba5938f619b1557ea0d6c644951fc4d6e743b8d41a299fc6fb49ed81377",
    id: "Profane Proxy",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uB9C8\uB140 \uC0AC\uB0E5\uAFBC\uC758 \uC2EC\uD310",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/363985536b195841e96479bbfe46d275758ee06b08983f9130c05ed2d86c8623",
    id: "Witchhunters Judgment",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uC544\uCF54\uC57C\uC758 \uC751\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5da70bdbcdc65c67822b6846149124f478afd181786eb195fd9c7ac3118c9c18",
    id: "Akoyas Gaze",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uC778\uB2E4\uC758 \uD56D\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e625e320faf5f2f07313929e405d492473d04c96cd82aa332b530808795012db",
    id: "Yndas Stand",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uD0D0\uC695\uC2A4\uB7EC\uC6B4 \uAE4C\uB9C8\uC911",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3b30593694137a8e42650df39c0d80df1daed317c51c00a85db92a18c7f228e2",
    id: "Grasping Nightshade",
    weightValue: "9.03",
    defaultDustAmount: "18060",
    quantityDustAmount: "21672"
  },
  {
    name: "\uC548\uC758 \uACBD\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc960a3be994564c3ce6d07fdb779385218ed88ab65360a88906a0d8fe773f59",
    id: "Ahns Contempt",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uB367\uC5C6\uB294 \uC720\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3fe0ee52298bcbb19d3b4b887b83df06cbfce131f7b2105feb9bde5a0ff3d588",
    id: "The Ephemeral Bond",
    weightValue: "8.91",
    defaultDustAmount: "17820",
    quantityDustAmount: "21384"
  },
  {
    name: "\uB3C4\uAE08\uB41C \uC131\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9f771d44ebb038c5d8dfec741059a88a4e44ac25cc593e65cb871713b3ebf5ea",
    id: "The Gilded Chalice",
    weightValue: "8.91",
    defaultDustAmount: "17820",
    quantityDustAmount: "21384"
  },
  {
    name: "\uC8FD\uC74C\uACFC \uC758\uBB34",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/44ac82174b83f99c805ccdef44a2ef8e06b5ee5f02842f2b0c30e6d122b4ac2c",
    id: "Death and Taxes",
    weightValue: "8.91",
    defaultDustAmount: "17820",
    quantityDustAmount: "21384"
  },
  {
    name: "\uBD80\uC11C\uC9C4 \uD5A5\uB85C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dfc9e81309d3a186443c74fa1a91a0ffeb2107f0ce71c9bcca6b6a9b987aa3bb",
    id: "The Broken Censer",
    weightValue: "8.91",
    defaultDustAmount: "17820",
    quantityDustAmount: "21384"
  },
  {
    name: "\uC548\uC758 \uC644\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/edc0396e7d85b77f2e4fcda82abe3e331bc39039fe629ad8ff7d2999e07c6f53",
    id: "Ahns Might",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uCF69\uACE0\uB974\uC758 \uB05D\uC5C6\uB294 \uACA9\uB178",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d0450c5acdc79cdb1a51c5ff8b1b3c862fcf4788fd177664359a9aecc310311",
    id: "Kongors Undying Rage",
    weightValue: "8.79",
    defaultDustAmount: "17580",
    quantityDustAmount: "21096"
  },
  {
    name: "\uC57C\uC218 \uBAA8\uD53C \uC204",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/222cd19f53ab1503ae1ec270c4e001429e6071d0acaf25d1882d8ed8329195e6",
    id: "The Beast Fur Shawl",
    weightValue: "9.06",
    defaultDustAmount: "18120",
    quantityDustAmount: "21744"
  },
  {
    name: "\uC548\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/10bb754f44a3a8fee17167f4cb1a38a2b9060cd786b07ab4fedbb0a15188f147",
    id: "Ahns Heritage",
    weightValue: "8.79",
    defaultDustAmount: "17580",
    quantityDustAmount: "21096"
  },
  {
    name: "\uC0AC\uCE74\uC648\uC758 \uBC14\uB78C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0c965d58fed57e1b8bbf3d6f7307c267a1307455eee44f10d641468a6998db90",
    id: "Saqawals Winds",
    weightValue: "8.77",
    defaultDustAmount: "17540",
    quantityDustAmount: "21048"
  },
  {
    name: "\uAD11\uBD84\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0413eca7ee9bc4a0b486de53ddb64c6442b3e9e5bf865da99f349d79d280982a",
    id: "Legacy of Fury",
    weightValue: "8.77",
    defaultDustAmount: "17540",
    quantityDustAmount: "21048"
  },
  {
    name: "\uB4DC\uBCF4\uD1A0\uC758 \uD5CC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4fb9df83ef469f82f477a548be24fe8f513931a7a18073ad56d3b306bf4689ca",
    id: "Devotos Devotion",
    weightValue: "8.65",
    defaultDustAmount: "17300",
    quantityDustAmount: "20760"
  },
  {
    name: "\uC62C\uBA55\uC758 \uC9C0\uC131\uC18C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d4d26def1c5fc1a703bae02d9f9ba4e03688e6a6b71ef2fa71c4df79919fa91",
    id: "Olmecs Sanctum",
    weightValue: "8.65",
    defaultDustAmount: "17300",
    quantityDustAmount: "20760"
  },
  {
    name: "\uD53C\uC758 \uC9C0\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4d4075d0cb579bf79abf64dfa2c982bc694d46470a743df56780b50d289f57bc",
    id: "Bloodgrip",
    weightValue: "8.65",
    defaultDustAmount: "17300",
    quantityDustAmount: "20760"
  },
  {
    name: "\uC544\uB8EC\uC758 \uAE30\uB465",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8eaaa2e1594ea11abfa710138fa801fb09e0ad8fc4c24de49b32c662c32a03c",
    id: "Pillars of Arun",
    weightValue: "8.65",
    defaultDustAmount: "17300",
    quantityDustAmount: "20760"
  },
  {
    name: "\uB3D9\uCABD\uC758 \uC544\uADF8\uB124\uB85C\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7d19b73610aa1048004364ee4a82020b2c5ec783334ae93ad9903499cec6b5ce",
    id: "Agnerod East",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uBD81\uCABD\uC758 \uC544\uADF8\uB124\uB85C\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bbf295bf541552ed4f9793e7a982f5c0b8855d31b789b770d4e9dc61faacf44c",
    id: "Agnerod North",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uB0A8\uCABD\uC758 \uC544\uADF8\uB124\uB85C\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c018500209e1e421825bf08fd63297fd33757289cc7ca834a7273260aa9e04de",
    id: "Agnerod South",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uC11C\uCABD\uC758 \uC544\uADF8\uB124\uB85C\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/019e2677dba96834e12df88369c28b0525f09ee3ae80832fa69525c8eebe1af8",
    id: "Agnerod West",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uC758\uD68C\uC758 \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4c4ee96bbf4939aadd5442e179d5a5c288eb7dad70b2ae61f41a4258fa6b5952",
    id: "Breath of the Council",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uD3C9\uD615\uC758 \uBD84\uAD11\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d4db896e7ca5df8d83cfa1177c0f3321261e96b639367db4586e6f8bfd249e0d",
    id: "The Poised Prism",
    weightValue: "8.54",
    defaultDustAmount: "17080",
    quantityDustAmount: "20496"
  },
  {
    name: "\uC564\uB4DC\uBC14\uB9AC\uC6B0\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2fd0e93707a8a2ab82604e80493bf87bde2d9a261dbe1e96e8d47a2f5301a615",
    id: "Andvarius",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uD30C\uD3B8\uC758 \uBE44",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fe53a2d258cbe73cdfe513ccf491bf94fc8606576567722ab4d7b3348524b965",
    id: "Rain of Splinters",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uB808\uC774\uD074\uB77C\uC2A4\uD2B8\uC758 \uBCC4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5c00fbd6572c89d355a67cf0e8e99a83f3c435673c51247e3128adc471f53dd8",
    id: "Star of Wraeclast",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uD398\uB204\uBB34\uC2A4\uC758 \uB9E4\uB4ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb4b599ac09fc19ba5b2220a7af2792412d9a83d212460e9aec99652b893539c",
    id: "Fenumus Weave",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uBE45\uD0C0\uB9AC\uC624\uC758 \uC790\uBE44 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c2e1daba94d76d5bddc984bac453a823671fa4d855f5165d4d6659cbd8202c07",
    id: "Replica Victarios Charity",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uC2EC\uC7A5 \uBD84\uC1C4\uAE30 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f6f2e3cbe251a1788501e7e2cc7f5981b9b8336702ac251cce18669786e59929",
    id: "Replica Heartbreaker",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uC2DC\uC778\uC758 \uD39C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ee6bed6c511fc7ecc9390b854ff894e74aaf02d24267f067a720e7b8f7a9fc8",
    id: "The Poets Pen",
    weightValue: "8.31",
    defaultDustAmount: "16620",
    quantityDustAmount: "19944"
  },
  {
    name: "\uD478\uD15C\uBCF4\uC758 \uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/798579512aafa2ff082fde0173824b3b01584f655049b9d0f5cd22a27a6cce84",
    id: "Putembos Mountain",
    weightValue: "8.31",
    defaultDustAmount: "16620",
    quantityDustAmount: "19944"
  },
  {
    name: "\uBE44\uC2A4 \uBAA8\uD2F0\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/02e2f75abd95e78d5d7f39896d8778317993612d8b6fcc080503a93b02faaed2",
    id: "Vis Mortis",
    weightValue: "8.29",
    defaultDustAmount: "16580",
    quantityDustAmount: "19896"
  },
  {
    name: "\uC5B4\uB450\uC6B4 \uBE5B\uC758 \uADA4\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bcebeea3e71bdde2b41aa70863e8111e65bf29542f441bfc23d10da23c78c6cd",
    id: "Darkray Vectors",
    weightValue: "8.29",
    defaultDustAmount: "16580",
    quantityDustAmount: "19896"
  },
  {
    name: "\uC138\uACC4\uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1e54a58b0d63475ee94f69e5e078380eea13dbe49a35875c015956447e1fc90a",
    id: "Worldcarver",
    weightValue: "8.4",
    defaultDustAmount: "16800",
    quantityDustAmount: "20160"
  },
  {
    name: "\uBD88\uC0AC\uC870\uC758 \uBE44\uC0C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5787c58d514949e22620dafd78bab8477cf9efae928e51f296fbb4c0376618a",
    id: "Rise of the Phoenix",
    weightValue: "8.29",
    defaultDustAmount: "16580",
    quantityDustAmount: "19896"
  },
  {
    name: "\uBCA4\uD1A0\uC758 \uB3C4\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/43095bc8232c763ba1401fa49ca23b67a73f919ed3318db600ec96e2773816a9",
    id: "Ventors Gamble",
    weightValue: "8.29",
    defaultDustAmount: "16580",
    quantityDustAmount: "19896"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4723988408fa0b39acaa8622480c322a1fc49a7ed8d76294a0a8d0e67a86a0e0",
    id: "Malachais Loop",
    weightValue: "8.29",
    defaultDustAmount: "16580",
    quantityDustAmount: "19896"
  },
  {
    name: "\uC815\uC758\uC758 \uC800\uC6B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f1ac588e8d5927d2d85de45b396f398be7d83b847b413d30883300a4915b4a42",
    id: "The Scales of Justice",
    weightValue: "8.26",
    defaultDustAmount: "16520",
    quantityDustAmount: "19824"
  },
  {
    name: "\uC18D\uBC15\uB41C \uC6B4\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ef3137390233a7cc09dcaae3ae9b87972fb0a7182d0972105a760bb14e046c5",
    id: "Bound Fate",
    weightValue: "8.26",
    defaultDustAmount: "16520",
    quantityDustAmount: "19824"
  },
  {
    name: "\uCFE8\uB808\uB9C9\uC758 \uC9C0\uD321\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/be9bd2bcaa4187332a5b85b4ba48512b4680fdafded292c3472ad57685829c52",
    id: "Cane of Kulemak",
    weightValue: "8.26",
    defaultDustAmount: "16520",
    quantityDustAmount: "19824"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/44e2078a94a79e8106d154fb0e80faeac9f8e327d98175833ea6e63fb526c8e3",
    id: "Deaths Hand",
    weightValue: "8.16",
    defaultDustAmount: "16320",
    quantityDustAmount: "19584"
  },
  {
    name: "\uCE90\uC5B4\uBE14\uB808\uC774\uB4DC \uB291\uB300\uC758 \uC18C\uAD74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/806c990742adf13c3404624f81036f3858b92f405337836d11f8d0557e95c427",
    id: "Caer Blaidd%2C Wolfpacks Den",
    weightValue: "8.16",
    defaultDustAmount: "16320",
    quantityDustAmount: "19584"
  },
  {
    name: "\uAD50\uB450\uBCF4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b83fd9649beb365bd5ed329dbe83a32a178e97ac662ed2b46effe363f48e8c9a",
    id: "The Beachhead",
    weightValue: "8.16",
    defaultDustAmount: "16320",
    quantityDustAmount: "19584"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uAE30\uD3ED\uC81C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e14040e4debc2eeabc63794a4a352eee4e5e4c179aa5776b7bfe6c269981a7c2",
    id: "Doryanis Catalyst",
    weightValue: "8.05",
    defaultDustAmount: "16100",
    quantityDustAmount: "19320"
  },
  {
    name: "\uC601\uD63C\uC758 \uC77C\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab8456a390670ec2e869c35af6f578fd7517263c7f4cf87f036d478569125c2e",
    id: "Soul Strike",
    weightValue: "8.05",
    defaultDustAmount: "16100",
    quantityDustAmount: "19320"
  },
  {
    name: "\uC870\uD504\uB9AC\uC758 \uC131\uC5ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/460e22d2cfff02494303b26e00df2b9ebac2534c91a68122e6fab2e3d900703c",
    id: "Geofris Sanctuary",
    weightValue: "8.05",
    defaultDustAmount: "16100",
    quantityDustAmount: "19320"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uC9C4\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/51af81db173af6c86cec8a1b5be7f1fe35f1c97110a42e4689d3e0fb151b97a7",
    id: "Hyrris Truth",
    weightValue: "8.05",
    defaultDustAmount: "16100",
    quantityDustAmount: "19320"
  },
  {
    name: "\uB77C\uC2DC\uCE7C\uB3C4\uC5B4\uC758 \uC778\uB0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a4764a13e4ae3a3b055c4cd047c035a7c112a9c5a7e6df0f052792490fc6424",
    id: "Rashkaldors Patience",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uBD88\uD0C0\uB294 \uB9C8\uB140\uC758 \uC220",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/50df04eb963859410b6fe2a57a94c87012d98e6aee22d94ea3df1a9144ea7171",
    id: "Witchfire Brew",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uC601\uD63C \uC62C\uAC00\uBBF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/73740cd1e7ab848c0a97bee79be857703917807320f0f6e2a430174a3059fdb9",
    id: "Soul Tether",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uC815\uBCF5\uC9C0\uC758 \uAD6C\uB801\uD145\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c9528d87554e11131138856a9c56e3abda11dc2299d749ecbb9a50109c249f67",
    id: "Maw of Conquest",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uC9D5\uD06C\uC2A4 \uC561\uB9C9\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b96247161ca8e4e0e566319c88005a58f6619702b616e6ddcbaac6f7f297a00e",
    id: "The Jinxed Juju",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uACE0\uD1B5 \uD0D0\uAD6C\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b8cc6607763970bed4bfd11eeb2df1ee9201780448a4d58861ba3691942202c2",
    id: "Painseeker",
    weightValue: "8.4",
    defaultDustAmount: "16800",
    quantityDustAmount: "20160"
  },
  {
    name: "\uC624\uBC14\uC758 \uC800\uC8FC\uBC1B\uC740 \uC804\uB9AC\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e09875b15e3da3afc376f35474c226c2083e46298d63902c1f034183e93634f",
    id: "Obas Cursed Trove",
    weightValue: "8.16",
    defaultDustAmount: "16320",
    quantityDustAmount: "19584"
  },
  {
    name: "\uD478\uC5B4\uC870\uC774\uC758 \uC740\uC2E0\uCC98",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1778a0feebe2211db823a9bc471b110c0dd3d394c1035b4aa6728750324b057",
    id: "Poorjoys Asylum",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uC640\uCE74\uC640 \uD22C\uC544\uD6C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a0a553a47dcf81284faf2e4e94dc1b5846d95510a83d31483f9c8b7ebe40e04e",
    id: "Whakawairua Tuahu",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uAC80\uC740 \uADFC\uC704\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b40a99830efd8e1e4ae31bc560fccf7fe8250178dd324043ff5bd644b1a338f9",
    id: "BlackGuardz",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uB04A\uC784\uC5C6\uB294 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/440c9b61c3ef75da1a4fc769a39872160bebbcb97b4de3ea11ab38803e0bc602",
    id: "The Restless Ward",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uCE74\uC634\uC758 \uBA85\uB839",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8222e8ba7d3dcde9fb4305da491a3dc2c1f92e201cf90d509d438560d68cbd82",
    id: "Kaoms Command",
    weightValue: "8.02",
    defaultDustAmount: "16040",
    quantityDustAmount: "19248"
  },
  {
    name: "\uACF5\uC131\uBD84\uC1C4\uAE30 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/91664622dc4059d2ffd6f8f136f67163c790bf31ae0f1ba36faeec6fed3fa517",
    id: "Replica Siegebreaker",
    weightValue: "7.83",
    defaultDustAmount: "15660",
    quantityDustAmount: "18792"
  },
  {
    name: "\uC5F0\uC124\uAC00\uC758 \uD654\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3eabb0b4751dd9a2140795d35f7e22a0e040a6c69566f12ab3326392f7a1c655",
    id: "Speakers Wreath",
    weightValue: "7.81",
    defaultDustAmount: "15620",
    quantityDustAmount: "18744"
  },
  {
    name: "\uC1C4\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fa5aa8842e836eb6795059a4eb71be7b7a5a68f359c0038f5f35f1bc0de3d60b",
    id: "The Stampede",
    weightValue: "7.81",
    defaultDustAmount: "15620",
    quantityDustAmount: "18744"
  },
  {
    name: "\uB77C\uBE44\uC559\uAC00\uC758 \uD63C\uBC31 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ac23f087299116c1d3846ac60932fb0b41e89e8302f7df9d80e08dc3a734714b",
    id: "Replica Laviangas Spirit",
    weightValue: "8.51",
    defaultDustAmount: "17020",
    quantityDustAmount: "20424"
  },
  {
    name: "\uC561\uD23C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/63fa3aca95a960da804fa7564f3773f4d1378e8fcf4804abcfac90244793403f",
    id: "Actum",
    weightValue: "7.81",
    defaultDustAmount: "15620",
    quantityDustAmount: "18744"
  },
  {
    name: "\uCF00\uB974\uBCA0\uB85C\uC2A4\uC758 \uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/60a2f86e0181554fa2f30e555f72b110f96cb3a793a8e96ff33ab2c4482a111c",
    id: "Cerberus Limb",
    weightValue: "7.79",
    defaultDustAmount: "15580",
    quantityDustAmount: "18696"
  },
  {
    name: "\uCE7C\uB9AC\uC0AC\uC758 \uC740\uCD1D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d98899380c21601f3a2964a1adeef17bbd28cf0bcb10e7b72d8c012715d6c076",
    id: "Replica Kalisas Grace",
    weightValue: "7.79",
    defaultDustAmount: "15580",
    quantityDustAmount: "18696"
  },
  {
    name: "\uC778\uC2A4\uBDF0\uB9AC \uCE7C\uB0A0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1301bbd329d1bc029ddc394618a7bee5ce933168ae681e13e216ce79dfaef60",
    id: "Replica Innsbury Edge",
    weightValue: "7.79",
    defaultDustAmount: "15580",
    quantityDustAmount: "18696"
  },
  {
    name: "\uACE0\uD1B5\uC758 \uD131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4da867214c01fed454ac5554d729c9484bc14447bb5870dc1fdb8aa449164e32",
    id: "Jaws of Agony",
    weightValue: "7.69",
    defaultDustAmount: "15380",
    quantityDustAmount: "18456"
  },
  {
    name: "\uCF00\uC774\uAC74\uC758 \uC9C0\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/79322713f971a61901a7233cae23c2afdf63126e68f7cb4e68d46b89ed814138",
    id: "Cagans Map",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uB9AC\uBE0C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8ee598293f346a3d80ec94c9e5d276caa0b2d4e0c8bafdc77aee142f5db98ab3",
    id: "Rive",
    weightValue: "7.69",
    defaultDustAmount: "15380",
    quantityDustAmount: "18456"
  },
  {
    name: "\uC6A9\uBCD1\uC758 \uC6B4\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/51adb2c6787c11c43d461bcb1d36c8b639967e27c8ededc77034ac39e2240194",
    id: "Mercenarys Lot",
    weightValue: "7.69",
    defaultDustAmount: "15380",
    quantityDustAmount: "18456"
  },
  {
    name: "\uC5B5\uC555\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c83dff135feae6f8d87016f1a13dc076c3dd65c7e476b39675aa698204819e6d",
    id: "The Oppressor",
    weightValue: "7.69",
    defaultDustAmount: "15380",
    quantityDustAmount: "18456"
  },
  {
    name: "\uAC70\uB8E9\uD55C \uB300\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/691ecb759233f9899901692d2250fe1ec8e28171d9d5f680e22c4e4a077ff21a",
    id: "Hallowed Ground",
    weightValue: "7.92",
    defaultDustAmount: "15840",
    quantityDustAmount: "19008"
  },
  {
    name: "\uC911\uB825 \uBD95\uAD34",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5da6998df3f9ce15ad5cf556b13084e805e2f65cbdca712bbec778caed5fe5e0",
    id: "Singularity",
    weightValue: "7.59",
    defaultDustAmount: "15180",
    quantityDustAmount: "18216"
  },
  {
    name: "\uC544\uD3A9\uC758 \uC218\uBA74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dd9e4f25aa4642ff37f6ccc5263aef9a59ee28925e1a62c552f45109f633fbd8",
    id: "Apeps Slumber",
    weightValue: "7.59",
    defaultDustAmount: "15180",
    quantityDustAmount: "18216"
  },
  {
    name: "\uC9D0\uC2B9\uC758 \uC18C\uAD74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/02a2aa1cd1d7811f263bce81cd88fcc13cb1151d5f406e1ab1928c2c93638e1c",
    id: "Belly of the Beast",
    weightValue: "7.56",
    defaultDustAmount: "15120",
    quantityDustAmount: "18144"
  },
  {
    name: "\uC801\uAC80\uB2E8 \uC720\uB9B0\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cea60e7f8ee921df613e4bfb43a41dce140898bbad1061b8e06c3e8dc04f14d3",
    id: "Redblade Tramplers",
    weightValue: "7.56",
    defaultDustAmount: "15120",
    quantityDustAmount: "18144"
  },
  {
    name: "\uD558\uC57C\uC628\uC758 \uAD11\uBD84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ca064b849fc881d003463459f67583255d7fcd009d4e9e7cb8054d15d6eaa5a",
    id: "Hyaons Fury",
    weightValue: "7.59",
    defaultDustAmount: "15180",
    quantityDustAmount: "18216"
  },
  {
    name: "\uBA85\uC778\uC758 \uC804\uB2F9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7cf4cbec6e2fdc613cc68a9324260bd76ea0bc7e9bad7127cc907094a001ed94",
    id: "Hall of Grandmasters",
    weightValue: "7.46",
    defaultDustAmount: "14920",
    quantityDustAmount: "17904"
  },
  {
    name: "\uC30D\uB465\uC774 \uBD88\uAF43\uC758 \uC218\uB140\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/55b7a83a4568d7578947a9737749bb16d3f196835c9652d68c6887e5a2e08c3b",
    id: "Convent of the Twins Flame",
    weightValue: "7.46",
    defaultDustAmount: "14920",
    quantityDustAmount: "17904"
  },
  {
    name: "\uBCA0\uB8E8\uC18C\uC758 \uACF5\uC131\uCD94",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b66d2e4a23d4f41d919121cc449fd457b6b9b93f3555b3364838654fac9fd5da",
    id: "Verusos Battering Rams",
    weightValue: "7.46",
    defaultDustAmount: "14920",
    quantityDustAmount: "17904"
  },
  {
    name: "\uCE60\uD751 \uAC19\uC740 \uC5B4\uB460",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bf8aa5006f53977da87aa522d1ab2581030bb56f805eff88a09a01838e81d540",
    id: "Pitch Darkness",
    weightValue: "7.69",
    defaultDustAmount: "15380",
    quantityDustAmount: "18456"
  },
  {
    name: "\uC544\uC138\uB098\uC2A4\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/668114ceb30c238587c6b241047360f2df67c6e617ebcf715748423e65221a69",
    id: "Asenaths Mark",
    weightValue: "7.38",
    defaultDustAmount: "14760",
    quantityDustAmount: "17712"
  },
  {
    name: "\uD0C0\uD638\uC544\uC758 \uBC8C\uCC44",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a17f3aa9a1754bbca503d30bd36b93ebc69f9c092102825859159fc78d111c62",
    id: "Tawhoas Felling",
    weightValue: "7.36",
    defaultDustAmount: "14720",
    quantityDustAmount: "17664"
  },
  {
    name: "\uBAA9\uB9C8\uB978 \uC601\uD63C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c9e7cb53982449d274bfbdf38b84d86a88b47dc7cb53bb31f3ddf415ac9cdd7",
    id: "Soulthirst",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uD3ED\uD48D\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c00229b34e41b54b6fbc8ae44c6c1119eead2bb46bf275df92430cec6d91f548",
    id: "The Tempests Binding",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uB178\uC608 \uAC10\uB3C5\uAD00\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad1707e51fbeff6ac6b4d7740550e0c476f37ad031e90d5d1d33bf8d6d7119a1",
    id: "Slavedrivers Hand",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uC0DD\uCCB4 \uD574\uBD80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/99258a5811cdcfa0decb225fc21db8dc0939bde36cde3dfd2e4b062a66117cfa",
    id: "Vivinsect",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uC6B0\uC790\uC790\uC758 \uACC4\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/245a2ac31cca537056014b4bc6cc5eba6eaf06e5ab6c029e74f03af649b8a1eb",
    id: "Uzazas Valley",
    weightValue: "7.38",
    defaultDustAmount: "14760",
    quantityDustAmount: "17712"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uCC45\uB7B5 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9efffc4d3ebaa3c76e9efa6264581f61d261f740cea1bc333124ca6223d875b4",
    id: "Replica Malachais Artifice",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uACF5\uD5C8\uC758 \uB208 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/73a2874edb56c60bc576dafbf695a594181bb4c4a1828a9da7ec42da8aee7727",
    id: "Replica Voideye",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uC561\uD134\uC758 \uC545\uBABD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/89581062ccd1aa9488d2dd21797e024b921743ad7155eb47a8d8746604278a70",
    id: "Actons Nightmare",
    weightValue: "7.46",
    defaultDustAmount: "14920",
    quantityDustAmount: "17904"
  },
  {
    name: "\uC804\uAC08\uC758 \uBD80\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d5b4debbf722cabc283eae03cd9f46081be6a52778bfc8c0452ef8221e08ff14",
    id: "Scorpions Call",
    weightValue: "7.36",
    defaultDustAmount: "14720",
    quantityDustAmount: "17664"
  },
  {
    name: "\uBD80\uC2DD\uD608\uC758 \uC57D\uC18D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4756c630165fc0ff19412e00a36ded3e48e556b19475fdf8db544d40bb81fd16",
    id: "Rotblood Promise",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uC0BC\uB450 \uC815\uCE58\uC758 \uAD8C\uC704",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a979bc3f1893087c5c47a9c397ee634279901b3be2e421e61b8afefe6e2bdcd",
    id: "Triumvirate Authority",
    weightValue: "7.34",
    defaultDustAmount: "14680",
    quantityDustAmount: "17616"
  },
  {
    name: "\uB9C8\uC624 \uCFE4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8c8bdcc9e856160e3bc44f444784dc0ddf1625f5c2de343380b27c7d722455f",
    id: "Mao Kun",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uAE08\uACE0\uC2E4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/837e5bae77a8531cb2e8dddd265d8119f005c45eece9d06790a04020536446fd",
    id: "Vaults of Atziri",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uC774\uC790\uB85C\uC758 \uB09C\uC81C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b97be246a121ed907d9d67e1ad66b05bbce879af9f3b32b963488352a2964d1b",
    id: "Izaros Dilemma",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uB204\uB85C\uC758 \uD558\uD504",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d1ad8b4762ce20960f7241ddc8a3928415b563b382abeab35b72a2a8751496a0",
    id: "Nuros Harp",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uACE0\uBB38\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0d6b791ccd38ef904ef3bf442132a78d10eaed63f690b4289939a5238b225765",
    id: "The Torturer",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uC815\uC2E0 \uC5B5\uC555\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/52b72b791c3c3baa1e6ba1d9c5b9d8aa6a0206baa43c9f264c3812ccfca97e6d",
    id: "The Queller of Minds",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uC774\uAE30\uC801\uC778 \uBAA9\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e6248378914c9af94e750bd3b9ed6073f8edb6420a344bc946e3227b353c522",
    id: "The Selfish Shepherd",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uC99D\uC624\uC5D0 \uCC2C \uACE0\uBC1C\uC778",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fc1f2bad93e9af1405a86b5a985b0e075a0db4eec85874fffe290263a62129d5",
    id: "The Hateful Accuser",
    weightValue: "7.25",
    defaultDustAmount: "14500",
    quantityDustAmount: "17400"
  },
  {
    name: "\uB300\uD63C\uB780",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fa1c767b6816b98a537ba774fb2569eb418edfabc847b72b926a9ce46c7998d0",
    id: "The Pandemonius",
    weightValue: "7.16",
    defaultDustAmount: "14320",
    quantityDustAmount: "17184"
  },
  {
    name: "\uC870\uD504\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dd9b6683bbf592f915f496884e9d38f1091234ca2f1b91a7c21bd045dd0bf34b",
    id: "Xophs Blood",
    weightValue: "7.16",
    defaultDustAmount: "14320",
    quantityDustAmount: "17184"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uD569\uCC3D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e4bfb63b35178d570bda4576378614ba75f3f376c9321aa93d875844431bd983",
    id: "Choir of the Storm",
    weightValue: "7.16",
    defaultDustAmount: "14320",
    quantityDustAmount: "17184"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uC9C4\uB9AC \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d8b64fcad7332fe63cc308f4bc6fb9b5799450e29a50a51712341fd58551d4e",
    id: "Replica Hyrris Truth",
    weightValue: "7.16",
    defaultDustAmount: "14320",
    quantityDustAmount: "17184"
  },
  {
    name: "\uB85C\uBBF8\uB77C\uC758 \uC5F0\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5c125ac15621a5046238b42a47a72b97cdb2ffa3d304fcb2b9323e57063cde7f",
    id: "Romiras Banquet",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uC2A4\uD0C0\uCF58\uC790\uC758 \uBA38\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1c02e4848addadb543556bdcc5e7441414779399b9da29d0607b26be2df4ce3a",
    id: "Starkonjas Head",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uAFC8\uD2C0\uAC70\uB9AC\uB294 \uB2E8\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d8c36a8e6d4875e1568c564b5f5f58252e73bf42140653263d0c14b298561d40",
    id: "The Writhing Jar",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uD574\uACB0\uC758 \uC9C0\uD321\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eef5690fbf4d77617e7d8806940f5c5a71950c4ffcd81a5010dc04fe2acb9c7f",
    id: "Cane of Unravelling",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uC601\uD63C \uCC29\uCDE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/22210d73f2f0afc2151c1f184cf7e87609202b89726996ad2b18171af7e778d0",
    id: "Soulwrest",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uD53C\uC758 \uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/70f55cabd5436469a4766b6d323a256725e5f9f91d66071b3903ad1de0cb84bc",
    id: "The Blood Dance",
    weightValue: "7.13",
    defaultDustAmount: "14260",
    quantityDustAmount: "17112"
  },
  {
    name: "\uD788\uB124\uCF54\uB77C\uC758 \uD1B5\uCC30\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c85144283d008cf34f0d0b1b6e1f4dd470eb96e5b676976a2f02a669c227a6bc",
    id: "Hinekoras Sight",
    weightValue: "7.13",
    defaultDustAmount: "14260",
    quantityDustAmount: "17112"
  },
  {
    name: "\uD788\uB124\uCF54\uB77C\uC758 \uD1B5\uCC30\uB825 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/507f286d51ab7be653954d26902bbe2e5384a7c2704bafd9344d20c31a768cbf",
    id: "Replica Hinekoras Sight",
    weightValue: "7.13",
    defaultDustAmount: "14260",
    quantityDustAmount: "17112"
  },
  {
    name: "\uB0C9\uB3D9\uC560\uD638\uAC00\uC758 \uACE0\uAE54",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6709a936bba224fd06497f9538eeb4b80c29ffbd765f0e8b1bdd51a61ca5f8f1",
    id: "Cowl of the Cryophile",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uD63C\uB3C8\uC758 \uB9C8\uC5D8\uC2A4\uD2B8\uB86C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ec14f556a5138a5af0319734107821a307d1b567f6a803c002e4dcf5eb1b9102",
    id: "Maelstr%C3%B6m of Chaos",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uC624\uB85C\uC758 \uD76C\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e173c70861a9ccc8fcb2637e2e4d77ce08e2612bbef398767665e9c2a8961b30",
    id: "Oros Sacrifice",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uACE0\uC5F4\uC560\uD638\uAC00\uC758 \uACE0\uAE54",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/511cb3819e6cdc105d0dc5f23310dc962472192bae00a980ae0f83acf89da162",
    id: "Cowl of the Thermophile",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uAC1C\uCC99\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a9624bfd6ca6a863961e01d434f7cec4b736bab2105ebabda4e446a2c87a5230",
    id: "Waycarver",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uAC10\uC5FC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3a848798a4d4c6027af0db6dcebedf59fa0adba2e260500e530370704b841f61",
    id: "The Infested",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uB85C\uBE44\uC758 \uC369\uC740 \uCCA0\uD1F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/608728210e8d3a638470460b22e4a79e35c23ab04ea2a8a1347f0c2546f3913b",
    id: "Robbies Rotten Mace",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uC2A4\uCE74\uC774\uBC14",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/208bc8b33df1529dc9295bb4db174d2f4f258353a94b7caa9ee06a07b70babcf",
    id: "Scaeva",
    weightValue: "7.15",
    defaultDustAmount: "14300",
    quantityDustAmount: "17160"
  },
  {
    name: "\uBB34\uD615\uC758 \uC9C0\uC625\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9e1ef58024c23a8e372dc52ee56c4d67955a1bc030ae30a48c6496640f6c5997",
    id: "The Formless Inferno",
    weightValue: "6.96",
    defaultDustAmount: "13920",
    quantityDustAmount: "16704"
  },
  {
    name: "\uC644\uBCBD\uD55C \uAD6C\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5f5d47ccc6c712a60e33b2e1f60710cb2ac8476fb36374ee5ee7ebfe5f1e6f64",
    id: "The Perfect Form",
    weightValue: "6.96",
    defaultDustAmount: "13920",
    quantityDustAmount: "16704"
  },
  {
    name: "\uD53C\uC2A4\uCE74\uD1A0\uC758 \uAE30\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9a35d2612712ee20366dce75ee1afb709d832c5c1a466594b27fd6268b7e2f2b",
    id: "Piscators Vigil",
    weightValue: "6.94",
    defaultDustAmount: "13880",
    quantityDustAmount: "16656"
  },
  {
    name: "\uCDA4\uCD94\uB294 \uC218\uB3C4\uC2B9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/40cbfd5ae7728fcf19ef57d2230e738858ce33d83a4c00c0e6d411f4412f3651",
    id: "The Dancing Dervish",
    weightValue: "6.94",
    defaultDustAmount: "13880",
    quantityDustAmount: "16656"
  },
  {
    name: "\uACE0\uD1B5\uC758 \uAC80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a0bbd2edf2711e9e79440377b134885a41519ad418a8ae4d332cc49a1417f641",
    id: "Hiltless",
    weightValue: "6.94",
    defaultDustAmount: "13880",
    quantityDustAmount: "16656"
  },
  {
    name: "\uD654\uC0B4\uB3C5 \uAC11\uC637",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a570579ad3bd26ff6c03b7147fb56966860c77cbbd66b1aac8783600c40ab66e",
    id: "Dendrobate",
    weightValue: "6.94",
    defaultDustAmount: "13880",
    quantityDustAmount: "16656"
  },
  {
    name: "\uBAB0\uB824\uB4DC\uB294 \uACA9\uB3D9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/454d11fc7ead6af9f479b44d484b34acda9018fa6b62b56620f164fbb372daaf",
    id: "Surgebinders",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uD608\uC6B0\uBCD1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/99b324d90da7226a15b5787a5c34da3a5b02a13b223f4d330f4f6d0928d60fe2",
    id: "Haemophilia",
    weightValue: "6.92",
    defaultDustAmount: "13840",
    quantityDustAmount: "16608"
  },
  {
    name: "\uBCFC\uCFE0\uB974\uC758 \uC778\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0fc265c3975e3466f35bb2cfa07d985c55e6fd53c53d1464be5823cc49376753",
    id: "Volkuurs Guidance",
    weightValue: "6.92",
    defaultDustAmount: "13840",
    quantityDustAmount: "16608"
  },
  {
    name: "\uBCFC\uCFE0\uB974\uC758 \uC778\uB3C4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f8ed7dade6a4b910d62016e9542939d3918f1a013cbba10a692feead076411c2",
    id: "Replica Volkuurs Guidance",
    weightValue: "6.92",
    defaultDustAmount: "13840",
    quantityDustAmount: "16608"
  },
  {
    name: "\uC9D1\uAC8C\uBC1C \uC1E0\uB9DD\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/666916fa0a9e6ca9aa513939b9edd351686693bc2916649c748986ffe35cf2a2",
    id: "Callinellus Malleus",
    weightValue: "6.83",
    defaultDustAmount: "13660",
    quantityDustAmount: "16392"
  },
  {
    name: "\uC601\uD63C\uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/080368550569bfcd7ac814981c1519aac252d749b46ef3b565bdc96630304084",
    id: "Spiritskin",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uD574\uBC29\uB41C \uC5EC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dc7cdac27dcde4d56baaf9e0811b966d0f115beae3171abe31c77359dfd19989",
    id: "The Goddess Unleashed",
    weightValue: "6.83",
    defaultDustAmount: "13660",
    quantityDustAmount: "16392"
  },
  {
    name: "\uBC88\uAC1C\uC560\uD638\uAC00\uC758 \uACE0\uAE54",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d3da62cfce8a977d3c6d2d43426baf4c6eb05782c772b2817e2dce3693eab0b8",
    id: "Cowl of the Ceraunophile",
    weightValue: "6.94",
    defaultDustAmount: "13880",
    quantityDustAmount: "16656"
  },
  {
    name: "\uCE74\uB97C\uC758 \uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2742cb6ef28fdbf53679a188c49acbde004f0c34ac1a8e20ab2f55b8cb20774d",
    id: "Carls Crusher",
    weightValue: "7.03",
    defaultDustAmount: "14060",
    quantityDustAmount: "16872"
  },
  {
    name: "\uB208\uBC14\uB78C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3c59693192b4561ee59c2b0bc9563041d0e05081ea6325a2d83ca3fd1b2d049f",
    id: "White Wind",
    weightValue: "6.83",
    defaultDustAmount: "13660",
    quantityDustAmount: "16392"
  },
  {
    name: "\uC6B8\uB124\uD1A8\uC758 \uD3EC\uC639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3efe053388d1f9ae55eff3c80a872e8401fdf738e27068ff37e75c70939dcbc3",
    id: "Uul-Netols Embrace",
    weightValue: "6.76",
    defaultDustAmount: "13520",
    quantityDustAmount: "16224"
  },
  {
    name: "\uC774\uCE58\uBAAC\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4bf9543ee2627bad8265d028e0f61f872bc283d2aaaaf7f0737330672ee311c4",
    id: "Ichimonji",
    weightValue: "6.74",
    defaultDustAmount: "13480",
    quantityDustAmount: "16176"
  },
  {
    name: "\uC601\uD63C \uD761\uC218\uC790\uC758 \uAC00\uBA74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d8e5b77d7f9566b98f7c9d9c4a53adf9379a5f62b007900c534abb0f0c962ea0",
    id: "Mask of the Spirit Drinker",
    weightValue: "6.74",
    defaultDustAmount: "13480",
    quantityDustAmount: "16176"
  },
  {
    name: "\uBB34\uC2DC\uBB34\uC2DC\uD55C \uADF9\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/40f49ffd69e9e4e6672f1ea295d17768dd31b6fcb9523230ca09967f852b57b2",
    id: "The Ghastly Theatre",
    weightValue: "6.74",
    defaultDustAmount: "13480",
    quantityDustAmount: "16176"
  },
  {
    name: "\uAC78\uC2E0\uB4E4\uB9B0 \uD30C\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8043c1a142a94e3cada837959c1907b82321954989b8191504fe0b90650be0a",
    id: "The Gluttonous Tide",
    weightValue: "6.74",
    defaultDustAmount: "13480",
    quantityDustAmount: "16176"
  },
  {
    name: "\uACE0\uC694\uD55C \uBC14\uB78C\uB2E8 \uD398\uB10C\uD2B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/79ee253f0d9f09c1ea60d4ba2cdd522fdeab7a8a8f1280bf0c8385c289b87e5e",
    id: "Mutewind Pennant",
    weightValue: "6.72",
    defaultDustAmount: "13440",
    quantityDustAmount: "16128"
  },
  {
    name: "\uACE0\uC694\uD55C \uBC14\uB78C\uB2E8\uC758 \uC18D\uC0AD\uC784 \uC2E0\uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c68f27ead3e1e1e8bdd431bbacad005388113068014cf357f89e15817b39fd8",
    id: "Mutewind Whispersteps",
    weightValue: "6.72",
    defaultDustAmount: "13440",
    quantityDustAmount: "16128"
  },
  {
    name: "\uB354\uB7FD\uD600\uC9C4 \uB9F9\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/60c02953d964ff97b4974cf1664d3dadf723c85d8447548da0f8684331b4936a",
    id: "Tainted Pact",
    weightValue: "6.72",
    defaultDustAmount: "13440",
    quantityDustAmount: "16128"
  },
  {
    name: "\uBB34\uD6A8\uC640 \uACF5\uD5C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ffe173e64efa73d3ea91d80db11f86c4bb353c964c4be9f2a5d9d037ba555011",
    id: "Null and Void",
    weightValue: "6.54",
    defaultDustAmount: "13080",
    quantityDustAmount: "15696"
  },
  {
    name: "\uD0AC\uB85C\uC544\uBC14\uC758 \uC5C4\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bda825ddea95228b92976473c8d9693162c48af3d53d63841507caa123dc8b10",
    id: "Kiloavas Bluster",
    weightValue: "6.54",
    defaultDustAmount: "13080",
    quantityDustAmount: "15696"
  },
  {
    name: "\uB370\uBE44\uC628\uC758 \uC7A5\uC1A1\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6fc7ea922b38decba13f0e75cab0d8e4b38e83dc0f0cb643e4c1a15cbf295cf3",
    id: "Debeons Dirge",
    weightValue: "6.83",
    defaultDustAmount: "13660",
    quantityDustAmount: "16392"
  },
  {
    name: "\uC9C0\uACE0\uC758 \uC9C4\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ac9f50b12b64af5af288a48164ad51f586848d9586839205ee47edc21a5cc14",
    id: "The Supreme Truth",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uC804\uC728\uC758 \uB9C9\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/02b1f1544bba65748fde160541e9294cb2d01fc417d17e0d85acb93b94cfe196",
    id: "Tremor Rod",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uBD80\uD328\uD55C \uC5FC\uC218\uB2E8 \uACE0\uB798\uC7A1\uC774 \uC2E0\uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d5d09db62558cff0a2d3d820c351c86c0a3934953090fb4ea469352438c50810",
    id: "Brinerot Whalers",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uC0DD\uC874 \uACBD\uC7C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9d53400b7fcf9acd30c031dddc7ee1176dd23a3d3aedc70ee9e35c5a31224fa",
    id: "Allelopathy",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uC0DD\uC874 \uACBD\uC7C1 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a13a2613a3b194a0d7cabebdf7f64769d82b4a6ef6ffa1a6c96f869c05ad8d48",
    id: "Replica Allelopathy",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uBC40 \uC774\uBE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/abbb2555c2de9fc3de4d0934c0f3cb21620f22a03f5d3cf9c247c3920f4f5c4f",
    id: "Snakebite",
    weightValue: "6.74",
    defaultDustAmount: "13480",
    quantityDustAmount: "16176"
  },
  {
    name: "\uC120\uBC18",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d7480b3cd41f7dea9e7288e3f8baca248585b39abda32511ca3ee96686cd8c33",
    id: "The Rack",
    weightValue: "6.44",
    defaultDustAmount: "12880",
    quantityDustAmount: "15456"
  },
  {
    name: "\uC5D0\uC26C\uC758 \uC5BC\uAD74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c6892734dc58b7bf5fd7a1d37b7d58a15f23e63d654f3dfbb8617f9b8a0aa20d",
    id: "Eshs Visage",
    weightValue: "6.37",
    defaultDustAmount: "12740",
    quantityDustAmount: "15288"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uACB0\uC810 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3cfc2f886d98e9772788f782096ab64338d4876d1135cd0600464e2bba3f2ec9",
    id: "Replica Atziris Foible",
    weightValue: "6.37",
    defaultDustAmount: "12740",
    quantityDustAmount: "15288"
  },
  {
    name: "\uD0D0\uC695\uC758 \uD3EC\uC639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0c91b8474dbb1dcb87c7cfa46de2330fe0f451dc224e595a7518bf5fed503f18",
    id: "Greeds Embrace",
    weightValue: "6.35",
    defaultDustAmount: "12700",
    quantityDustAmount: "15240"
  },
  {
    name: "\uBD88\uC548\uD55C \uAE30\uC0AC\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3fd8e326872ad16553ec7080174b131633dfd113f6489ba5d7066bf784eb517d",
    id: "Mark of the Doubting Knight",
    weightValue: "6.44",
    defaultDustAmount: "12880",
    quantityDustAmount: "15456"
  },
  {
    name: "\uB2C9\uD0C0\uC758 \uB4F1\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/eed18f2dca7b4879ea429bcdcbe1113c2f0dd59bdca178e4cd13519897a1111b",
    id: "Nyctas Lantern",
    weightValue: "6.52",
    defaultDustAmount: "13040",
    quantityDustAmount: "15648"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uBE44\uBC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/99d285f2e14d23a1366a13d1de0b0c1ff1322270f47c3431b85a345511a30f92",
    id: "Storm Secret",
    weightValue: "6.35",
    defaultDustAmount: "12700",
    quantityDustAmount: "15240"
  },
  {
    name: "\uC544\uD6C4\uC544\uB098\uC758 \uC774\uBE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/426a8136d12d101b983bc603d8cf0cc75502161acfcec77bdd1fb9c308271c79",
    id: "Ahuanas Bite",
    weightValue: "6.35",
    defaultDustAmount: "12700",
    quantityDustAmount: "15240"
  },
  {
    name: "\uB9C8\uB9B4\uB9B0\uC758 \uC624\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/52d9e1989b0c229b285a5d717b529e04875dbd684a70a7dc6fa792e18411484e",
    id: "Marylenes Fallacy",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uC789\uAC78\uBD88 \uC9C0\uD53C\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/036fd0374dac477567516f211502c138066f7fa183960c7154a7729f6cc7feb9",
    id: "Emberwake",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uB9E4\uD639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bddf39760cba57ab49a5d53c14c552584f27b47215b1aa90725e6748d9d9d015",
    id: "Allure",
    weightValue: "6.83",
    defaultDustAmount: "13660",
    quantityDustAmount: "16392"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uBAA9\uC18C\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/19d8215e1782797abfa7e7c1a05082823af8d81f1a0c3f551a0bd54caf5e9447",
    id: "Voice of the Storm",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uAD11\uBD84\uC758 \uBC38\uBE0C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b115e51c8fbac0a023f11893d885e45789b9ad437e7076d152f2beb079897f21",
    id: "Fury Valve",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uC5B4\uBA38\uB2C8\uC758 \uD3EC\uC639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/13be4f2e9ecd4cbb680eaff6c3c7cc6c959b306509229cc247f960ab6873a215",
    id: "Mothers Embrace",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uD53C\uC758 \uB300\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ee3b96a57b0a26af344fb29e7997bff2b53da3540c04848cedc52dec287cd265",
    id: "Blood Price",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uCC9C \uAC1C\uC758 \uC774\uBE68 \uD14C\uBB34",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f75bc9dc2761ef8629e24ce37620727a7530980607971c693dd3635f048c5fb6",
    id: "Thousand Teeth Temu",
    weightValue: "6.25",
    defaultDustAmount: "12500",
    quantityDustAmount: "15000"
  },
  {
    name: "\uBD80\uC11C\uC9C4 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/afca1575c854e6a289a9034342726683ba584d3bfe0e519d4ff63830a4bb353e",
    id: "The Broken Crown",
    weightValue: "6.25",
    defaultDustAmount: "12500",
    quantityDustAmount: "15000"
  },
  {
    name: "\uD504\uB85C\uC2A4\uD398\uB85C\uC758 \uBCF4\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/545e7da32ed133dfb977c1113636567d7fa57efff57acd62e24bfcd3271097e5",
    id: "Prosperos Protection",
    weightValue: "6.25",
    defaultDustAmount: "12500",
    quantityDustAmount: "15000"
  },
  {
    name: "\uB808\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a705c8b6a575b1665b1bf774bab037062dba561eff112bb547b29c1a19abb23",
    id: "The Retch",
    weightValue: "6.18",
    defaultDustAmount: "12360",
    quantityDustAmount: "14832"
  },
  {
    name: "\uD615\uC81C\uC758 \uBD80\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dda2d1aac2a11ae78a66116df01605484644871ed091ca2a52dc3ffab57a50ef",
    id: "Call of the Brotherhood",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uC81C\uBB3C\uC758 \uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7fb5ac178d89fd78ce93d909b793423f2fcbbcee606bd40f15a929a495fa2dbf",
    id: "Dance of the Offered",
    weightValue: "6.17",
    defaultDustAmount: "12340",
    quantityDustAmount: "14808"
  },
  {
    name: "\uC81C\uB3C5\uC758 \uC624\uB9CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/82ad9d215bc7d22847c34bf7c1dbda5bac1ce8560b35274d28d8be205e0d13a1",
    id: "Admirals Arrogance",
    weightValue: "6.15",
    defaultDustAmount: "12300",
    quantityDustAmount: "14760"
  },
  {
    name: "\uAC10\uAE08\uB41C \uB9E4\uBA38\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1aa931fe9b21e0365699f2f90ff80c8836f4ada84ec3eecc6ac2a37b4171be15",
    id: "The Caged Mammoth",
    weightValue: "6.15",
    defaultDustAmount: "12300",
    quantityDustAmount: "14760"
  },
  {
    name: "\uC8C4\uC545\uC758 \uC5EC\uC815",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8dc8121a67e76161ab8719b043eac8e8620b9af540d56bd75ee08219903d3da6",
    id: "Sin Trek",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uCE5C \uC194",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7cc1595c2af1e673d628ff4c49b2bcb59951386d033c5d938c8191b76506283c",
    id: "Chin Sol",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uC5D4\uD2B8\uB85C\uD53C\uC758 \uB0A0\uAC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ee95bf867ae692166779b3fa0b9b8327fdcd2f0df8f7db89f2518bad7f805ce4",
    id: "Wings of Entropy",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uD398\uC5B4\uADF8\uB808\uC774\uBE0C\uC988\uC758 \uC778\uB0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8888320634961d38d6da1d124af46059ffdea3dec89c9a5e02b7f4e0f7b35068",
    id: "Fairgraves Bearing",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uC0B0\uD1A0\uB2C8\uC758 \uBBFF\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7c838de80444a025c917f85dadd5aa5265713ab5fed2230572ff4bd1cc7bae8e",
    id: "Santonis Faith",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uC694\uB780\uD55C \uD589\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1dad5b286c6f78513a40c4f66cad8d4d3b7a5bb784e01d219ff54fb2f54cf865",
    id: "Rumblemarch",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uC735\uD1B5\uB41C \uD798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9da1034adabf8ee242818e29648189916cc2284b71cc10778dff182ef9c17f33",
    id: "Borrowed Power",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uBC14\uC54C\uC758 \uC0AC\uC5F0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4d14e7b3b6c78a00e207bb7868ff04423c679853a6cd14c7f64740f1b1ec2b50",
    id: "Story of the Vaal",
    weightValue: "6.35",
    defaultDustAmount: "12700",
    quantityDustAmount: "15240"
  },
  {
    name: "\uC2E0\uBE45\uD0C0\uC758 \uD328\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bfc0094d12c5f655c21a0fe7b0ab74b3f3bf53c0e28d893f2ea33bdb707f1f20",
    id: "Sinvictas Mettle",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uBC14\uC2E4\uB9AC\uC2A4\uD06C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/70677fdc36c5ee9bc0a7b0530d813bd3b69a8024053027d095a26ef94db37d83",
    id: "The Basilisk",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uD669\uC81C\uC758 \uC219\uB828",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c10d6b215b7a305301130156b79b6c3b690b48f55c703c640ba5cb741dc49582",
    id: "Emperors Mastery",
    weightValue: "6",
    defaultDustAmount: "12000",
    quantityDustAmount: "14400"
  },
  {
    name: "\uC0DD\uBA85\uC758 \uB3CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cff60619c2fc084103e014efb1a6946d751d3c7ca552417f4eb08d968a7ec627",
    id: "The Anima Stone",
    weightValue: "6",
    defaultDustAmount: "12000",
    quantityDustAmount: "14400"
  },
  {
    name: "\uBAA9\uC18C\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d47b40a5f5b6981f88fa498edafc7155bfb02a4dbcf3289e79b5c7e12373a636",
    id: "Voices",
    weightValue: "6",
    defaultDustAmount: "12000",
    quantityDustAmount: "14400"
  },
  {
    name: "\uC22D\uACE0\uD55C \uD658\uC601",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aca76b58e7a764b3fc16b25a5287e5fb6b95b91adcd8a836019ee4fea87f20bc",
    id: "Sublime Vision",
    weightValue: "6",
    defaultDustAmount: "12000",
    quantityDustAmount: "14400"
  },
  {
    name: "\uACF5\uD5C8\uD55C \uACE0\uD5A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3029455fa3324c9ec0359027c9a3d889d0ac3ada4cdc1e67011923660222cf36",
    id: "Voidhome",
    weightValue: "5.99",
    defaultDustAmount: "11980",
    quantityDustAmount: "14376"
  },
  {
    name: "\uD654\uC5FC\uACA9 \uAC78\uC1E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/274544e03a512d2d189ff3275e51011f9db8dfc041e42edee9ffce130423ddb5",
    id: "Pyroshock Clasp",
    weightValue: "5.99",
    defaultDustAmount: "11980",
    quantityDustAmount: "14376"
  },
  {
    name: "\uADF8\uB9AC\uC6C0\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ce1c15adcdea3b34f861c183235500f3e92bf9effea189ad21e67b840e12438e",
    id: "Circle of Nostalgia",
    weightValue: "5.97",
    defaultDustAmount: "11940",
    quantityDustAmount: "14328"
  },
  {
    name: "\uC0AC\uD608\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc48c4b09e294444b1f81cb26482694b06df509b7ae1397b18dd8a6349b0f34c",
    id: "Bloodletter",
    weightValue: "6.07",
    defaultDustAmount: "12140",
    quantityDustAmount: "14568"
  },
  {
    name: "\uC655\uC758 \uBCF4\uD638\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4c7fc4b60971a782dbd6f3e1f7b1a5f60766ddd52f621e667db9db8abfb2324b",
    id: "Kingsguard",
    weightValue: "5.89",
    defaultDustAmount: "11780",
    quantityDustAmount: "14136"
  },
  {
    name: "\uCF58\uB3C4\uC758 \uC790\uBD80\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0255dabfdfff55915be05142045a56bcf8c0e1e1c10d7d20745569888cabdae2",
    id: "Kondos Pride",
    weightValue: "5.89",
    defaultDustAmount: "11780",
    quantityDustAmount: "14136"
  },
  {
    name: "\uCCB4\uB974\uB178\uBCF4\uADF8\uC758 \uAE30\uB465",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f2d6e16cd2d354b1d807bfa291fc34202634bb8a86afec5e8f6de0f6d83427dc",
    id: "Chernobogs Pillar",
    weightValue: "5.89",
    defaultDustAmount: "11780",
    quantityDustAmount: "14136"
  },
  {
    name: "\uBE0C\uB860\uC758 \uC735\uD1B5\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5047df2cebf3994f66c44b4b252c9547d33e974c464eafa2e7c163d6500bec0f",
    id: "Bronns Lithe",
    weightValue: "5.81",
    defaultDustAmount: "11620",
    quantityDustAmount: "13944"
  },
  {
    name: "\uC870\uD504\uB9AC\uC758 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/08a96806bf6396e97e8201d89fa99faaf5c4ccd3baeedf4a8d237adb8af7fb3e",
    id: "Geofris Crest",
    weightValue: "5.81",
    defaultDustAmount: "11620",
    quantityDustAmount: "13944"
  },
  {
    name: "\uD0C0\uB4E4\uC5B4 \uAC00\uB294 \uC5B4\uB460",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e4c209fd98f375b2798006ba7078f796dff7e6cde7cd8c85da68004ac547f453",
    id: "The Consuming Dark",
    weightValue: "5.81",
    defaultDustAmount: "11620",
    quantityDustAmount: "13944"
  },
  {
    name: "\uB2E4\uAC00\uC624\uB294 \uB300\uC7AC\uB09C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/15b78b963782bc035f2a77437b8d26a623af4d01883ce3d3e2d14cebd635ac0a",
    id: "The Coming Calamity",
    weightValue: "5.81",
    defaultDustAmount: "11620",
    quantityDustAmount: "13944"
  },
  {
    name: "\uC138\uB97C\uC758 \uAC78\uC791",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/74a2341c52ba61d18df8b4507ee84a98e0c597e4fdaf72145c12bbb197d34991",
    id: "Serles Masterwork",
    weightValue: "5.81",
    defaultDustAmount: "11620",
    quantityDustAmount: "13944"
  },
  {
    name: "\uAD6C\uB369\uC774\uC758 \uC9C0\uBC30\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/03db0c3781d1d001e7186af576359dd8b8acf3cb66e57b65e3b018edf77857af",
    id: "Command of the Pit",
    weightValue: "5.8",
    defaultDustAmount: "11600",
    quantityDustAmount: "13920"
  },
  {
    name: "\uC218\uD655 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/146c57a1236f2439e34ea1d2f4661b3dc26ab81b470918a4913daab631437799",
    id: "Replica Harvest",
    weightValue: "5.8",
    defaultDustAmount: "11600",
    quantityDustAmount: "13920"
  },
  {
    name: "\uAC81\uC7C1\uC774\uC758 \uC2DC\uD5D8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c0c084152661ae5a1d72ee23fd0a99c41a5abafa8ae02370343ca7a3f1a87e47",
    id: "The Cowards Trial",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uB54C\uBB3B\uC9C0 \uC54A\uC740 \uB099\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ddb5479aea0bf1bd925a230828163567f7ab1839343da4a84b08b5d6e6ce5e5c",
    id: "Untainted Paradise",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uBD88\uC21C\uD55C \uC758\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bb3816ee438af0ea56d194a31f958fd6815bc74bb5c8828de7061db77fa8d692",
    id: "Malicious Intent",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uCE74\uBA54\uB9AC\uC544\uC758 \uB300\uD615 \uB9DD\uCE58",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e11166b7d15baf5d71180f6ec46c99c76a178c02877ea32e44afb24f21fc8fa4",
    id: "Camerias Maul",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uB9D0\uBC8C\uC758 \uB3C5\uCE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/87763895e9208e7bf144db41735b81e5956ecfd8dd1a8857bd52035c7ae2d32f",
    id: "The Wasp Nest",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uD761\uD608 \uBFCC\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/79686a977f157bfaa12c088a0a31acf4ebf0a9193ecb6f1f68191850c52e3b85",
    id: "Taproot",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uB300\uD654\uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3eecee9593a0e494348e8bec878f6bd40b9f4ef4c37b934779a15ee8f0ae606a",
    id: "Balefire",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uC57D\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27d6b8c09122bbf326ee6b30da78410702637d018d34de97c511cc2412c261fc",
    id: "The Druggery",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uACF5\uD5C8 \uC778\uB3C4\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c9dc2d427a09786dbf08ec85fc6ef0a50dba8da3b20615e6094be0acf70959f",
    id: "Voidbringer",
    weightValue: "6.17",
    defaultDustAmount: "12340",
    quantityDustAmount: "14808"
  },
  {
    name: "\uC801\uAC80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3d0ebbe3bddbcadcee4c06a546bd1b099cc87e000bda0c8fa49af1224150f49e",
    id: "The Redblade",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uCC3D\uBC31\uD55C \uC655\uC758 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de384c4669a9ca199f72e95a2a1a0333ac447c90337b71e83ee088f9d43add7d",
    id: "Crown of the Pale King",
    weightValue: "5.64",
    defaultDustAmount: "11280",
    quantityDustAmount: "13536"
  },
  {
    name: "\uBE45\uD0C0\uB9AC\uC624\uC758 \uC601\uD5A5\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ea55bde298bfc68ae3210818642e868cb9c781270d659b46fbdf63ce031cd7b4",
    id: "Victarios Influence",
    weightValue: "5.64",
    defaultDustAmount: "11280",
    quantityDustAmount: "13536"
  },
  {
    name: "\uC624\uC2A4\uCE84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/58a7b7a5f4529589eb358d8f8314006e7a90c78f11b2a6f631f08a1a428cb23c",
    id: "Oskarm",
    weightValue: "5.64",
    defaultDustAmount: "11280",
    quantityDustAmount: "13536"
  },
  {
    name: "\uC544\uC6B0\uB974\uC2DC\uC988",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dbfd4eba48f165589e430c7f76e88365c1b902925d762f0d3e96b6b7629bb6aa",
    id: "Aurseize",
    weightValue: "5.63",
    defaultDustAmount: "11260",
    quantityDustAmount: "13512"
  },
  {
    name: "\uD23C\uD53C\uC2A4\uD2B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6e9abf6a6bd7e3cb85924b157aac3d138b37f28784ff880afd8c333d08abd213",
    id: "Tombfist",
    weightValue: "5.63",
    defaultDustAmount: "11260",
    quantityDustAmount: "13512"
  },
  {
    name: "\uC554\uC5EC\uC6B0\uC758 \uD568\uC815",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/53d1d2100454b9f35d7a9f520354b16121f97c16040fa94367678c44e7fb8f28",
    id: "Vixens Entrapment",
    weightValue: "5.63",
    defaultDustAmount: "11260",
    quantityDustAmount: "13512"
  },
  {
    name: "\uB2EC\uC758 \uC2AC\uD514",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1acd33341ec945274f4c0bb8ebc950a50d013985f14d19f93ee7cbc533c006d3",
    id: "Moonsorrow",
    weightValue: "5.55",
    defaultDustAmount: "11100",
    quantityDustAmount: "13320"
  },
  {
    name: "\uB9D0\uC0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d9e34948ea47db080bca6b373690b92f29ee74b8e8779676a90dcddcfd56fccd",
    id: "Obliteration",
    weightValue: "5.55",
    defaultDustAmount: "11100",
    quantityDustAmount: "13320"
  },
  {
    name: "\uCDA4\uCD94\uB294 \uD55C \uC30D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aabe973699d8f289dfbe9b063f11b94adfcfcebe1166a40315017c7697c009d2",
    id: "The Dancing Duo",
    weightValue: "5.55",
    defaultDustAmount: "11100",
    quantityDustAmount: "13320"
  },
  {
    name: "\uBA40\uB9AC \uBCF4\uB294 \uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/71405cc4a94810710cc7c1dd9183ec02db60c8d413e5192eb6dc17efacba7db4",
    id: "Farsight",
    weightValue: "5.55",
    defaultDustAmount: "11100",
    quantityDustAmount: "13320"
  },
  {
    name: "\uD2B8\uB9AC\uD30C\uB17C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/362eb918d87bc74f3be7aa87effa3920468868e7fbaacaea7a3195f3675ac094",
    id: "Trypanon",
    weightValue: "6.33",
    defaultDustAmount: "12660",
    quantityDustAmount: "15192"
  },
  {
    name: "\uD48B\uB0B4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/51630cc4e38e88d218420cfdd8680e7b6facbd87eb5a1a93d4997c675fd1d97c",
    id: "The Fledgling",
    weightValue: "5.48",
    defaultDustAmount: "10960",
    quantityDustAmount: "13152"
  },
  {
    name: "\uBCFC\uC758 \uBCF4\uD638\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6a94b2b576ecad228052c257d819e670e05091f89e418d072ae94eb39b7f3000",
    id: "Volls Protector",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uBA54\uAE30\uB178\uB4DC\uC758 \uC870\uC784\uC1E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/36acc1626ac106ac3a5faf570555ed401a9ffa03f6335f22f1cca62172e82946",
    id: "Meginords Vise",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uC0AC\uC790\uC758 \uD3EC\uD6A8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/98714249169ad1043c88a2e4e15a5e0cca9a45762e332a8fb9aa6cb63481a2e6",
    id: "Lions Roar",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uC801\uAC80\uB2E8 \uAE43\uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb1399ea15e93e207c55e087e197a50d5d9a28a9a0d91d4f67bd588dc312413f",
    id: "Redblade Banner",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uC870\uD504\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/537d7ea551de4e0b96c358140cbc61574ccb497e047618072db815af63753823",
    id: "Xophs Heart",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uD3C9\uC628",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/60dc133d916ca2eee70d7ce92f6173cc49e1f81ddb712ef1e1a6c4169e5bfe7e",
    id: "The Halcyon",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uC5D0\uC544\uB80C\uB378\uC758 \uD3EC\uC639 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4e673fbaf28e017c2883fa186cb47b449a2c5c9aa015fb2f5f0ea146408353d4",
    id: "Replica Earendels Embrace",
    weightValue: "5.46",
    defaultDustAmount: "10920",
    quantityDustAmount: "13104"
  },
  {
    name: "\uBB34\uB9AC\uC758 \uCD94\uC9C4\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6286c46a136c7f0df90b2ae59192d6ba2bcba0603169406ac4ec68f05d2f3b97",
    id: "Gangs Momentum",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uB808\uBE44\uC544\uD0C4\uC758 \uC5C4\uB2C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/161eb72692eecde724aef1875bb993eba3899862ec598f98f6b5892a08775d5d",
    id: "Leviathan Ivory",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uC131\uC790\uC758 \uB300\uD1F4\uACE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8f1c4a068a18808b14e394ca19e7c509aba06343a7d8b624838d60e8cb7b19fa",
    id: "Femurs of the Saints",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uBC94\uBC95\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e65f12ee049d2afba379351866d2feb9d8bfdb975bbca7042891f679c91698b",
    id: "Lawbreaker",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uAD70\uB2E8\uC758 \uD589\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6c7258a59befa9e973d696305beee1c6b0f95a8d1784a6d6efe0ae6d20aaa4a9",
    id: "March of the Legion",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uC8C4\uC545\uC744 \uBA39\uB294 \uC790\uC758 \uD754\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/98948c7d322c8d58e576944e5522a33d612554914ba00c4f352cd10cf0134a7a",
    id: "Sign of the Sin Eater",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uC369\uC5B4\uAC00\uB294 \uAD70\uB2E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e23fce69c474c4aab1305506b8a16e826a09c1c79b6bd16c6d12ff717439a78e",
    id: "Rotting Legion",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uC601\uD63C \uC218\uD655\uC790 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1945a7aa0e6b3df86a7e7156910b950ef3912fa453bdc65507eea859f5224cae",
    id: "Replica Soul Taker",
    weightValue: "5.55",
    defaultDustAmount: "11100",
    quantityDustAmount: "13320"
  },
  {
    name: "\uD02D\uD55C \uB208\uC758 \uD574\uACE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aec7b5fdb60349ed083f274c7ffbd1a58827310a4dcce55b626591346b25b952",
    id: "The Hollow-Eyed Skull",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uACE0\uB300\uC758 \uB09A\uC2DC\uAFBC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c7fdbb52ab133670724c2197e92673232a9963ebd29f23881e7febc10e552752",
    id: "The Ancient Angler",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uACE0\uBE14\uB9B0\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ab0c75e47a4a07b15541b9d771d3911fdf04a029892493412d9719df3cd7dfa",
    id: "Goblinedge",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uADF8\uB9BC\uC790\uC758 \uC9D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2b9bf0e5dddd8392e855a3aba5221667e66192e8abe5cccf0449548e33631b96",
    id: "The Burden of Shadows",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uCE74\uB8E8\uC774\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ef421f4b84a7a2ac600024e7281af0b37a0006c356a8fc0c812fc9b4f1b681e8",
    id: "Blood of the Karui",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uB77C\uBE44\uC559\uAC00\uC758 \uD63C\uBC31",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5bff69dbbd78fd55e4ce9545139fa49aca1940df3b9e0d72e8e994d519723b9b",
    id: "Laviangas Spirit",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uB4A4\uD2C0\uB9B0 \uC2DC\uACC4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d94b3ba0009ceec1bb0a48b91e06e4a2cac72f50fa2b3f44f0307fbc0cf41d32",
    id: "Warped Timepiece",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uB9C8\uC74C\uC5D0 \uBB36\uC778 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/133f40375c1fd77534669d3ca1444c0f55bac70eaed6037ee38f5ea770b951a3",
    id: "Heartbound Loop",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uC11C\uB9AC \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c7fabface84370f6ce3cdff07a1d7b33f513e77b7b714e33ee7ef3390527490",
    id: "Frostbreath",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uD6C4\uC6D0\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d2aeb519e82bb003de1501a04b91199dc2697cf0cba98d4ecfc89a56ab44e26a",
    id: "The Benefactor",
    weightValue: "5.72",
    defaultDustAmount: "11440",
    quantityDustAmount: "13728"
  },
  {
    name: "\uC5B4\uB460\uC5D0 \uB300\uD55C \uACBD\uC678",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/42ea6a4bfff0453f16cd9600cb3a908a661328f59b689b52157e319ad94eedf4",
    id: "Darkness Enthroned",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uD37C\uD03C\uC758 \uBC1C\uAC00\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3c5eff05ffd3840a61dde12397920f4d1b7d4433e2e675e6334c7fbd274a7902",
    id: "Perquils Toe",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uC774\uB984\uAC15\uD0C8\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a6acdd2e0e231ab30faa70811ea7c6bfb8adb7dce2a371c41ff36dcc347d4ec",
    id: "Nametaker",
    weightValue: "5.32",
    defaultDustAmount: "10640",
    quantityDustAmount: "12768"
  },
  {
    name: "\uC601\uD63C\uC758 \uC678\uD22C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f0fa38eb36ac42e7ca7c8dc113f1aa5fe8a7dccaf00955d660eb800e7d5df942",
    id: "Soul Mantle",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uB9C8\uD06C 2\uC758 \uC219\uB828",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c7eda5443aa2606b101f92c8dcbf70dde85e4bb674173e4a8a6c4f893d87fcc5",
    id: "Mark2s Mastery",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uD30C\uD3B8\uC758 \uC601\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c13f2868d9424c47df17ec32e6827e317dff9120b8089706343a8071fa1ec1c7",
    id: "Sire of Shards",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uB85C\uB9AC\uC758 \uBCF5\uC218",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ddcae6b6241b0888ade8decff1482ead83e2e51d31b1a865360f86cc7e41bb73",
    id: "Rorys Revengance",
    weightValue: "5.39",
    defaultDustAmount: "10780",
    quantityDustAmount: "12936"
  },
  {
    name: "\uC54C\uBCA0\uB978\uC758 \uC801\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b864d3c7be689d83b2c955b137bda983ce78c3a044cdc965e4fa95e6a848dcb8",
    id: "Alberons Warpath",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uC544\uB8E1\uC758 \uC9D5\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/445871ba6d974668fe115221f5294dd747e1c7aad673e95726f20e82f17a9379",
    id: "Wyrmsign",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uD608\uAD00 \uAD00\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3d59ae1680266622aa9db2b94b7f0593a21a1f2340a6ac5f1707b022a3a66ae4",
    id: "Venopuncture",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uD0C0\uB204 \uC544\uD788",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d0a5f602e2130bada65ad0c4d7e0b00601c0f00f38b4237bb7d91cf8f2a44c9a",
    id: "Tanu Ahi",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uC5BC\uC74C\uC1A1\uACF3\uB2C8\uC758 \uC704\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/28d74397875288287e07a9e2c83514323a4b6aacc5022f9f6a1de4ca508b1daa",
    id: "Icefang Orbit",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uD30C\uD3B8 \uBD84\uC1C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d220d8a1c5cd11ce03aa0ee2d4fb2584885ff78f6ae7fc99e87b8ef7f9975d95",
    id: "Shattershard",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uAC15\uCCA0\uC9C0\uB801\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ab20aa7c8c92b0622c63d16fe8c8cccd1494cb3e44947fa0084a132259f3ed2",
    id: "Steelworm",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uD53C\uD22C\uC131\uC774 \uBA54\uB2EC\uB9AC\uC628",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2b75605a4e8db6739d2688c7affff309327f9a4679d120e57bfa83ccf302bfba",
    id: "Bloodsoaked Medallion",
    weightValue: "5.17",
    defaultDustAmount: "10340",
    quantityDustAmount: "12408"
  },
  {
    name: "\uD68C\uC0C9 \uBC14\uB78C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a3d78a4044ac2dc55989938b78d7f14eb549d79f20aebf819254286148b09459",
    id: "The Grey Wind",
    weightValue: "5.15",
    defaultDustAmount: "10300",
    quantityDustAmount: "12360"
  },
  {
    name: "\uD504\uB85C\uC2A4\uD398\uB85C\uC758 \uAE08\uACE0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4b76cc448318d5326a2c0221ed81f47521232e603bf59713725ab11b77c41e3b",
    id: "Prosperos Vault",
    weightValue: "5.08",
    defaultDustAmount: "10160",
    quantityDustAmount: "12192"
  },
  {
    name: "\uD3ED\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/181afec24ed59c74dfd8adc7783d331c386c59e01fc6cbea58bacb7f600c6f76",
    id: "Gluttony",
    weightValue: "5.01",
    defaultDustAmount: "10020",
    quantityDustAmount: "12024"
  },
  {
    name: "\uBC24\uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a02d0a99bf99c8658debf7742402b690ca2e6b5839e55500ade28c1a3f72a342",
    id: "Nightgrip",
    weightValue: "5.01",
    defaultDustAmount: "10020",
    quantityDustAmount: "12024"
  },
  {
    name: "\uC62C\uB85C\uC2A4\uC758 \uB3CC\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/053927aa2bd6787a19c60b92cc9dfdcd4904793dcd7ea3682b24c61467275e36",
    id: "Olroths Charge",
    weightValue: "5.01",
    defaultDustAmount: "10020",
    quantityDustAmount: "12024"
  },
  {
    name: "\uAC1C\uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2913c424e8f8bebe010dce1921f186fc533df6ee7c6567ba1db6b67d13de0f21",
    id: "Sudden Dawn",
    weightValue: "5.01",
    defaultDustAmount: "10020",
    quantityDustAmount: "12024"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uD558\uD504",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0d2161c92f2eec616f31ace89612fc7ffbac10f532a9a71e706bbb9a7871b3b5",
    id: "Deaths Harp",
    weightValue: "5",
    defaultDustAmount: "10000",
    quantityDustAmount: "12000"
  },
  {
    name: "\uC545\uBABD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/81d6809732f1cc3093d03f4eefb3b2723b3dafdd6a897da82381b510df66871c",
    id: "Bitterdream",
    weightValue: "5",
    defaultDustAmount: "10000",
    quantityDustAmount: "12000"
  },
  {
    name: "\uCCA0\uC758 \uC9C0\uD718\uAD00 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c5d49d0da763687e75375777a785e3b511b56bed35a74e831d6f8f5797a11c9c",
    id: "Replica Iron Commander",
    weightValue: "5",
    defaultDustAmount: "10000",
    quantityDustAmount: "12000"
  },
  {
    name: "\uD504\uB808\uC2DC\uC544\uC758 \uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/346363df7468a2f839672944c06ee341b56d68c1e779facf59f8689e677f0d27",
    id: "The Hand of Phrecia",
    weightValue: "5",
    defaultDustAmount: "10000",
    quantityDustAmount: "12000"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC885",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d742dc2b63ab5ee42402aa1777966b173fa28be09d9119adbb51b1562a008653",
    id: "Deidbell",
    weightValue: "5.15",
    defaultDustAmount: "10300",
    quantityDustAmount: "12360"
  },
  {
    name: "\uD750\uB9BC\uB178\uB974\uC758 \uACB0\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/065998537322c87eb7bdda8a9f39e45943350a54c7d0003b889b7f875535be58",
    id: "Hrimnors Resolve",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uC950\uC758 \uB465\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa2319cce9660bbd1414a58e4334b6b49fd80f7b970ce060d162c72e115100be",
    id: "Rats Nest",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uC18D\uC0AD\uC774\uB294 \uC5BC\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/11de18263d5630f28fa2a80b377c9e6da3ee8453edd99518d14e9552c22477fc",
    id: "The Whispering Ice",
    weightValue: "5.15",
    defaultDustAmount: "10300",
    quantityDustAmount: "12360"
  },
  {
    name: "\uB9D0\uB85C\uB2C8\uC758 \uD574\uC9C8\uB158",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fbb6ec7f25b9f378316932a4402f8cce441a96a32f95137b4fd5d578fa6af1ae",
    id: "Maloneys Nightfall",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uC0BC\uB2E8 \uACF5\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/48619e67e73faf5cb4a5c2347db957c610060a2cd28e3e137cff0ae6917029ff",
    id: "Three-step Assault",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uACE0\uD589\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/726439fb737dca7b672d5b870adaea9927f100fc3ec4dbd41c50b6678c39629c",
    id: "The Ascetic",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uB178\uC0C1\uAC15\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c708d38bf0d03b0ce9819843c6b5a1b8f5c7030fc755320348a2176f7c76d90",
    id: "The Highwayman",
    weightValue: "4.93",
    defaultDustAmount: "9860",
    quantityDustAmount: "11832"
  },
  {
    name: "\uBD84\uC1C4\uD615 \uD68C\uC804\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e3af2f7f2b801630217c416ab0be6db0f7cd669f0ded782929526477a6cd14bf",
    id: "The Fracturing Spinner",
    weightValue: "4.85",
    defaultDustAmount: "9700",
    quantityDustAmount: "11640"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uAC70\uC6B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e74402efb165a2b4fc4c83b93e3ebf695a1c0f183b97318df188f49aabdff4b0",
    id: "Atziris Mirror",
    weightValue: "4.79",
    defaultDustAmount: "9580",
    quantityDustAmount: "11496"
  },
  {
    name: "\uC911\uC7AC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e76b5e21bebb9e4762f7e99c6043e77c2d0997b1f234e7979f3bffc16feb850c",
    id: "The Arbiter",
    weightValue: "4.79",
    defaultDustAmount: "9580",
    quantityDustAmount: "11496"
  },
  {
    name: "\uB4E4\uBD88 \uCCB4\uAD00 ",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/136f5ecfbf5f9701019862c37a468741188956cc43b8e825b2f35d696db9bb2d",
    id: "Wildfire Phloem",
    weightValue: "5",
    defaultDustAmount: "10000",
    quantityDustAmount: "12000"
  },
  {
    name: "\uC804\uC9C4\uD558\uB294 \uC694\uC0C8 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b917e55fa9894b8acfda7a40d2c45c5dce6ad1846602048b53b0eb33a523ca1e",
    id: "Replica Advancing Fortress",
    weightValue: "4.73",
    defaultDustAmount: "9460",
    quantityDustAmount: "11352"
  },
  {
    name: "\uCE74\uD6C4\uD22C\uB85C\uC544\uC758 \uD655\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8fe44951c92ba507a536ed2b4cd9ff8f49496dea70d05ebff79723d891cd51a6",
    id: "Kahuturoas Certainty",
    weightValue: "4.73",
    defaultDustAmount: "9460",
    quantityDustAmount: "11352"
  },
  {
    name: "\uC608\uC5B8\uC758 \uC815\uC218",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e528e772a609e86c144fc568d751f75d5652f306691967fc2c852c37c9b46a39",
    id: "Divination Distillate",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uBD88\uBA78\uC758 \uD0EF\uC904",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/29d772aebc8c7d3652454a828c3ab25f7bacca4da09ed86b3a56882c79c863aa",
    id: "Umbilicus Immortalis",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uC800\uAE00\uC758 \uC190\uC7A1\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6e18819406a1f697950cf094a7af09fee423ca3eae95bf25af17c2f1d75987b9",
    id: "Xirgils Crank",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uBE44\uC2A4\uCF54\uC758 \uBAA9\uAC78\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e2b5561d91b7bda9fd0233e336bbc9dd235c189f7b1015a2349a1cc686c692ba",
    id: "Biscos Collar",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uBE44\uC2A4\uCF54\uC758 \uAC00\uC8FD\uB048",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b6c5e3a1253ff3d4b9f1c156e2e25198a484b640f1be3039821656e154796d8b",
    id: "Biscos Leash",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uBC1C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e6de2f9b0b87bb5c7a2793c6c94ee33755da706865716a3b6faa36e203d0246f",
    id: "Replica Lioneyes Paws",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uB9F9\uC57D\uC758 \uC720\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/15074e13c94148a1d9a520b45c5f125c63e1eac592c1dbc466ba582ac5b88670",
    id: "Relic of the Pact",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uC6B0\uBB3C\uBB3C \uC131\uAD6C\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4e2bedb23b2d0dcd915dc7c7325a578dcd8b4323c4b790aae43dbde310d25313",
    id: "Wellwater Phylactery",
    weightValue: "4.71",
    defaultDustAmount: "9420",
    quantityDustAmount: "11304"
  },
  {
    name: "\uCE68\uBC94\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/05308865dca74d7703dc6d8a1db141c19750d328b262f95155769f70a001d642",
    id: "Infractem",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uBD84\uAD11 \uC6D4\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e9ad9281c83731e5b3ea13b3cd0d3738a96f764c2f9742446bc897eeb6cadfc",
    id: "Prismatic Eclipse",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uC81C\uAD6D\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c67e3674103c44988938015c75e6d550691f7c10a726f1fc9f5f811fa95be825",
    id: "Empires Grasp",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uBD84\uC5F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4b8be324a1cd747852b140e7f13adee40502b9900ee3ad90e2eb83415691d453",
    id: "Disjunction",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uD3A0\uD22C\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0c0124df168814a78be247bb3c50eca911e884f574dcb63826ceb98143013012",
    id: "Felltooth",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uC704\uB300\uD55C \uACE0\uB300 \uC2E0\uC758 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6fb5f31a4b92f2473458fdad944db9a0e3ebd2c65d177d820d8d189d94e04097",
    id: "Great Old Ones Ward",
    weightValue: "4.73",
    defaultDustAmount: "9460",
    quantityDustAmount: "11352"
  },
  {
    name: "\uC870\uD504\uB9AC\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8acfe6a1d4d4978ad02c972a2cf09ff95fdd171eac0963baa84076882ef07a18",
    id: "Geofris Legacy",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uAE08\uB2E8\uC758 \uC0E4\uCF54 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ec8192a99a932df28ffcc7ad5b9ebc8799d323d01914c396109023b1e7d5b50",
    id: "Replica Forbidden Shako",
    weightValue: "4.65",
    defaultDustAmount: "9300",
    quantityDustAmount: "11160"
  },
  {
    name: "\uACF5\uD5C8\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/37895dfa2749d2d799b42a4eaffce233318e9050ef8802eb128964ef8f72dacf",
    id: "Voideye",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uC778\uC2A4\uBDF0\uB9AC \uCE7C\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c7e508e94bff6eb7ab46227ebf071aff6269beeea6c46ea0461a11c42d336eee",
    id: "Innsbury Edge",
    weightValue: "4.87",
    defaultDustAmount: "9740",
    quantityDustAmount: "11688"
  },
  {
    name: "\uACF5\uBA85\uC758 \uACC4\uB7B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/787e999ccca474df2dfe73443f81100230a6322527367fd7742ae578b47a6e32",
    id: "Kongmings Stratagem",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uC5D0\uC13C\uC2A4 \uC6DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f3a0fa7338fc0f967b59750d132fb8c2fa2ce9731e642441a3fcbf27284ff721",
    id: "Essence Worm",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uAC74\uCD95\uAC00\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a4468ce5fe7e1c15037351a15f02e86a8cb9b5e1ea4e332af8a5f805621ca19",
    id: "Architects Hand",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uC808\uBA78\uC758 \uBE5B",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9e68554ed4a88415a3da0de5d1a048d492a5c49391229eeca6bcdfc38b6566e4",
    id: "The Annihilating Light",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uD3ED\uD48D \uD0D0\uAD6C\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2db5816f49143c3e97e61180606418a2ffbabcd4660eff7ce33ca3c10a1b568",
    id: "Stormseeker",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uB300\uC9C0\uC220 \uC120\uD68C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/871f321b8d309e0e93177953e48d9ce164eca352a2b0e791b8ac1db9b1cffbba",
    id: "The Geomantic Gyre",
    weightValue: "4.52",
    defaultDustAmount: "9040",
    quantityDustAmount: "10848"
  },
  {
    name: "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e084c33140d70e0b85743075eeb9df60a511aa4b876a7288fcaeacab1660f5c7",
    id: "Maligaros Restraint",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uC694\uB974\uD558\uC2A4\uD2B8\uC758 \uAC15\uCCA0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de5980cb5f0808c10d791455da3ad146faac34c188fa0f2a670cef819aee0fec",
    id: "Jorrhasts Blacksteel",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uAE08\uB2E8\uC758 \uB9DB",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c283277985d91efbd164f9b6e797ef33a7ad424974c16e9b60f58a5772f9d630",
    id: "Forbidden Taste",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uC21C\uC218\uC758 \uC9C0\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/24b2379287477b0150fbd26fc4f0d5feb8d6b42dde701606d04635ce0ece8717",
    id: "Natural Hierarchy",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uC721\uCCB4\uB85C\uBD80\uD130\uC758 \uD574\uBC29",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5a23386b7ff4330816380e9a48e385072dbcde564471574415fa5f0d01ff4da",
    id: "Ascent From Flesh",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uCC45\uB7B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6078f81611d36c5afd14c03476e41b482e951492a9c35f089334e94da0d2bfd3",
    id: "Malachais Artifice",
    weightValue: "4.59",
    defaultDustAmount: "9180",
    quantityDustAmount: "11016"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uAE43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9fd08b261607737f89d7baf0d8b1ec92b51e74aad0b7b6ff678cc885db1d6378",
    id: "Doomfletch",
    weightValue: "4.44",
    defaultDustAmount: "8880",
    quantityDustAmount: "10656"
  },
  {
    name: "\uBE0C\uB8E8\uD22C\uC2A4\uC758 \uB9AC\uB4DC \uC2A4\uD504\uB9C1\uD074\uB7EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/35d3f3ee99bc6e0489b19a972aadb19037a084d488bbd204c5e0b308cd143f77",
    id: "Brutus Lead Sprinkler",
    weightValue: "4.44",
    defaultDustAmount: "8880",
    quantityDustAmount: "10656"
  },
  {
    name: "\uBC14\uB78C\uC758 \uAD34\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1650d9bc7cd4b9039a73e73c9e6b14346cb94825c09774610aee15ff6f3c7a8c",
    id: "Windscream",
    weightValue: "5.15",
    defaultDustAmount: "10300",
    quantityDustAmount: "12360"
  },
  {
    name: "\uB2E4\uAC00\uC628 \uCD5C\uD6C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ea24e39eeb81d01b4aab4a8d1083e47ff07e72e34400e8b315b5b1c161d3544",
    id: "Terminus Est",
    weightValue: "4.38",
    defaultDustAmount: "8760",
    quantityDustAmount: "10512"
  },
  {
    name: "\uD0A4\uD0C0\uBC14\uC758 \uAC08\uC99D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4398d20c6f73802ad78c3889787bd775d766e28e52a24bdad8b6206fc26e7b72",
    id: "Kitavas Thirst",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uC570\uBD80\uC758 \uB3CC\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/12124469d4efb6dbccac168d9fdf8e77e238d1bc33359c4c943453cf732d3d69",
    id: "Ambus Charge",
    weightValue: "4.33",
    defaultDustAmount: "8660",
    quantityDustAmount: "10392"
  },
  {
    name: "\uC570\uBD80\uC758 \uB3CC\uC9C4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/953ebc3608518f6489168e19201503bbdf764b2e12c10405255c4955c1aa5597",
    id: "Replica Ambus Charge",
    weightValue: "4.33",
    defaultDustAmount: "8660",
    quantityDustAmount: "10392"
  },
  {
    name: "\uBC14\uC54C\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/064b5f206fe03ddfaec40876f99324931c962a46006e496cbddbc7381e4ee233",
    id: "Vaal Caress",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uC7BF\uB354\uBBF8 \uB2E8\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ea59ad8860b54f81d4242918f6ecc9bb698172b3a22c4c74b95e8baf80c4e378",
    id: "Cinderswallow Urn",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uC2E0\uC758 \uC2AC\uD514 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e390b1a8851e36f8905b5da55539f4733ca1301331da49381c28bf07f65e4a3c",
    id: "Replica Sorrow of the Divine",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uBCC4\uBE5B \uC131\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/39e408d1fe2e11a79b44c44d54d7f9c92a1a024fdc68e7fd290d874be271e6d9",
    id: "Starlight Chalice",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uB04A\uC5B4\uC9C4 \uC6D0\uC758 \uC601\uC561",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/955f49a6467c6dc50bb90d90cfab696a3e48c262045e9e7ca1f28f21def76830",
    id: "Elixir of the Unbroken Circle",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uAC80\uC740 \uD0DC\uC591 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/26aad7fea4b31eb86479d5d00bb0298c17041752e2280ba71761b73787d96ca9",
    id: "Black Sun Crest",
    weightValue: "4.38",
    defaultDustAmount: "8760",
    quantityDustAmount: "10512"
  },
  {
    name: "\uBD88\uD0C0\uB294 \uB9C8\uB140\uC758 \uC220 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/21ffabfafd31221a9ca7be852ea801b1c925c074f3e7b286c7b885ebd511a20f",
    id: "Replica Witchfire Brew",
    weightValue: "4.31",
    defaultDustAmount: "8620",
    quantityDustAmount: "10344"
  },
  {
    name: "\uBD88\uBA78\uC758 \uC721\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e51d38df425f3ce8744cc51142048142566c05129acf4c2a0c27a146ee53e73d",
    id: "Immortal Flesh",
    weightValue: "4.26",
    defaultDustAmount: "8520",
    quantityDustAmount: "10224"
  },
  {
    name: "\uC2EC\uC7A5 \uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/384c038f47b3d5961232c78ac740e2ba101b2e1f3b470ba96b86e212675c7610",
    id: "Heartbreaker",
    weightValue: "4.26",
    defaultDustAmount: "8520",
    quantityDustAmount: "10224"
  },
  {
    name: "\uB0A8\uD589",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8e91e457fcb60844adb66b2e6215a88f47a82c352b46490b0efff14d3c757a4a",
    id: "Southbound",
    weightValue: "4.38",
    defaultDustAmount: "8760",
    quantityDustAmount: "10512"
  },
  {
    name: "\uD654\uC5FC\uC758 \uC8FC\uBB38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/33d0cf1032f9919ea3cd0c94eb1c6256d8e2416f9ebaa0ec10358487ed593093",
    id: "Mantra of Flames",
    weightValue: "4.26",
    defaultDustAmount: "8520",
    quantityDustAmount: "10224"
  },
  {
    name: "\uC18D\uBC15\uB41C \uC601\uD63C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4f618c1309cb45eba3b2b61d5891543363e9a30090dc14404eba67e8f0a44a59",
    id: "Soulbound",
    weightValue: "4.46",
    defaultDustAmount: "8920",
    quantityDustAmount: "10704"
  },
  {
    name: "\uBE45\uD0C0\uB9AC\uC624\uC758 \uC790\uBE44",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1c11dcfc14d6495ec1613d1023e55d1f2563e9d5e5e35ccefed8597b4cbbb228",
    id: "Victarios Charity",
    weightValue: "4.26",
    defaultDustAmount: "8520",
    quantityDustAmount: "10224"
  },
  {
    name: "\uC2DC\uCCB4\uCC98\uB9AC\uC0AC\uC758 \uC7A5\uAC11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8f150b279a3adf8634de2eeb740be682faad986f9d75ebc9b4f2a7ff1d1b2f28",
    id: "The Embalmer",
    weightValue: "4.26",
    defaultDustAmount: "8520",
    quantityDustAmount: "10224"
  },
  {
    name: "\uC9C8\uC758 \uC99D\uD3ED\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9f0dcb1d3f2b4a62fc7416713f52cb3cad9b12b6d4d465a8a103a2bc1a7ac6a4",
    id: "Zeels Amplifier",
    weightValue: "4.13",
    defaultDustAmount: "8260",
    quantityDustAmount: "9912"
  },
  {
    name: "\uC2E4\uC6A9\uC8FC\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ac19b23da07bac11ce5fd3ff54e6613d4a41f96f3abbc687bf08f3b117a135e",
    id: "Pragmatism",
    weightValue: "4.13",
    defaultDustAmount: "8260",
    quantityDustAmount: "9912"
  },
  {
    name: "\uC545\uB9C8 \uBD09\uD569\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a0f30e689ec0a4eab99c1319b3d4615505addf18a7f30c0b025937b27c2d788a",
    id: "Demon Stitcher",
    weightValue: "4.08",
    defaultDustAmount: "8160",
    quantityDustAmount: "9792"
  },
  {
    name: "\uC601\uC6D0\uD55C \uD22C\uC7C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e416b931908ee5e786f09127cf0cb54fb21fc640b2e0a096cc0b2e67834b674",
    id: "The Eternal Struggle",
    weightValue: "4.07",
    defaultDustAmount: "8140",
    quantityDustAmount: "9768"
  },
  {
    name: "\uCC28\uC728\uB77C\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad122fa2c849bf8da0a1057570f254f4d748a404ddd9c3dcf7b61873e1b5f470",
    id: "Eye of Chayula",
    weightValue: "4.07",
    defaultDustAmount: "8140",
    quantityDustAmount: "9768"
  },
  {
    name: "\uC601\uC6D0\uD55C \uC0AC\uACFC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/37271642cf870478a4d07a64fcadcac04596e782e110c81957e809ce2f00b971",
    id: "The Eternal Apple",
    weightValue: "4.13",
    defaultDustAmount: "8260",
    quantityDustAmount: "9912"
  },
  {
    name: "\uAD00\uB300\uD568\uC758 \uB760",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f5477c1d73784b827a3bd8f7376cc346dacb719382ca115c41511e1fb329f926",
    id: "Ceinture of Benevolence",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uC2EC\uC57C\uC758 \uAD50\uC12D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6146efc176a953534e6828d0ff26597348e729c3568d0f8c8a8849977dd10821",
    id: "Midnight Bargain",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uD234\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2bce1f1cf4b62d80b5cb787fd0d0f07b99f1f186916ebdf2c40b5dab8cb0544e",
    id: "The Will of Tul",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uC870\uD504\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7540e23e881c1f6040bb6fb16aa1ece2eea771587901e00eb66fb64703fd7a78",
    id: "The Will of Xoph",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uC5D0\uC26C\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e5ad5975484e496140dc4cd15f65dbf13ca7d09dbbb351900ca3e5ff6f21bda1",
    id: "The Will of Esh",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uC6B8\uB124\uD1A8\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d69cf520ee05c368e95bb9a66831d0ceb088f7307cb39f9328dad37c4afd7441",
    id: "The Will of Uul-Netol",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uC0B0\uC0B0\uC870\uAC01 \uB09C \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/94e8ed4ad163fdbea9fc7601526a3ffe66aa79e5f4bfa9a94836dc1287e4c233",
    id: "The Sundered Will",
    weightValue: "3.96",
    defaultDustAmount: "7920",
    quantityDustAmount: "9504"
  },
  {
    name: "\uAFC8\uC758 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0fe499d23554fb758b3751a641cb69b61e87b19e3f771ef8d69322386aae0f0d",
    id: "Dream Fragments",
    weightValue: "3.95",
    defaultDustAmount: "7900",
    quantityDustAmount: "9480"
  },
  {
    name: "\uACA8\uC6B8 \uB9E4\uB4ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7705779ae9661e05a920894bc2a7bc2cb7039d69b810430b28199033905cfd8d",
    id: "Winterweave",
    weightValue: "3.95",
    defaultDustAmount: "7900",
    quantityDustAmount: "9480"
  },
  {
    name: "\uC6B8\uB9BC\uC758 \uB9C9\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0d05058295370d9305ed0ea7c7c7382a9dac668fdf5e5b87d6a91fdc80a89a7b",
    id: "Reverberation Rod",
    weightValue: "3.95",
    defaultDustAmount: "7900",
    quantityDustAmount: "9480"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD600",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b0f61bd364ec6e47304ac604fee7f2103509b772f051bee26b7a045169d7f531",
    id: "Doedres Tongue",
    weightValue: "3.95",
    defaultDustAmount: "7900",
    quantityDustAmount: "9480"
  },
  {
    name: "\uCE7C\uB9AC\uC0AC\uC758 \uC740\uCD1D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ab2b5a2cf9268dab6ab201b22d51d178a204250afa831092825d1f2e3bc4bbd",
    id: "Kalisas Grace",
    weightValue: "3.9",
    defaultDustAmount: "7800",
    quantityDustAmount: "9360"
  },
  {
    name: "\uC0AC\uADF8\uB77C\uB4E0 \uBE5B\uC758 \uC758\uBCF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/43ad0e1c16325739996a06ee949e14ccf79021ee8fce761480f7db9597d52609",
    id: "Lightbane Raiment",
    weightValue: "3.9",
    defaultDustAmount: "7800",
    quantityDustAmount: "9360"
  },
  {
    name: "\uB2EC\uC744 \uAD6C\uBD80\uB9AC\uB294 \uC790\uC758 \uB0A0\uAC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/37e3893934527f59c3f77fbe5fdb03ed1024dedf18a31501bbd7b7119327f824",
    id: "Moonbenders Wing",
    weightValue: "3.84",
    defaultDustAmount: "7680",
    quantityDustAmount: "9216"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uBA78\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/402482b4a70dc7c0af06e83b6dcd0684d66245b23b0b473e49454f0184af180d",
    id: "Doedres Scorn",
    weightValue: "3.84",
    defaultDustAmount: "7680",
    quantityDustAmount: "9216"
  },
  {
    name: "\uC6C5\uD790\uC758 \uC870\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49c2e42d5c10ee0f8391daf230200318ec69f1630f6afa9d709d7800c17cf351",
    id: "Ungils Harmony",
    weightValue: "3.83",
    defaultDustAmount: "7660",
    quantityDustAmount: "9192"
  },
  {
    name: "\uACB0\uD568 \uC788\uB294 \uD53C\uB09C\uCC98",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f48e23e603ad76fc52e6cf5b8a69548d3a0eee6036301ae8cb9e606e4ee53497",
    id: "The Flawed Refuge",
    weightValue: "3.84",
    defaultDustAmount: "7680",
    quantityDustAmount: "9216"
  },
  {
    name: "\uBD80\uD328\uD55C \uC5FC\uC218\uB2E8 \uAE43\uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/36c2ec326f548958d25c8ebb88560e9592887e0cde879612d1a430b6511fab4d",
    id: "Brinerot Flag",
    weightValue: "3.83",
    defaultDustAmount: "7660",
    quantityDustAmount: "9192"
  },
  {
    name: "\uB3D9\uBC29\uC758 \uC7A5\uC2E0\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7a72404084287a1c359cb69ae1bc2ccc6eed5d83f77ea8bcbf69c9cefb20822",
    id: "Ornament of the East",
    weightValue: "3.78",
    defaultDustAmount: "7560",
    quantityDustAmount: "9072"
  },
  {
    name: "\uC804\uC9C4\uD558\uB294 \uC694\uC0C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b046c1e231edb43bf28a8aee35aaad9d124fef2707e12806e55b8b47bc810e0b",
    id: "Advancing Fortress",
    weightValue: "3.78",
    defaultDustAmount: "7560",
    quantityDustAmount: "9072"
  },
  {
    name: "\uC6B8\uB7EC\uC758 \uBF08 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6b2d251ec47a9fb771f55178add010af40858fdd7f9e4d28883427b12d7b5b65",
    id: "Replica Bones of Ullr",
    weightValue: "3.72",
    defaultDustAmount: "7440",
    quantityDustAmount: "8928"
  },
  {
    name: "\uBC1C\uB77C\uCF54\uC758 \uD45C\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49a151d73957ff1221fcf43f68edf00c6d66c8e6870ab7c49b4334468460521b",
    id: "Valakos Sign",
    weightValue: "3.73",
    defaultDustAmount: "7460",
    quantityDustAmount: "8952"
  },
  {
    name: "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uB80C\uC988",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b49429c3a9adbcdd56c0df949a0a1946f131617984473d46f2e1ee930273c58f",
    id: "Maligaros Lens",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uC2DC\uBE4C\uC758 \uD55C\uD0C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/532ecbd5e015bac4e45775776ee9025d0e8dcc752d004a6d845f68ab04dd36c3",
    id: "Sibyls Lament",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uB9DD\uC790\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/65594b8f7b4bce3d36b9410ead01c3d1902b7b99ae13165881f92b696e5fbc6f",
    id: "Deadmans Hand",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uBD09\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d73068c4820cd0c26180c756c6f7740c23e46d3b003e0993031aa8b5c4a27e84",
    id: "The Signal Fire",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uC194\uB77C\uB9AC\uC2A4\uC758 \uAD11\uD658",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e41405f76583f892c93afb06ebdb267edfb632ac8aa89f1ceaa1ae3f3c8213da",
    id: "Corona Solaris",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uBAA8\uB8E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f0854111998d59c3d4326dd76320564647bf08358096c0345cfa7f28e477119b",
    id: "The Anvil",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uC218\uD655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f09c453b2c82e7e68edbb07bded922fd95328658c4afca85894ff807010a0a8b",
    id: "The Harvest",
    weightValue: "3.62",
    defaultDustAmount: "7240",
    quantityDustAmount: "8688"
  },
  {
    name: "\uC704\uB3C4\uC6B0\uBA54\uC774\uCEE4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa6fc224144ad0297716e10b00e7ca421e563a7bebd17c636e60f1a71ec20ac2",
    id: "Widowmaker",
    weightValue: "3.56",
    defaultDustAmount: "7120",
    quantityDustAmount: "8544"
  },
  {
    name: "\uACF5\uC131\uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7b35d40dd92b716d3a08d7a48737f735f3d15afa5e2391a0444664d116cd418",
    id: "Siegebreaker",
    weightValue: "3.56",
    defaultDustAmount: "7120",
    quantityDustAmount: "8544"
  },
  {
    name: "\uD0C0\uD558\uB204\uCFE0\uC758 \uB54C\uB9DE\uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b323eb8f36ace8fc5256a32157c67b6c77c08501403c06d28b0b411877f1190c",
    id: "Tawhanukus Timing",
    weightValue: "3.56",
    defaultDustAmount: "7120",
    quantityDustAmount: "8544"
  },
  {
    name: "\uBCA0\uB809\uC758 \uC720\uC608",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/489615d0bfd37bf05895a28cebddc6793cf7937c3cb040b897e669607a04d995",
    id: "Bereks Respite",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC5F4\uAE30\uC640 \uC624\uD55C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/82baa10506125c43062b9ae69c10be5414296eb0a640079fa2bd134933c85dd6",
    id: "Heatshiver",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBA3C\uC9C0\uCC98\uB7FC \uC0AC\uB77C\uC838\uB77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dc421baf0176d51cd2ee5f90551b18e2b0ed0e5ee3724b11b637edf996d12709",
    id: "To Dust",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC720\uCCB4 \uC6B4\uB3D9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c1360b0e5deea3e5e251434903dd1709caff30587a75ae5a5cc1463abe95ff08",
    id: "Fluid Motion",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uAD00\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d71ee8dacf8507b04e29495bf560bbb1af048693cb372cabbc7dd09392d7794f",
    id: "Inertia",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD48D\uC694\uB85C\uC6B4 \uB9C8\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1880673b3076dcca0a38597851be75f0af6f402a47a74c6182c0deccc4bdec51",
    id: "Fertile Mind",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD6A8\uC728\uC801\uC778 \uD6C8\uB828",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/56f5d80c50c38f7434066cd5e9f3ad86c31c5b7cdb84e84fd13a1f8022f09332",
    id: "Efficient Training",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC644\uB825 \uD574\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ac7aa95ff52b0e34bd39d4c08db7ca9268e40be6f2c12b649f5875c5602af065",
    id: "Brute Force Solution",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uCCA0\uC800\uD55C \uACC4\uD68D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1eaf7563193962186082bd30fce61a741ad50c595b69fb5c146e330b7d9ee10a",
    id: "Careful Planning",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uCE58\uC138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f675a327a8fb9c73eeae999ac2f69a36f870f820ac0e874bf35b1c573347c3b0",
    id: "Atziris Reign",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBCF5\uC885\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/24742fa7b1acb6ed803ce0643353278ccf46a785143d738dcdb695ac4c7c6ffe",
    id: "Mark of Submission",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uC790\uD559 \uCC44\uCC0D\uC9C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5b33d90720d2fca1241d8347c0d680e47f7423cb30337b991fa07a322e799545",
    id: "Self-Flagellation",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD53C\uC758 \uC218\uD655\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/96efe1e743db25e45571af1101225ae846aa270caa0eb225ba6d5c8b26f7f53d",
    id: "The Blood Reaper",
    weightValue: "3.67",
    defaultDustAmount: "7340",
    quantityDustAmount: "8808"
  },
  {
    name: "\uD0C0\uB77D\uC758 \uD55C\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49da1d47f2522aea9b5dc250d31ecb480320550f5ba0ed699642a0ff1dfe5faf",
    id: "Chill of Corruption",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD3C9\uD654\uC8FC\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d230daa9637da87a6a9f82593cbfaca33d8085d3192f2b813479d218b866211d",
    id: "Pacifism",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD5C8\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5ad09f63d1933f6979bab5af6bab682596e71839aa2bd51394c53298da5c3445",
    id: "Fragility",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD65C\uB825\uC758 \uBC29\uC5B4\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27e67ab492bbe8ae58a6dd16e6e008bb97d824c10673007e121784710dcfb60d",
    id: "Energised Armour",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uB0B4\uC7AC\uD55C \uC5D0\uB108\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa997d17016e6e622073f156805ded269a0b3f57759b2fdaa4a2346e6fa14c80",
    id: "Energy From Within",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uAC74\uAC15\uD55C \uB9C8\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/586d882d285b8b4f609cdb9294e9fe68ba5409efd81557f71d06e3d66cbb1d3f",
    id: "Healthy Mind",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d40aefcb10605415b75fac8b75e2a5dc3fc3a1737ebd36baf2d6081cf0f55f1b",
    id: "Rigwalds Crest",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBB34\uBAA8\uD55C \uBC29\uC5B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f8f2179bf5e8fff886a92732591c5e83cc220c76cf3eae14ecc5725320537b53",
    id: "Reckless Defence",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD0DC\uACE0\uC758 \uACE0\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/76f7ba4eb9afe714b7d8b305b88c096f761d6417d982e0c49555ee64f7f61a89",
    id: "Primordial Eminence",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD0DC\uACE0\uC758 \uC870\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7dc241d14daf484910b4c3fb157eed7f4594650c1f1708a896c3ffc169128d91",
    id: "Primordial Harmony",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD0DC\uACE0\uC758 \uC644\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ffc9a4547a0f08acdd3887918559215e6b65aa0d840d55e2d723633828e642ab",
    id: "Primordial Might",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC5BD\uB9E4\uC774\uC9C0 \uC54A\uC740 \uD750\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d4f3de46036dce2289cd17f31d2e4e11e45b29680f32612622eaab27b7f34bb3",
    id: "The Flow Untethered",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD669\uAE08 \uBC95\uCE59",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de1e729366c97ca3a263df914199f00b3c938fa07c323c42d8e8647fcca1dd14",
    id: "The Golden Rule",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC601\uD63C\uC758 \uC2EC\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a0a06819a4345a84775bc77f94922128976893791b9ffce622e0b8f51ebf9a6",
    id: "Souls Wick",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC694\uC0C8 \uACC4\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/401ef113e945f2b7be75dc72108836b2c73495728c2b2400264cc77341198313",
    id: "Fortress Covenant",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC7AC\uCD09\uC758 \uACC4\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e4ff50b0f43f7e47e8a7a8871b043e1c2385a7d57752c4371b14ad04170c3f3",
    id: "Quickening Covenant",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBB34\uB825\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6dbc0491a5cb769405b933dbf58f388c268cc656cd8943cebced5bb5da3556f9",
    id: "Powerlessness",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC774\uC911 \uC778\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9b50ee5c53f750f667cf27ca0c92774d96fe983d58b4073c44f49bb948c0aaf",
    id: "Split Personality",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uACA9\uB82C\uD55C \uAC15\uCCA0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3db4921104035c864758e0fcf95d5435d36149cdead633db0af820c6fec1dd51",
    id: "Replica Tempestuous Steel",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBB34\uBAA8\uD55C \uBC29\uC5B4 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3661259d5daced49e6fa90ce9ea115a031c2a05ac147d51a03ec19bcbd115a3c",
    id: "Replica Reckless Defence",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC548\uC758 \uBE44\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f4f5dd1e85f93ee3d4e0b04d314b87088c970342028a3b39e0e53f61707c547",
    id: "Arns Anguish",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC62C\uB808\uC0E4\uC758 \uAE30\uC068",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c0e10416a5c1ae83592f51e82cd56a6757b8584d4543045dd81c88bafca4ed97",
    id: "Olesyas Delight",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uADF8\uB808\uC774\uBE10\uC758 \uBE44\uBC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7b80dea6a152f1a0799776c657729bd39983e6c93e8c50fddbe6522d5e3e4a86",
    id: "Gravens Secret",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uAE08\uB2E8\uC758 \uD654\uC5FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2a7c58a17008b9a73df3772b5dff7428450c2bc25df6368899fb022d8531f262",
    id: "Forbidden Flame",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uAE08\uB2E8\uC758 \uC0B4\uC810",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/abf425cf8fb5db515414cb6c989e6f8088031e0171b205d120ad2b8fe6cbcc28",
    id: "Forbidden Flesh",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBD88\uAC00\uB2A5\uD55C \uD0C8\uCD9C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/607f6b0932fb404d52c817329b54c14a2def2679436ae67a31f1e5e6449585a9",
    id: "Impossible Escape",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC775\uC2A4\uCCBC\uC758 \uC720\uD639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ccdecac27c2a0cf8f482c4a629503f775c90cf50335672e9e55e835d09a88e6",
    id: "Ixchels Temptation",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBE7C\uC557\uAE34 \uAC83",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cf6082cc50cea104447f2faf0f1786da48824ef13a4deca69aaea2516b7b3f10",
    id: "That Which Was Taken",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC5F4\uAE30\uC640 \uC624\uD55C \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/72d4a7ab9ac6517df782d72706836f5bd538342a11bbd54b3a4cf7701cf890be",
    id: "Replica Heatshiver",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD3C9\uD654\uC8FC\uC758 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/305405b097fdf364761f505db7e181650d758b9cc768f06ed3a7f9d28f0f7928",
    id: "Replica Pacifism",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uD5C8\uC57D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c448b17216567668cb6794b8a8c90d6dd579e7e3412b14285c7b60ad4c136b53",
    id: "Replica Fragility",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uBB34\uB825\uD568 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bb72c33aad20296dfa94bb883d996aa931ee2ed80dc3fb24ab8a549b0145f124",
    id: "Replica Powerlessness",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uB124\uBC1C\uB9AC\uC6B0\uC2A4\uC758 \uC720\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3bc58ff05629b84f95d95c3082f78d811683fea6943120ce195d7722cc4c1e95",
    id: "Nevalius Inheritance",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uB2E4\uB808\uC18C\uC758 \uC5F4\uC815",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49fc60ea80416a897c5f3c42819049ce21c7fd986e280665d2197b2d2b16aeaa",
    id: "Daressos Passion",
    weightValue: "3.46",
    defaultDustAmount: "6920",
    quantityDustAmount: "8304"
  },
  {
    name: "\uD76C\uB9DD\uC758 \uC2E4\uD0C0\uB798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/81b7277d5daa43a24a1dbc5254f687cb01df622c2923f1f1ef97f085703876c1",
    id: "Thread of Hope",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC5D8\uB77C\uBE48\uC758 \uC5BC\uAD74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bd64da0f889c4f09d575d75771bf069a0261452817c2ceab2aadca83c3bc9367",
    id: "ElAbins Visage",
    weightValue: "3.46",
    defaultDustAmount: "6920",
    quantityDustAmount: "8304"
  },
  {
    name: "\uD53C\uBD99\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad7607a3013569605e3cc9c641369572dcd988132cb0f3b84dea2c5184da9716",
    id: "Bloodbond",
    weightValue: "3.41",
    defaultDustAmount: "6820",
    quantityDustAmount: "8184"
  },
  {
    name: "\uB9AC\uADF8\uC6D4\uB4DC\uC758 \uB3CC\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/11312b829e8c3ae4689e6048ebf8ec01c3f3b7289d86c3153e22abbfb67f5ae3",
    id: "Rigwalds Charge",
    weightValue: "3.56",
    defaultDustAmount: "7120",
    quantityDustAmount: "8544"
  },
  {
    name: "\uD669\uAE08 \uC544\uB8E1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/83f2e449df02dbedcf0ebe0343143d146f3a7c5aa322e1f8fe8ee6b149b22f8f",
    id: "Goldwyrm",
    weightValue: "3.32",
    defaultDustAmount: "6640",
    quantityDustAmount: "7968"
  },
  {
    name: "\uD0DC\uACE0\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c9be915ab5b46b25537941fd049b5d799fdc4867b2d95642a1e2ea5a4e951e21",
    id: "The Primordial Chain",
    weightValue: "3.32",
    defaultDustAmount: "6640",
    quantityDustAmount: "7968"
  },
  {
    name: "\uCD94\uC801\uC758 \uAE43\uD138",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/890f07f1e9e3ebe486cfc0c59fcf5977f0cfb492d88b71b0cc368145e91a38fb",
    id: "Plume of Pursuit",
    weightValue: "3.32",
    defaultDustAmount: "6640",
    quantityDustAmount: "7968"
  },
  {
    name: "\uBCA0\uB8E8\uC18C\uC758 \uC57C\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a1e4a371e87104af0eee2e13533450db0a8a0c3598c58bf8411b3ae1fef1cfd0",
    id: "Verusos Ambition",
    weightValue: "3.32",
    defaultDustAmount: "6640",
    quantityDustAmount: "7968"
  },
  {
    name: "\uD654\uC5FC\uC758 \uB9DD\uD1A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a7dab62761bd37b44c3c62dbe10eb7c5ec3172f9e1d3238dce26496ae5ac5fd",
    id: "Cloak of Flame",
    weightValue: "3.31",
    defaultDustAmount: "6620",
    quantityDustAmount: "7944"
  },
  {
    name: "\uD765\uBD84\uD55C \uB9C8\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1815d5358bf2713755e98960403d89c6fdbcf36bccc3abdf05a425c280b6f181",
    id: "Fevered Mind",
    weightValue: "3.51",
    defaultDustAmount: "7020",
    quantityDustAmount: "8424"
  },
  {
    name: "\uC6DC\uC758 \uD5C8\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fbc26cfc7cbf6ab33837258b4d2dee632c78a66a8225ad0fe5e78ac1d85db7e6",
    id: "Wurms Molt",
    weightValue: "3.36",
    defaultDustAmount: "6720",
    quantityDustAmount: "8064"
  },
  {
    name: "\uD798\uC758 \uD53C \uC9C4\uB178",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a8ee8b3a39dc08eb93dd0173446dfb68bb43bfcb9381e1c53f43df6ec4bfbb6",
    id: "Mightblood Ire",
    weightValue: "3.31",
    defaultDustAmount: "6620",
    quantityDustAmount: "7944"
  },
  {
    name: "\uACC4\uC808\uC758 \uC9C4\uC561",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7ee749353d2850bf1dfed2c5f90aed094c564d1664894daf6caee3764e79edb5",
    id: "Sap of the Seasons",
    weightValue: "3.31",
    defaultDustAmount: "6620",
    quantityDustAmount: "7944"
  },
  {
    name: "\uC13C\uD0C0\uB9AC\uC758 \uC751\uB2F5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/19fc54e5ccdae8bddb431b5885389f51f0792e25eda06871b3622bdf77942377",
    id: "Sentaris Answer",
    weightValue: "3.22",
    defaultDustAmount: "6440",
    quantityDustAmount: "7728"
  },
  {
    name: "\uCD08\uBC84 \uCC28\uBC84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6dfc451a6d5004bcf90934c7728f21106423c44313917ef68dc03876ff9fdae3",
    id: "Chober Chaber",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uC774\uD0C0\uC801\uC778 \uD1B5\uC194\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/95f3c0c9f9acc628a7d248d34f464ac3a803da39171467fd67a99c28b9fa7c2c",
    id: "Selfless Leadership",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uC815\uC804\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/98ed60ac889a8c75badf76edf5ec6b7bf7a9137a94acb13226e66d0275d2320e",
    id: "Static Electricity",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uACA8\uC6B8\uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/18a1a1248f7d0c651fca3b2e6a825623f14e7778ece2f890dd7650836e454ba6",
    id: "Winterheart",
    weightValue: "3.36",
    defaultDustAmount: "6720",
    quantityDustAmount: "8064"
  },
  {
    name: "\uC369\uC740 \uB0B4\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e30c2c337a753ad36202390939c6b237aa23ab26ec0f3bc498340e5944d1e739",
    id: "Rotgut",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uCC28\uBC84 \uCF00\uB978",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ca6faac9c567e9e7ef2426f2fb2c561a59093b418ea9f6b1fab1d18756b9b5f9",
    id: "Chaber Cairn",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uC5D0\uC77C\uB7EC\uB371\uC2A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fc3882459caa5e033fc2326540c3f3b775b6a62a1d23b1eb7365871cb044344b",
    id: "The Aylardex",
    weightValue: "3.13",
    defaultDustAmount: "6260",
    quantityDustAmount: "7512"
  },
  {
    name: "\uCCA0\uC758 \uC9C0\uD718\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a22290fa359bef60fb8269b4c1d494a0841e8528b66e85fc63a96d16035572f",
    id: "Iron Commander",
    weightValue: "3.13",
    defaultDustAmount: "6260",
    quantityDustAmount: "7512"
  },
  {
    name: "\uB9CC\uBB3C\uC758 \uD798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/adb224413e8a36b54b0b51baeef59c30ed633fcaac2468025ba74738deef62a7",
    id: "Might in All Forms",
    weightValue: "3.17",
    defaultDustAmount: "6340",
    quantityDustAmount: "7608"
  },
  {
    name: "\uC545\uBABD \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b6a5446a6b3795c14d8f4a92cb69f8899988e7198f4db71c58033ac8323c2f7a",
    id: "Replica Bitterdream",
    weightValue: "3.13",
    defaultDustAmount: "6260",
    quantityDustAmount: "7512"
  },
  {
    name: "\uC218\uB3C4\uC6D0 \uC885",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e490c1805eca8105d747aafc2fee6e804c2a2073b4d00b8f891946a6d07c5d5",
    id: "The Monastery Bell",
    weightValue: "3.13",
    defaultDustAmount: "6260",
    quantityDustAmount: "7512"
  },
  {
    name: "\uC120\uB3C4\uC790\uC758 \uC0C1\uC9D5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49a51c8abc47e673fe68bed6fe4a0ca6752ca48eb00911a908bf5dfce6c27fd8",
    id: "Precursors Emblem",
    weightValue: "3.12",
    defaultDustAmount: "6240",
    quantityDustAmount: "7488"
  },
  {
    name: "\uC544\uCF08\uB9AC\uC758 \uACC4\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab640a4245c19b9ba0248a81337e07985e657e597de8ffb6ff2c5bbfcba418d4",
    id: "Ahkelis Valley",
    weightValue: "3.12",
    defaultDustAmount: "6240",
    quantityDustAmount: "7488"
  },
  {
    name: "\uBE44\uD1B5\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f8ea7d318e61a5f5f4e67649a28f881b0f4bad2c1e08944f95fc933d3d4847a9",
    id: "Circle of Anguish",
    weightValue: "3.12",
    defaultDustAmount: "6240",
    quantityDustAmount: "7488"
  },
  {
    name: "\uC5BC\uC74C \uBB18\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/55bf61e746089291aa98deccb92c0d55f07d850d9d7873cfd9222cbd0bc5c4e1",
    id: "Icetomb",
    weightValue: "3.07",
    defaultDustAmount: "6140",
    quantityDustAmount: "7368"
  },
  {
    name: "\uBE5B\uB098\uB294 \uBB18\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49681773a0e5343890699fbe22c465a9ed01a7db9db9119bd11096a2c8369ff3",
    id: "Coruscating Elixir",
    weightValue: "3.31",
    defaultDustAmount: "6620",
    quantityDustAmount: "7944"
  },
  {
    name: "\uAFC8\uC18D\uC758 \uC5F0\uD569",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f8ac1e71d1c3caa6de9a134effa0ffff9a6e2a0c4c182d242c4d2489b0c13dd6",
    id: "United in Dream",
    weightValue: "3.13",
    defaultDustAmount: "6260",
    quantityDustAmount: "7512"
  },
  {
    name: "\uD6C4\uC704 \uACBD\uACC4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d62f6053f8de852359529030f0d4b3b79098d44771a325eb9c8aa500fc359ac5",
    id: "Rearguard",
    weightValue: "3.03",
    defaultDustAmount: "6060",
    quantityDustAmount: "7272"
  },
  {
    name: "\uADF8\uB9BC\uC790\uC640 \uBA3C\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2ca654c0f554a857c397932558acafd0d5056cb0a093ebf4088f8c05a8aafe7",
    id: "Shadows and Dust",
    weightValue: "3.03",
    defaultDustAmount: "6060",
    quantityDustAmount: "7272"
  },
  {
    name: "\uC624\uBC1C\uB77C\uC758 \uD56D\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a73c351eb758f690c7d06a050ccfc1734c43ed0c642cacccc52e85bfa65a094",
    id: "Orbalas Stand",
    weightValue: "3.07",
    defaultDustAmount: "6140",
    quantityDustAmount: "7368"
  },
  {
    name: "\uC218\uC815 \uAE08\uACE0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f09be8d267adda8fab6353ff1d52b55face68fe3e5e44e1ac972f89d0dfc5407",
    id: "Crystal Vault",
    weightValue: "3.07",
    defaultDustAmount: "6140",
    quantityDustAmount: "7368"
  },
  {
    name: "\uACA8\uC6B8\uC2EC\uC7A5 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dea0531255e60725f4aa09dedab27099315b7037bf77ec6ab17a4212c1f9aa88",
    id: "Replica Winterheart",
    weightValue: "3.03",
    defaultDustAmount: "6060",
    quantityDustAmount: "7272"
  },
  {
    name: "\uBC1C\uB9AC\uB968",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b94f76e22c3e5b73a8574b0952c99cd1912dcdd3d2f05a4fc65a1a3674409dd4",
    id: "Valyrium",
    weightValue: "2.99",
    defaultDustAmount: "5980",
    quantityDustAmount: "7176"
  },
  {
    name: "\uC99D\uB300\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/38166d65321e8cbd7ec796929fac2474437a3d5edabf763e76fc77863a191a65",
    id: "Escalation",
    weightValue: "2.99",
    defaultDustAmount: "5980",
    quantityDustAmount: "7176"
  },
  {
    name: "\uB85C\uB9AC\uC758 \uB4F1\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f6b2e3649fc7ebf59270d36c507f3bc7e20c396fd399f6399215970c06eca89c",
    id: "Loris Lantern",
    weightValue: "2.95",
    defaultDustAmount: "5900",
    quantityDustAmount: "7080"
  },
  {
    name: "\uB3C4\uB451\uC758 \uACE0\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dec631d5f9a8af1a8e0e2648d533267847f95750bee5424393a36e5f7bb5fc43",
    id: "Thiefs Torment",
    weightValue: "2.95",
    defaultDustAmount: "5900",
    quantityDustAmount: "7080"
  },
  {
    name: "\uB77C\uC774\uC628\uC544\uC774\uC758 \uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c3827e4522a4b208769bcbd16f9661559f6f81385652bbff5cdab7ca8408a5bf",
    id: "Lioneyes Paws",
    weightValue: "2.95",
    defaultDustAmount: "5900",
    quantityDustAmount: "7080"
  },
  {
    name: "\uD2B8\uC704\uC990 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7471f9338383b5b27b5cbbdf5db1b8f9a4daadb95870b3fe5a60c6f2cf28ebc",
    id: "Replica Twyzel",
    weightValue: "2.95",
    defaultDustAmount: "5900",
    quantityDustAmount: "7080"
  },
  {
    name: "\uBB34\uAD11\uC758 \uC794\uC874",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/69eaed54b27150fa89856e0e31f6234219037f7f31db9752eaafaa533a079c06",
    id: "Unlight Extant",
    weightValue: "2.95",
    defaultDustAmount: "5900",
    quantityDustAmount: "7080"
  },
  {
    name: "\uC794\uB370\uD22C\uC2A4\uC758 \uC131\uC9C1\uBCF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e0fffbb4635f3a27b3fbff84afd4d2e84591dc7d79ba83fd2887ac05727dbf2",
    id: "Zahndethus Cassock",
    weightValue: "2.9",
    defaultDustAmount: "5800",
    quantityDustAmount: "6960"
  },
  {
    name: "\uD074\uB808\uC774\uC250\uC774\uD37C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f12b2af1d8611010288f91bd91ffc97982c6af3bfb0358e13e575418504fd6d3",
    id: "Clayshaper",
    weightValue: "3.26",
    defaultDustAmount: "6520",
    quantityDustAmount: "7824"
  },
  {
    name: "\uC815\uC2E0\uC758 \uC18C\uC6A9\uB3CC\uC774",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/070e4f3895ec45b308255762a596d5409ae05f77abe40b38bdf52db00991cbc3",
    id: "Mindspiral",
    weightValue: "2.9",
    defaultDustAmount: "5800",
    quantityDustAmount: "6960"
  },
  {
    name: "\uD683\uBD88 \uCC38\uB098\uBB34 \uCE35\uACC4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/41a27452092f08e04302e2f25e04e490ce7e8a9d0dcddd9173fe4895ff09ef9e",
    id: "Torchoak Step",
    weightValue: "2.9",
    defaultDustAmount: "5800",
    quantityDustAmount: "6960"
  },
  {
    name: "\uACF5\uD3EC\uC758 \uC131\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1ff04361b45add0ab7144de7d474ed90b6d646fca307c32cfebcc11e61a4cc6e",
    id: "Chalice of Horrors",
    weightValue: "2.86",
    defaultDustAmount: "5720",
    quantityDustAmount: "6864"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uD683\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/045e4bc29be0bf5f8c36565a90b2fc871335809d9812aced0a86fa316b3a387e",
    id: "Demigods Beacon",
    weightValue: "3.03",
    defaultDustAmount: "6060",
    quantityDustAmount: "7272"
  },
  {
    name: "\uC2DC\uBE4C\uC758 \uBC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a4e399d36324db28f4fe5e8a978232f0739f90d8e1b707ad430d94b24c146fff",
    id: "Cybils Paw",
    weightValue: "2.9",
    defaultDustAmount: "5800",
    quantityDustAmount: "6960"
  },
  {
    name: "\uC811\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c3d67466c0b4358420372d5a5806acdcde5e63817acd2ebd72df099c12003404",
    id: "Skirmish",
    weightValue: "2.81",
    defaultDustAmount: "5620",
    quantityDustAmount: "6744"
  },
  {
    name: "\uD558\uB298\uC5D0\uC11C \uB0B4\uB824\uC900 \uC120\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c61f23c7065f2e28cf6abee33f89b518b511a263a07e615b629ffde7c7085dfe",
    id: "Gifts from Above",
    weightValue: "2.78",
    defaultDustAmount: "5560",
    quantityDustAmount: "6672"
  },
  {
    name: "\uD669\uD3D0\uD55C \uC0D8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/94f6674d6fe8dfccda843728b404bc1fdc6e14c3b147e02f104650157aab9b1c",
    id: "Blightwell",
    weightValue: "2.78",
    defaultDustAmount: "5560",
    quantityDustAmount: "6672"
  },
  {
    name: "\uC544\uC6B0\uCE74\uB098\uC758 \uC758\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c5c0a9fcdc8f14db89750b3ce772ee5ebeee35789af1301e3671789637b0a7af",
    id: "Aukunas Will",
    weightValue: "3.03",
    defaultDustAmount: "6060",
    quantityDustAmount: "7272"
  },
  {
    name: "\uD478\uD15C\uBCF4\uC758 \uCD08\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/95a2d195fadd866fa4af2b62077005f4f2bd3580a951f6efd30d6ffd2b80bd61",
    id: "Putembos Meadow",
    weightValue: "2.77",
    defaultDustAmount: "5540",
    quantityDustAmount: "6648"
  },
  {
    name: "\uD6C4\uD68C\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e2249c8b525589fe919eac9e1d80e01242c03f8fb65451a14c6d23f2e3f3f0b0",
    id: "Circle of Regret",
    weightValue: "2.77",
    defaultDustAmount: "5540",
    quantityDustAmount: "6648"
  },
  {
    name: "\uC74C\uD749\uD55C \uC2DC\uC120 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fac72c2151ba43de7d20462f1ad0ba3c26dad939c37bf4886e81cd216af1f9e6",
    id: "Replica Leer Cast",
    weightValue: "2.78",
    defaultDustAmount: "5560",
    quantityDustAmount: "6672"
  },
  {
    name: "\uBA54\uAE30\uB178\uB4DC\uC758 \uD65C\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/570237a217b2d110fe05dbef7e13b74fba46be7637398614e4156d2d30f1b93c",
    id: "Meginords Vigour",
    weightValue: "2.73",
    defaultDustAmount: "5460",
    quantityDustAmount: "6552"
  },
  {
    name: "\uB450\uAC1C\uACE8 \uD22C\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f3af2ecead2693fb02779b4803bd3dedf8619e1ee51742889924ae88659437f8",
    id: "Skullhead",
    weightValue: "2.81",
    defaultDustAmount: "5620",
    quantityDustAmount: "6744"
  },
  {
    name: "\uC5D0\uC544\uB80C\uB378\uC758 \uD3EC\uC639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/91884aca0c759e5546a33d32b6645e2ce11b16fb517a163661f1dda157fe512b",
    id: "Earendels Embrace",
    weightValue: "2.73",
    defaultDustAmount: "5460",
    quantityDustAmount: "6552"
  },
  {
    name: "\uC2E0\uC758 \uC2AC\uD514",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/108de0d19f4366a9c8920a20189e8c07e5d1bcd9fe30f199339dcde736a95ec8",
    id: "The Sorrow of the Divine",
    weightValue: "2.7",
    defaultDustAmount: "5400",
    quantityDustAmount: "6480"
  },
  {
    name: "\uC758\uC9C0\uC758 \uCDA9\uB3CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/94d7e6142f2db6c34b2bbb4eb35044375adc8ffe422f009cbf0e6503b7929592",
    id: "Willclash",
    weightValue: "2.73",
    defaultDustAmount: "5460",
    quantityDustAmount: "6552"
  },
  {
    name: "\uCF54\uB784\uB9AC\uD1A0\uC758 \uC11C\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8ccbfa3b4b4086a809ad9b60c9a92d226e9f9d8d744fa578c896c001c0037ee4",
    id: "Coralitos Signature",
    weightValue: "2.7",
    defaultDustAmount: "5400",
    quantityDustAmount: "6480"
  },
  {
    name: "\uC601\uD63C \uD3EC\uD68D\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27da92b318bea434050935fb28e35aafb91ec4099bb0d5477137770e9f7b70b6",
    id: "Soul Catcher",
    weightValue: "2.7",
    defaultDustAmount: "5400",
    quantityDustAmount: "6480"
  },
  {
    name: "\uBCF4\uB77C\uB098\uC758 \uC900\uBE44",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6327a4d11656dab85d10571822f4c882546f241e35a6e3123711dbb9fd2d84bf",
    id: "Voranas Preparation",
    weightValue: "2.7",
    defaultDustAmount: "5400",
    quantityDustAmount: "6480"
  },
  {
    name: "\uB291\uB300 \uAC70\uBBF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0232e068edab35937d603c1b465ced2a8127a8e8578d5f3c95510676f96dbf73",
    id: "Lycosidae",
    weightValue: "2.69",
    defaultDustAmount: "5380",
    quantityDustAmount: "6456"
  },
  {
    name: "\uB118\uCE58\uB294 \uC131\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/068c7b06b35affabdd9801508ddcb125e253841c21d2bd67f8f6184549da0aec",
    id: "The Overflowing Chalice",
    weightValue: "2.7",
    defaultDustAmount: "5400",
    quantityDustAmount: "6480"
  },
  {
    name: "Ylfe Ban",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/969210c4897af9d557ccbd1e36b6f57992051aa7d31c1058bee4ff4d4ec93667",
    id: "Ylfe Ban",
    weightValue: "2.65",
    defaultDustAmount: "5300",
    quantityDustAmount: "6360"
  },
  {
    name: "\uC54C \uB514",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/69f2609f716c25620ea77062144f40792ad50b6ff174a9f7736e5163a1813065",
    id: "Al Dhih",
    weightValue: "2.62",
    defaultDustAmount: "5240",
    quantityDustAmount: "6288"
  },
  {
    name: "\uB0A8\uC791",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6f8dce98bde3de28e63710153e7a9dbdac38d26193455632928907374c457d0d",
    id: "The Baron",
    weightValue: "2.62",
    defaultDustAmount: "5240",
    quantityDustAmount: "6288"
  },
  {
    name: "\uD398\uC5B4\uADF8\uB808\uC774\uBE0C\uC988\uC758 \uC0BC\uAC01\uBAA8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6e16b2c27b93af1d8775dc5c235646e0049d314b99be53223e29e935126e697d",
    id: "Fairgraves Tricorne",
    weightValue: "2.61",
    defaultDustAmount: "5220",
    quantityDustAmount: "6264"
  },
  {
    name: "\uBD81\uBC29 \uC8FC\uBBFC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dcbba269c347db23409506f7e125ac440439940bec88317cd5865ce943464ab9",
    id: "Hyperboreus",
    weightValue: "2.61",
    defaultDustAmount: "5220",
    quantityDustAmount: "6264"
  },
  {
    name: "\uC0DD\uC874\uC790\uC758 \uC8C4\uCC45\uAC10",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9ea2bc74aa194cb0e991c8db32389b0b5e59ef5f1cf0b226c6d6b89b47d914c5",
    id: "Survivors Guilt",
    weightValue: "2.61",
    defaultDustAmount: "5220",
    quantityDustAmount: "6264"
  },
  {
    name: "\uC218\uD655\uC790\uC758 \uCD94\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/20c800961457e0fc5577454f9166c3330d72ae372b8e27c209fcbad94be66125",
    id: "Reapers Pursuit",
    weightValue: "2.58",
    defaultDustAmount: "5160",
    quantityDustAmount: "6192"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uAD18\uC885",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/28e0294abe94809a4d27cdfbf2e0c5df210b36ec31092019e023afa9fb545918",
    id: "Deidbellow",
    weightValue: "2.58",
    defaultDustAmount: "5160",
    quantityDustAmount: "6192"
  },
  {
    name: "\uBC14\uB78C\uC758 \uBE44\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fdc301f070879dc3a4bdecc14bb3f73a6bb681dd7a452d586227196638cf4a8e",
    id: "Windshriek",
    weightValue: "2.58",
    defaultDustAmount: "5160",
    quantityDustAmount: "6192"
  },
  {
    name: "\uCE58\uBA85\uC801 \uC1A1\uACF3",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/574738212e0b1b5a21201b7ca7d69ca465b3adc3256417b115dc04ba56f97b2e",
    id: "Drillneck",
    weightValue: "2.54",
    defaultDustAmount: "5080",
    quantityDustAmount: "6096"
  },
  {
    name: "\uC2DC\uAC04\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d20fc81003295961f853a7ccbb0b2d69d1c14de3efe4520008cd04d048f45751",
    id: "Timeclasp",
    weightValue: "2.54",
    defaultDustAmount: "5080",
    quantityDustAmount: "6096"
  },
  {
    name: "\uC2E0\uB150\uC758 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/288782585c2d867f9e53db090c0f977daa9267e3d13d594dbb4e7de4b135009e",
    id: "Faithguard",
    weightValue: "2.54",
    defaultDustAmount: "5080",
    quantityDustAmount: "6096"
  },
  {
    name: "\uACE0\uD1B5\uC2A4\uB7EC\uC6B4 \uC8FD\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9420d9b49230d969f53c663413f375862e7ab95c8731eca229e4ea2016890e76",
    id: "Mortem Morsu",
    weightValue: "2.65",
    defaultDustAmount: "5300",
    quantityDustAmount: "6360"
  },
  {
    name: "\uD65C\uB825\uC758 \uAC89\uC637",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7775d730cf7c39fd45b03a5fc8a1a024f7d113fdb77b2b481cd96cc5277fa756",
    id: "Briskwrap",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uC0E4\uBE0C\uB860\uC758 \uBCF4\uD3ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/30ce0ccb71031e19ff40d9dc1c51f2d0a49a1dc3fed8209469a2861a99d0b18e",
    id: "Shavronnes Pace",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uADF8\uB77C\uD22C\uC2A4 \uC778\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/806834d02a38012b0d345a14a0548537de91649a92f516af12e2d7838dab20ad",
    id: "Grattus Signet",
    weightValue: "2.54",
    defaultDustAmount: "5080",
    quantityDustAmount: "6096"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC791\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d1c1a16c985dd7702f3667f116a026144df8567abd7345528284951a08c3e8c8",
    id: "Deaths Opus",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uC0E4\uBE0C\uB860\uC758 \uCC45\uB7B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/861a03a02aa3091a0a610cec06ceef6a3eef1cd09252f32411fe9466d548a747",
    id: "Shavronnes Gambit",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uC0BC\uD569\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d834224fc52a4db2cd3d5161b55d64059de253ba3772775d4831f7499b2a9100",
    id: "Triad Grip",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uC138 \uB9C8\uB9AC\uC758 \uC6A9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9412588fde0d26e2c2be04274aebd3473ea1025e44a4236e6fedf1a744676fe4",
    id: "The Three Dragons",
    weightValue: "2.73",
    defaultDustAmount: "5460",
    quantityDustAmount: "6552"
  },
  {
    name: "\uB9CC\uC778\uC758 \uB974 \uD750\uD504",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2874181e7164bd4c3721b7972cb7f4ab75238216eae9f8c02e4e04d72d50cc2b",
    id: "Le Heup of All",
    weightValue: "2.47",
    defaultDustAmount: "4940",
    quantityDustAmount: "5928"
  },
  {
    name: "\uC7A5\uC791",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2b89577db58174eee6cb1bd974f3775ed5d10a1a89032f06ca0b0657a858bce9",
    id: "Pyre",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uC9C0\uD61C\uC758 \uCC38\uB098\uBB34",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2537f4baf0de31517051096c7a0520ced573c11539e9cd8d0336e0d69e352886",
    id: "The Wise Oak",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uC6B0\uC790\uC790\uC758 \uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/19c075203362b57a8f9b9ecd373c034cbdad309ce8b8561da007bdac4fbe6165",
    id: "Uzazas Mountain",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uB450\uB824\uC6C0\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4f215273428f216bfd2e42a8982c260d4302fe3b007ec16622d44519fad2fb26",
    id: "Circle of Fear",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uD0C0\uC0B4\uB9AC\uC624\uC758 \uD45C\uC2DD \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2df265df1ca36e6160c837fb14118d13bd87e08f808dbe7c2b59585669ab4458",
    id: "Replica Tasalios Sign",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uACF5\uD5C8\uC758 \uBD80\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0d803e23c1cd25f21a7c9216bfa74da9965f70a716324b962e3c894a366df538",
    id: "Call of the Void",
    weightValue: "2.46",
    defaultDustAmount: "4920",
    quantityDustAmount: "5904"
  },
  {
    name: "\uBB34\uD615\uC758 \uBD88\uAF43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8adbe9731e45339568ad742e0b5d0a1a3af1b64f2546424946115664faffc435",
    id: "The Formless Flame",
    weightValue: "2.44",
    defaultDustAmount: "4880",
    quantityDustAmount: "5856"
  },
  {
    name: "\uC124\uB9F9\uC758 \uC740\uCD1D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1da257839105f66cde2cf1c46c4b8a50d45b59ef0beaf621dde4865554ee1ee0",
    id: "The Snowblind Grace",
    weightValue: "2.44",
    defaultDustAmount: "4880",
    quantityDustAmount: "5856"
  },
  {
    name: "\uC774\uD0A4\uC544\uD638\uC758 \uC57D\uC18D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/46655cad4e54bf9c3e53512570a0f5f21761c6e77ae09dfd2d42dfa7148d39c2",
    id: "Ikiahos Promise",
    weightValue: "2.43",
    defaultDustAmount: "4860",
    quantityDustAmount: "5832"
  },
  {
    name: "\uB9C8\uD22C\uC544 \uD22C\uD478\uB098",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/abf7a747344f3920e03d2cd57bb0c0fa1c429738a25c45a3db185cd3a28ac718",
    id: "Matua Tupuna",
    weightValue: "2.4",
    defaultDustAmount: "4800",
    quantityDustAmount: "5760"
  },
  {
    name: "\uD611\uC7A1\uAFBC\uC758 \uBBF8\uC18C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4e5f962d9f54e9ee77b8f7e0ebb8578a60a1cf58b101eee174bb4841bcc1551d",
    id: "The Tricksters Smile",
    weightValue: "2.4",
    defaultDustAmount: "4800",
    quantityDustAmount: "5760"
  },
  {
    name: "\uD0C0\uB77D\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d491cfc594aa46ac735a3998daed5e974de04153b3635580dc38cb47ca30dcc",
    id: "Blood of Corruption",
    weightValue: "2.39",
    defaultDustAmount: "4780",
    quantityDustAmount: "5736"
  },
  {
    name: "\uCE74\uB8E8\uC774\uC758 \uC218\uD638 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5ad128dba8c0876bea5b9a21937b7ba3b1a9b23b74e693d78bbb1dc98810cb7a",
    id: "Replica Karui Ward",
    weightValue: "2.39",
    defaultDustAmount: "4780",
    quantityDustAmount: "5736"
  },
  {
    name: "\uC6B8\uB124\uD1A8\uC758 \uC785\uB9DE\uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/853b1a1bec94aa82e2728f35f7a66597d95307d1294c9cc82e04841adc337b9c",
    id: "Uul-Netols Kiss",
    weightValue: "2.37",
    defaultDustAmount: "4740",
    quantityDustAmount: "5688"
  },
  {
    name: "\uD2F0\uD22C\uC2DC\uC6B0\uC2A4\uC758 \uBC29\uD328",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5153ed21f9f8929c69a64b72943e132ba584a1c9a42caa0231202c3c6d093738",
    id: "Titucius Span",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uAC15\uB825\uD55C \uAC00\uC8FD\uCE7C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5a2598373c9be47eb67f0a991772f3dbe0d7a6c2c1f067665925791096eadfba",
    id: "Mightflay",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uC12C\uB729\uD55C \uC9C0\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ce3f8f09732f2fdc2e339fe120c3bca63aa7bd4c5467d095ce0607820244b920",
    id: "Eldritch Knowledge",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uACAC\uACE0\uD55C \uBD80\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/35ed57d6a3c8208d6fa7c63c0c6c384d653828612344a520fb338e8c06adcc07",
    id: "Fortified Legion",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uD2B8\uC704\uC990",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e0aa5f376ccc3e383dc8105589d96b74005118f62b757ff133ee7ce6b28b01c0",
    id: "Twyzel",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uC794\uC794\uD55C \uC218\uBA74",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/476190acfd19f37bc84f35d6440541a1390358cbb79d74d69ab53a4490a853ca",
    id: "Stillwater",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uAC04\uC218\uC758 \uB099\uC778",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c15eda797d0e239fc6e0695f3431ab29e636eccbd26d070910e75b7e801168b8",
    id: "The Wardens Brand",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uBCF4\uBCF5 \uBD80\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e945fef522d4c222803d9639bbce8593f8061dc1eea191412850e05586f45f28",
    id: "Retaliation Charm",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uC6D0\uC18C\uD3EC\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5215c10751f4b7ef3cde0ceb4753b02f2b48021355a1f6af4be675e96f9b3798",
    id: "Elevore",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uBC24\uC758 \uC7A5\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/539c0932b8411ea335c5f3c70ca2ab01d9486132307bba19751e7c62d697db5a",
    id: "Veil of the Night",
    weightValue: "2.33",
    defaultDustAmount: "4660",
    quantityDustAmount: "5592"
  },
  {
    name: "\uAD11\uAE30\uC758 \uCE7C\uB0A0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d5e8e1774b2b086098f16ae761b2506a171e886dc4dc51696cddbe0c4ef8d72d",
    id: "Edge of Madness",
    weightValue: "2.33",
    defaultDustAmount: "4660",
    quantityDustAmount: "5592"
  },
  {
    name: "\uBC24\uC758 \uC7A5\uB9C9 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/037612a088c0692c2a79f2a5ea60825b8fed9a789169247f494e9b3a47add193",
    id: "Replica Veil of the Night",
    weightValue: "2.33",
    defaultDustAmount: "4660",
    quantityDustAmount: "5592"
  },
  {
    name: "\uB9F9\uB82C\uD55C \uAD11\uBD84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/54bc580b17b2f7be737cf40360a524eaac9e1c110deae2b550c609d0595bd1c5",
    id: "Relentless Fury",
    weightValue: "2.29",
    defaultDustAmount: "4580",
    quantityDustAmount: "5496"
  },
  {
    name: "\uACF5\uD3EC\uC5D0 \uB300\uD55C \uAC08\uC99D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cee30817b6b68741557f89c3e5743425eab638a96b743a9d2962bd8513b4bf90",
    id: "Thirst for Horrors",
    weightValue: "2.29",
    defaultDustAmount: "4580",
    quantityDustAmount: "5496"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD30C\uBA78 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8f0e383be40489496db3b421c9cef18cc6867f8b4711773c889899719dcd150a",
    id: "Replica Doedres Damning",
    weightValue: "2.25",
    defaultDustAmount: "4500",
    quantityDustAmount: "5400"
  },
  {
    name: "\uC608\uACAC\uB41C \uCD5C\uD6C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/00abd07eff4a118670fd9178ddb53fef4c28c096705aa06f324b7b984bb2b885",
    id: "Fated End",
    weightValue: "2.25",
    defaultDustAmount: "4500",
    quantityDustAmount: "5400"
  },
  {
    name: "\uC5D0\uC26C\uC758 \uAC70\uC6B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8c3eb38a93e0cee149599c8b166713c31062ec3ec964ac231ac3021fd0eb6886",
    id: "Eshs Mirror",
    weightValue: "2.24",
    defaultDustAmount: "4480",
    quantityDustAmount: "5376"
  },
  {
    name: "\uD30C\uAD34\uC758 \uACBD\uC57C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/71854614a72ab2ade61900f4dd6ccd6e165f2bd7908ff535f32b29fb086b7114",
    id: "Wake of Destruction",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uC74C\uD749\uD55C \uC2DC\uC120",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ab6cba8f8fab13426570aed257313c7521b6aabac0d312948d750543de3bd3f",
    id: "Leer Cast",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uB77C\uD0A4\uC288\uC758 \uAC80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4d52dcb9f1bd3cf9642b749b6c5ddbea592ced7a10bc44b341446a3021f0a419",
    id: "Lakishus Blade",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ccc7cf3cbaf8c7ff56c57e39f51b29eb30cacaca51352171a3a29387fd29ec7d",
    id: "The Stormheart",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uC18C\uB780",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad19147f222495839ddc507815667fb17f6c31cfebfe2b8ae16b08353428caf5",
    id: "Death Rattle",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uB3C5\uC0AC\uC758 \uBE44\uB298",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0366b170451220c01417d0c16c681c9bac65f48d9f629a46aa723162e8eb10bf",
    id: "Vipers Scales",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uB098\uB9C8\uD6C4\uC758 \uD45C\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3b2cb2b9647284d8c73ed769375ed44bda54fdc83eb927692e4deac0291d275a",
    id: "Ngamahus Sign",
    weightValue: "2.86",
    defaultDustAmount: "5720",
    quantityDustAmount: "6864"
  },
  {
    name: "\uCE58\uD22C\uC2A4\uC758 \uBC14\uB298",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/32dfaef0cc4b876d498a038e348ba6182569a471e457c73e0cb34dd07b69ab7b",
    id: "Chitus Needle",
    weightValue: "2.36",
    defaultDustAmount: "4720",
    quantityDustAmount: "5664"
  },
  {
    name: "\uBA54\uAE30\uB178\uB4DC\uC758 \uD5C8\uB9AC\uB760",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a5876ffbeeb28fc35cb547428ee2e1a0cf79f3776a0a524ab28f76008c3b8676",
    id: "Meginords Girdle",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uBCA0\uB809\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1c90bdeb321919521e709ec5b6911485a1ac8332efcc97d0d6a44d8f2be29346",
    id: "Bereks Grip",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uBCA0\uB809\uC758 \uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa34c04bfec1c33995cc51f129a6a108222e32fdbf19b32ad72c19e42fa7af1e",
    id: "Bereks Pass",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uAE30\uB9CC\uC790\uC758 \uD5C8\uB9AC\uB760",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4f6561d2d438c73d4b6c34822084c03a3c6d3c590bbb13c60b7131fe67ea4b38",
    id: "Belt of the Deceiver",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uD0A4\uCE74\uC790\uB8E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5da0433bfb4ebc692d2edc9841c4b42d16162e8d95d92f980ebad57ded1357a0",
    id: "Kikazaru",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uD0C0\uC0B4\uB9AC\uC624\uC758 \uD45C\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5ff81340054af6182fa4a521696ebbca03e9ba3e81d4cada40ed2a5957ff7ff1",
    id: "Tasalios Sign",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uD63C\uBC31\uC758 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2e3b374baa84004b8fa862625ade2d1aa2bfceed86dc0634f13b609a378a9ccc",
    id: "Spirit Guards",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uC794\uD639\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/70039792d194bb52881e243d8f4b4e2b0de6da9326a8c17b6a995e5bad8aebc9",
    id: "Maligaros Cruelty",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC870\uC808\uB41C \uC721\uCCB4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a2103220c36f1ed34d38bc1072da450cd050b7597d4e487d6b93bf0fe553582e",
    id: "Tempered Flesh",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC9D1\uC911 \uC804\uD22C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7c567cef40d1b4512d39df08f0d547f47d1f034049b7a250201308eadcf0c2f6",
    id: "Combat Focus",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC870\uC808\uB41C \uC815\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e8cf447ae05b49bdf0cbf79c94a325392d577c033b667acf0a799c28ff7a69a",
    id: "Tempered Spirit",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC870\uC808\uB41C \uB9C8\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0d346448873d001889f4ea68b1f78352b8aa53247898c82c7f27d3a458055e91",
    id: "Tempered Mind",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uCEE4\uD2BC\uCF5C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/99b1aaebe3b4c1e59f9c4b24c7d9768f97e17af05e3e72922579b1ba99040e20",
    id: "Curtain Call",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uD3A0\uBCF4\uADF8 \uC1A1\uACF3\uB2C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3fca819f19b7e7ec65ed577b5498b731fc52e6e6e5a702229f9b78ebfb9eeca7",
    id: "The Felbog Fang",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uB05D\uC5C6\uB294 \uBD88\uD589",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2d10cf44d5df463fd629890e072f1ff6c5aee26e69266abbe23bf23ed8f61e3d",
    id: "Endless Misery",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC2DD\uC778\uC885",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b412750723d23dae97c96fb64f9bb987e9a99ffbd13b7a5a7ba66d1cdf72ab4d",
    id: "Flesh-Eater",
    weightValue: "2.5",
    defaultDustAmount: "5000",
    quantityDustAmount: "6000"
  },
  {
    name: "\uC800\uC810 \uBAA8\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/024ecf207cd28aff3b371dbab8568ed48b95e5dcf65ae05d3741c1d845155c7b",
    id: "Nadir Mode",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uBA85\uC608\uB85C\uC6B4 \uB3D9\uB9F9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cfc64745cfeb23d776426801132da027248f74efff117001649f388070840e9c",
    id: "Honoured Alliance",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uD0DC\uC591\uC744 \uBCF4\uB294 \uCDA4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a03746484996230e208f64e24228b159aec1eee59b3c548c9652ad12cb2de766",
    id: "Sundance",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uBC40\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/df06da43a5fa695bd78d0dcad2275820e154fb48f7e09b22043102f0f91830c2",
    id: "Slitherpinch",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC870\uD504\uB9AC\uC758 \uC138\uB840",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8d1832f7c35aea49f8d8d864749d1297ff9c0c6ef5ad2163a63c715db48b7842",
    id: "Geofris Baptism",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC5EC\uC655\uC758 \uBC95\uB839",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/559d15d10bdadf9f6b659d234135011b5a23c185897d16ef3601e512902b2e42",
    id: "Queens Decree",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC54C\uCF10 \uC5D0\uC774\uB77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c20a88a173d2577dba5ab1f28429bbe900648d6dbf7dd477bc6f81af93fec155",
    id: "Alkem Eira",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uBE5B\uB098\uB294 \uC6D0\uBC18",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/148475e5d6dda030b2ed11a824232636badb3d5a350c76d3369500aee115f7b8",
    id: "Glitterdisc",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uD0A4\uC544\uB77C\uC758 \uACB0\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb2365573cdf9bded0d6ab513be800b67287ee8d74d52b5459176813500640ea",
    id: "Kiaras Determination",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC5EC\uC655\uC758 \uD0C8\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5177544ecbdcbd66c59880a98d41f65c27842dd996f78a4c6ddd5d4790e8ea49",
    id: "Queens Escape",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC8FD\uC74C\uC758 \uAE43\uC758 \uBD84\uAD11\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/49941eae6ee59749e598931f716fe6c1268565181d82770eb1f134679ceb25a4",
    id: "Doomfletchs Prism",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uD0DC\uC591\uC758 \uC6D0\uD55C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a14387b2c602316e79f592f9eb5aacae63f4423f21432d1855bd4b0a6edbf83",
    id: "Sunspite",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC870\uD504\uB9AC\uC758 \uD5CC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b710e54f86ef6f403e4ea59fa0fb74e101fcde245e447dfa1c60f0bf59972d4b",
    id: "Geofris Devotion",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uD0C0\uBDF8\uB77C \uB77C\uC0AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8d9a2557eefe72d457df1edd609dac29919ad2e0f6ad01f29c7f1d1f6cd6825f",
    id: "Tabula Rasa",
    weightValue: "2.12",
    defaultDustAmount: "4240",
    quantityDustAmount: "5088"
  },
  {
    name: "\uCC9C \uAC1C\uC758 \uB9AC\uBCF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/84d3b3389b4ac1070393195ef18a767acf91b63bb8bd3529145cb66bc03a855b",
    id: "Thousand Ribbons",
    weightValue: "2.12",
    defaultDustAmount: "4240",
    quantityDustAmount: "5088"
  },
  {
    name: "\uBE44\uC790\uB8E8\uC758 \uC5B4\uB9AC\uC11D\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e01d3be70833ce989abb3bd4f0c84172a2598792d4b0e7cf69f51315b785d655",
    id: "Vizarus Folly",
    weightValue: "2.09",
    defaultDustAmount: "4180",
    quantityDustAmount: "5016"
  },
  {
    name: "\uC774\uC6CC\uC758 \uC2E0\uAE30\uB8E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/462a0ee904b65b8aab69e95baa96c05a5e5d0fb79a6fa5aa51bd12b71769696c",
    id: "Ewars Mirage",
    weightValue: "2.09",
    defaultDustAmount: "4180",
    quantityDustAmount: "5016"
  },
  {
    name: "\uBD89\uC740 \uACC4\uC57D\uC758 \uC9D5\uD45C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/70303d5c8134557d7569adf181e74f44ccbbc9086b9c75b54ba4dca46bb573ad",
    id: "Mark of the Red Covenant",
    weightValue: "2.09",
    defaultDustAmount: "4180",
    quantityDustAmount: "5016"
  },
  {
    name: "\uC557\uC9C0\uB9AC\uC758 \uC57D\uC18D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/433d89ccd1682e7899afcbb9bd98d33969f3d3f5c6f14613f55ff159f8528754",
    id: "Atziris Promise",
    weightValue: "2.07",
    defaultDustAmount: "4140",
    quantityDustAmount: "4968"
  },
  {
    name: "\uAC81\uC7C1\uC774\uC758 \uC720\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ac12784c7f1d2eddce4953391572ba2ebcd8ab07eabbad48e85766a7372ed1df",
    id: "Cowards Legacy",
    weightValue: "2.06",
    defaultDustAmount: "4120",
    quantityDustAmount: "4944"
  },
  {
    name: "\uC720\uC8C4\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3da075db5ec3702ca3ffa33349dea1339a4d8d7ff81bd9fab68c9513be22523f",
    id: "Circle of Guilt",
    weightValue: "2.06",
    defaultDustAmount: "4120",
    quantityDustAmount: "4944"
  },
  {
    name: "\uD574\uBC29\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d6eef2c3fd749a1d75adb06efcb6d7cce6bda88b216a90ec572b0c86887eb0f1",
    id: "Chains of Emancipation",
    weightValue: "2.06",
    defaultDustAmount: "4120",
    quantityDustAmount: "4944"
  },
  {
    name: "\uB05D\uC5C6\uB294 \uCD94\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/31bc629a1ce74d5036232a2b2d41ec0b3ec10bfa12d245c21d5f8babd53d5922",
    id: "The Infinite Pursuit",
    weightValue: "2.04",
    defaultDustAmount: "4080",
    quantityDustAmount: "4896"
  },
  {
    name: "\uC0AC\uACE0\uC640 \uC6C0\uC9C1\uC784\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d531a713354f82a478b38ffe3cc5d0b1fe654dfb28ca40d917143ff10fc40b99",
    id: "Hand of Thought and Motion",
    weightValue: "2.04",
    defaultDustAmount: "4080",
    quantityDustAmount: "4896"
  },
  {
    name: "\uD559\uC0B4 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1f82e6b25ec283b5794a6e8b47ca4b379336cb3ce2062c650a286bf5780e9940",
    id: "Carnage Heart",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uC5EC\uC6B0 \uADF8\uB9BC\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3ca2fa652e516fe4d6f29e1794c6b362ab76d78459f77a315f492b3a798df5e7",
    id: "Foxshade",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uBE5B\uC758 \uB9E4\uB4ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8e32202ec99474bf630c6fe3c1397f56e436e6513586773a5e7701dcb52cfccc",
    id: "Prismweave",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uB9C8\uB098 \uC2A4\uD3F0\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c4c7305456517d5ec4f53e3a015ea2bc1edfc0e065c238b3130099b3b9fcece",
    id: "Mana Sponge",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uBC30\uC6C0\uC758 \uB3CC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b37f59d6ad6a5eaf59408485967585292cee38fd17a457e6185a88ad5c9731a6",
    id: "The Learning Stone",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uD669\uD63C \uB0A0\uAC1C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/64d8eb7218521a2ff4dfc4272854d80ebb7c43f5ae9266a7154e3c7c7a9ce239",
    id: "Duskwing",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uC0E4\uCE74\uB9AC\uC758 \uBAA8\uB798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1db8efcb795d510ebfdcd5c851137d616e78396a194e220fea1e2570d9e54f21",
    id: "Sands of Shakari",
    weightValue: "2.16",
    defaultDustAmount: "4320",
    quantityDustAmount: "5184"
  },
  {
    name: "\uC2DC\uAC04 \uC65C\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/caaa2dfd1f373e51b449631a84122891717b85f33a211ff7b30baec2ea4daab3",
    id: "Timetwist",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uD0DC\uD48D\uC758 \uC7A5\uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/48674d541eb3ee27ebbee6ca78f4129158a7d66d9f134fdb46a7d7e38cff5980",
    id: "The Stormwall",
    weightValue: "2.22",
    defaultDustAmount: "4440",
    quantityDustAmount: "5328"
  },
  {
    name: "\uC194\uB77C\uB9AC\uC2A4 \uD749\uAC11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b02cad0450e98135bebcf0288c9b0262394c262249bcb5a92dea29f6ee1367e4",
    id: "Solaris Lorica",
    weightValue: "2.01",
    defaultDustAmount: "4020",
    quantityDustAmount: "4824"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uC704\uC7A5\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab52a7659d8c222b9d71daf18455b298800cc771650ec780c29d709442b8db52",
    id: "Malachais Simula",
    weightValue: "2.01",
    defaultDustAmount: "4020",
    quantityDustAmount: "4824"
  },
  {
    name: "\uD2B8\uB864\uB098\uBB34 \uAF2D\uB300\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e9c18e14a26a8786d66be584e139f5246f16ff37b16b580a9bf6ff20994f39e",
    id: "Trolltimber Spire",
    weightValue: "2.01",
    defaultDustAmount: "4020",
    quantityDustAmount: "4824"
  },
  {
    name: "\uAC10\uC2DC\uC790\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/48b792a795738d80b653fdc3737f81ddfeefe70f174c3578cd289d20e9c3ffd9",
    id: "Watchers Eye",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uB9E8\uC8FC\uBA39",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5f4b65efbf27816a8c99fe5012a866d20b7a2a8543bfe9c4730bf2d070c2af93",
    id: "One With Nothing",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uD0A4\uD0C0\uBC14\uC758 \uAC00\uB974\uCE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b8c4b9a223dc6464db4be364203209fd3959e73383665e463b32a3df83195165",
    id: "Kitavas Teachings",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uCDE8\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dd3f7a66ffbbb943ab205be13feb53851462ed182d72246862aaa3568a07d6af",
    id: "The Interrogation",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uD658\uB780\uC758 \uC2DC\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/076055628b122a02c0614e04b7e659652eb66108ae8e0f84ed968a185c63143d",
    id: "Calamitous Visions",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uD0C0\uACE0\uB09C \uCE5C\uD654\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4e690484647f96a706bd656a41ec30f67e4675147e0aa00bd3968f2f742dec4d",
    id: "Natural Affinity",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uD3EC\uC704 \uC791\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c7dfc4cc49454b18341f3fe5a4ca89368b45c4880c2c75a5d3dfa8b7a78279a2",
    id: "The Siege",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uCD5C\uC804\uBC29",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4fad9a3b88c02e4ec73364351fb4816e9a06052af647b9689fc439230a5245d0",
    id: "The Front Line",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uACFC\uB300\uB9DD\uC0C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f91fae95642dba5992a556a3a020540f78848ca018c655dbd79527300ae06aaf",
    id: "Megalomaniac",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uACFC\uBD80\uC6B0\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/88e38a48975f4fb760c5762a3224b4c918ee4d3739c362c6fe502e387caa297f",
    id: "Widowhail",
    weightValue: "2",
    defaultDustAmount: "4000",
    quantityDustAmount: "4800"
  },
  {
    name: "\uD0DC\uD48D \uAC10\uC625",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e4338d16cebe45b56f3a19a1b901bdf2350f30e15c97159ac3a95a6572b75f9f",
    id: "Storm Prison",
    weightValue: "1.97",
    defaultDustAmount: "3940",
    quantityDustAmount: "4728"
  },
  {
    name: "\uC99D\uD3ED \uB9C9\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/73e4c28dc19c0d990c64f49f64b5ad83cc2aa9f80794f89f979afd4fba38bdae",
    id: "Amplification Rod",
    weightValue: "1.97",
    defaultDustAmount: "3940",
    quantityDustAmount: "4728"
  },
  {
    name: "\uC774\uAD50\uB3C4\uC758 \uC751\uACE0\uC81C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0b9cd456b8287e9b891a4b3694f34d764d5fc35d2db902bc825caed08f207226",
    id: "Pagan Geis",
    weightValue: "1.97",
    defaultDustAmount: "3940",
    quantityDustAmount: "4728"
  },
  {
    name: "\uD398\uC774\uC2A4\uBE0C\uB808\uC774\uCEE4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a814103d86a50cd3fa38ca16d3f03748c0f30a88295cc0f127729ffa036f3347",
    id: "Facebreaker",
    weightValue: "1.95",
    defaultDustAmount: "3900",
    quantityDustAmount: "4680"
  },
  {
    name: "\uBAA8\uCF54\uC6B0\uC758 \uD3EC\uC639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5e412d46e62729946a22c7834e3a924899c79b119cda42e054f7bcec90da2924",
    id: "Mokous Embrace",
    weightValue: "1.95",
    defaultDustAmount: "3900",
    quantityDustAmount: "4680"
  },
  {
    name: "\uC544\uCF08\uB9AC\uC758 \uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f5b223d9f00f283dc6e7b87c7acbcfe6a098dbb7ef8de5773b4d97adb4a29185",
    id: "Ahkelis Mountain",
    weightValue: "1.95",
    defaultDustAmount: "3900",
    quantityDustAmount: "4680"
  },
  {
    name: "\uC1A1\uACE8\uB9E4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d3cbaf3bda083306f40a8507580e763c9ec307d267711a0e9042f23a98bb4b1b",
    id: "The Peregrine",
    weightValue: "1.92",
    defaultDustAmount: "3840",
    quantityDustAmount: "4608"
  },
  {
    name: "\uD0DC\uD48D \uB3CC\uACA9\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a348b5b4bece03783ab660c9664a5ae8c8c6531e860f1d74f8c19e0651e6afcb",
    id: "Stormcharger",
    weightValue: "1.92",
    defaultDustAmount: "3840",
    quantityDustAmount: "4608"
  },
  {
    name: "\uAC70\uB300\uD55C \uD30C\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f7662d9f11603ff7a4ce5cd7d095a5022f45bea25cdbe03ba9bdb4b270beb13b",
    id: "Giantsbane",
    weightValue: "1.92",
    defaultDustAmount: "3840",
    quantityDustAmount: "4608"
  },
  {
    name: "\uC640\uCE74\uD22C\uD22C\uD0A4 \uC624 \uB9C8\uD22C\uC544",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/58e4f2625e21b78ceb9866fb4ebdd0db4fa78100796810d6ca10317b0d7fd617",
    id: "Whakatutuki o Matua",
    weightValue: "1.92",
    defaultDustAmount: "3840",
    quantityDustAmount: "4608"
  },
  {
    name: "\uC721\uCCB4\uC640 \uC601\uD63C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c3ec5c6c43473c430e504ea0ae7de38d9f5ff554c32264b50e57c0c5680521b7",
    id: "Flesh and Spirit",
    weightValue: "1.89",
    defaultDustAmount: "3780",
    quantityDustAmount: "4536"
  },
  {
    name: "\uD53C\uC758 \uC624\uB77D \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/35f20b5aa60033d832401673232b39114d3fddb562fe0e25fe5014c218ec9a59",
    id: "Replica Bloodplay",
    weightValue: "1.89",
    defaultDustAmount: "3780",
    quantityDustAmount: "4536"
  },
  {
    name: "\uC6B8\uB7EC\uC758 \uBF08",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/58520c9e662720e19e65b9b5e6dddc48d449ca0cea7b3b5d1db11f15ff682479",
    id: "Bones of Ullr",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uC0AC\uC2B4 \uCD94\uC801\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/effb2c0d41b3e4c29bada2d4e39daa4d83e868c07aff7cc6237a65833a730866",
    id: "Deerstalker",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uC815\uC810 \uBAA8\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/51039c3f46198a76e29e1a7438668b606dcb892984d0c37a0c7e4b146f7ab3ac",
    id: "Apex Mode",
    weightValue: "2.19",
    defaultDustAmount: "4380",
    quantityDustAmount: "5256"
  },
  {
    name: "\uC5EC\uC6B0\uC758 \uD589\uC6B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/485a6821c8044ffb34d0a98cd08ddba0682406318a7d0271676ad76878e5da74",
    id: "Foxs Fortune",
    weightValue: "2.03",
    defaultDustAmount: "4060",
    quantityDustAmount: "4872"
  },
  {
    name: "\uD53C\uB378\uB9AC\uD0C0\uC2A4\uC758 \uAC00\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/577594afa3a8e12df8715c7db0015a55c4d6429bb9c5d0ac62d3aa4a7d74f8eb",
    id: "Fidelitas Spike",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uAD00\uC2B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/56d5226059ad903e2a97a4d7772e17d8bcff37b2fc90a84b4318e194dcaecdc4",
    id: "Praxis",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uBAA8\uB4DC\uD558\uC6B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/954b2adc31d635bfeebc8ce70161e55fcc9554fa1c0592f644894d778127db2d",
    id: "Mordhau",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uD310\uCF00\uCC30\uB9AC\uC2A4\uD2C0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ef10d42416ee7dbd7a7931905744729a6b0b691f01f7f7372da632f6ad4afc4d",
    id: "Panquetzaliztli",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uBD89\uC740 \uAFC8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/56316dcfa2c5c3209ca0f6978e4fd330db697de245ff97534bff3143ceebdd61",
    id: "The Red Dream",
    weightValue: "1.84",
    defaultDustAmount: "3680",
    quantityDustAmount: "4416"
  },
  {
    name: "\uB179\uC0C9 \uAFC8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3b32708a5021095dc60fb4975667c7d144ea2f5214e9a194785e8ba492b9ee98",
    id: "The Green Dream",
    weightValue: "1.84",
    defaultDustAmount: "3680",
    quantityDustAmount: "4416"
  },
  {
    name: "\uD30C\uB780 \uAFC8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ebc39e8c4b4a08301d41ca749b0ee0e323ed901ab34b9344685909391025b253",
    id: "The Blue Dream",
    weightValue: "1.84",
    defaultDustAmount: "3680",
    quantityDustAmount: "4416"
  },
  {
    name: "\uBD81\uCABD\uC758 \uC591\uCE58\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2495ffe4d35ebc5bb152d0d7127fb82981610981ce656eb9c87f859da3129b68",
    id: "Boreal Shepherd",
    weightValue: "1.81",
    defaultDustAmount: "3620",
    quantityDustAmount: "4344"
  },
  {
    name: "\uB2E4\uB808\uC18C\uC758 \uACBD\uB840",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c50d393a4a056e8038e69a37b743e359c319eec765e1af1ea263635a03d09f39",
    id: "Daressos Salute",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBE45\uD0C0\uB9AC\uC624\uC758 \uC608\uB9AC\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/839b5eb9e30d5dd581674521c0c9cff02c6ef9db005fd2bdabf640ea6c003ba2",
    id: "Victarios Acuity",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD018\uCD10\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dfa2b8580fd07d0660407422af85d01bf3996b2b5095453f565bf317673aa090",
    id: "Quecholli",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uBD80\uC11C\uC9C4 \uC7BF\uB354\uBBF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/430374333e75c81a81e847c9468414b61d489b611f1f65b4914b6b3fccdc346e",
    id: "Ashrend",
    weightValue: "2.01",
    defaultDustAmount: "4020",
    quantityDustAmount: "4824"
  },
  {
    name: "\uD398\uB780\uB450\uC2A4 \uBB38\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/397cdf546e573822bce09a1d350c74cb9cfb295184b0dc0891989c1f77ab3d0c",
    id: "Perandus Blazon",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC57D\uD574\uC9C4 \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/191d5f9ba7f4293963eb53132f91c448335e934ce61dea28509c350d9c632462",
    id: "Bated Breath",
    weightValue: "1.86",
    defaultDustAmount: "3720",
    quantityDustAmount: "4464"
  },
  {
    name: "\uC250\uC774\uD37C\uC758 \uC528\uC557",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c54cc5cb96b4e284eccf87bc564c4697b647819fe93db46c26c2cb694b12dbe",
    id: "Shapers Seed",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uADFC\uC721",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/362403fc0d2c0d3fba1cd2a74ed94773171957041f2d68af079992d47921c03f",
    id: "Brawn",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC9C8\uC2DD\uC758 \uC9C4\uB178",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/41e8e644eb87ab312e8a01d83f29eccd60602cb9f459c68c2d6fc61235d2edb3",
    id: "Asphyxias Wrath",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC0DD\uC874 \uBE44\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b32121d5bee721691e05e9b66ecb6bbe7c0ba4af399d7ad6d669cae6cf5fbcc5",
    id: "Survival Secrets",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC0DD\uC874 \uAE30\uC220",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ec508461bd0e7fe67919ccd0c7e76f55582cbd6013ba8baa33c6064e18bc386d",
    id: "Survival Skills",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC0DD\uC874 \uBCF8\uB2A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/883a8ad7d7a78df4267d757220903197a076fc4253e062104342ba1a0395d7e9",
    id: "Survival Instincts",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBB34\uB3C4\uAC00\uC758 \uAE30\uAD50",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7bd1ca4c534cb237829252643960ba952df21649a2528c53cd0b2aa75fce1f67",
    id: "Martial Artistry",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC57C\uB9CC\uC801 \uC2B5\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/156b671769df91ba4334cd363e77f729bebd1423e5e58eac14ede69f5bfc50a4",
    id: "Cannibalistic Habits",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCCA8\uD0D1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/37942182a04a7463f72aa5f1e8baf06c8c3ae364488d59c6668aa96c66eb78fd",
    id: "Spire of Stone",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC720\uB839",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/852b8d6fd364b0b730da30887a535deba4b276d35112d8f41161199425d36f51",
    id: "Apparitions",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD56B\uD5E4\uB4DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c0c2e7b1cc6e14384cd9da201592aa5625832f21c730c22ca9a96899038652e",
    id: "Hotheaded",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC6C5\uD790\uC758 \uD22C\uBC15\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b0345dde3065b879a2c1f0eda9c16a5a7fcd5846dcd42021a5e656d2eaed38d2",
    id: "Ungils Gauche",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC8C4\uC758 \uBB34\uAC8C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6d60089d3dfa22e7c1f8d9ba5858a8746274ae206a7372d156aca5b6fd3d6809",
    id: "Weight of Sin",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC784\uC2DC \uC774\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1b0f83d97c08464c200154f6135d84ff8b311670487aad53a2a5452242159e2c",
    id: "The Naming Temporary",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAC00\uB0D8\uD508 \uAF43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/feff576da05cbca802c270e73fb9a0d40abebe05499227f2e9440a400d9588f0",
    id: "Fragile Bloom",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB9D1\uC740 \uC815\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cc82c0d4205140dc517a438fd14b0bf8ae7fdca365f66f431d12d5e916c8c963",
    id: "Clear Mind",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD2B9\uBCC4\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/57cd9f35ce0313f65a21aae98ac1708ef5438264727987d587dc0c508448cccc",
    id: "Specialised",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD88\uD589\uC758 \uC218\uC804\uB178",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/86de3611091f08f32caedcfc230c66db6931e1c4e3fde51e8a5b62713ae2a662",
    id: "Miser of Misery",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC14\uC54C\uC758 \uD310\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/916cc9060c02e333f4b3336f27a33a23730a7b3cbc16b983067fbe7fb0645132",
    id: "Vaal Sentencing",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD76C\uC0DD\uC758 \uC218\uD655",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e82463fd2dc351582c1075f93781c9a25a8d6010c2b20d7be4bfcdb77b3416b2",
    id: "Sacrificial Harvest",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD53C\uC758 \uD76C\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f7d02dc913563f72e4bf859b66dbb6dbf4bc09d4b31212348b55d920d84a4beb",
    id: "Blood Sacrifice",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD761\uD608\uADC0\uC758 \uC644\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d24588aa400de934fe4e6c8a977bd99afac10313944389fb5342f1235a7d4441",
    id: "Vampires Might",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC00\uB835\uAFBC\uC758 \uC870\uC900",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f2756b19151d4d91de6da034244acb34fa81bbb266e9f7a79c1adaa4279af04f",
    id: "Poachers Aim",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC804\uC7C1\uAD70\uC8FC\uC758 \uC5ED\uB7C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b2e0343deb16060f64dfdd54a11dae68a97a7b5be2870fe64945bfeff282d2f",
    id: "Warlords Reach",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uBCF5\uC790\uC758 \uD6A8\uC728",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5dd84925ff3ea5b6ab77b840c0ba432c5942f83b043b25419391183cbdf00d41",
    id: "Conquerors Efficiency",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uBCF5\uC790\uC758 \uB2A5\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b5e963fbb7241a8c2516e807b878435ab0211b9577cc45a8101a9fce88c740df",
    id: "Conquerors Potency",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uBCF5\uC790\uC758 \uC218\uBA85",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b6c174345ba9ec6fd5e1ef79c3b594f690a9e1a6cc0c4be8e59bf79aab3b379d",
    id: "Conquerors Longevity",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uACE0\uB300 \uACBD\uB85C\uC11D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c6e624e359eb6e59739abf5793f9f41858392e79daa46fe83d333eaeec521c3a",
    id: "Ancient Waystones",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBCC0\uC774\uD55C \uC885\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/843b5ff0bc36baf4ca482826f2fd18563cd60fd44b6998a06802cfdbbf16d92c",
    id: "Mutated Growth",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAD76\uC8FC\uB9B0 \uC2EC\uC5F0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ba41ea71518863d9dc886f2b3a545f824bfe764b7246d55825e61f5829e7faef",
    id: "Hungry Abyss",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC81C\uB974\uD53C\uC758 \uC80A\uC74C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3a6f47694695fb17dbf6a046bc34401d341aa61db91d92054552be7beb47842e",
    id: "Zerphis Youth",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD0C0\uB77D\uD55C \uC5D0\uB108\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f06ebf88d9005598fcc55486b20673b69952655d303780752f14f53754a56f02",
    id: "Corrupted Energy",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD80\uC2E4\uD55C \uBC29\uC5B4\uB9C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/603070ba846c8a18763775b60fc882ec48c8f5e21bb19ce36f1036d60dbe4ab1",
    id: "Brittle Barrier",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAD8C\uD22C\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a83f43a6919e73dce956fe2608718a5c28e9b61d198b9bc8ed09d7d0c4c9dc3",
    id: "Pugilist",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB0C9\uAE30\uC758 \uAC15\uCCA0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f1c3606c870d024d267eae9297b6a6659c2a5e5a9e667015eee1db7336a9e63a",
    id: "Cold Steel",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC721\uCCB4\uC5D0 \uB300\uD55C \uC9C0\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d73e51d483b3ab116f2d42d1021359aca452333fa1cbd6108a106defed7e3ab4",
    id: "Anatomical Knowledge",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD88\uC758 \uCCB4\uC9C8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f4f56fd0d7115f6d83d5e66860e17690469cf1642e83ffe7a9e0b23a63b2b8c9",
    id: "Fireborn",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB77C\uBE44\uC559\uAC00\uC758 \uC9C0\uD61C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2b8d1591ae7dc4e644ee14d9771f5445d730ec7bb5ac224176d6233c2dddcbe6",
    id: "Laviangas Wisdom",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC2EC\uD574\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6bade620ec2e698576d2a46db7b8adc011eea3fab0455f45e8fd743a7f95c8dc",
    id: "The Deep Ones Hide",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCD5C\uCD08 \uC120\uAD6C\uC790\uC758 \uCC99\uCD94",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dfb388188584a45155ac21866cde90cc26cb9699460531a34d60289973f461a6",
    id: "Spine of the First Claimant",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC774\uC790\uB85C\uC758 \uD63C\uB780",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad747a705a4db7afa227e55d59ef72352f8d6c3dfe95ef8616551a851ca6a383",
    id: "Izaros Turmoil",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCCA0\uC57C \uAE30\uB3C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c176516016b06501347ae61c807cd1b119ec5cf4345bcdaa6079801820c82411",
    id: "The Vigil",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBAB0\uB824\uC624\uB294 \uBD88\uAF43",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/da3076afbd80d6cce26b1febc3cac2b0376dcbc4bb4240836ef479046001ac26",
    id: "Rolling Flames",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uACA8\uC6B8\uC758 \uD558\uC0AC\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de841eb3270212302a9979b71d6b4687b079e1c8f47ce0b97a71b1321f4b1187",
    id: "Winters Bounty",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB9F9\uB82C\uD55C \uC751\uB2F5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b11252a23ae1b181e3c072d2d1565432dd5374b46dc660b989fa95cf1fe246f",
    id: "Spirited Response",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC2E0\uC18D\uD55C \uD655\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7c53315fac817af5c4747f136841cf672f32b5323a0ba24cab32280a177a5448",
    id: "Rapid Expansion",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC77C\uC81C \uD3EC\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/885573fe10ca72bc8403c959e320f3830108204afdd6a99b980713c270eb0241",
    id: "Volley Fire",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC14\uC2A4\uB77C\uC9C4 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a7bad72bd202c1396aef0195ce22831384f435ffcf40ceb15053c5c3d14d4262",
    id: "Shattered Chains",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC81C\uAD6D\uC758 \uBB34\uAC8C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a950cd84af748ae911d370acd5a29cee34339bac707982197a6403ec8fc29010",
    id: "Weight of the Empire",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAC15\uCCA0 \uD63C\uBC31",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5bf025acbf0b8bd109ed053eb43789532e8177af1bea4057256686632f780746",
    id: "Steel Spirit",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC2EC\uD574\uC9C0\uB294 \uACE0\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/96006168ef0ce1331fa3709617a9d78e3bfbf849daa3641d57586daff1463cea",
    id: "Growing Agony",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uC2E0 \uCD94\uCD9C\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4e7cbb63b8c469a008ad33a81241fa84d949f118f2bac0e1347be89884908b99",
    id: "Extractor Mentis",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uC9C0\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4a0d3afc01154761fc0a2ae861f82d0d03fe1acef340f3602d9ce4b941a6491e",
    id: "Demigods Dominance",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC800\uB834\uD55C \uAC74\uCD95",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8b639c4dd2e197f10d675bcdb804c7d8ac32ab5cc0419100f8f5588637e30714",
    id: "Cheap Construction",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBBFC\uAC10\uD55C \uBC18\uC751",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/228064969ce5578ae46b96a2e5a5aa5b34b104729f0e0ff3ff3b4cb88b39799b",
    id: "Hair Trigger",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD88\uC548\uC815\uD55C \uD558\uC911",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1d578bd31fe0a1d778c0ec1363c4d617643aefeac6ecfdb6b6155a36db0af227",
    id: "Unstable Payload",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uACA9\uB82C\uD55C \uAC15\uCCA0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7342cc0175651e6a77b77cf9b1094b7545e4ed9b6acc8cb0827f85b426c9217a",
    id: "The Tempestuous Steel",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC0C8\uBB34\uC2A4\uC758 \uC120\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/837db9168619590824837810806915a7970aed4dbd3700ebefd5b2fc685b266a",
    id: "Saemus Gift",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB4A4\uB36E\uC740 \uD30C\uD3B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6677d29f919f5f41e757dddfb0a7619bec8e546122bec00e64cc3f377962d00f",
    id: "Coated Shrapnel",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD328\uBC30\uC790\uC758 \uAD11\uBD84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/12ae68de72bfafee53633d9cac785258e0a36731665207ba72e48d39ec6f2c63",
    id: "Underdogs Fury",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAE30\uC2B5\uC801\uC778 \uC810\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/77c6c7d891dd3fb4c39352ba97a5b57f538407e3afd439cba44434ee1a282edc",
    id: "Sudden Ignition",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCE7C\uB0A0 \uACBD\uAE30\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c50075e2de0bd902dc42c80cab99e24f0545e869a9a9b5ed0630da0acfed410",
    id: "Ring of Blades",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD55C\uACA8\uC6B8\uC758 \uC7A5\uB840\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f0145d68629ac86c7d8c3ceca12511487877e0d32dfe7cb6b056765b08a4a196",
    id: "Winter Burial",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB09C\uD3ED\uD55C \uB9DD\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fddaf55f9ed543df7fe1e9f7acfa6043c93b0cf46254eabd8149f86870d8df8e",
    id: "Violent Dead",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCCAB\uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/23e513ca2982c0d2f93a7a0cf908833d21d15cbe52a3594e3a3b064c083a88ed",
    id: "First Snow",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC5BC\uC5B4\uBD99\uC740 \uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/57e6fc1072ab9f32f0318d068da05074e06b4fc9c177ea3cdf75adee9f737e11",
    id: "Frozen Trail",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB3C4\uAE68\uBE44\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ba4b4023526a068a5d2aaffb93426b0be69d9a2bab64af87779c07effd88254",
    id: "Wildfire",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uCC98\uC808\uD55C \uBD84\uD22C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/87bf07a5db590d613e527c3ddb3d734f4cf0542ebcd9116cb816bf134d1f03b3",
    id: "Fight for Survival",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC14\uB78C\uC5D0 \uC2E4\uB9B0 \uC804\uC870",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b8cf24296dda86d709cf87c3f229ea38f34c5afe2c4a5b0161cfb9bbc9a97d27",
    id: "Omen on the Winds",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAC00\uC5F0\uC131 \uBCF4\uC11D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e250770ea3ca214065d53d1b272f0f2c169d0b29137e421e4ddf503b1d0084af",
    id: "Combustibles",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC555\uB3C4\uC801\uC778 \uC5ED\uACBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/77e7c2ce62701602d4dc002620074d1ac81248a892e2bac7c395b5eec2c1d271",
    id: "Overwhelming Odds",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAD8C\uB825\uACFC \uC601\uD5A5\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f8fb2a38a48992d8e7f1f0d5a331702133a11c1891ad7b5c567539f29a81d31c",
    id: "Might and Influence",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC1D\uC740 \uBD80\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bdaeea80e70e710ea5b12cbc8c44f0b2c4d0a71b21df25db8ebbae8ce3bb3e38",
    id: "Brightbeak",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD544\uC5F0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1ae2dfe7f26c7c57d3b83f310665ccc89ee7dd3d738fd08196623e891e7aee2b",
    id: "Inevitability",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD80\uAC00\uC801 \uD53C\uD574",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c432f18f354b953d908a51d3cf0856b5d23714ab6d453382201127257b771965",
    id: "Collateral Damage",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC554\uC0B4\uC790\uC758 \uC2E0\uC18D\uD568",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/774f03dfd0a4e2cf4415518a70efd2fd91b81ff2e8c2cd0a0861dc693c3733a5",
    id: "Assassins Haste",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD37C\uC838\uAC00\uB294 \uBD80\uD328",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cfaa72d67480e44022697a26f6d492c904a8717033ca50e620b93589f03965c8",
    id: "Spreading Rot",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB05D\uC5C6\uB294 \uC7A5\uC545",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/39945619760c124bc0d09fb7a5e8665584cdae2702fb64f1aacb11b256cfda83",
    id: "Boundless Grasp",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC704\uD5D8\uD55C \uC5F0\uAD6C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2950a4b31756734719ce085d20dd4e5c26573bfbca2863488dd496ef5a94128a",
    id: "Hazardous Research",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC228\uB9C9\uD788\uB294 \uC7BF\uB354\uBBF8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/109cd4dbde6b6abff9b31f52f7fa41cbff008043ab7b92c3545dc9fe14c925e5",
    id: "Choking Ash",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBA3C\uC9C0\uCC98\uB7FC \uB098\uD0C0\uB098\uB77C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/20a7219beabf8a466faad1d47f885a2c1fabdbb25728fc337d67d98710826a7e",
    id: "From Dust",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uC9C1\uD55C \uC9C4\uC2E4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b9a673dc06c5d0b01bd27619875cc80ef0a878c75355d721d90e38be4e58ba0d",
    id: "Straight and True",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAE30\uB098\uAE34 \uACA8\uC6B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c98bca23cb71e3450df1e7171ce048dc9af28ede1892800a312541ae5ee2d05f",
    id: "The Long Winter",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC804\uC220\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9a8df2799de4184a6a59b13a37d20fea9ea71c55c9906880b6b48443b7d848c3",
    id: "The Tactician",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC720\uBAA9\uBBFC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/73d41ced8ea08bdb4789d159e92c50e277eeece285326a04b4488ad1daca1c3f",
    id: "The Nomad",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC11C\uB9AC\uC640 \uD654\uC5FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c569a301cff9eecce2645953701d1cc9a5e6e18810a699caae6498835259115d",
    id: "Frostferno",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB9F9\uB3C5\uC131 \uC99D\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2e3d6301eaa0e32dd9c13cf6b05f6d39f84f781804ed54d81c1075d8d8d74754",
    id: "Toxic Vapours",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uB053\uC5B4\uC624\uB974\uB294 \uAD11\uBD84",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d0f2ae4fa81bf9c92e761c92eeb6248979e72be7e529699ecdd3f110173f3a1c",
    id: "Seething Fury",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBC1C\uAD74\uC758 \uD55C\uACC4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8886d0d0fe63da145a7941bdaad4f041a582452707c20451cc1dc9b5a4e17bd7",
    id: "Unearth Threshold",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC815\uBCF5\uC790\uC758 \uD6A8\uC728 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1928cb54fa28f44c43bdf70177a2586f1c7842f7c9517d3f176636a2eef0c256",
    id: "Replica Conquerors Efficiency",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD56B\uD5E4\uB4DC \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/998a2ef319fc9a5e141b272d32477591f95b243efe278a8ef8d124ed3d4b781e",
    id: "Replica Hotheaded",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD0C0\uACE0\uB09C \uC7AC\uB2A5 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/39c6329fd89b8fa62b76d090d09ac38167a188f60693c3978cde77466776435c",
    id: "Replica Pure Talent",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAC00\uB0D8\uD508 \uAF43 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/960cd64842dfd8322d709b7f75bd481cb7eb3d1094f8e58a614c42f9ba0a0a61",
    id: "Replica Fragile Bloom",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBD88\uC548\uC815\uD55C \uD558\uC911 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f4ccb663e7c6fd014de019b5b7e5d89d1fe23f07c18757b70e08abbf548c9e7c",
    id: "Replica Unstable Payload",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uD53C\uC758 \uD76C\uC0DD \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/bad6b7712b04ea09e010583a26c97aa19cc7514e3d3d9186cde52173eef2710f",
    id: "Replica Blood Sacrifice",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC800\uB834\uD55C \uAC74\uCD95 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4ab70cbb8a433ff44a33b3fc8343fe362879340f1c41a6b676b57ed493fb05fe",
    id: "Replica Cheap Construction",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uAC15\uCCA0\uC758 \uAD70\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/90ec83e8e31a0cb26378f2c429d326106f4958975537dbdf56dd5c0af761ade5",
    id: "Lord of Steel",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uC2E0\uC131\uD55C \uC9C0\uC625\uBD88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/92b751453df6b0e655dfb85a2f2d4ca0c9b04e81c89202ab58e15fe268f8296c",
    id: "Divine Inferno",
    weightValue: "1.75",
    defaultDustAmount: "3500",
    quantityDustAmount: "4200"
  },
  {
    name: "\uBE45\uD0C0\uB9AC\uC624\uC758 \uBE44\uC0C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4cb9a922e0f34fe815c918408fda608720c5961e225453aaa8ac787873d13b36",
    id: "Victarios Flight",
    weightValue: "1.73",
    defaultDustAmount: "3460",
    quantityDustAmount: "4152"
  },
  {
    name: "\uC7AC \uC18C\uD658\uC0AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e6540404e063a708d1212b8e052d9fbde96dd8e735919db144c07727e464b80b",
    id: "Ashcaller",
    weightValue: "1.73",
    defaultDustAmount: "3460",
    quantityDustAmount: "4152"
  },
  {
    name: "\uD478\uD15C\uBCF4\uC758 \uACC4\uACE1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9125983119132a99e39d114f6fc8e1988226d8d8fdef3fef251657108566cae8",
    id: "Putembos Valley",
    weightValue: "1.73",
    defaultDustAmount: "3460",
    quantityDustAmount: "4152"
  },
  {
    name: "\uD234\uC758 \uD0C4\uC0DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a71516ef2852633b8bf13af16b0d91a1d7a95ca42750de294bdc2758cd708b24",
    id: "Tulborn",
    weightValue: "1.71",
    defaultDustAmount: "3420",
    quantityDustAmount: "4104"
  },
  {
    name: "\uC720\uB839\uC758 \uBAB8\uC11C\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/073f371398378541650ade03546d68c91bf5575ece16946af4dfc1cddd3ce46a",
    id: "Ghostwrithe",
    weightValue: "1.68",
    defaultDustAmount: "3360",
    quantityDustAmount: "4032"
  },
  {
    name: "\uC720\uB839\uC758 \uD589\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ed8fa9b4f8886499e62fc142e39eb4d40fa89b0aef818375eb46430d19e59725",
    id: "Ghostmarch",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uB85C\uC2A4\uC758 \uC5ED\uB7C9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/43dbef9f7ab38480f7dbba99bad698cdb2686a9219c98334c800764fd0d94859",
    id: "Roths Reach",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uD669\uD63C\uC758 \uD669\uD3D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d4137cfcd66950360e96d65e674ea0cc61d96b8a5a2d302dc5c02682c8dc616e",
    id: "Duskblight",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uC804\uC728\uAC15\uCCA0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a3f76a146b1fba09631a833c63b7999e50b98757bb027810a9a23e885f6ee67f",
    id: "Thrillsteel",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uB3C4\uB9AC\uC544\uB2C8\uC758 \uCD08\uB300",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f303ee3dc029047c5ba2a149c3fdc920ed3e50ebf979ca009120c9ae2c124f1b",
    id: "Doryanis Invitation",
    weightValue: "1.63",
    defaultDustAmount: "3260",
    quantityDustAmount: "3912"
  },
  {
    name: "\uBC24\uC758 \uC5F0\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/05efafa8113778e9a0f0de4b9c3e0d64fda4ca8ee260a7ccbaf3b38e869c9918",
    id: "Nights Hold",
    weightValue: "1.63",
    defaultDustAmount: "3260",
    quantityDustAmount: "3912"
  },
  {
    name: "\uB178\uC608\uC758 \uB048",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a7043682ab8f77935880f470577ab10f63bfd3dec77b7673fbb2c03f6ebf10c",
    id: "String of Servitude",
    weightValue: "1.63",
    defaultDustAmount: "3260",
    quantityDustAmount: "3912"
  },
  {
    name: "\uB113\uC740 \uC790\uB8E8 \uB3C4\uB07C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7228d0f4be9d409e058fb32a8c1f61b317ad7f053790c5532ce4feeb2d48d88e",
    id: "Wideswing",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uAE08\uBE5B \uC695\uB9DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e429d0ae527e1c6381f068248774f0ff5ca2dcb8d547265b6510057cdd1ee9a4",
    id: "Aurumvorax",
    weightValue: "1.6",
    defaultDustAmount: "3200",
    quantityDustAmount: "3840"
  },
  {
    name: "\uD750\uB9BC\uB178\uB974\uC758 \uCC2C\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3d82fcc46f026eac95ed4cb259f9ff57339e8aaced0e829ebe472466a4cdc337",
    id: "Hrimnors Hymn",
    weightValue: "1.6",
    defaultDustAmount: "3200",
    quantityDustAmount: "3840"
  },
  {
    name: "\uD750\uB9BC\uB178\uB974\uC758 \uB9CC\uAC00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2f94ff4414fb387794439990acb167e02100bf6ec9ed822022df94d8849f1c10",
    id: "Hrimnors Dirge",
    weightValue: "1.6",
    defaultDustAmount: "3200",
    quantityDustAmount: "3840"
  },
  {
    name: "\uB9D0\uB77C\uCE74\uC774\uC758 \uAC01\uC131",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/59debce1643f806fb80274ea4dfb4c07a17fc3d5fb488e18d3d6bc9743c2194e",
    id: "Malachais Awakening",
    weightValue: "1.6",
    defaultDustAmount: "3200",
    quantityDustAmount: "3840"
  },
  {
    name: "\uBD99\uC7A1\uC740 \uB0C9\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/91391b4b6e81173de74f58768d0e8e0834b5b593e9a755e5d435ec8133e6fc23",
    id: "Kaltenhalt",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uB178\uBBF9\uC758 \uD0DC\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f72a3da0e2d44e100ee13f93b0041d18774dabeec72816467ec36db4f80a449e",
    id: "Nomics Storm",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uC811\uADFC\uD558\uB294 \uACF5\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3d722b6203929e8adf6e978a300c9ccecb88cb52517bd54841399ac76cf8337f",
    id: "Dreadarc",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uBD99\uC7A1\uC740 \uC601\uD63C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f4251f3f336b34eb337c1a0d3a333a3c2a42de17da88319760d97f9701c0c912",
    id: "Kaltensoul",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uAE30\uADFC\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8fa6729056a2e6c163a7637aa59073e78e37fb7224e9feebea4227312066bbc0",
    id: "Faminebind",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uC2E0\uC18D \uC804\uD22C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/63fd4add2806e4701dc65441ab213693a70f3c71bf459881efda01eda0597def",
    id: "Battlehaste",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uC6B0\uC790\uC790\uC758 \uCD08\uC6D0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/336878e9a05c24776774e5927f9eeb4006ed5837d8295fa724d8cd468e0137ce",
    id: "Uzazas Meadow",
    weightValue: "1.54",
    defaultDustAmount: "3080",
    quantityDustAmount: "3696"
  },
  {
    name: "\uBC00\uB824\uB4DC\uB294 \uACF5\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/089a141c506e0a3634ed0a0abdd622dcc97e697ed305f48268cbaed548a42735",
    id: "Dreadsurge",
    weightValue: "1.56",
    defaultDustAmount: "3120",
    quantityDustAmount: "3744"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uC874\uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1efec30d922fd97eedbed28a0a42412903f640e246cfcfb0c866e31af21561d7",
    id: "Demigods Presence",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uC774\uADF8\uB178\uBAAC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/359a47f3f02b3780d728de23389b7b0dfed05592ad798abeea2066945bf9dfc0",
    id: "The Ignomon",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uD53C\uC758 \uC624\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/34cd1c00ad947fc2b9becb7a188394618d46b504f25e6fc7f001648f00ad6b40",
    id: "Bloodplay",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uACF0\uC758 \uD5C8\uB9AC\uB760",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fc6ec742a2a02fdf3a87f0693dfccd575ad323169645cd299c881399b04e69f1",
    id: "Bears Girdle",
    weightValue: "1.63",
    defaultDustAmount: "3260",
    quantityDustAmount: "3912"
  },
  {
    name: "\uD504\uB808\uC2DC\uC544\uC758 \uD654\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/114bd17b225dbcbe1137946f2c041c58f572610602e5e59138ef3f05863c502e",
    id: "Wreath of Phrecia",
    weightValue: "1.54",
    defaultDustAmount: "3080",
    quantityDustAmount: "3696"
  },
  {
    name: "\uC2B9\uB9AC\uC790\uC758 \uBC18\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6a816d6af46e0e7dcb33b0b509c7d88ee70b60eda50f086293a0c2efe8f3ce2d",
    id: "Band of the Victor",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uC628\uC804\uD55C \uC11C\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0a2f3c4d2e95423510b2d47fce97c345b8f6f69ead82030781f76c0a02b5b8af",
    id: "Frost Unbroken",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uD669\uD63C\uC758 \uB05D\uC790\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5d2a4ce7dbf79760adea9eafa47fd55527e8f2e9b95443b810205b1c704353d2",
    id: "Dusktoe",
    weightValue: "1.65",
    defaultDustAmount: "3300",
    quantityDustAmount: "3960"
  },
  {
    name: "\uC870\uD504\uC758 \uC2DC\uCD08",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/960f04e728bf6efa5746cd5011295eab07665ede0582dee5d93b3aba11086584",
    id: "Xophs Inception",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uC5D0\uD53C\uACE4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/62a85c75b2213e7bea5921055224949bdd602ee539443e0b41857c7ee15e5864",
    id: "The Effigon",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uC190\uAE38\uC774 \uB2FF\uC9C0 \uC54A\uC740 \uC601\uD63C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb15c13a5ae3dad75d526d28808281b8d5255f59c36acc14747b67345dbb18ef",
    id: "The Untouched Soul",
    weightValue: "1.51",
    defaultDustAmount: "3020",
    quantityDustAmount: "3624"
  },
  {
    name: "\uBD88\uC6B4\uC544\uC758 \uC871\uC1C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b44520f06071c8aa92fb876a87576583bd742704f41e349af61bbb683136538d",
    id: "Shackles of the Wretched",
    weightValue: "1.49",
    defaultDustAmount: "2980",
    quantityDustAmount: "3576"
  },
  {
    name: "\uC18D\uBC15\uB41C \uC5EC\uC2E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2a8002b94503bdbaa3f7a894207c929ec7c84e929f75eb0fc5fdefe1ae7adee0",
    id: "The Goddess Bound",
    weightValue: "1.49",
    defaultDustAmount: "2980",
    quantityDustAmount: "3576"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uC774\uBE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/15bb1003725f84e7e18aef4ecb61d90352d6c139a1ba1c82b7343778c4b90c8d",
    id: "Hyrris Bite",
    weightValue: "1.47",
    defaultDustAmount: "2940",
    quantityDustAmount: "3528"
  },
  {
    name: "\uD558\uC774\uB9AC\uC758 \uC18C\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/287af1ab7567eab06b0df9ea66faf805f6d4108cd8957a5d620dc3b80e0d0b13",
    id: "Hyrris Demise",
    weightValue: "1.47",
    defaultDustAmount: "2940",
    quantityDustAmount: "3528"
  },
  {
    name: "\uC778\uB0B4\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/574486bc71082023ed71a781d9a296f6485af58a6f0ae357d584a46794dae22c",
    id: "Chain of Endurance",
    weightValue: "1.47",
    defaultDustAmount: "2940",
    quantityDustAmount: "3528"
  },
  {
    name: "\uC8FD\uC5B4\uAC00\uB294 \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/61ed0ef0a7d17f08b234154f1afd8c9e303e69841a988968b865327e933ef15d",
    id: "Dying Breath",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uAC07\uD78C \uC2E0\uC758 \uAE30\uB465",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f2e30e174d47d941483dc99e0fc86fff7c884857f8005e0696b14293251d23d8",
    id: "Pillar of the Caged God",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uC0AC\uC9C0 \uBD84\uD560\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6cf65ec01c1cfba78c2144cc1576a47a320295f89951b2c565085ad7c0270b98",
    id: "Limbsplit",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uC885\uACB0\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5fa01438149a5dd2c213fc3e0b006a0e25758b9ff67d07d3b67750b995620405",
    id: "Realm Ender",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uD654\uC0B4 \uBE44",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e841b9442a8fce47da2f057bb75e4fe971d89d704f308ea43431a14be965036",
    id: "Quill Rain",
    weightValue: "1.41",
    defaultDustAmount: "2820",
    quantityDustAmount: "3384"
  },
  {
    name: "\uD654\uC0B4 \uBE44 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cb9843a4f4ffb5a7b9bfdace34e213861f7920ab3bdbdce6988220f91e06d3f1",
    id: "Replica Quill Rain",
    weightValue: "1.41",
    defaultDustAmount: "2820",
    quantityDustAmount: "3384"
  },
  {
    name: "\uBD89\uC740 \uBC1C\uC790\uCDE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/332f2e2696bfc3db7eeca962b3331c2a8f2e01d9d99bfb9b0cc3049f47288877",
    id: "The Red Trail",
    weightValue: "1.4",
    defaultDustAmount: "2800",
    quantityDustAmount: "3360"
  },
  {
    name: "\uC9C0\uD61C\uC640 \uD589\uB3D9\uC758 \uC190\uC544\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f9e56ce371f46f5bda195337e9b8d7e3b20591a4786724b9b6e4d2ce6a94fd60",
    id: "Hand of Wisdom and Action",
    weightValue: "1.4",
    defaultDustAmount: "2800",
    quantityDustAmount: "3360"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uD558\uC0AC\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2c4ff24849a84292e5d8dd1c2903f0a47afebb2a8efa7dc617a4aaff9b6db6e8",
    id: "Demigods Bounty",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uC9C8\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b71968bb404478ba3885df329919d1c3d5a0068e5aae3a14c3365133f6f14d3",
    id: "Demigods Stride",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cdb61dd1991d9495d667e026b9f6b3a79d9ff69acabeca47cc255ea9ff251ecc",
    id: "Demigods Touch",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uC784\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e8fec06db6b15b8c25bac705b6327ef61e36a9af223c41f5bfcd739f887bf81e",
    id: "Doedres Tenure",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uC131\uACF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2fbc3fbee1331762406eedf161b414aeeff647e974a10bb10a4ab7efd2df5a85",
    id: "Demigods Triumph",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uC601\uC5ED \uD615\uC131\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d6d167a450aa7285206d8c3a592f25e46cb6afb1442b7997aade9d04a19a2708",
    id: "Realmshaper",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uBB18\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e3e13c7dd914a26fc05c48559073cc196ec3cd18124b803751e417b70423f415",
    id: "Doedres Elixir",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uC624\uD55C\uC758 \uAC80",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/14cd578361713a665be4eb1ce95368598fdb4f08cea59a7cac0adb8855618c5d",
    id: "Shiversting",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uB208",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a8d0164d3f41ec0018a565f96564c43087297d8eb52e14dbb0c1f62db6712d49",
    id: "Demigods Eye",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uAC70\uCE5C \uBCA0\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d21813c4605986c78cabf6ade4fd3249e622be05f37bced9ff796c42847cfaa4",
    id: "Wildslash",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uD0DC\uD48D \uD30C\uC5F4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1a57dcb82d5dcafc958b9fbba2d412332bdd2d2901467143205937904804028a",
    id: "Stormblast",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uAC08\uB77C\uC758 \uBC18\uACA9",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5da75c8945b0fecd6ce4457f9a80cea233d91d1da2dc2f837ed2361aaa7f5565",
    id: "Gallas Riposte",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uC545\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1c6789a1b483c5971134e7f15d1d270087fff4bac89f0f560c288b30ae98cc65",
    id: "Doedres Malevolence",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBA85\uC608\uC758 \uC9C0\uBC30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/74b56625b29e50d221f0c61b14a42e6331f189f252d9ad77919a276dbbb13923",
    id: "Honourhold",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uBD88\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1ae8fb07d49f1baec4ae87f81fb401e6752a8fe6911c34cfd14e439daf5974b3",
    id: "Demigods Immortality",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uC6C5\uD790\uC758 \uACE0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/73fa13c616f9fafbbcd5b97cee9ae39013c703c0a1554477791a45c5205703fc",
    id: "Ungilss Coil",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uCE74\uC634\uC758 \uD45C\uC2DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/83ca9142c80bff71ff5bc3856c7183e6404dab38b6f865463bd2483867452f4b",
    id: "Kaoms Sign",
    weightValue: "1.37",
    defaultDustAmount: "2740",
    quantityDustAmount: "3288"
  },
  {
    name: "\uD53C\uC758 \uAC00\uC2DC \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c28ed0f61683312696d227df9b645dc7b3505832338d59b382ae13a6f41f82c4",
    id: "Replica Blood Thorn",
    weightValue: "1.37",
    defaultDustAmount: "2740",
    quantityDustAmount: "3288"
  },
  {
    name: "\uB2AA \uAC10\uAE34 \uAC00\uC9C0 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b6349c75c2e7ab9106218c7393048e4c0e42a14fc646e461ec0a70d8827aa9ad",
    id: "Replica Fencoil",
    weightValue: "1.37",
    defaultDustAmount: "2740",
    quantityDustAmount: "3288"
  },
  {
    name: "\uC5F0\uD68C\uC758 \uC18D\uBC15",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/92987a05cee3b3997129e86cc8dfbcd4da10c0040a6ab55c36b6b7c60a3f38f7",
    id: "Feastbind",
    weightValue: "1.34",
    defaultDustAmount: "2680",
    quantityDustAmount: "3216"
  },
  {
    name: "\uC18C\uAC01\uB85C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c9484b8b4f673d29aba0941f19fb2d06686ef8b1c82a6b02f1976d056375d87d",
    id: "The Cauteriser",
    weightValue: "1.43",
    defaultDustAmount: "2860",
    quantityDustAmount: "3432"
  },
  {
    name: "\uAE08\uD14C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/05dc910c3669b82a2267fa6d3c29b036f56af23854fe65214703c9ee4528923d",
    id: "Goldrim",
    weightValue: "1.33",
    defaultDustAmount: "2660",
    quantityDustAmount: "3192"
  },
  {
    name: "\uD76C\uC0DD\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/502005be896b6b373237e976ca281c204bab7fd264fbea7184bd71acc9f16982",
    id: "Sacrificial Heart",
    weightValue: "1.33",
    defaultDustAmount: "2660",
    quantityDustAmount: "3192"
  },
  {
    name: "\uCD5C\uD6C4\uC758 \uC218\uB2E8 \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/18d551d4f7f899b70cfbfcf1e3c89a088831ba7068c958cdef9eed4702ff5b74",
    id: "Replica Last Resort",
    weightValue: "1.33",
    defaultDustAmount: "2660",
    quantityDustAmount: "3192"
  },
  {
    name: "\uC720\uD608 \uBD84\uC1C4\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ef1e488cc568e736d4283f0f54d761a4b2bbdb4e6c028dcc6543b680024f3069",
    id: "Gorebreaker",
    weightValue: "1.3",
    defaultDustAmount: "2600",
    quantityDustAmount: "3120"
  },
  {
    name: "\uACF5\uC8FC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dbc0f57e52dfc75f407b3f92d7c9e1e9d3f77b774e12f5b4f3f5096f1c450466",
    id: "The Princess",
    weightValue: "1.3",
    defaultDustAmount: "2600",
    quantityDustAmount: "3120"
  },
  {
    name: "\uC561\uC2DC\uC634\uC758 \uBB34\uAE30\uC9D5\uC5ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/57932207869251c8a7bcf64627d2b80ea86b24c5250158a967efc82369bf2819",
    id: "Axiom Perpetuum",
    weightValue: "1.3",
    defaultDustAmount: "2600",
    quantityDustAmount: "3120"
  },
  {
    name: "\uB9D0\uB9AC\uAC00\uB85C\uC758 \uBD80\uAC01\uC0AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/123b87f7fafdbd354a7323836f7af546910daf6f686e1d4b174366d2348d2b16",
    id: "Maligaros Etcher",
    weightValue: "1.3",
    defaultDustAmount: "2600",
    quantityDustAmount: "3120"
  },
  {
    name: "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD30C\uBA78",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c39b2943eb678534d5b727ee1123b04f0a1c129577788578157f13da6d72cf80",
    id: "Doedres Damning",
    weightValue: "1.41",
    defaultDustAmount: "2820",
    quantityDustAmount: "3384"
  },
  {
    name: "\uBE5B\uC758 \uB9E4\uB4ED \uBAA8\uC870\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3c4b91917394e90dd3a483784f328ee746e63ba2251c2fc0b2a55e14a361617d",
    id: "Replica Prismweave",
    weightValue: "1.29",
    defaultDustAmount: "2580",
    quantityDustAmount: "3096"
  },
  {
    name: "\uAE30\uC801\uC758 \uBC1C\uD310",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7911eaf1e362cf26afe0e608175c58f0ea85d7b678dc36f41daa1cfa7588fd1f",
    id: "Wondertrap",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD750\uB9BC\uC18C\uB85C\uC6B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5e054bb4afba12ede46041c4eb0c0e0d2f36d238bda5546f3b8f842a2749ca43",
    id: "Hrimsorrow",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD0DC\uD48D \uAD6C\uB984",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8103a3f632d00325397069e543fe74500ae490fda9a94f3c579c32763b4bbcd2",
    id: "Storm Cloud",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD3ED\uD48D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2875af0ab87bd6e013af2d95e88f86a01a087a43d436f792fea17d93127a7b3b",
    id: "The Tempest",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD750\uB9BC\uBC88",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/99b6f4e5ef4f7f0fe37058d1dd4198c3e6705e3b1a741179cd7e0cd29e5b8ef6",
    id: "Hrimburn",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD0D0\uC695\uC758 \uBC1C\uD310",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/470f7fc597a77539f9044a07f4bfc32988029244674bb7958342305abfc55c3e",
    id: "Greedtrap",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uD669\uC57C\uC758 \uAC89\uC637",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e65e7442e9ce7f9a7ec410cec2f8354b742817f707097befa989515d20eef5fc",
    id: "Wildwrap",
    weightValue: "1.27",
    defaultDustAmount: "2540",
    quantityDustAmount: "3048"
  },
  {
    name: "\uBA85\uC608\uC758 \uCD1D\uBCF8\uC0B0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a6741b5804acd908f8fddb62b38170874900376c2ea05817e110a7b8c4f9a78d",
    id: "Honourhome",
    weightValue: "1.38",
    defaultDustAmount: "2760",
    quantityDustAmount: "3312"
  },
  {
    name: "\uAC81\uC7C1\uC774\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ee75ae7fe59b2b0b91efe50ef0da7469d501a37cf8f76f319d1496fed595aa43",
    id: "Cowards Chains",
    weightValue: "1.29",
    defaultDustAmount: "2580",
    quantityDustAmount: "3096"
  },
  {
    name: "\uAC00\uC2DC\uB098\uBB34 \uAC11\uC637",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/12bf34107a9c52f60c50a18b17e241d2eda305c574d81b306cb1a79e55d8c389",
    id: "Bramblejack",
    weightValue: "1.25",
    defaultDustAmount: "2500",
    quantityDustAmount: "3000"
  },
  {
    name: "\uC544\uC138\uB098\uC2A4\uC758 \uB178\uB798",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e433033587646b7240cadd53e1ec63900ba86a793e69ddace1ea98cee4e5ff67",
    id: "Asenaths Chant",
    weightValue: "1.23",
    defaultDustAmount: "2460",
    quantityDustAmount: "2952"
  },
  {
    name: "\uB77C\uC988\uC6CC\uC758 \uBCF4\uC11D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/24c223b38627585c5f602fe544dee2f4b6e517cb7c03af3e27dcccc8602e1b12",
    id: "Stone of Lazhwar",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uD30C\uAD34\uC758 \uC0B4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1494fb0290f6201ec0c6de0d7cd2e32a985244178c00aea5be2bbf4d23331faa",
    id: "Broadstroke",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uC0DD\uAE30\uC758 \uC78E\uC0AC\uADC0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/455e2b6fa9f62f8684fc605f6be7ca836cb9bbb5ea98efb08b5e5b845ba546c0",
    id: "Springleaf",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uC815\uD654\uC758 \uB208\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/028597f81c396ee46570baebd20d0d75c87afdd534b7c8c0c96e66e1c0e96406",
    id: "Tear of Purity",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uB77C\uC190",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c414858589982dfc579051d8ca15b5e9bb9e839a3e6e1ef27c12259c4cfb878a",
    id: "The Rathorn",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uCE74\uB8E8\uC774\uC758 \uB3CC\uC9C4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2ff79e5d08c4440fb79f66c5d33964c5a22e58eb7bca1b9cdb6f26a36032f723",
    id: "Karui Charge",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uCC38\uB098\uBB34",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/82c54f67d97ad4c59a1f0d8a671baffd7e20b5a90cef83b6e0d72027cb1e5bd1",
    id: "The Oak",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uD234\uC758 \uBAB0\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/57b900dfe77b6da323f9e053c3043396cd7a160ba84f026f96f15aa9f8b24adc",
    id: "Tulfall",
    weightValue: "1.17",
    defaultDustAmount: "2340",
    quantityDustAmount: "2808"
  },
  {
    name: "\uC6B8\uBD80\uC9D6\uB294 \uB3C5\uC218\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2710eec4b88a7eeb0b29bb07d707ec1b548c4a568db0f344b07b9416f881a532",
    id: "The Screaming Eagle",
    weightValue: "1.16",
    defaultDustAmount: "2320",
    quantityDustAmount: "2784"
  },
  {
    name: "\uCE74\uB8E8\uC774\uC758 \uC218\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aa9d1552ee8738f2ac5b081668b48e6b228283ce3aa7de01b24e14ae8230ff0a",
    id: "Karui Ward",
    weightValue: "1.19",
    defaultDustAmount: "2380",
    quantityDustAmount: "2856"
  },
  {
    name: "\uADF8\uB9AC\uD3F0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/92fa5bf1278b88e8aca6eb51eda0a8a3ae14756f3c9286303049515a447c6b59",
    id: "The Gryphon",
    weightValue: "1.16",
    defaultDustAmount: "2320",
    quantityDustAmount: "2784"
  },
  {
    name: "\uC628\uB2E4\uB974\uC758 \uAC78\uC1E0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6edc9802523006f9cb1f11f55cbde5b3f833797e0a14d8c5049177726cd7c612",
    id: "Ondars Clasp",
    weightValue: "1.13",
    defaultDustAmount: "2260",
    quantityDustAmount: "2712"
  },
  {
    name: "\uAC70\uCE5C \uD56D\uD574\uC758 \uD0C0\uB95C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8d08ae0e996c39b0d7d372c799a14af96071b97ea6c239b0f6811312cfd75bc2",
    id: "Wheel of the Stormsail",
    weightValue: "1.13",
    defaultDustAmount: "2260",
    quantityDustAmount: "2712"
  },
  {
    name: "\uC720\uD608 \uAD00\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1cb75861d76870d581f221c089f4cf6cda70e6c99be593cd33e8867538ab3077",
    id: "Goredrill",
    weightValue: "1.13",
    defaultDustAmount: "2260",
    quantityDustAmount: "2712"
  },
  {
    name: "\uC544\uBC84\uB77C\uC2A4\uC758 \uBFD4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/aecb38183eac268eb7170f2e23bf2210248ddaab9766285130086562caf87f10",
    id: "Abberaths Horn",
    weightValue: "1.16",
    defaultDustAmount: "2320",
    quantityDustAmount: "2784"
  },
  {
    name: "\uACFC\uB300\uB9DD\uC0C1\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0fdc5b5389261f899e9579a16e16273ff57c1175f3dca3876c323f26c68d94b8",
    id: "The Megalomaniac",
    weightValue: "1.13",
    defaultDustAmount: "2260",
    quantityDustAmount: "2712"
  },
  {
    name: "\uCDA9\uC2E0\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/64ffe8f0aef39fd378b4ef6b5096aa9f1c4f5fb7993d0151fbd97423b1698533",
    id: "Skin of the Loyal",
    weightValue: "1.11",
    defaultDustAmount: "2220",
    quantityDustAmount: "2664"
  },
  {
    name: "\uB2AA \uAC10\uAE34 \uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/809b0f1c94bba03057dd84d6a62e24c407b9502d958a1af6fcc0c21f99df28b7",
    id: "Fencoil",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uBC14\uC704 \uD654\uC0B4\uCD09",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/46481dab84c6a1c1af5c24140f29b55d5b3560913219359a991250906f8394fd",
    id: "Craghead",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uD53C\uC758 \uAC00\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/932970c96e739f4dad866784635c9d64852ce5dcd913304f6080783e4ba1a90d",
    id: "The Blood Thorn",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uC2E0\uC131\uC758 \uC790\uCDE8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4009d15731f5cd24b350d9f3cb63cfa698d15c8db7af69285183a11cc6c79b12",
    id: "Vestige of Divinity",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uC6DC\uC758 \uC8FC\uBA39",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/364d1ce51ba9e4e6a0605bb259113983aa7f9da4f2046fc52538f191266a70f6",
    id: "Wurmfist",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uBC14\uC704 \uD3ED\uD3EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8fcbe7faedfb58828ae6e2c6b4f7b47092d806b77741454bd5129862aceaf414",
    id: "Cragfall",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uCE74\uC634\uC758 \uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2af763a3d861b978e82da3064dec5a5acbf0e3064b46ff224f74bf817b25f9bd",
    id: "Kaoms Way",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uB2AA \uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5cafb168710b5ea0f072613ffa875094437df75cd57cd10f3cba9140092da658",
    id: "Mirebough",
    weightValue: "1.09",
    defaultDustAmount: "2180",
    quantityDustAmount: "2616"
  },
  {
    name: "\uC544\uB77C\uCFE0 \uD2F0\uD0A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e69b1809eaa0443dd7733ead6257db05390b543b4fd26fd8fb7c2335c3bf77f",
    id: "Araku Tiki",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC694\uC815\uC758 \uC228\uACB0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/331b9d0d0a4c801837791c1d63997cab3f15c12a64a22ef55158ba231fd4ce68",
    id: "Sidhebreath",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uBC29\uB791\uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/949e82606456ad48d1dd5e1924baf573186c918cf6159aeca126bbf577a77efe",
    id: "Wanderlust",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uAC00\uC2DC \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/12116eb9a56c0e568d0b0ee991548e50f5236aae31eabdf0e51093766ae0a293",
    id: "Crown of Thorns",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uCD5C\uD6C4\uC758 \uC218\uB2E8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/78d6a626fd97e15f9b1a4490a1f011b0abe8c5cfd3286b70f67c7ac354fa2ce5",
    id: "Last Resort",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC0C8\uBCBD\uC758 \uCC9C\uB465",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7b378b0f27fbd4b6130c594df54de2ea871f9dd9351542333f880f70ad4572ae",
    id: "Thunder of the Dawn",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC6B4\uBA85\uC758 \uD749\uD130",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f3ab82b2c9fb9898cba9a8376395138dee9c81bbdf36298dd83eddc8897fffd5",
    id: "Scar of Fate",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC1E0 \uC6A9\uC811",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/464223f71394ba2feaf8db7d3d2d999acdf26f0705a269a05a4cc376e74113dd",
    id: "Ironweld",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC21C\uAD50\uC790\uC758 \uC655\uAD00",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/246bfcc37639d0f8ec2370868e16b261b90bafc9ab52920735a70cb53c14a99f",
    id: "Martyrs Crown",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uB098\uB9C8\uD6C4 \uD2F0\uD0A4",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4b9a5bbd3a15ce2d37f22924bafe24de9ded2ac2cf646c31db65b544534533b5",
    id: "Ngamahu Tiki",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC694\uC815\uC758 \uC774\uBE68",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3135c88489f80b2629f9e21cb4d12022025215e117f891e75dfc7fb7e1982cf6",
    id: "Sidhebite",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uD0C0\uC2A4\uD0C0\uD37C\uC2A4\uC758 \uBD80\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/cd10cb6cc6c5eb5697a7078dfe7b92b8daebea79bd8009290061642b2804aad4",
    id: "DrTestapus Charm",
    weightValue: "1.06",
    defaultDustAmount: "2120",
    quantityDustAmount: "2544"
  },
  {
    name: "\uC870\uD504\uC758 \uBCF4\uC0B4\uD54C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/a4bf9cd655568a4eb43e18e5ce3e5dcf8f42c93b43f80edcdd2d30c6376deda7",
    id: "Xophs Nurture",
    weightValue: "1.04",
    defaultDustAmount: "2080",
    quantityDustAmount: "2496"
  },
  {
    name: "\uAC80\uC740 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/876c5d0f11800499e9db3c775056296eef90659acac2e9856d41567a4ee6a1c0",
    id: "Blackheart",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uAC80\uC740 \uC12C\uAD11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ab76cc7b0f16c21907663d17cece19d8cbcd663c0a428d130a0c0c797f12d08f",
    id: "Blackgleam",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uBD80\uD328\uD55C \uACA8\uC6B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d9a65b7cb225e7e36717af0bce9bdc235c579690965558c6736ef02218d9a769",
    id: "Rust of Winter",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uC81C\uAD6D\uC758 \uC720\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/127f2643a09803333ca3aa281c44ce030293bc7980317b50e5a01be5cbe0387e",
    id: "Remnant of Empires",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uC0AC\uB514\uB9C8\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/36f6bce80d4b46b2832ffe1adbebf7dcf9898d4e8717e3c5453f301203ca30d1",
    id: "Sadimas Touch",
    weightValue: "1.33",
    defaultDustAmount: "2660",
    quantityDustAmount: "3192"
  },
  {
    name: "\uB4DC\uC6CC\uC2A4\uC758 \uAC00\uC8FD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/b7ad01019edfbc61b4713f1e2525ffe6c5363fadb193e57003df5ca3b3b14045",
    id: "Dewaths Hide",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uACF5\uD5C8\uC758 \uC2EC\uC7A5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/491acd491e17a633b8817e0d4f84679d947bcf6b9d40b93c3540fe683bb79614",
    id: "Voidheart",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uC624\uB2C8\uACE0\uB85C\uC2DC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/dbf8ebcc12ee1ea6b75c20f03e0d56c4402ff3eb5fd60e3ae301611575bf9f10",
    id: "Oni-Goroshi",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uB85D\uD1A0\uB2C8\uC5BC\uC758 \uC190\uAE38",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/39a45f933658b8b99b05edf8457c63441732957a1b35b17ef635d7570d2dc8be",
    id: "Lochtonial Caress",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC5D0\uC870\uBBF8\uC5B4\uC758 \uBA74\uAC11",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9a46ca7b81d7e022ee263d4ee08e7d15e190eba483d3427c87a92058b0b43e8e",
    id: "Ezomyte Peak",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC740\uBE5B \uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/53f89ab908e06dfc51a629fdde391553ca13d2393d5815d13e35ae9445a37451",
    id: "Silverbranch",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBD89\uC740 \uBD80\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/626ae73d3f9b98c62f9b938ef996a800c95db0e0ab6f504d8e8c25abab34d504",
    id: "Redbeak",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD54F\uBE5B \uC7A5\uB09C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9c5eca202b05cb995425807a8cc323075e71ed4495e6e7f66491311559f06629",
    id: "Sanguine Gambol",
    weightValue: "1.13",
    defaultDustAmount: "2260",
    quantityDustAmount: "2712"
  },
  {
    name: "\uC5EC\uB984\uB0A0\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0ef9e2fb158b999dbac2c00f6e1999f0a147a5d3fc33f669af5917c7f32a70f7",
    id: "Blood of Summer",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD0DC\uC591\uC758 \uC7AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3794e5128872f13a811f80d3024bd42bc108be65c54bf3ca88872d621f70168a",
    id: "Ashes of the Sun",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uB2EC\uC758 \uD30C\uD3B8",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e5db7855c3f6097c7c3f19d085415e47358f08325616a8040a2b5accfbde68a1",
    id: "Splinter of the Moon",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC601\uC6D0\uC758 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6772f8df29e0ae5b9fbb780ab611451b92f2823e820fea5570c2597bc9bcdcba",
    id: "Fragment of Eternity",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC21C\uD658\uC758 \uC720\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0757564d73ca91353364d2ab33688e5926fbc011aa14be66f4b99fc2653d6597",
    id: "Relic of the Cycle",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC5D4\uD2B8\uB85C\uD53C\uC758 \uB208\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e9947a150ae75894d8cfeab870e8520cce00304028475a5fd2d110fd6fc7208d",
    id: "Tear of Entropy",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC2B9\uB9AC\uC790\uC758 \uBD80\uC801",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4167d56feb2aa8e6c550bc1fd6c0578b99b5833dd9393e5d3feb2eed471b401e",
    id: "Talisman of the Victor",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBC14\uD14D\uC758 \uC190\uAC00\uB77D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/19eb19728668a83d5aba35d0efa43e2ca2a329e8cf1f40b42228cb6662899d02",
    id: "Barteks Finger",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uCC9C\uACF5\uC758 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/2d58196cc4bcb0a4a0da32c8655c4f24916746ece8cea4816b5ea2ae387d63c4",
    id: "Celestial Fragment",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC12D\uB9AC\uC758 \uD3B8\uB9B0 \uD654\uC0B4\uD1B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7e44bbba09aa36cbe49402986695b135e15b41003f29bc920f50da94512f10b5",
    id: "Slivers of Providence",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uAC00\uC2DC\uB098\uBB34 \uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8d27e8f3237f0af8fb955e86d53efb9879c3547ab1b165a201178e6de032bc82",
    id: "Wall of Brambles",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC740\uBE5B \uB098\uBB47\uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7fb1d67ae7221ac29c9cc14474bda9a011cf14fac00e680534b0a9373f1ce302",
    id: "Silverbough",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC5D0\uC870\uBBF8\uC5B4\uC758 \uBC29\uD638",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/c027f7c45fd0340ad7cc933d55d0ed337a5096ea47e83d2c882fe9065af3c2e3",
    id: "Ezomyte Hold",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC2DC\uAC04\uC758 \uC0AC\uC2AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/709bbc18a5e92275c80acc8e4d94e2d66b422898d5db62163c68321f3727621c",
    id: "Chains of Time",
    weightValue: "1.03",
    defaultDustAmount: "2060",
    quantityDustAmount: "2472"
  },
  {
    name: "\uBE44\uC804\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3e5534574669cf4370502be2471f9a35fc4d047f4da77cda23801c05b660d768",
    id: "First Piece of the Arcane",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC0DD\uBA85\uC758 \uAC00\uC9C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27d104ef2373e233d73e54c079a9680591497bc443e069a316b271aff79e1669",
    id: "Lifesprig",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBE44\uC804\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/17c8c7c73f9b02cfb856948cc1c7c4fbaa3746bbb456387bbc96db6ed2e420e2",
    id: "Second Piece of the Arcane",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBE44\uC804\uC758 \uC138 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/438d8dcffb92bc6a2b5b0483bb3458d59993ff6dbede0258f81f323275fc8535",
    id: "Third Piece of the Arcane",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD398\uB780\uB450\uC2A4\uC758 \uBB38\uC591",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/27569dfc33947a1c4d03e2620a98d067e7b8e9a6228a7465948191195f009363",
    id: "Crest of Perandus",
    weightValue: "1.23",
    defaultDustAmount: "2460",
    quantityDustAmount: "2952"
  },
  {
    name: "\uC2DC\uAC04\uC758 \uB450 \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/58fddd300ed3d00b2d3003c61949b2e94493d12234537c864a8a84be36367e06",
    id: "Second Piece of Time",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uACF5\uD3EC\uC758 \uBD80\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/681e5a36de12fa26530cd9cb8c9dfca3abbe39f50a21b22b5b34af87db2a5d3f",
    id: "Dreadbeak",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uACF5\uD3EC\uC758",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d84b03c2bc5fbc7e4e9712069fee5a153aaf8a684ffc45970362ee9a88cf7344",
    id: "Terror",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC2DC\uAC04\uC758 \uCCAB \uBC88\uC9F8 \uC870\uAC01",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3efc504302ad2242b431a6b605eed471d642086b030bf46d4fb4547f0b4da945",
    id: "First Piece of Time",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uAC15\uAC74\uD55C \uC218\uBE44\uBCD1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/9b5ca2965f2dfb95a822052d14c7fb8064121859a7bfc5c7cc9bd10cae06bdd0",
    id: "Stalwart Defenders",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBFCC\uB9AC\uCE60 \uC218 \uC5C6\uB294 \uC720\uD639",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/441b06b20b78a78e013bb7e19da70141526e88279b7ea8277c08512f95314b05",
    id: "Irresistible Temptation",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC640\uC804",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7b1530dcd36b129a3b9ca1d6a15140b3afa8f05da0c0bc02ee2b1cedb2075d93",
    id: "Misinformation",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBD88\uC5B4\uB098\uB294 \uBB34\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/4b485c7850127476ef2d43b0b7f306a3d11cd1fa419af093199ead1c0b505c1e",
    id: "Booming Populace",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBC18\uC2E0\uC758 \uAD8C\uC704",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/d52c65b572cca6419b9d24262cb28ee944f63bb96bb7feb9b94638d57e29ece8",
    id: "Demigods Authority",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBCC4\uB4E4\uC758 \uC804\uC7C1",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5210fed7d60e38d6f4e82e41ab1361d62a9b7997cb69c7c8ec43fa9e9cace8fc",
    id: "War Among the Stars",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC7A5\uBCBD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8173ce4deda189ba48a4ff7b37d3566c508894470b1fee477bb5f8e2e669a1e4",
    id: "The Walls",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uAC1C\uCC99\uC790",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/63e76c990dfae9b6f5067895479a71abd2614b694b6ec5f7c66806d2be761143",
    id: "The Builder",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uADFC\uC811\uD55C \uBD09\uC6B0\uB9AC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/de4b451c33926943ef8b6fd3282144279d3531cf6c1d24d75075b56a56a3b07c",
    id: "The Closest Peak",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC274 \uC218 \uC5C6\uB294 \uBC18\uBCF5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/45bb9f192b12b8786fcd788c86df393c2e31733c1341bd98c6fc2a124a337493",
    id: "Restless Cycles",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uAC70\uC9D3 \uD76C\uB9DD",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/78bde6b56919962478bce062ab8d17b521d99bbc9680c226ec7a6ac3f8659516",
    id: "The False Hope",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC18C\uC720\uAD8C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7aa792eb706ff93249b9f7d05154d10ffc751123599a47ee35f7ca3a127c2f57",
    id: "The Claim",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC57C\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/059a6b89e0a6c1aa9291a2978aa7ed0170020abc216f160451527591204805da",
    id: "Ambition",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD611\uB825",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/50a44125e81017f01be357b6be7691fe4de90d1e818b04d95b26e7ba8d043f34",
    id: "Cooperation",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC544\uB984\uB2E4\uC6C0",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/824ecf307bab6c845ef8b95fbdc6d58bf869f6af584b2598fa44acad3b2b174f",
    id: "Beauty",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC544\uD2C0\uB77C\uC2A4\uC758 \uAF2D\uB300\uAE30",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e11024a83154c61bafba2e68a7588c86e88f0acd4077defe7b45ccb5cfe15930",
    id: "Atop the Atlas",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD638\uAE30\uC2EC",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/7ba43e97db0ef3de8c810e0159efc74a9d60f503b1e3f19d66ade5175fdd56e0",
    id: "Curiosity",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC804\uC7C1\uAD70\uC8FC\uC758 \uBD80\uC18D\uBB3C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/e4d91ee28d09f21b0770007dca20cf8af223d98fea63abdc0b190492206293e1",
    id: "The Warlords Annex",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBBF8\uC9C0\uC758 \uC601\uC5ED",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/f6c084203b5cd7d7ced2573c1cb41ee81c15e20eae95eb29ea51aafd75ebf815",
    id: "Territories Unknown",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC2E0\uC131\uC758 \uC2DC\uAC04",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/1bd14dc7b26d1ebd443ef2e2489039f0714d9308362604234758f26f26919539",
    id: "The Hour of Divinity",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uB05D\uC5C6\uB294 \uC9C0\uD3C9\uC120",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/980a2f4b0a6ab208d11d926ed88fe9b3f0759ef1f610856ac79e3bff65ab48f8",
    id: "The Vast Horizon",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC774\uB178\uC13C\uC2A4\uC758 \uD53C",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/8189b1a304e69a6ddd87c6e53c560bf6088b69c6531d11534cd67215175339db",
    id: "The Blood of Innocence",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBC24\uC758 \uB4F1\uD654",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/02024357c94df32128f767d88b12f3344b5fed229e5daead7549331a228f4acc",
    id: "The Night Lamp",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD398\uB780\uB450\uC2A4 \uB9F9\uC57D",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/3bd9a0a7b38a26a3aae0e83be6c84c73e85074eee8a247b3ae8346cd1d8d2331",
    id: "The Perandus Pact",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uBD80\uD328\uC758 \uACE8\uB3D9\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/6690e5aba498bcc17db09f6e6739987c8df185f9ecc02df77621526576cfca73",
    id: "Curio of Decay",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC18C\uBAA8\uC758 \uACE8\uB3D9\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/79a72f6dee7c1417ded0248744fb60ce8d6171c97d95a8c62739594fc5a5e4ab",
    id: "Curio of Consumption",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC7A0\uC7AC\uB825\uC758 \uACE8\uB3D9\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/5e595f8876075e2c503f8a5f006281d19e7fc88bd28ed82da3118d8978eb10e2",
    id: "Curio of Potential",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uD761\uC218\uC758 \uACE8\uB3D9\uD488",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/0e8199741fa7d94c1754f5926f4ffcdcbe50d7102391651c9ac1c07800fda717",
    id: "Curio of Absorption",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC758\uBBF8\uC758 \uBE5B",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/fb936f06e6edf15d24cae5af71cc1d7d0c7e493b5ac502a5145da985341e828d",
    id: "The Light of Meaning",
    weightValue: "1",
    defaultDustAmount: "2000",
    quantityDustAmount: "2400"
  },
  {
    name: "\uC57C\uC2B5",
    hover: "/cache1/kr/Poe_Data_UniqueItems_hover/ad5d4b07f88f01527a0bc4cddb375a4ec1203be23bdb2317ac2661ad8ecbbfb1",
    id: "Severed in Sleep",
    weightValue: "0.58",
    defaultDustAmount: "1160",
    quantityDustAmount: "1392"
  }
];
class UniqueItem {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "hover");
    __publicField(this, "weightValue");
    __publicField(this, "defaultDustAmount");
    __publicField(this, "quantityDustAmount");
    __publicField(this, "chaos");
    __publicField(this, "divine");
    __publicField(this, "selected");
    var _a, _b, _c;
    this.id = data.id;
    this.name = data.name;
    this.hover = "https://poedb.tw" + data.hover;
    this.weightValue = ((_a = data == null ? void 0 : data.weightValue) == null ? void 0 : _a.length) ? parseFloat(data.weightValue) : 0;
    this.defaultDustAmount = ((_b = data == null ? void 0 : data.defaultDustAmount) == null ? void 0 : _b.length) ? parseInt(data.defaultDustAmount) : 0;
    this.quantityDustAmount = ((_c = data == null ? void 0 : data.quantityDustAmount) == null ? void 0 : _c.length) ? parseInt(data.quantityDustAmount) : 0;
    this.chaos = 0;
    this.divine = 0;
    this.selected = false;
  }
  get dustPerChaos() {
    if (this.chaos > 0 && this.defaultDustAmount > 0) {
      return Math.round(this.defaultDustAmount / this.chaos);
    }
    return 0;
  }
  get dustPerDivine() {
    if (this.divine > 0 && this.defaultDustAmount > 0) {
      return Math.round(this.defaultDustAmount / this.divine);
    }
    return 0;
  }
  static async fetch() {
    const list = uniqueList.map((data) => new UniqueItem(data));
    function parsing(response2) {
      list.forEach((unique) => {
        if (unique.chaos !== 0) {
          return;
        }
        response2.forEach((item) => {
          const links = (item == null ? void 0 : item.links) || null;
          if (!links) {
            const id = unique.id.replace(/[\s']/g, "").toLowerCase();
            const name = item.name.replace(/[\s']/g, "").toLowerCase();
            if (name.indexOf(id) !== -1) {
              const chaos = (item == null ? void 0 : item.chaosValue) || 0;
              unique.divine = (item == null ? void 0 : item.divineValue) || 0;
              unique.chaos = chaos < 0 ? 1 : chaos;
            }
          }
        });
      });
    }
    let response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/unique/weapon/${"Keepers"}`);
    const weaponRes = response.data.lines;
    parsing(weaponRes);
    response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/unique/armour/${"Keepers"}`);
    const armourRes = response.data.lines;
    parsing(armourRes);
    response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/unique/accessory/${"Keepers"}`);
    const accessoryRes = response.data.lines;
    parsing(accessoryRes);
    response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/unique/jewel/${"Keepers"}`);
    const jewelRes = response.data.lines;
    parsing(jewelRes);
    return list.filter((u) => u.chaos !== 0);
  }
}
var UniqueDustPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-dd71ddc0"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "50px" }
};
const _hoisted_2 = { class: "loading-chaos" };
const _hoisted_3 = { class: "q-mx-auto unique-list" };
const _hoisted_4 = { class: "header row items-center" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\uC774\uB984", -1));
const _hoisted_6 = { class: "name" };
const _hoisted_7 = { class: "dust" };
const _hoisted_8 = { class: "dust" };
const _sfc_main = defineComponent({
  ...{
    name: "UniqueDustPage"
  },
  __name: "UniqueDustPage",
  setup(__props) {
    onMounted(async () => {
      await getMetaData();
    });
    const fetchLoading = ref(false);
    const list = ref([]);
    const sorts = ref({
      chaos: "",
      divine: "",
      dustPerChaos: "desc",
      dustPerDivine: "",
      defaultDustAmount: "",
      quantityDustAmount: ""
    });
    async function getMetaData() {
      fetchLoading.value = true;
      list.value = await UniqueItem.fetch();
      sortList("dustPerChaos", "desc");
      setTimeout(() => {
        fetchLoading.value = false;
      }, 1e3);
    }
    function sortList(field, type) {
      const oldType = sorts.value[field];
      forEach(sorts.value, (value, key) => {
        sorts.value[key] = "";
      });
      let sortType;
      if (type === "") {
        sortType = oldType === "desc" ? "asc" : "desc";
      } else {
        sortType = type;
      }
      sorts.value[field] = sortType;
      const _list = [...list.value];
      list.value = orderBy(_list, [field], [sortType]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QImg, {
                  src: "images/chaos.png",
                  width: "30px"
                })
              ])
            ], 512), [
              [vShow, fetchLoading.value]
            ])
          ]),
          _: 1
        }),
        createVNode(QPage, { class: "t-page" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", {
                  onClick: _cache[2] || (_cache[2] = withModifiers(($event) => sortList("chaos", ""), ["stop"]))
                }, [
                  createVNode(QImg, {
                    src: "images/chaos.png",
                    width: "20px",
                    height: "20px",
                    class: "t-mr-2"
                  }),
                  createTextVNode("\uCE74\uC624\uC2A4 "),
                  sorts.value.chaos == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => sortList("chaos", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.chaos == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => sortList("chaos", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  onClick: _cache[5] || (_cache[5] = withModifiers(($event) => sortList("divine", ""), ["stop"]))
                }, [
                  createVNode(QImg, {
                    src: "images/divine.png",
                    width: "20px",
                    height: "20px",
                    class: "t-mr-2"
                  }),
                  createTextVNode("\uB514\uBC14\uC778 "),
                  sorts.value.divine == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[3] || (_cache[3] = withModifiers(($event) => sortList("divine", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.divine == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[4] || (_cache[4] = withModifiers(($event) => sortList("divine", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  onClick: _cache[8] || (_cache[8] = withModifiers(($event) => sortList("dustPerChaos", ""), ["stop"]))
                }, [
                  createTextVNode(" \uAC00\uB8E8/\uCE74\uC624\uC2A4 "),
                  sorts.value.dustPerChaos == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[6] || (_cache[6] = withModifiers(($event) => sortList("dustPerChaos", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.dustPerChaos == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[7] || (_cache[7] = withModifiers(($event) => sortList("dustPerChaos", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  onClick: _cache[11] || (_cache[11] = withModifiers(($event) => sortList("dustPerDivine", ""), ["stop"]))
                }, [
                  createTextVNode(" \uAC00\uB8E8/\uB514\uBC14\uC778 "),
                  sorts.value.dustPerDivine == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[9] || (_cache[9] = withModifiers(($event) => sortList("dustPerDivine", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.dustPerDivine == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[10] || (_cache[10] = withModifiers(($event) => sortList("dustPerDivine", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  onClick: _cache[14] || (_cache[14] = withModifiers(($event) => sortList("defaultDustAmount", ""), ["stop"]))
                }, [
                  createTextVNode(" \uB9C8\uC11D\uD559 \uAC00\uB8E8 "),
                  sorts.value.defaultDustAmount == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[12] || (_cache[12] = withModifiers(($event) => sortList("defaultDustAmount", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.defaultDustAmount == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[13] || (_cache[13] = withModifiers(($event) => sortList("defaultDustAmount", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  onClick: _cache[17] || (_cache[17] = withModifiers(($event) => sortList("quantityDustAmount", ""), ["stop"]))
                }, [
                  createTextVNode(" Q.20% \uB9C8\uC11D\uD559 \uAC00\uB8E8 "),
                  sorts.value.quantityDustAmount == "asc" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[15] || (_cache[15] = withModifiers(($event) => sortList("quantityDustAmount", "desc"), ["stop"]))
                  }, "\u2B06\uFE0F")) : createCommentVNode("", true),
                  sorts.value.quantityDustAmount == "desc" ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: "t-ml-3 cursor-pointer",
                    onClick: _cache[16] || (_cache[16] = withModifiers(($event) => sortList("quantityDustAmount", "asc"), ["stop"]))
                  }, "\u2B07\uFE0F")) : createCommentVNode("", true)
                ])
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (unique, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "tr row items-center unique-item"
                }, [
                  createBaseVNode("div", _hoisted_6, toDisplayString(unique.name), 1),
                  createBaseVNode("div", null, toDisplayString(unique.chaos), 1),
                  createBaseVNode("div", null, toDisplayString(unique.divine), 1),
                  createBaseVNode("div", null, toDisplayString(unique.dustPerChaos), 1),
                  createBaseVNode("div", null, toDisplayString(unique.dustPerDivine), 1),
                  createBaseVNode("div", _hoisted_7, toDisplayString(unique.defaultDustAmount.toLocaleString()), 1),
                  createBaseVNode("div", _hoisted_8, toDisplayString(unique.quantityDustAmount.toLocaleString()), 1)
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
var UniqueDustPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd71ddc0"]]);
export { UniqueDustPage as default };
