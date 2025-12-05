var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { s as defineComponent, v as onMounted, o as onBeforeUnmount, r as ref, y as openBlock, z as createBlock, A as withCtx, C as createBaseVNode, F as toDisplayString, B as createVNode, Z as QIcon, aa as createElementBlock, am as renderList, an as normalizeClass, ab as Fragment, ad as pushScopeId, ae as popScopeId } from "./index.js";
import { Q as QCheckbox } from "./QCheckbox.js";
import { Q as QImg } from "./QImg.js";
import { Q as QPage } from "./QPage.js";
import { u as useInterval } from "./use-interval.js";
import { a as axios } from "./axios2.js";
import { u as useQuasar } from "./use-quasar.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
import { o as orderBy } from "./orderBy.js";
import "./use-dark.js";
class Beast {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "chaos");
    __publicField(this, "divine");
    __publicField(this, "regExp");
    __publicField(this, "selected");
    this.id = data.id || null;
    this.name = (data == null ? void 0 : data.detailsId) ? getBeastName(data.detailsId) : null;
    this.chaos = ((data == null ? void 0 : data.chaosValue) || 0).toFixed(1);
    this.divine = ((data == null ? void 0 : data.divineValue) || 0).toFixed(2);
    this.regExp = (data == null ? void 0 : data.detailsId) ? getRegExp(data.detailsId) : "";
    this.selected = false;
  }
}
function getBeastName(id) {
  let beastName = id;
  beastInfos.forEach((b) => {
    if (b.id === id) {
      beastName = b.name;
    }
  });
  return beastName;
}
function getRegExp(id) {
  let regExp = "";
  beastInfos.forEach((b) => {
    if (b.id === id) {
      regExp = b.regExp;
    }
  });
  return regExp;
}
const beastInfos = [
  { id: "black-morrigan", name: "\uAC80\uC740 \uBAA8\uB9AC\uAC74", regExp: "\uC740.\uBAA8" },
  { id: "fenumus-first-of-the-night", name: "\uBC24\uC758 \uCD5C\uCD08, \uD398\uB204\uBB34\uC2A4", regExp: "\uBC24.*\uD398" },
  { id: "saqawine-retch", name: "\uC0AC\uCE74\uC648 \uB808\uCE58", regExp: "\uC648.\uB808" },
  { id: "saqawine-rhex", name: "\uC0AC\uCE74\uC648 \uB809\uC2A4", regExp: "\uC648.\uB809" },
  { id: "saqawine-rhoa", name: "\uC0AC\uCE74\uC648 \uB85C\uC544", regExp: "\uC648.\uB85C" },
  { id: "saqawine-vulture", name: "\uC0AC\uCE74\uC648 \uC2DC\uCCB4\uB9E4", regExp: "\uC648.\uC2DC" },
  { id: "saqawine-cobra", name: "\uC0AC\uCE74\uC648 \uCF54\uBE0C\uB77C", regExp: "\uC648.\uCF54" },
  { id: "saqawine-chimeral", name: "\uC0AC\uCE74\uC648 \uD0A4\uBA54\uB784", regExp: "\uC648.\uD0A4" },
  { id: "saqawine-blood-viper", name: "\uC0AC\uCE74\uC648 \uD53C \uB3C5\uC0AC", regExp: "\uC648.\uD53C" },
  { id: "craiceann-first-of-the-deep", name: "\uC2EC\uD574\uC758 \uCD5C\uCD08, \uD06C\uB77C\uCE78", regExp: "\uC2EC.*\uD06C" },
  { id: "wild-brambleback", name: "\uC57C\uC0DD \uAC00\uC2DC\uB098\uBB34\uB4F1", regExp: "\uC0DD.\uAC00" },
  { id: "wild-bristle-matron", name: "\uC57C\uC0DD \uD138\uC9D0\uC2B9 \uC5B4\uBBF8", regExp: "\uC0DD.\uD138" },
  { id: "wild-hellion-alpha", name: "\uC57C\uC0DD \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uC0DD.\uD5EC" },
  { id: "primal-cystcaller", name: "\uC6D0\uC2DC \uB0AD\uC885\uC18C\uD658\uC0AC", regExp: "\uC2DC.\uB0AD" },
  { id: "primal-rhex-matriarch", name: "\uC6D0\uC2DC \uB809\uC2A4 \uC5B4\uBBF8", regExp: "\uC2DC.\uB809" },
  { id: "primal-crushclaw", name: "\uC6D0\uC2DC \uBC15\uC0B4\uBC1C\uD1B1", regExp: "\uC2DC.\uBC15" },
  { id: "craicic-watcher", name: "\uD06C\uB77C\uCE78\uC758 \uAC10\uC2DC\uC790", regExp: "\uC758.\uAC10" },
  { id: "craicic-spider-crab", name: "\uD06C\uB77C\uCE78\uC758 \uAC70\uBBF8\uAC8C", regExp: "\uC758.\uAC70" },
  { id: "craicic-sand-spitter", name: "\uD06C\uB77C\uCE78\uC758 \uBAA8\uB798 \uC804\uAC08", regExp: "\uC758.\uBAA8" },
  { id: "craicic-shield-crab", name: "\uD06C\uB77C\uCE78\uC758 \uBC29\uD328\uAC8C", regExp: "\uC758.\uBC29" },
  { id: "craicic-vassal", name: "\uD06C\uB77C\uCE78\uC758 \uBD09\uC2E0", regExp: "\uC758.\uBD09" },
  { id: "craicic-savage-crab", name: "\uD06C\uB77C\uCE78\uC758 \uC0AC\uB098\uC6B4 \uAC8C", regExp: "\uC758.\uC0AC" },
  { id: "craicic-squid", name: "\uD06C\uB77C\uCE78\uC758 \uC624\uC9D5\uC5B4", regExp: "\uC758.\uC624" },
  { id: "craicic-maw", name: "\uD06C\uB77C\uCE78\uC758 \uD070\uD131\uAC1C\uAD6C\uB9AC", regExp: "\uC758.\uD070" },
  { id: "craicic-chimeral", name: "\uD06C\uB77C\uCE78\uC758 \uD0A4\uBA54\uB784", regExp: "\uC758.\uD0A4" },
  { id: "fenumal-widow", name: "\uD398\uB204\uBB34\uC2A4 \uACFC\uBD80 \uAC70\uBBF8", regExp: "\uC2A4.\uACFC" },
  { id: "fenumal-scrabbler", name: "\uD398\uB204\uBB34\uC2A4 \uB11D\uB9C8\uC8FC\uC774", regExp: "\uC2A4.\uB11D" },
  { id: "fenumal-queen", name: "\uD398\uB204\uBB34\uC2A4 \uC5EC\uC655", regExp: "\uC2A4.\uC5EC" },
  { id: "fenumal-plagued-arachnid", name: "\uD398\uB204\uBB34\uC2A4 \uC5ED\uBCD1 \uAC78\uB9B0 \uAC70\uBBF8\uB958", regExp: "\uC2A4.\uC5ED" },
  { id: "fenumal-hybrid-arachnid", name: "\uD398\uB204\uBB34\uC2A4 \uC7A1\uC885 \uAC70\uBBF8\uB958", regExp: "\uC2A4.\uC7A1" },
  { id: "fenumal-scorpion", name: "\uD398\uB204\uBB34\uC2A4 \uC804\uAC08", regExp: "\uC2A4.\uC804" },
  { id: "fenumal-devourer", name: "\uD398\uB204\uBB34\uC2A4 \uD3EC\uC2DD\uC790", regExp: "\uC2A4.\uD3EC" },
  { id: "farric-gargantuan", name: "\uD398\uB8F0 \uAC00\uB974\uAC15\uD280\uC544", regExp: "\uB8F0.\uAC00" },
  { id: "farric-ursa", name: "\uD398\uB8F0 \uACF0", regExp: "\uB8F0.\uACF0" },
  { id: "farric-pit-hound", name: "\uD398\uB8F0 \uAD6C\uB369\uC774 \uC0AC\uB0E5\uAC1C", regExp: "\uB8F0.\uAD6C" },
  { id: "farric-magma-hound", name: "\uD398\uB8F0 \uB9C8\uADF8\uB9C8 \uC0AC\uB0E5\uAC1C", regExp: "\uB8F0.\uB9C8" },
  { id: "farric-chieftain", name: "\uD398\uB8F0 \uBD80\uC871\uC7A5", regExp: "\uB8F0.\uBD80" },
  { id: "farric-frost-hellion-alpha", name: "\uD398\uB8F0 \uC11C\uB9AC \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uB8F0.\uC11C" },
  { id: "farric-lynx-alpha", name: "\uD398\uB8F0 \uC2A4\uB77C\uC18C\uB2C8 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uB8F0.\uC2A4" },
  { id: "farric-goatman", name: "\uD398\uB8F0 \uC5FC\uC18C\uC778\uAC04", regExp: "\uB8F0.\uC5FC" },
  { id: "farric-ape", name: "\uD398\uB8F0 \uC720\uC778\uC6D0", regExp: "\uB8F0.\uC720" },
  { id: "farric-tiger-alpha", name: "\uD398\uB8F0 \uD638\uB791\uC774 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uB8F0.\uD638" },
  { id: "farric-flame-hellion-alpha", name: "\uD398\uB8F0 \uD654\uC5FC \uD5EC\uB9AC\uC628 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uB8F0.\uD654" },
  { id: "farric-taurus", name: "\uD398\uB8F0 \uD669\uC18C\uC790\uB9AC", regExp: "\uB8F0.\uD669" },
  { id: "farric-goliath", name: "\uD398\uB8F0\uC758 \uACE8\uB9AC\uC557", regExp: "\uC758.\uACE8" },
  { id: "farric-wolf-alpha", name: "\uD398\uB8F0\uC758 \uB291\uB300 \uC6B0\uB450\uBA38\uB9AC", regExp: "\uC758.\uB291" },
  { id: "farrul-first-of-the-plains", name: "\uD3C9\uC57C\uC758 \uCD5C\uCD08, \uD398\uB8F0", regExp: "\uD3C9.*\uD398" },
  { id: "saqawal-first-of-the-sky", name: "\uD558\uB298\uC758 \uCD5C\uCD08, \uC0AC\uCE74\uC648", regExp: "\uD558.*\uC0AC" },
  { id: "vivid-watcher", name: "\uD608\uAE30 \uAC10\uC2DC\uC790", regExp: "\uAE30.\uAC10" },
  { id: "vivid-vulture", name: "\uD608\uAE30 \uC2DC\uCCB4\uB9E4", regExp: "\uAE30.\uC2DC" },
  { id: "vivid-abberarach", name: "\uD608\uAE30 \uC560\uBC84\uB77C\uB77C\uD06C", regExp: "\uAE30.\uC560" }
];
var BeastsPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-b6b70646"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row items-center no-wrap reg-exp-box q-mx-auto q-mb-lg" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "t-mr-10",
  style: { "font-size": "24px" }
}, "\u{1F44D}\u{1F3FB}", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "q-mr-md",
  style: { "font-size": "20px" }
}, " \u{1F98D}\u{1F982}\u{1F438} ", -1));
const _hoisted_4 = { class: "row items-center col-fit" };
const _hoisted_5 = { class: "row items-center no-wrap reg-exp-box q-mx-auto q-mb-lg" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "t-mr-10",
  style: { "font-size": "24px" }
}, "\u{1F44E}\u{1F3FB}", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "q-mr-md",
  style: { "font-size": "20px" }
}, " \u{1F645}\u{1F3FB}\u{1F4A3}\u{1F5D1}\uFE0F ", -1));
const _hoisted_8 = { class: "row items-center col-fit text-red-4" };
const _hoisted_9 = {
  class: "q-mx-auto",
  style: { "width": "300px", "padding-bottom": "200px" }
};
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "q-ml-sm" };
const _hoisted_12 = { class: "text-right col-grow" };
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
    const $q = useQuasar();
    const api = axios.create();
    const { registerInterval, removeInterval } = useInterval();
    const list = ref([]);
    const preciousRegExpString = ref("");
    const garbageRegExpString = ref("");
    async function getMetaData() {
      const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Beast/${"Keepers"}`);
      const res = response.data.lines;
      const beastIds = beastInfos.map((b) => b.id);
      res.forEach((data) => {
        const id = data.detailsId;
        if (beastIds.includes(id)) {
          list.value.push(new Beast(data));
        }
      });
    }
    function pricelessClass(chaos) {
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
      } else if (value >= 10) {
        return "";
      }
      return "text-grey-7";
    }
    function onBeastClicked(beast) {
      beast.selected = !beast.selected;
      makeRegExp();
    }
    function makeRegExp() {
      makePreciousRegExp();
      makeGarbageRegExp();
    }
    function makePreciousRegExp() {
      const precious = list.value.filter((b) => b.selected);
      const preciousRegExps = orderBy(precious, ["regExp"]).map((b) => b.regExp);
      preciousRegExpString.value = getRegGroups(preciousRegExps);
    }
    function makeGarbageRegExp() {
      const precious = list.value.filter((b) => b.selected);
      if (!precious.length) {
        garbageRegExpString.value = "";
      } else {
        const garbage = list.value.filter((b) => !b.selected);
        const garbageRegExps = orderBy(garbage, ["regExp"]).map((b) => b.regExp);
        garbageRegExpString.value = getRegGroups(garbageRegExps);
      }
    }
    function getRegGroups(list2) {
      const groups = [];
      list2.forEach((g) => {
        const regExps = g.split(".");
        const group = groups.find((_g) => _g.t === regExps[0]);
        if (group) {
          group.s.push(regExps[1]);
        } else {
          groups.push({ t: regExps[0], s: [regExps[1]] });
        }
      });
      const regGroups = [];
      groups.forEach((g) => {
        if (g.s.length > 1) {
          regGroups.push(`${g.t}.[${g.s.join("")}]`);
        } else {
          regGroups.push(`${g.t}.${g.s}`);
        }
      });
      return regGroups.join("|");
    }
    function copyPreciousRegExp() {
      copyClipboard(preciousRegExpString.value);
    }
    function copyGarbageRegExp() {
      copyClipboard(garbageRegExpString.value);
    }
    function copyClipboard(value) {
      if (value && value.length > 0) {
        navigator.clipboard.writeText(value).then(() => {
          $q.notify({
            position: "top",
            color: "light-blue-7",
            message: "\uC815\uADDC\uC2DD\uC774 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
          });
        });
      } else {
        $q.notify({
          position: "top",
          color: "negative",
          message: "\uC57C\uC218\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, toDisplayString(preciousRegExpString.value), 1),
            createVNode(QIcon, {
              name: "sym_r_content_copy",
              color: "white",
              size: "24px",
              class: "cursor-pointer",
              onClick: copyPreciousRegExp
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            _hoisted_7,
            createBaseVNode("div", _hoisted_8, toDisplayString(garbageRegExpString.value), 1),
            createVNode(QIcon, {
              name: "sym_r_content_copy",
              color: "white",
              size: "24px",
              class: "cursor-pointer",
              onClick: copyGarbageRegExp
            })
          ]),
          createBaseVNode("div", _hoisted_9, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (beast, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(["row items-center q-mb-sm cursor-pointer", pricelessClass(beast.chaos)]),
                onClick: ($event) => onBeastClicked(beast)
              }, [
                createVNode(QCheckbox, {
                  modelValue: beast.selected,
                  "onUpdate:modelValue": [($event) => beast.selected = $event, makeRegExp],
                  dense: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createBaseVNode("div", _hoisted_11, toDisplayString(beast.name), 1),
                createBaseVNode("div", _hoisted_12, toDisplayString(beast.chaos), 1),
                createVNode(QImg, {
                  src: "images/chaos.png",
                  class: "q-ml-xs",
                  width: "20px"
                })
              ], 10, _hoisted_10);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
});
var BeastsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6b70646"]]);
export { BeastsPage as default };
