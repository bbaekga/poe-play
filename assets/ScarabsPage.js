import { a as computed, L as onDeactivated, o as onBeforeUnmount, M as vmIsDestroyed, g as getCurrentInstance, c as createComponent, r as ref, k as isRuntimeSsrPreHydration, v as onMounted, h, T as Transition, d as hSlot, N as QSpinner, w as watch, O as isKeyCode, P as prevent, G as nextTick, R as addEvt, S as cleanEvt, H as listenOpts, U as vmHasRouter, n as onUnmounted, V as injectProp, W as Teleport, X as createGlobalNode, Y as removeGlobalNode, Z as client, _ as stopAndPrevent, s as defineComponent, y as openBlock, $ as createElementBlock, B as createVNode, C as createBaseVNode, a0 as Fragment, D as createTextVNode, a1 as toDisplayString, a2 as createCommentVNode, a3 as normalizeClass, A as withCtx, a4 as renderList, z as createBlock, a5 as withDirectives, a6 as vShow, E as normalizeStyle, a7 as pushScopeId, a8 as popScopeId } from "./index.js";
import { c as clearSelection, r as removeFocusWaitFlag, a as addFocusWaitFlag, _ as _export_sfc, Q as QCheckbox } from "./plugin-vue_export-helper.js";
import { Q as QPage } from "./QPage.js";
import { a as axios } from "./axios2.js";
import { g as getScrollbarWidth, a as getScrollTarget } from "./scroll.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
function useTimeout() {
  let timer = null;
  const vm = getCurrentInstance();
  function removeTimeout() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }
  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      removeTimeout();
      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  };
}
const defaultRatio = 1.7778;
var QImg = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();
    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();
    const placeholderImg = computed(() => props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null);
    const errorImg = computed(() => props.errorSrc !== void 0 ? { src: props.errorSrc, __qerror: true } : null);
    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition q-img__image--`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    function setLoading() {
      removeLoadShowTimeout();
      if (props.loadingShowDelay === 0) {
        isLoading.value = true;
        return;
      }
      registerLoadShowTimeout(() => {
        isLoading.value = true;
      }, props.loadingShowDelay);
    }
    function clearLoading() {
      removeLoadShowTimeout();
      isLoading.value = false;
    }
    function onLoad({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();
        naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
        waitForCompleteness(target, 1);
      }
    }
    function waitForCompleteness(target, count) {
      if (count === 1e3 || vmIsDestroyed(vm) === true)
        return;
      if (target.complete === true) {
        onReady(target);
      } else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(target) {
      if (vmIsDestroyed(vm) === true)
        return;
      position.value = position.value ^ 1;
      images[position.value].value = null;
      clearLoading();
      if (target.getAttribute("__qerror") !== "true") {
        hasError.value = false;
      }
      emit("load", target.currentSrc || target.src);
    }
    function onError(err) {
      removeLoadTimeout();
      clearLoading();
      hasError.value = true;
      images[position.value].value = errorImg.value;
      images[position.value ^ 1].value = placeholderImg.value;
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        Object.assign(data, {
          class: data.class + "current",
          onLoad,
          onError
        });
      } else {
        data.class += "loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value === false) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    {
      let watchSrc = function() {
        watch(
          () => props.src || props.srcset || props.sizes ? {
            src: props.src,
            srcset: props.srcset,
            sizes: props.sizes
          } : null,
          (imgProps) => {
            removeLoadTimeout();
            hasError.value = false;
            if (imgProps === null) {
              clearLoading();
              images[position.value ^ 1].value = placeholderImg.value;
            } else {
              setLoading();
            }
            images[position.value].value = imgProps;
          },
          { immediate: true }
        );
      };
      if (isRuntimeSsrPreHydration.value === true) {
        onMounted(watchSrc);
      } else {
        watchSrc();
      }
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (images[0].value !== null) {
        content.push(
          getImage(0)
        );
      }
      if (images[1].value !== null) {
        content.push(
          getImage(1)
        );
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        key: "main",
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
function useInterval() {
  let timer = null;
  const vm = getCurrentInstance();
  function removeInterval() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }
  onDeactivated(removeInterval);
  onBeforeUnmount(removeInterval);
  return {
    removeInterval,
    registerInterval(fn, delay) {
      removeInterval();
      if (vmIsDestroyed(vm) === false) {
        timer = setInterval(fn, delay);
      }
    }
  };
}
const Titanic = {
  icon: "",
  list: Array(
    { id: "titanic-scarab", name: "\uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uBB34\uB9AC \uADDC\uBAA8 \uC99D\uAC00 1%\uB2F9 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568, \uD53C\uD574, \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC758 \uD76C\uADC0\uB3C4 \uBC0F \uC218\uB7C9 2% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "titanic-scarab-of-treasures", name: "\uBCF4\uBB3C\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBCF4\uC0C1 2\uAC1C \uCD94\uAC00 \uBCF4\uC720", "\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568 30% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "titanic-scarab-of-legend", name: "\uC804\uC124\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBAAC\uC2A4\uD130 \uC18D\uC131 2\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 }
  )
};
const Sulphite = {
  icon: "",
  list: Array(
    { id: "sulphite-scarab", name: "\uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB2C8\uCF54 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "sulphite-scarab-of-fumes", name: "\uC5F0\uAE30\uC758 \uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC544\uD669\uC0B0\uC5FC\uC774 \uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30 \uBC29\uCD9C", "\uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30\uC758 \uC601\uD5A5\uC744 \uBC1B\uB294 \uC801\uC740 \uC544\uC774\uD15C \uC218\uB7C9 500% \uC99D\uAC00", "\uC9C0\uB3C4 \uB0B4 \uC544\uD669\uC0B0\uC5FC\uC744 \uB0A8\uB3D9\uC11D \uAD11\uC0B0\uC758 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Divination = {
  icon: "",
  list: Array(
    { id: "divination-scarab-of-the-cloister", name: "\uD68C\uB791\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790 \uBB34\uB9AC 8~12\uAC1C\uAC00 \uCD94\uAC00\uB85C \uB4F1\uC7A5", "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790\uAC00 \uCE74\uB4DC \uBB36\uC74C\uC744 \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960 1% \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "divination-scarab-of-plenty", name: "\uD48D\uBD80\uD568\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uCD5C\uB300 3\uAC1C \uC810\uC220 \uCE74\uB4DC\uB97C \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960 800% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "divination-scarab-of-pilfering", name: "\uD6D4\uCCD0\uB0C4\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC810\uC220 \uCE74\uB4DC\uB97C \uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8", "\uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8\uD55C \uC810\uC220 \uCE74\uB4DC\uAC00 \uB9CE\uC744\uC218\uB85D", "\uB09C\uC774\uB3C4\uAC00 \uB192\uC544\uC9C0\uACE0 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uC8FC\uB294 \uD53C\uD574 \uC99D\uAC00", "\uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4 \uCC98\uCE58 \uC2DC \uAC15\uD0C8\uD55C \uBAA8\uB4E0 \uC810\uC220 \uCE74\uB4DC \uBCF5\uC81C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Anarchy = {
  icon: "",
  list: Array(
    { id: "anarchy-scarab", name: "\uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0C8\uC8FC \uC720\uBC30\uC790 4\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "anarchy-scarab-of-gigantification", name: "\uBE44\uB300\uD654\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 30%\uC758 \uD655\uB960\uB85C \uD0C8\uC8FC \uAC70\uC778\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "anarchy-scarab-of-partnership", name: "\uD611\uB825\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uC30D\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ritual = {
  icon: "",
  list: Array(
    { id: "ritual-scarab-of-selectiveness", name: "\uC120\uD0DD\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 \uBB34\uC791\uC704 \uBCC0\uACBD\uD560 \uB54C \uCCAB 2\uD68C\uB294 \uBE44\uC6A9 \uC5C6\uC74C", "\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 1\uD68C \uCD94\uAC00\uB85C \uBB34\uC791\uC704 \uBCC0\uACBD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "ritual-scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC774 \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 \uC0DD\uC131", "\uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88\uC774 \uC8FC\uBCC0\uC758 \uD50C\uB808\uC774\uC5B4\uB4E4\uC5D0\uAC8C \uACF5\uBB3C \uC810\uC218 \uD68D\uB4DD\uB7C9 70% \uC99D\uAC00 \uBD80\uC5EC"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ritual-scarab-of-abundance", name: "\uD48D\uBD80\uD568\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD\uC73C\uB85C \uC5BB\uB294 \uD5CC\uC815\uD488 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 }
  )
};
const Harvest = {
  icon: "",
  list: Array(
    { id: "harvest-scarab", name: "\uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-doubling", name: "\uBCF5\uC81C\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC0DD\uAE30\uAC00 \uBCF5\uC81C\uB428", "\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uD3ED"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-cornucopia", name: "\uD48D\uC694\uC758 \uBFD4\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232\uC774 \uB4F1\uC7A5\uD560 \uC2DC, \uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC2E0\uC131\uD55C \uC232\uC5D0 \uAC01 \uC720\uD615\uC758 4\uB4F1\uAE09 \uC528\uC557 \uCD5C\uB300 1\uAC1C\uC529 \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Bestiary = {
  icon: "",
  list: Array(
    { id: "bestiary-scarab", name: "\uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC544\uC778\uD558\uB974 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "bestiary-scarab-of-the-herd", name: "\uB5BC\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC544\uC778\uD558\uB974\uAC00 \uB4F1\uC7A5\uD558\uB294 \uC9C0\uC5ED\uC5D0 \uBD89\uC740 \uC57C\uC218 5\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "bestiary-scarab-of-duplicating", name: "\uBCF5\uC81C\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uD3EC\uD68D\uD558\uB294 \uC57C\uC218\uC758 \uBCF5\uC81C\uBCF8 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Influencing = {
  icon: "",
  list: Array(
    { id: "influencing-scarab-of-the-shaper", name: "\uC250\uC774\uD37C\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC250\uC774\uD37C \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-the-elder", name: "\uC5D8\uB354\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5D8\uB354 \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-hordes", name: "\uAD70\uB2E8\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC601\uD5A5\uC744 \uBC1B\uC740 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uC758 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-conversion", name: "\uC804\uD5A5\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC250\uC774\uD37C \uC218\uD638\uC790, \uC5D8\uB354 \uC218\uD638\uC790, \uC815\uBCF5\uC790 \uB610\uB294 \uACE0\uC720 \uACB0\uD569 \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Harbinger = {
  icon: "",
  list: Array(
    { id: "harbinger-scarab", name: "\uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790 3\uBA85 \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 },
    { id: "harbinger-scarab-of-obelisks", name: "\uC624\uBCA8\uB9AC\uC2A4\uD06C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uAC15\uD68C\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C \uC0DD\uC131", "\uAC15\uD68C\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C\uB294 \uD30C\uAD34\uB420 \uC2DC \uC77C\uC815 \uD655\uB960\uB85C \uD654\uD3D0 \uD30C\uD3B8\uC744 \uB5A8\uC5B4\uB728\uB9BC"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-regency", name: "\uC12D\uC815\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uAC15\uB825\uD55C \uC120\uAD6C\uC790 \uBCF4\uC2A4\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-warhoards", name: "\uC804\uC7C1\uBE44\uCD95\uBB3C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uD654\uD3D0 \uD30C\uD3B8\uC774 \uBCF5\uC81C\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Incursion = {
  icon: "",
  list: Array(
    { id: "incursion-scarab", name: "\uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC54C\uBC14 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "incursion-scarab-of-invasion", name: "\uCE68\uB7B5\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAE30\uC2B5 \uBAAC\uC2A4\uD130 \uBB34\uB9AC 12~16\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "incursion-scarab-of-champions", name: "\uC6A9\uC0AC\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["35%\uC758 \uD655\uB960\uB85C \uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBAA8\uB4E0 \uBAAC\uC2A4\uD130\uAC00 \uB9C8\uBC95 \uC774\uC0C1\uC73C\uB85C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBB34\uB9AC \uADDC\uBAA8 15% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "incursion-scarab-of-timelines", name: "\uC2DC\uAC04\uC120\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uCC98\uCE58\uD558\uB294 \uCD5C\uC885 \uAC74\uCD95\uAC00\uAC00 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC744 \uB5A8\uC5B4\uB728\uB9BC", "\uC9C0\uC5ED\uC5D0\uC11C \uB5A8\uC5B4\uC9C0\uB294 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC774 \uD604\uC7AC \uC0AC\uC6D0 \uAD6C\uC870\uC5D0 \uAE30\uBC18\uD574 \uC0DD\uC131\uB418\uC9C0\uB9CC, \uBC29\uC758 \uB4F1\uAE09\uC740 \uBB34\uC791\uC704 \uBCC0\uACBD"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Betrayal = {
  icon: "",
  list: Array(
    { id: "betrayal-scarab", name: "\uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC900 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-intelligence", name: "\uC9C0\uB2A5\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uB4F1\uC7A5\uD558\uB294 \uBD88\uBA78\uC790 \uC5F0\uD569 \uB300\uC0C1\uC73C\uB85C\uBD80\uD130 \uC5BB\uB294 \uC815\uBCF4 150% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-reinforcements", name: "\uBCF4\uAC15\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBD88\uBA78\uC790 \uC5F0\uD569 \uB2E8\uC6D0\uC774 \uC9C0\uC6D0\uAD70\uC744 \uB3D9\uBC18\uD560 \uD655\uB960 50% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Domination = {
  icon: "",
  list: Array(
    { id: "domination-scarab", name: "\uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 },
    { id: "domination-scarab-of-apparitions", name: "\uC720\uB839\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC720\uB839 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "domination-scarab-of-evolution", name: "\uC9C4\uD654\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC9C4\uD654\uC758 \uC131\uC18C 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "domination-scarab-of-terrors", name: "\uACF5\uD3EC\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC131\uC18C\uB97C 1\uB9C8\uB9AC\uC758 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uAC00 \uBC29\uC5B4", "\uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uC774 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Torment = {
  icon: "",
  list: Array(
    { id: "torment-scarab", name: "\uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC0AC\uB85C\uC7A1\uD78C \uBAAC\uC2A4\uD130 \uCC98\uCE58\uC2DC \uC9C0\uC5ED \uB0B4 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 25%\uC758 \uD655\uB960\uB85C \uD574\uBC29"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "torment-scarab-of-peculiarity", name: "\uAE30\uC774\uD568\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uB0B4 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 \uD2B9\uC774\uD55C \uBCC0\uD654\uD615\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "torment-scarab-of-possession", name: "\uC0AC\uB85C\uC7A1\uD798\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 1/4 \uD655\uB960\uB85C \uCD5C\uB300 1\uB9C8\uB9AC\uC758 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC5D0\uAC8C \uC0AC\uB85C\uC7A1\uD798"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Cartography = {
  icon: "",
  list: Array(
    { id: "cartography-scarab-of-escalation", name: "\uC99D\uB300\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC601\uD5A5\uC744 \uC8FC\uB294 \uC9C0\uB3C4 \uC18D\uC131 \uD558\uB098\uB2F9 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4 10% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-risk", name: "\uC704\uD5D8\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBB34\uC791\uC704 \uC18D\uC131 1\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "cartography-scarab-of-corruption", name: "\uD0C0\uB77D\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uBE44-\uACE0\uC720 \uC9C0\uB3C4\uAC00 \uC18D\uC131 8\uAC1C\uAC00 \uBD80\uC5EC\uB41C \uD0C0\uB77D\uD55C \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-the-multitude", name: "\uAD70\uC911\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC774 \uB192\uC740 \uBAAC\uC2A4\uD130\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uBB34\uB9AC\uAC00 8~12\uAC1C \uB4F1\uC7A5", "\uC774\uB7EC\uD55C \uBAAC\uC2A4\uD130\uB294 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC9C0\uB3C4 \uC218\uB7C9\uC774 300% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Beyond = {
  icon: "",
  list: Array(
    { id: "beyond-scarab", name: "\uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uC11C\uB85C \uAC00\uAE4C\uC774 \uC788\uB294 \uC801\uC744 \uCC98\uCE58\uD558\uBA74 \uC774\uACC4 \uBAAC\uC2A4\uD130\uB97C \uBD88\uB7EC\uC634"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-haemophilia", name: "\uD608\uC6B0\uBCD1\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC758 \uBCD1\uD569 \uBC94\uC704 30% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "beyond-scarab-of-resurgence", name: "\uC7AC\uAE30\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB0AE\uC740 \uC0DD\uBA85\uB825 \uC0C1\uD0DC\uC5D0\uC11C \uACA9\uC559\uD568", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uB354\uB7FD\uD600\uC9C4 \uD654\uD3D0 100% \uC99D\uAC00", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC774 \uACE0\uC720 \uBCF4\uC2A4\uB97C \uC0DD\uC131\uD560 \uD655\uB960 30% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-the-invasion", name: "\uCE68\uB7B5\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC774\uACC4 \uD3EC\uD0C8 8~12\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ambush = {
  icon: "",
  list: Array(
    { id: "ambush-scarab", name: "\uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0 5\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "ambush-scarab-of-hidden-compartments", name: "\uBE44\uBC00 \uACF5\uAC04\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uB97C 15%\uC758 \uD655\uB960\uB85C \uB2E4\uC2DC \uC5F4 \uC218 \uC788\uC74C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-potency", name: "\uC7A0\uC7AC\uB825\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uC758 \uBE44\uACE0\uC815 \uC18D\uC131 \uD6A8\uACFC 75% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-containment", name: "\uBD09\uC1C4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB2E4\uC218\uC758 \uAE08\uACE0 \uCD94\uAC00", "\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uB9E4\uBCF5 \uC911"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-discernment", name: "\uBD84\uBCC4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uAC00 \uBCF4\uB2E4 \uD76C\uADC0\uD55C \uC885\uB958\uC77C \uD655\uB960\uC774 \uB192\uC544\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ultimatum = {
  icon: "",
  list: Array(
    { id: "ultimatum-scarab", name: "\uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-bribing", name: "\uB9E4\uC218\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uACB0\uC804 \uBAAC\uC2A4\uD130\uAC00 \uC8FC\uB294 \uACBD\uD5D8\uCE58 150% \uC99D\uAC00", "\uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uB77C\uC6B4\uB4DC 2\uAC1C\uB97C \uCD94\uAC00\uB85C \uC644\uB8CC\uD55C \uAC83\uCC98\uB7FC \uBCF4\uC0C1\uC744 \uC90C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "ultimatum-scarab-of-dueling", name: "\uACB0\uD22C\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uD56D\uC0C1 \uACE0\uC720 \uBCF4\uC2A4\uB85C \uC774\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-catalysing", name: "\uAE30\uD3ED\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uBCF4\uC0C1\uC73C\uB85C \uAE30\uD3ED\uC81C\uB9CC \uD68D\uB4DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-inscription", name: "\uC0C8\uAE40\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAE30\uD3ED\uC81C\uB97C \uC8FC\uB294 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 \uBCF4\uC0C1\uC774 \uAE30\uD3ED\uC81C\uAC00 \uC544\uB2CC \uC0C8\uACA8\uC9C4 \uACB0\uC804\uC744 \uC90C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Expedition = {
  icon: "",
  list: Array(
    { id: "expedition-scarab", name: "\uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-runefinding", name: "\uB8EC \uD0D0\uC0C9\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uB8EC \uBAAC\uC2A4\uD130 \uD45C\uC2DC\uBB3C \uC218\uB7C9 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "expedition-scarab-of-verisium-powder", name: "\uBCA0\uB9AC\uC2DC\uC6C0 \uD654\uC57D\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uD3ED\uBC1C\uBB3C \uC218\uB7C9 20% \uC99D\uAC00", "\uD3ED\uBC1C\uBB3C \uBC18\uACBD 80 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-archaeology", name: "\uACE0\uACE0\uD559\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uC720\uBB3C\uC5D0 \uC811\uBBF8\uC5B4 \uBC0F \uC811\uB450\uC5B4 2\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Delirium = {
  icon: "",
  list: Array(
    { id: "delirium-scarab", name: "\uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD658\uC601\uC758 \uAC70\uC6B8 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-mania", name: "\uAD11\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uD658\uC601 \uBCF4\uC0C1 \uB9C9\uB300\uAC00 100% \uBE68\uB9AC \uCC44\uC6CC\uC9D0", "\uC9C0\uC5ED \uB0B4 \uD658\uC601\uC774 \uAC70\uC6B8\uACFC\uC758 \uAC70\uB9AC\uC5D0 \uBE44\uB840\uD574 50% \uB354 \uBE60\uB974\uAC8C \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "delirium-scarab-of-paranoia", name: "\uD3B8\uC9D1\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uAC00 \uBCF4\uC0C1 \uC720\uD615 2\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "delirium-scarab-of-neuroses", name: "\uC2E0\uACBD\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uBAA8\uB4E0 \uACE0\uC720 \uD658\uC601 \uBCF4\uC2A4 \uB4F1\uC7A5", "11\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uC5D0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-delusions", name: "\uB9DD\uC0C1\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4\uC5D0 \uD658\uC601 \uD604\uC0C1 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Legion = {
  icon: "icons/legion.png",
  list: Array(
    { id: "legion-scarab", name: "\uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCD94\uAC00 \uAD70\uB2E8 \uC778\uCE74\uC6B4\uD130 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "legion-scarab-of-officers", name: "\uC7A5\uAD50\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC5D0 \uBCD1\uC7A5 5\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-command", name: "\uC9C0\uD718\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC774 \uC7A5\uAD70 \uB300\uB3D9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-eternal-conflict", name: "\uC601\uC6D0\uD55C \uBD84\uC7C1\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uC5EC\uB7EC \uBC88 \uAE68\uC6B8 \uC218 \uC788\uC74C", "\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uAE68\uC6B8 \uB54C\uB9C8\uB2E4 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Blight = {
  icon: "",
  list: Array(
    { id: "blight-scarab", name: "\uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-the-blightheart", name: "\uBA54\uB9C8\uB978 \uC2EC\uC7A5\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC5ED\uBCD1 \uAC78\uB9B0 \uC0C1\uC790 1\uAC1C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uC801 \uC6E8\uC774\uBE0C \uC218\uAC00 \uD06C\uAC8C \uC99D\uD3ED", "\uC5ED\uBCD1 \uAC78\uB9B0 \uC801\uC744 \uB9CE\uC774 \uCC98\uCE58\uD560\uC218\uB85D \uC9C0\uC5ED \uB0B4 \uC5ED\uBCC4 \uAC78\uB9B0 \uC0C1\uC7A5\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C0\uACE0 \uBCF4\uC0C1\uC774 \uB298\uC5B4\uB0A8"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-blooming", name: "\uAC1C\uD654\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uACE0\uC720 \uBCF4\uC2A4 \uCD5C\uB300 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 \uB0B4 \uACE0\uC720 \uC801\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uAC00", "\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC5ED\uBCD1 \uAC78\uB9B0 \uC9C0\uB3C4\uAC00 \uC5ED\uBCD1\uC5D0 \uC720\uB9B0\uB2F9\uD55C \uC9C0\uB3C4\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-invigoration", name: "\uACE0\uBB34\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC15\uD654\uC758 \uD0D1\uC774 \uAC01\uAC01 \uBC94\uC704 \uB0B4 \uC5ED\uBCD1 \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC744 \uC99D\uAC00\uC2DC\uD0B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Abyss = {
  icon: "",
  list: Array(
    { id: "abyss-scarab", name: "\uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2EC\uC5F0 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-multitudes", name: "\uAD70\uC911\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uBAAC\uC2A4\uD130 75% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-edifice", name: "\uAC74\uCD95\uBB3C\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0 \uC9C0\uD558\uB85C \uC5F0\uACB0\uB418\uC9C0 \uC54A\uB294 \uC2EC\uC5F0\uC774 \uBA85\uACC4\uC758 \uCCA8\uD0D1\uC73C\uB85C \uC774\uC5B4\uC9D0", "\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC774 \uC774\uB3D9\uD558\uBA70 \uBE44\uCD95\uBB3C \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "abyss-scarab-of-profound-depth", name: "\uC2EC\uC6D0\uD55C \uAE4A\uC774\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uD574\uB2F9 \uC2EC\uC5F0 \uB0B4\uC5D0 \uBA3C\uC800 \uB4F1\uC7A5\uD558\uB294 \uAD6C\uB369\uC774\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uB098\uC628 \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Essence = {
  icon: "",
  list: Array(
    { id: "essence-scarab", name: "\uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5D0\uC13C\uC2A4 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "essence-scarab-of-ascent", name: "\uC0C1\uC2B9\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC5D0\uC13C\uC2A4\uAC00 1\uB4F1\uAE09 \uB192\uAC8C \uBC1C\uACAC\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-stability", name: "\uC548\uC815\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uD0C0\uB77D\uC758 \uC720\uBB3C \uC0AC\uC6A9 \uC2DC \uC5D0\uC13C\uC2A4\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC \uB610\uB294 \uBCC0\uD654\uC2DC\uD0A4\uB294 \uACB0\uACFC\uB9CC \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-calcification", name: "\uC11D\uD68C\uD654\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC790\uC5F0\uC801\uC73C\uB85C \uC11C\uC2DD\uD558\uB294 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC5D0\uC13C\uC2A4\uC5D0 \uAC07\uD798"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-adaptation", name: "\uC801\uC751\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uAC00 \uD480\uB824\uB098\uBA74 \uC9C0\uC5ED \uB0B4 \uB2E4\uB978 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uBB34\uC791\uC704 \uC5D0\uC13C\uC2A4 \uC18D\uC131 \uBD80\uC5EC", "\uC5D0\uC13C\uC2A4 \uC18D\uC131\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Breach = {
  icon: "",
  list: Array(
    { id: "breach-scarab", name: "\uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 2\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "breach-scarab-of-lordship", name: "\uC9C0\uC704\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC758 \uAC01 \uADE0\uC5F4\uC5D0 \uADE0\uC5F4 \uAD70\uC8FC \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-splintering", name: "\uD30C\uD3B8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC774 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "breach-scarab-of-snares", name: "\uC62C\uAC00\uBBF8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC5D0 \uC6C0\uCF1C\uC7A1\uB294 \uC190 5~10\uAC1C \uCD94\uAC00 \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC744 \uD76C\uADC0 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-resonant-cascade", name: "\uACF5\uBA85\uD558\uB294 \uD3ED\uD3EC\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4 \uD558\uB098\uB2F9 \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC774 10% \uB354 \uBE60\uB974\uAC8C \uC5F4\uB9AC\uACE0 \uB2EB\uD798", "\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const NewScarabs1 = {
  icon: "",
  list: Array(
    { id: "scarab-of-monstrous-lineage", name: "\uAE30\uAD34\uD55C \uD608\uD1B5\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB9C8\uBC95 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "scarab-of-adversaries", name: "\uC801\uC218\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBCF5\uC81C\uB41C \uD76C\uADC0 \uBAAC\uC2A4\uD130\uB97C \uD3EC\uD568\uD55C \uBB34\uB9AC 4\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-divinity", name: "\uC2E0\uC131\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uD76C\uADC0 \uBAAC\uC2A4\uD130 \uCD5C\uB300 2\uB9C8\uB9AC \uCD94\uAC00", "\uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uBAAC\uC2A4\uD130\uAC00 \uC0DD\uC131\uD558\uB294 \uC720\uB839\uC774 \uC8FC\uB294 \uD53C\uD574 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-hunted-traitors", name: "\uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const NewScarabs2 = {
  icon: "",
  list: Array(
    { id: "horned-scarab-of-bloodlines", name: "\uD608\uB9F9\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC758 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 150% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-nemeses", name: "\uCC9C\uBC8C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC18D\uC131 2\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-preservation", name: "\uBCF4\uC804\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB2E4\uB978 \uAC11\uCDA9\uC11D\uB4E4\uC774 \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A\uC74C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-awakening", name: "\uAC01\uC131\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uBD80\uC5EC\uB41C \uC81C\uC791 \uC635\uC158 1\uAC1C \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-tradition", name: "\uC804\uD1B5\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAA8\uB4E0 \uD76C\uADC0 \uBC0F \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC774 \uBCF4\uC0C1 \uC18D\uC131\uC5D0 \uC758\uD574 \uBCC0\uD654\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const NewScarabs3 = {
  icon: "",
  list: Array(
    { id: "scarab-of-stability", name: "\uC548\uC815\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uD3EC\uD0C8\uC774 50%\uC758 \uD655\uB960\uB85C \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 2000\uB9C8\uB9AC\uB85C \uAC15\uD654"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-radiant-storms", name: "\uCC2C\uB780\uD55C \uD3ED\uD48D\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCC2C\uC5F0\uD55C \uD3ED\uD48D \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "scarab-of-bisection", name: "\uC591\uB2E8\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uC811\uB450\uC5B4 \uBB34\uD6A8\uD654 \uB610\uB294 \uC811\uBBF8\uC5B4 \uBB34\uD6A8\uD654 \uC81C\uC791 \uC635\uC158 \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const NewScarabs4 = {
  icon: "",
  list: Array(
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-glittering", name: "\uBC88\uCA4D\uC784\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD50C\uB808\uC774\uC5B4\uAC00 \uCD5C\uADFC 4\uCD08 \uC774\uB0B4 \uCC98\uCE58\uD55C \uBAAC\uC2A4\uD130 \uC218\uC5D0 \uB530\uB77C \uC544\uC774\uD15C \uD76C\uADC0\uB3C4\uAC00 \uCD5C\uB300 200% \uAE4C\uC9C0,", "\uC544\uC774\uD15C \uC218\uB7C9\uC774 \uCD5C\uB300 100%\uAE4C\uC9C0 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-pandemonium", name: "\uD63C\uB780 \uC720\uBC1C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uAC00 15% \uD655\uB960\uB85C \uBB34\uC791\uC704 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4 1\uB9C8\uB9AC\uB85C \uB4F1\uC7A5", "\uB9C8\uC9C0\uB9C9 \uC9C0\uB3C4 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uD574\uB2F9 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "empty", name: "", icon: "", description: [], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const useAnchorProps = {
  target: {
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  configureAnchorEl
}) {
  const { props, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer = null;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target, "touchmove", "mobileCleanup", "passive"],
          [target, "touchend", "mobileCleanup", "passive"],
          [target, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null)
        return;
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "" || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    touchTimer !== null && clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function useModelToggle({
  showing,
  canShow,
  hideOnRouteChange,
  handleShow,
  handleHide,
  processOnMount
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("beforeShow", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props.disable === true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("beforeHide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
const portalProxyList = [];
const QPortal = createComponent({
  name: "QPortal",
  setup(_, { slots }) {
    return () => slots.default();
  }
});
function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, type) {
  const portalIsActive = ref(false);
  const portalIsAccessible = ref(false);
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      portalIsAccessible.value = true;
      return;
    }
    portalIsAccessible.value = false;
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode(false, type);
      }
      portalIsActive.value = true;
      portalProxyList.push(vm.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal(isReady) {
    portalIsAccessible.value = false;
    if (isReady !== true)
      return;
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalProxyList.indexOf(vm.proxy);
    if (index !== -1) {
      portalProxyList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(() => {
    hidePortal(true);
  });
  vm.proxy.__qPortal = true;
  injectProp(vm.proxy, "contentEl", () => innerRef.value);
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    portalIsAccessible,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, h(QPortal, renderPortalContent))] : void 0
  };
}
const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props, defaultShowFn = () => {
}, defaultHideFn = () => {
}) {
  return {
    transitionProps: computed(() => {
      const show = `q-transition--${props.transitionShow || defaultShowFn()}`;
      const hide = `q-transition--${props.transitionHide || defaultHideFn()}`;
      return {
        appear: true,
        enterFromClass: `${show}-enter-from`,
        enterActiveClass: `${show}-enter-active`,
        enterToClass: `${show}-enter-to`,
        leaveFromClass: `${hide}-leave-from`,
        leaveActiveClass: `${hide}-leave-active`,
        leaveToClass: `${hide}-leave-to`
      };
    }),
    transitionStyle: computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
  };
}
function useTick() {
  let tickFn;
  const vm = getCurrentInstance();
  function removeTick() {
    tickFn = void 0;
  }
  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);
  return {
    removeTick,
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          vmIsDestroyed(vm) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  };
}
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
  const target = evt.target;
  if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex = portalProxyList.length - 1;
  while (portalIndex >= 0) {
    const proxy = portalProxyList[portalIndex].$;
    if (proxy.type.name === "QTooltip") {
      portalIndex--;
      continue;
    }
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
  if (index !== -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
let vpLeft, vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
const horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }
  return {
    top,
    bottom,
    height,
    left,
    right,
    width,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
  let { top, left } = el.getBoundingClientRect();
  top += absoluteOffset.top;
  left += absoluteOffset.left;
  if (offset !== void 0) {
    top += offset[1];
    left += offset[0];
  }
  return {
    top,
    bottom: top + 1,
    height: 1,
    left,
    right: left + 1,
    width: 1,
    middle: left,
    center: top
  };
}
function getTargetProps(width, height) {
  return {
    top: 0,
    center: height / 2,
    bottom: height,
    left: 0,
    middle: width / 2,
    right: width
  };
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
  return {
    top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
    left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
  };
}
function setPosition(cfg, retryNumber = 0) {
  if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) {
    return;
  }
  if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      setPosition(cfg, retryNumber + 1);
    }, 10);
    return;
  }
  const {
    targetEl,
    offset,
    anchorEl,
    anchorOrigin,
    selfOrigin,
    absoluteOffset,
    fit,
    cover,
    maxHeight,
    maxWidth
  } = cfg;
  if (client.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  const { scrollLeft, scrollTop } = targetEl;
  const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
  Object.assign(targetEl.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: maxWidth || "100vw",
    maxHeight: maxHeight || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
  const { elWidth, elHeight } = fit === true || cover === true ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight } : { elWidth: origElWidth, elHeight: origElHeight };
  let elStyle = { maxWidth, maxHeight };
  if (fit === true || cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(targetEl.style, elStyle);
  const targetProps = getTargetProps(elWidth, elHeight);
  let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
  if (absoluteOffset === void 0 || offset === void 0) {
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
  } else {
    const { top, left } = props;
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    let hasChanged = false;
    if (props.top !== top) {
      hasChanged = true;
      const offsetY = 2 * offset[1];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }
    if (props.left !== left) {
      hasChanged = true;
      const offsetX = 2 * offset[0];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }
    if (hasChanged === true) {
      props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
      applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    }
  }
  elStyle = {
    top: props.top + "px",
    left: props.left + "px"
  };
  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + "px";
    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + "px";
    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(targetEl.style, elStyle);
  if (targetEl.scrollTop !== scrollTop) {
    targetEl.scrollTop = scrollTop;
  }
  if (targetEl.scrollLeft !== scrollLeft) {
    targetEl.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
      );
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    } else {
      props.top = Math.max(
        0,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
      );
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }
  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
      );
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = Math.max(
        0,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
      );
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}
var QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: "jump-down"
    },
    transitionHide: {
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => props.modelValue === null && props.persistent !== true && showing.value === true
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null)
        return;
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
var ScarabItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = {
  key: 0,
  class: "scarab-box empty"
};
const _hoisted_2$1 = { class: "row justify-center q-mb-lg" };
const _hoisted_3$1 = {
  class: "flex flex-center",
  style: { "width": "100px" }
};
const _hoisted_4$1 = {
  class: "bg-blue-grey-5",
  style: { "font-size": "13px", "padding": "7px 12px", "border-radius": "6px" }
};
const _hoisted_5$1 = { class: "row items-center" };
const _hoisted_6 = { class: "q-ml-xs q-px-xs" };
const _hoisted_7 = { class: "row items-center q-mt-xs" };
const _hoisted_8 = { class: "q-ml-xs q-px-xs" };
const _hoisted_9 = { class: "row items-center q-mt-xs" };
const _hoisted_10 = { class: "q-ml-xs q-px-xs" };
const _hoisted_11 = { class: "text-center scarab-name" };
const _hoisted_12 = { class: "text-center scarab-description" };
const _hoisted_13 = { class: "text-center scarab-description" };
const _sfc_main$1 = defineComponent({
  ...{
    name: "ScarabItem"
  },
  __name: "ScarabItem",
  props: {
    scarab: {},
    chaosType: { type: Boolean },
    exaltedType: { type: Boolean },
    divineType: { type: Boolean },
    highlight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const emptyScarabItem = computed(() => props.scarab.id === "empty");
    return (_ctx, _cache) => {
      return emptyScarabItem.value ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["scarab-box row flex-center", _ctx.highlight ? `highlight${props.scarab.level}` : ""])
      }, [
        createVNode(QImg, {
          src: props.scarab.icon,
          width: "42px",
          height: "42px",
          style: { "z-index": "2", "opacity": "0.75" }
        }, null, 8, ["src"]),
        createBaseVNode("div", {
          class: normalizeClass(["absolute-bottom-right", _ctx.highlight ? `highlight${props.scarab.level}-text` : ""]),
          style: { "font-size": "11px", "line-height": "1", "bottom": "1px", "right": "2px", "z-index": "2" }
        }, [
          _ctx.chaosType ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(props.scarab.chaos), 1)
          ], 64)) : createCommentVNode("", true),
          _ctx.exaltedType ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(props.scarab.exalted), 1)
          ], 64)) : createCommentVNode("", true),
          _ctx.divineType ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(props.scarab.divine), 1)
          ], 64)) : createCommentVNode("", true)
        ], 2),
        createVNode(QTooltip, { class: "q-pa-md" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createVNode(QImg, {
                  src: props.scarab.icon,
                  width: "46px",
                  height: "46px"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", _hoisted_5$1, [
                  createVNode(QImg, {
                    src: "icons/chaos.png",
                    width: "20px"
                  }),
                  createBaseVNode("div", _hoisted_6, toDisplayString(props.scarab.chaos), 1)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createVNode(QImg, {
                    src: "icons/exalted.png",
                    width: "20px"
                  }),
                  createBaseVNode("div", _hoisted_8, toDisplayString(props.scarab.exalted), 1)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createVNode(QImg, {
                    src: "icons/divine.png",
                    width: "20px"
                  }),
                  createBaseVNode("div", _hoisted_10, toDisplayString(props.scarab.divine), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.scarab.name), 1),
            createBaseVNode("div", _hoisted_12, "\uD55C\uB3C4 : " + toDisplayString(_ctx.scarab.max), 1),
            createBaseVNode("div", _hoisted_13, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.scarab.description, (desc) => {
                return openBlock(), createElementBlock("div", { key: desc }, toDisplayString(desc), 1);
              }), 128))
            ])
          ]),
          _: 1
        })
      ], 2));
    };
  }
});
var ScarabItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1dcb5cfc"]]);
var ScarabsPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-98201ef8"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2 = { class: "loading-chaos" };
const _hoisted_3 = { class: "row justify-center items-center q-mb-md q-gutter-x-md relative-position" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5 = { class: "scarab-stash q-mx-auto" };
const _sfc_main = defineComponent({
  ...{
    name: "ScarabsPage"
  },
  __name: "ScarabsPage",
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
    const exaltedType = computed(() => currencyType.value === "exalted");
    const divineType = computed(() => currencyType.value === "divine");
    const fetchLoading = ref(false);
    const highlight = ref(true);
    const row1Group1 = [Titanic, Anarchy];
    const row1Group2 = [Sulphite, Ritual];
    const row1Group3 = [Divination, Harvest];
    const row2Group1 = [Bestiary, Incursion];
    const row2Group2 = [Influencing, Betrayal, Torment];
    const row2Group3 = [Harbinger, Domination];
    const row3Group1 = [Cartography, Ambush, Expedition, Legion, Abyss];
    const row3Group2 = [Beyond, Ultimatum, Delirium, Blight, Essence];
    const row4Group1 = [Breach];
    const row5Group1 = [NewScarabs1, NewScarabs3];
    const row5Group2 = [NewScarabs2, NewScarabs4];
    const row1Groups = ref({ data: [row1Group1, row1Group2, row1Group3], class: "gutter-30" });
    const row2Groups = ref({ data: [row2Group1, row2Group2, row2Group3], class: "gutter-40" });
    const row3Groups = ref({ data: [row3Group1, row3Group2], class: "gutter-50" });
    const row4Groups = ref({ data: [row4Group1], class: "" });
    const row5Groups = ref({ data: [row5Group1, row5Group2], class: "gutter-80" });
    function calcLevel(value) {
      if (0 <= value && value < 5)
        return 0;
      else if (5 <= value && value < 10)
        return 1;
      else if (10 <= value && value < 20)
        return 2;
      else if (20 <= value && value < 30)
        return 3;
      else if (30 <= value && value < 40)
        return 4;
      else if (40 <= value && value < 50)
        return 5;
      else if (50 <= value && value < 60)
        return 6;
      else if (60 <= value && value < 70)
        return 7;
      else if (70 <= value && value < 80)
        return 8;
      else if (80 <= value)
        return 9;
      else
        return 0;
    }
    async function getMetaData() {
      fetchLoading.value = true;
      const response = await api.get("https://www.logisnet.co.kr/dev-api/poe/scarabs/Mercenaries");
      const res = response.data.lines;
      res.forEach((data) => {
        setMetaData(row1Groups.value, data);
        setMetaData(row2Groups.value, data);
        setMetaData(row3Groups.value, data);
        setMetaData(row4Groups.value, data);
        setMetaData(row5Groups.value, data);
      });
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
    }
    function setMetaData(rowGroups, data) {
      rowGroups.data.forEach((groups) => {
        groups.forEach((group) => {
          group.list.forEach((scarab) => {
            if (scarab.id === "empty") {
              return;
            }
            if (scarab.id === data.detailsId) {
              scarab.icon = data.icon;
              scarab.chaos = Number(Number(data.chaosValue || 0).toFixed(2));
              scarab.exalted = Number(Number(data.exaltedValue || 0).toFixed(2));
              scarab.divine = Number(Number(data.divineValue || 0).toFixed(2));
              scarab.level = calcLevel(data.chaosValue);
            }
          });
        });
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" }, {
        default: withCtx(() => [
          createVNode(Transition, {
            "enter-active-class": "animated fadeInDown",
            "leave-active-class": "animated fadeOutUp"
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QImg, {
                    src: "icons/chaos.png",
                    width: "30px"
                  })
                ])
              ], 512), [
                [vShow, fetchLoading.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
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
              class: normalizeClass(["cursor-pointer currency-type", exaltedType.value ? "active-currency" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "exalted")
            }, [
              createVNode(QImg, {
                src: "icons/exalted.png",
                width: "32px"
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
              onClick: _cache[2] || (_cache[2] = ($event) => currencyType.value = "divine")
            }, [
              createVNode(QImg, {
                src: "icons/divine.png",
                width: "32px"
              })
            ], 2),
            createVNode(QCheckbox, {
              label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
              modelValue: highlight.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => highlight.value = $event),
              dense: "",
              style: { "margin-left": "32px" }
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", {
              class: normalizeClass(["row justify-center scarab-groups", row1Groups.value.class]),
              style: { "padding-top": "64px" }
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row1Groups.value.data, (groups, index) => {
                return openBlock(), createElementBlock("div", { key: index }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups, (group, gIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${index}-${gIndex}`,
                      class: "row scarab-group",
                      style: normalizeStyle(gIndex > 0 ? "margin-top: 7px" : "")
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                        return openBlock(), createBlock(ScarabItem, {
                          key: `${index}-${gIndex}-${sIndex}`,
                          scarab,
                          "chaos-type": chaosType.value,
                          "exalted-type": exaltedType.value,
                          "divine-type": divineType.value,
                          highlight: highlight.value
                        }, null, 8, ["scarab", "chaos-type", "exalted-type", "divine-type", "highlight"]);
                      }), 128))
                    ], 4);
                  }), 128))
                ]);
              }), 128))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["row flex-center scarab-groups", row2Groups.value.class]),
              style: { "padding-top": "12px" }
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row2Groups.value.data, (groups, index) => {
                return openBlock(), createElementBlock("div", { key: index }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups, (group, gIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${index}-${gIndex}`,
                      class: "row scarab-group",
                      style: normalizeStyle(gIndex > 0 ? "margin-top: 8px" : "")
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                        return openBlock(), createBlock(ScarabItem, {
                          key: `${index}-${gIndex}-${sIndex}`,
                          scarab,
                          "chaos-type": chaosType.value,
                          "exalted-type": exaltedType.value,
                          "divine-type": divineType.value,
                          highlight: highlight.value
                        }, null, 8, ["scarab", "chaos-type", "exalted-type", "divine-type", "highlight"]);
                      }), 128))
                    ], 4);
                  }), 128))
                ]);
              }), 128))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["row justify-center scarab-groups", row3Groups.value.class]),
              style: { "padding-top": "10px" }
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row3Groups.value.data, (groups, index) => {
                return openBlock(), createElementBlock("div", { key: index }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups, (group, gIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${index}-${gIndex}`,
                      class: "row scarab-group",
                      style: normalizeStyle(gIndex > 0 ? "margin-top: 9px" : "")
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                        return openBlock(), createBlock(ScarabItem, {
                          key: `${index}-${gIndex}-${sIndex}`,
                          scarab,
                          "chaos-type": chaosType.value,
                          "exalted-type": exaltedType.value,
                          "divine-type": divineType.value,
                          highlight: highlight.value
                        }, null, 8, ["scarab", "chaos-type", "exalted-type", "divine-type", "highlight"]);
                      }), 128))
                    ], 4);
                  }), 128))
                ]);
              }), 128))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["row justify-center scarab-groups", row4Groups.value.class]),
              style: { "padding-top": "10px", "margin-left": "-50px" }
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row4Groups.value.data, (groups, index) => {
                return openBlock(), createElementBlock("div", { key: index }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups, (group, gIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${index}-${gIndex}`,
                      class: "row scarab-group"
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                        return openBlock(), createBlock(ScarabItem, {
                          key: `${index}-${gIndex}-${sIndex}`,
                          scarab,
                          "chaos-type": chaosType.value,
                          "exalted-type": exaltedType.value,
                          "divine-type": divineType.value,
                          highlight: highlight.value
                        }, null, 8, ["scarab", "chaos-type", "exalted-type", "divine-type", "highlight"]);
                      }), 128))
                    ]);
                  }), 128))
                ]);
              }), 128))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["row justify-center scarab-groups", row5Groups.value.class]),
              style: { "padding-top": "10px", "margin-left": "28px" }
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row5Groups.value.data, (groups, index) => {
                return openBlock(), createElementBlock("div", { key: index }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups, (group, gIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: `${index}-${gIndex}`,
                      class: "row justify-center scarab-group",
                      style: normalizeStyle(gIndex > 0 ? "margin-top: 10px" : "")
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                        return openBlock(), createBlock(ScarabItem, {
                          key: `${index}-${gIndex}-${sIndex}`,
                          scarab,
                          "chaos-type": chaosType.value,
                          "exalted-type": exaltedType.value,
                          "divine-type": divineType.value,
                          highlight: highlight.value
                        }, null, 8, ["scarab", "chaos-type", "exalted-type", "divine-type", "highlight"]);
                      }), 128))
                    ], 4);
                  }), 128))
                ]);
              }), 128))
            ], 2)
          ])
        ]),
        _: 1
      });
    };
  }
});
var ScarabsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98201ef8"]]);
export { ScarabsPage as default };
