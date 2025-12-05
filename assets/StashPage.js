var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { i as inject, e as emptyRenderFn, r as ref, a as computed, o as onBeforeUnmount, v as onMounted, S as tabsKey, U as withDirectives, V as Ripple, h, W as stopAndPrevent, X as isKeyCode, Y as shouldIgnoreKey, Z as QIcon, q as hMergeSlot, g as getCurrentInstance, _ as isDeepEqual, c as createComponent, H as onDeactivated, M as nextTick, I as vmIsDestroyed, w as watch, p as provide, $ as onActivated, d as hSlot, a0 as createDirective, a1 as client, L as noop, a2 as leftClick, a3 as addEvt, a4 as preventDraggable, a5 as position, a6 as cleanEvt, T as Transition, a7 as getNormalizedVNodes, a8 as KeepAlive, a9 as hDir, s as defineComponent, y as openBlock, aa as createElementBlock, B as createVNode, A as withCtx, ab as Fragment, ac as vShow, C as createBaseVNode, ad as pushScopeId, ae as popScopeId, af as prevent, N as listenOpts, ag as vmHasRouter, n as onUnmounted, ah as injectProp, ai as Teleport, aj as createGlobalNode, ak as removeGlobalNode, z as createBlock, F as toDisplayString, al as createCommentVNode, am as renderList, an as normalizeClass, E as normalizeStyle } from "./index.js";
import { u as uid, g as getModifierDirections, s as shouldStart, c as clearSelection, r as removeFocusWaitFlag, a as addFocusWaitFlag } from "./focus-manager.js";
import { Q as QResizeObserver, g as getScrollbarWidth, a as getScrollTarget } from "./scroll.js";
import { u as useTimeout, Q as QImg } from "./QImg.js";
import { u as useDarkProps, a as useDark } from "./use-dark.js";
import { Q as QPage } from "./QPage.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
import { u as useInterval } from "./use-interval.js";
import { api } from "./axios.js";
import { s as store } from "./store.js";
import "./axios2.js";
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message !== void 0 && softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
var QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
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
let rtlHasScrollBug = false;
{
  const scroller = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  Object.assign(scroller.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const spacer = document.createElement("div");
  Object.assign(spacer.style, {
    width: "1000px",
    height: "1px"
  });
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
var QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
          animate(currentModel.value, name);
          currentModel.value = name;
        }
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null)
        return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null)
        return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0)
        return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      hadRouteWatcher === true && watchRoute();
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
var TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            ctx.end(evt);
            return;
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.dir !== false && stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return cache.hasOwnProperty(key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = {};
      }
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCache } = useRenderCache();
  let panels, forcedPanelTransition;
  const panelIndex = ref(null);
  const panelTransition = ref(null);
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      nextTick(() => {
        emit("transition", newVal, oldVal);
      });
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index !== -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) {
      return;
    }
    return props.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
var QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
var QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
var CurrencyTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-538bf23f"), n = n(), popScopeId(), n);
const _hoisted_1$g = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$c = { class: "loading-chaos" };
const _hoisted_3$9 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "currency-stash q-mx-auto" }, null, -1));
const _sfc_main$h = defineComponent({
  ...{
    name: "CurrencyTab"
  },
  __name: "CurrencyTab",
  setup(__props) {
    const fetchLoading = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$g, [
              createBaseVNode("div", _hoisted_2$c, [
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
        _hoisted_3$9
      ], 64);
    };
  }
});
var CurrencyTab = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-538bf23f"]]);
var InfluenceTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-f3b3fc22"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$b = { class: "loading-chaos" };
const _hoisted_3$8 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "influence-stash q-mx-auto" }, null, -1));
const _sfc_main$g = defineComponent({
  ...{
    name: "InfluenceTab"
  },
  __name: "InfluenceTab",
  setup(__props) {
    const fetchLoading = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$f, [
              createBaseVNode("div", _hoisted_2$b, [
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
        _hoisted_3$8
      ], 64);
    };
  }
});
var InfluenceTab = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-f3b3fc22"]]);
const Titanic = {
  top: "64px",
  left: "152px",
  class: "",
  list: Array(
    { id: "titanic-scarab", name: "\uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uBB34\uB9AC \uADDC\uBAA8 \uC99D\uAC00 1%\uB2F9 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568, \uD53C\uD574, \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC758 \uD76C\uADC0\uB3C4 \uBC0F \uC218\uB7C9 1% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "titanic-scarab-of-treasures", name: "\uBCF4\uBB3C\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBCF4\uC0C1 1\uAC1C \uCD94\uAC00 \uBCF4\uC720", "\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568 30% \uC99D\uAC00"], chaos: 0, level: 0, max: 3 },
    { id: "titanic-scarab-of-legend", name: "\uC804\uC124\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBAAC\uC2A4\uD130 \uC18D\uC131 4\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, level: 0, max: 1 }
  )
};
const Sulphite = {
  top: "64px",
  left: "326px",
  class: "",
  list: Array(
    { id: "sulphite-scarab", name: "\uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uB2C8\uCF54 \uB4F1\uC7A5", "\uC9C0\uB3C4 \uC18C\uC720\uC790\uAC00 \uD68D\uB4DD\uD558\uB294 \uC544\uD669\uC0B0\uC5FC 150% \uC99D\uD3ED"], chaos: 0, level: 0, max: 1 },
    { id: "sulphite-scarab-of-fumes", name: "\uC5F0\uAE30\uC758 \uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC544\uD669\uC0B0\uC5FC\uC774 \uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30 \uBC29\uCD9C", "\uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30\uC758 \uC601\uD5A5\uC744 \uBC1B\uB294 \uC801\uC740 \uC544\uC774\uD15C \uC218\uB7C9 50% \uC99D\uAC00", "\uC9C0\uB3C4 \uB0B4 \uC544\uD669\uC0B0\uC5FC\uC744 \uB0A8\uB3D9\uC11D \uAD11\uC0B0\uC758 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, level: 0, max: 1 }
  )
};
const Divination = {
  top: "64px",
  left: "500px",
  class: "",
  list: Array(
    { id: "divination-scarab-of-the-cloister", name: "\uD68C\uB791\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790 \uBB34\uB9AC 8~12\uAC1C\uAC00 \uCD94\uAC00\uB85C \uB4F1\uC7A5", "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790\uAC00 \uCE74\uB4DC \uBB36\uC74C\uC744 \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960 1% \uCD94\uAC00"], chaos: 0, level: 0, max: 5 },
    { id: "divination-scarab-of-plenty", name: "\uD48D\uBD80\uD568\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC810\uC220 \uCE74\uB4DC\uB97C \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960\uC774 1000% \uC99D\uAC00\uD55C", "\uC810\uC220\uC5D0 \uB2FF\uC740 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 \uBB34\uB9AC 6~10\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 5 },
    { id: "divination-scarab-of-pilfering", name: "\uD6D4\uCCD0\uB0C4\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC810\uC220 \uCE74\uB4DC\uB97C \uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8", "\uC9C0\uB3C4\uC758 \uD574\uB2F9 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8\uD55C \uC810\uC220 \uCE74\uB4DC\uAC00 \uB9CE\uC744\uC218\uB85D", "\uB09C\uC774\uB3C4\uAC00 \uB192\uC544\uC9C0\uACE0 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uC8FC\uB294 \uD53C\uD574 \uC99D\uAC00", "\uC9C0\uB3C4\uC758 \uD574\uB2F9 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4 \uCC98\uCE58 \uC2DC \uAC15\uD0C8\uD55C \uBAA8\uB4E0 \uC810\uC220 \uCE74\uB4DC \uBCF5\uC81C"], chaos: 0, level: 0, max: 1 }
  )
};
const Anarchy = {
  top: "118px",
  left: "70px",
  class: "",
  list: Array(
    { id: "anarchy-scarab", name: "\uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0C8\uC8FC \uC720\uBC30\uC790 4\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 5 },
    { id: "anarchy-scarab-of-gigantification", name: "\uBE44\uB300\uD654\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD669\uC57C \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 30%\uC758 \uD655\uB960\uB85C \uD0C8\uC8FC \uAC70\uC778\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "anarchy-scarab-of-partnership", name: "\uD611\uB825\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD669\uC57C \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uC30D\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 }
  )
};
const Ritual = {
  top: "118px",
  left: "242px",
  class: "",
  list: Array(
    { id: "ritual-scarab-of-selectiveness", name: "\uC120\uD0DD\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 \uBB34\uC791\uC704 \uBCC0\uACBD\uD560 \uB54C \uCCAB 2\uD68C\uB294 \uBE44\uC6A9 \uC5C6\uC74C", "\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 1\uD68C \uCD94\uAC00\uB85C \uBB34\uC791\uC704 \uBCC0\uACBD \uAC00\uB2A5"], chaos: 0, level: 0, max: 2 },
    { id: "ritual-scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC774 \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 \uC0DD\uC131", "\uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88\uC774 \uC8FC\uBCC0\uC758 \uD50C\uB808\uC774\uC5B4\uB4E4\uC5D0\uAC8C \uACF5\uBB3C \uC810\uC218 \uD68D\uB4DD\uB7C9 100% \uC99D\uAC00 \uBD80\uC5EC"], chaos: 0, level: 0, max: 1 },
    { id: "ritual-scarab-of-abundance", name: "\uD48D\uBD80\uD568\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD\uC73C\uB85C \uC5BB\uB294 \uD5CC\uC815\uD488 100% \uC99D\uAC00"], chaos: 0, level: 0, max: 2 }
  )
};
const Harvest = {
  top: "118px",
  left: "414px",
  class: "",
  list: Array(
    { id: "harvest-scarab", name: "\uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-doubling", name: "\uBCF5\uC81C\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC0DD\uAE30\uAC00 \uBCF5\uC81C\uB428", "\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uD3ED"], chaos: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-cornucopia", name: "\uD48D\uC694\uC758 \uBFD4\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232\uC774 \uB4F1\uC7A5\uD560 \uC2DC, \uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC2E0\uC131\uD55C \uC232\uC5D0 \uAC01 \uC720\uD615\uC758 4\uB4F1\uAE09 \uC528\uC557 \uCD5C\uB300 1\uAC1C\uC529 \uCD94\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Kalguur = {
  top: "118px",
  left: "584px",
  class: "",
  list: Array(
    { id: "kalguuran-scarab", name: "\uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAD11\uB9E5 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "kalguuran-scarab-of-guarded-riches", name: "\uBCF4\uD638\uBC1B\uB294 \uC7AC\uBB3C\uC758 \uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD11\uB9E5\uC744 \uBC29\uC5B4\uD558\uB294 \uBAAC\uC2A4\uD130\uAC00 \uB9C8\uBC95 \uC774\uC0C1\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "kalguuran-scarab-of-refinement", name: "\uC815\uC81C\uC758 \uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD11\uB9E5\uC774 \uAD11\uC11D \uCC44\uAD11\uC744 \uC9C0\uC2DC\uD558\uB294 \uB300\uC2E0 \uC81C\uB828\uD55C \uC8FC\uAD34 \uBD80\uC5EC"], chaos: 0, level: 0, max: 1 }
  )
};
const Influencing = {
  top: "174px",
  left: "302px",
  class: "",
  list: Array(
    { id: "influencing-scarab-of-the-shaper", name: "\uC250\uC774\uD37C\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC250\uC774\uD37C \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-the-elder", name: "\uC5D8\uB354\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5D8\uB354 \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-hordes", name: "\uAD70\uB2E8\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC601\uD5A5\uC744 \uBC1B\uC740 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uC758 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-conversion", name: "\uC804\uD5A5\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC250\uC774\uD37C \uC218\uD638\uC790, \uC5D8\uB354 \uC218\uD638\uC790, \uC815\uBCF5\uC790 \uB610\uB294 \uACE0\uC720 \uACB0\uD569 \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, level: 0, max: 1 }
  )
};
const Bestiary = {
  top: "200px",
  left: "70px",
  class: "",
  list: Array(
    { id: "bestiary-scarab", name: "\uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC544\uC778\uD558\uB974 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "bestiary-scarab-of-the-herd", name: "\uB5BC\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC544\uC778\uD558\uB974\uAC00 \uB4F1\uC7A5\uD558\uB294 \uC9C0\uC5ED\uC5D0 \uBD89\uC740 \uC57C\uC218 5\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "bestiary-scarab-of-duplicating", name: "\uBCF5\uC81C\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uD3EC\uD68D\uD558\uB294 \uC57C\uC218\uC758 \uBCF5\uC81C\uBCF8 \uC0DD\uC131"], chaos: 0, level: 0, max: 1 }
  )
};
const Harbinger = {
  top: "200px",
  left: "535px",
  class: "",
  list: Array(
    { id: "harbinger-scarab", name: "\uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790 3\uBA85 \uCD94\uAC00"], chaos: 0, level: 0, max: 4 },
    { id: "harbinger-scarab-of-obelisks", name: "\uC624\uBCA8\uB9AC\uC2A4\uD06C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uAC15\uD654\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C \uC0DD\uC131", "\uAC15\uD654\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C\uB294 \uD30C\uAD34\uB420 \uC2DC \uC77C\uC815 \uD655\uB960\uB85C \uD654\uD3D0 \uD30C\uD3B8\uC744 \uB5A8\uC5B4\uB728\uB9BC"], chaos: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-regency", name: "\uC12D\uC815\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uAC15\uB825\uD55C \uC120\uAD6C\uC790 \uBCF4\uC2A4\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-warhoards", name: "\uC804\uC7C1\uBE44\uCD95\uBB3C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uD654\uD3D0 \uD30C\uD3B8\uC774 \uBCF5\uC81C\uB428"], chaos: 0, level: 0, max: 1 }
  )
};
const Betrayal = {
  top: "229px",
  left: "302px",
  class: "",
  list: Array(
    { id: "betrayal-scarab", name: "\uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC900 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-the-allflame", name: "\uC62C\uD50C\uB808\uC784\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88\uC774 \uAD50\uCCB4\uD558\uB294 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uC758 \uC218 75% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-reinforcements", name: "\uBCF4\uAC15\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBD88\uBA78\uC790 \uC5F0\uD569 \uB2E8\uC6D0\uC774 \uC9C0\uC6D0\uAD70\uC744 \uB3D9\uBC18\uD560 \uD655\uB960 50% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Incursion = {
  top: "260px",
  left: "70px",
  class: "",
  list: Array(
    { id: "incursion-scarab", name: "\uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC54C\uBC14 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "incursion-scarab-of-invasion", name: "\uCE68\uB7B5\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAE30\uC2B5 \uBAAC\uC2A4\uD130 \uBB34\uB9AC 12~16\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 3 },
    { id: "incursion-scarab-of-champions", name: "\uC6A9\uC0AC\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["35%\uC758 \uD655\uB960\uB85C \uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBAA8\uB4E0 \uBAAC\uC2A4\uD130\uAC00 \uB9C8\uBC95 \uC774\uC0C1\uC73C\uB85C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBB34\uB9AC \uADDC\uBAA8 15% \uC99D\uAC00"], chaos: 0, level: 0, max: 2 },
    { id: "incursion-scarab-of-timelines", name: "\uC2DC\uAC04\uC120\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uCC98\uCE58\uD558\uB294 \uCD5C\uC885 \uAC74\uCD95\uAC00\uAC00 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC744 \uB5A8\uC5B4\uB728\uB9BC", "\uC9C0\uC5ED\uC5D0\uC11C \uB5A8\uC5B4\uC9C0\uB294 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC774 \uD604\uC7AC \uC0AC\uC6D0 \uAD6C\uC870\uC5D0 \uAE30\uBC18\uD574 \uC0DD\uC131\uB418\uC9C0\uB9CC, \uBC29\uC758 \uB4F1\uAE09\uC740 \uBB34\uC791\uC704 \uBCC0\uACBD"], chaos: 0, level: 0, max: 1 }
  )
};
const Domination = {
  top: "260px",
  left: "535px",
  class: "",
  list: Array(
    { id: "domination-scarab", name: "\uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 4 },
    { id: "domination-scarab-of-apparitions", name: "\uC720\uB839\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC720\uB839 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "domination-scarab-of-evolution", name: "\uC9C4\uD654\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC9C4\uD654\uC758 \uC131\uC18C 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "domination-scarab-of-terrors", name: "\uACF5\uD3EC\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC131\uC18C\uB97C 1\uB9C8\uB9AC\uC758 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uAC00 \uBC29\uC5B4", "\uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uC774 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, level: 0, max: 1 }
  )
};
const Torment = {
  top: "284px",
  left: "302px",
  class: "",
  list: Array(
    { id: "torment-scarab", name: "\uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC0AC\uB85C\uC7A1\uD78C \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC9C0\uC5ED \uB0B4", "\uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 50%\uC758 \uD655\uB960\uB85C \uD574\uBC29"], chaos: 0, level: 0, max: 2 },
    { id: "torment-scarab-of-peculiarity", name: "\uAE30\uC774\uD568\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uB0B4 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 \uD2B9\uC774\uD55C \uBCC0\uD654\uD615\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "torment-scarab-of-possession", name: "\uC0AC\uB85C\uC7A1\uD798\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 1/4 \uD655\uB960\uB85C \uCD5C\uB300 3\uB9C8\uB9AC\uC758 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC5D0\uAC8C \uC0AC\uB85C\uC7A1\uD798"], chaos: 0, level: 0, max: 3 }
  )
};
const Cartography = {
  top: "338px",
  left: "132px",
  class: "",
  list: Array(
    { id: "cartography-scarab-of-escalation", name: "\uC99D\uB300\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uB294 \uC9C0\uB3C4 \uC18D\uC131 \uD558\uB098\uB2F9 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4 10% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-risk", name: "\uC704\uD5D8\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBB34\uC791\uC704 \uC18D\uC131 2\uAC1C \uCD94\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-corruption", name: "\uD0C0\uB77D\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uBE44-\uACE0\uC720 \uC9C0\uB3C4\uAC00 \uC18D\uC131 8\uAC1C\uAC00 \uBD80\uC5EC\uB41C \uD0C0\uB77D\uD55C \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-the-multitude", name: "\uAD70\uC911\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC774 \uB192\uC740 \uBAAC\uC2A4\uD130\uB85C", "\uC774\uB8E8\uC5B4\uC9C4 \uBB34\uB9AC\uAC00 8~12\uAC1C \uB4F1\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBAAC\uC2A4\uD130\uB294 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC9C0\uB3C4 \uC218\uB7C9\uC774 300% \uC99D\uAC00\uD569\uB2C8\uB2E4."], chaos: 0, level: 0, max: 3 }
  )
};
const Beyond = {
  top: "338px",
  left: "426px",
  class: "",
  list: Array(
    { id: "beyond-scarab", name: "\uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uC11C\uB85C \uAC00\uAE4C\uC774 \uC788\uB294 \uC801\uC744 \uCC98\uCE58\uD558\uBA74 \uC774\uACC4 \uBAAC\uC2A4\uD130\uB97C \uBD88\uB7EC\uC634"], chaos: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-haemophilia", name: "\uD608\uC6B0\uBCD1\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC758 \uBCD1\uD569 \uBC94\uC704 50% \uC99D\uAC00", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD76C\uADC0 \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uCE90\uB9AD\uD130\uAC00 \uADF8\uB4E4\uC758 \uC18D\uC131\uC744 20\uCD08 \uB3D9\uC548 30% \uD655\uB960\uB85C \uD68D\uB4DD"], chaos: 0, level: 0, max: 2 },
    { id: "beyond-scarab-of-resurgence", name: "\uC7AC\uAE30\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB0AE\uC740 \uC0DD\uBA85\uB825 \uC0C1\uD0DC\uC5D0\uC11C \uACA9\uC559\uD568", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uB354\uB7FD\uD600\uC9C4 \uD654\uD3D0 100% \uC99D\uAC00", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC774 \uACE0\uC720 \uBCF4\uC2A4\uB97C \uC0DD\uC131\uD560 \uD655\uB960 30% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-the-invasion", name: "\uCE68\uB7B5\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBC0F \uACE0\uC720 \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC774\uACC4 \uD3EC\uD0C8 8~12\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, level: 0, max: 1 }
  )
};
const Ambush = {
  top: "394px",
  left: "133px",
  class: "",
  list: Array(
    { id: "ambush-scarab", name: "\uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0 3\uAC1C \uCD94\uAC00"], chaos: 0, level: 0, max: 3 },
    { id: "ambush-scarab-of-hidden-compartments", name: "\uBE44\uBC00 \uACF5\uAC04\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uB97C 15%\uC758 \uD655\uB960\uB85C \uB2E4\uC2DC \uC5F4 \uC218 \uC788\uC74C"], chaos: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-potency", name: "\uC7A0\uC7AC\uB825\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uC758 \uBE44\uACE0\uC815 \uC18D\uC131 \uD6A8\uACFC 75% \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-containment", name: "\uBD09\uC1C4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB2E4\uC218\uC758 \uAE08\uACE0 \uCD94\uAC00", "\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uB9E4\uBCF5 \uC911"], chaos: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-discernment", name: "\uBD84\uBCC4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uAC00 \uBCF4\uB2E4 \uD76C\uADC0\uD55C \uC885\uB958\uC77C \uD655\uB960\uC774 \uB192\uC544\uC9D0"], chaos: 0, level: 0, max: 1 }
  )
};
const Ultimatum = {
  top: "394px",
  left: "427px",
  class: "",
  list: Array(
    { id: "ultimatum-scarab", name: "\uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-bribing", name: "\uB9E4\uC218\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uACB0\uC804 \uBAAC\uC2A4\uD130\uAC00 \uC8FC\uB294 \uACBD\uD5D8\uCE58 150% \uC99D\uAC00", "\uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uB77C\uC6B4\uB4DC 2\uAC1C\uB97C \uCD94\uAC00\uB85C \uC644\uB8CC\uD55C \uAC83\uCC98\uB7FC \uBCF4\uC0C1\uC744 \uC90C"], chaos: 0, level: 0, max: 2 },
    { id: "ultimatum-scarab-of-dueling", name: "\uACB0\uD22C\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uD56D\uC0C1 \uACE0\uC720 \uBCF4\uC2A4\uB85C \uC774\uC5B4\uC9D0"], chaos: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-catalysing", name: "\uAE30\uD3ED\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC9C0\uB3C4 \uC18C\uC720\uC790\uAC00", "\uBCF4\uC0C1\uC73C\uB85C \uAE30\uD3ED\uC81C\uB9CC \uD68D\uB4DD \uAC00\uB2A5"], chaos: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-inscription", name: "\uC0C8\uAE40\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAE30\uD3ED\uC81C\uB97C \uC8FC\uB294 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 \uBCF4\uC0C1\uC774", "\uC9C0\uB3C4 \uC18C\uC720\uC790\uC5D0\uAC8C \uAE30\uD3ED\uC81C\uAC00 \uC544\uB2CC \uC0C8\uACA8\uC9C4 \uACB0\uC804\uC744 \uC90C"], chaos: 0, level: 0, max: 1 }
  )
};
const Expedition = {
  top: "450px",
  left: "132px",
  class: "",
  list: Array(
    { id: "expedition-scarab", name: "\uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-runefinding", name: "\uB8EC \uD0D0\uC0C9\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uB8EC \uBAAC\uC2A4\uD130", "\uD45C\uC2DC\uBB3C \uC218\uB7C9 100% \uC99D\uAC00"], chaos: 0, level: 0, max: 2 },
    { id: "expedition-scarab-of-verisium-powder", name: "\uBCA0\uB9AC\uC2DC\uC6C0 \uD654\uC57D\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uD3ED\uBC1C\uBB3C \uC218\uB7C9 50% \uC99D\uAC00", "\uD3ED\uBC1C\uBB3C \uBC18\uACBD 80 \uC99D\uAC00"], chaos: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-archaeology", name: "\uACE0\uACE0\uD559\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uC720\uBB3C\uC5D0 \uC811\uBBF8\uC5B4 \uBC0F \uC811\uB450\uC5B4 2\uAC1C \uCD94\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Delirium = {
  top: "450px",
  left: "427px",
  class: "",
  list: Array(
    { id: "delirium-scarab", name: "\uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD658\uC601\uC758 \uAC70\uC6B8 1\uAC1C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-mania", name: "\uAD11\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uD658\uC601 \uBCF4\uC0C1 \uB9C9\uB300\uAC00 100% \uBE68\uB9AC \uCC44\uC6CC\uC9D0", "\uC9C0\uC5ED \uB0B4 \uD658\uC601\uC774 \uAC70\uC6B8\uACFC\uC758 \uAC70\uB9AC\uC5D0 \uBE44\uB840\uD574 50% \uB354 \uBE60\uB974\uAC8C \uC99D\uAC00"], chaos: 0, level: 0, max: 2 },
    { id: "delirium-scarab-of-paranoia", name: "\uD3B8\uC9D1\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uAC00 \uBCF4\uC0C1 \uC720\uD615 2\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, level: 0, max: 5 },
    { id: "delirium-scarab-of-neuroses", name: "\uC2E0\uACBD\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uBAA8\uB4E0 \uACE0\uC720 \uD658\uC601 \uBCF4\uC2A4 \uB4F1\uC7A5", "11\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uC5D0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5"], chaos: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-delusions", name: "\uB9DD\uC0C1\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4\uC5D0 \uD658\uC601 \uD604\uC0C1 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 }
  )
};
const Legion = {
  top: "506px",
  left: "132px",
  class: "",
  list: Array(
    { id: "legion-scarab", name: "\uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCD94\uAC00 \uAD70\uB2E8 \uC778\uCE74\uC6B4\uD130 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 5 },
    { id: "legion-scarab-of-officers", name: "\uC7A5\uAD50\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC5D0 \uBCD1\uC7A5 5\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-command", name: "\uC9C0\uD718\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC774 \uC7A5\uAD70 \uB300\uB3D9"], chaos: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-eternal-conflict", name: "\uC601\uC6D0\uD55C \uBD84\uC7C1\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uC5EC\uB7EC \uBC88 \uAE68\uC6B8 \uC218 \uC788\uC74C", "\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uAE68\uC6B8 \uB54C\uB9C8\uB2E4 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Blight = {
  top: "506px",
  left: "427px",
  class: "",
  list: Array(
    { id: "blight-scarab", name: "\uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-the-blightheart", name: "\uBA54\uB9C8\uB978 \uC2EC\uC7A5\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0 \uC5ED\uBCD1 \uAC78\uB9B0 \uC0C1\uC790 1\uAC1C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uC801 \uC6E8\uC774\uBE0C \uC218\uAC00 \uD06C\uAC8C \uC99D\uD3ED", "\uC5ED\uBCD1 \uAC78\uB9B0 \uC801\uC744 \uB9CE\uC774 \uCC98\uCE58\uD560\uC218\uB85D \uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uAC78\uB9B0 \uC0C1\uC790\uC758", "\uD06C\uAE30\uAC00 \uCEE4\uC9C0\uACE0 \uBCF4\uC0C1\uC774 \uB298\uC5B4\uB0A8"], chaos: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-blooming", name: "\uAC1C\uD654\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uACE0\uC720 \uBCF4\uC2A4 \uCD5C\uB300 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 \uB0B4 \uACE0\uC720 \uC801\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uAC00", "\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC5ED\uBCD1 \uAC78\uB9B0 \uC9C0\uB3C4\uAC00 \uC5ED\uBCD1\uC5D0 \uC720\uB9B0\uB2F9\uD55C \uC9C0\uB3C4\uB85C \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-invigoration", name: "\uACE0\uBB34\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC15\uD654\uC758 \uD0D1\uC774 \uAC01\uAC01 \uBC94\uC704 \uB0B4 \uC5ED\uBCD1 \uBAAC\uC2A4\uD130\uC758", "\uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC744 \uC99D\uAC00\uC2DC\uD0B4"], chaos: 0, level: 0, max: 1 }
  )
};
const Abyss = {
  top: "560px",
  left: "132px",
  class: "",
  list: Array(
    { id: "abyss-scarab", name: "\uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2EC\uC5F0 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-multitudes", name: "\uAD70\uC911\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uBAAC\uC2A4\uD130 50% \uC99D\uAC00"], chaos: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-edifice", name: "\uAC74\uCD95\uBB3C\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0 \uC9C0\uD558\uB85C \uC774\uC5B4\uC9C0\uC9C0 \uC54A\uB294 \uC2EC\uC5F0\uC774 \uBA85\uACC4\uC758 \uCCA8\uD0D1\uC73C\uB85C \uC774\uC5B4\uC9D0", "\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0 \uC9C0\uD558\uB85C \uC774\uC5B4\uC9C0\uAC70\uB098 \uC2EC\uC5F0\uC758 \uBC1C\uACAC\uBB3C\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uB294 \uC2EC\uC5F0 \uAD6C\uB369\uC774\uAC00 \uC791\uC740 \uBA85\uACC4\uC758 \uCCA8\uD0D1\uC744 \uC0DD\uC131\uD568"], chaos: 0, level: 0, max: 1 },
    { id: "abyss-scarab-of-profound-depth", name: "\uC2EC\uC6D0\uD55C \uAE4A\uC774\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uD574\uB2F9 \uC2EC\uC5F0 \uB0B4\uC5D0 \uBA3C\uC800 \uB4F1\uC7A5\uD558\uB294 \uAD6C\uB369\uC774\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uB098\uC628", "\uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Essence = {
  top: "560px",
  left: "426px",
  class: "",
  list: Array(
    { id: "essence-scarab", name: "\uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAC07\uD78C \uBAAC\uC2A4\uD130 2\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 5 },
    { id: "essence-scarab-of-ascent", name: "\uC0C1\uC2B9\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC5D0\uC13C\uC2A4\uAC00 1\uB4F1\uAE09 \uB192\uAC8C \uBC1C\uACAC\uB428"], chaos: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-stability", name: "\uC548\uC815\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uC5D0\uC13C\uC2A4 \uD0C0\uB77D \uC2DC \uC5D0\uC13C\uC2A4\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC \uB610\uB294", "\uBCC0\uD654\uC2DC\uD0A4\uB294 \uACB0\uACFC\uB9CC \uAC00\uB2A5"], chaos: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-calcification", name: "\uC11D\uD68C\uD654\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC790\uC5F0\uC801\uC73C\uB85C \uC11C\uC2DD\uD558\uB294 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC5D0\uC13C\uC2A4\uC5D0 \uAC07\uD798"], chaos: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-adaptation", name: "\uC801\uC751\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uAC00 \uD480\uB824\uB098\uBA74 \uC9C0\uC5ED \uB0B4 \uB2E4\uB978 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uBB34\uC791\uC704 \uC5D0\uC13C\uC2A4 \uC18D\uC131 \uBD80\uC5EC", "\uC5D0\uC13C\uC2A4 \uC18D\uC131\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC758", "\uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const Breach = {
  top: "616px",
  left: "257px",
  class: "",
  list: Array(
    { id: "breach-scarab", name: "\uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 2\uAC1C \uCD94\uAC00"], chaos: 0, level: 0, max: 5 },
    { id: "breach-scarab-of-lordship", name: "\uC9C0\uC704\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC758 \uAC01 \uADE0\uC5F4\uC5D0 \uADE0\uC5F4 \uAD70\uC8FC \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-splintering", name: "\uD30C\uD3B8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC774 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED"], chaos: 0, level: 0, max: 2 },
    { id: "breach-scarab-of-snares", name: "\uC62C\uAC00\uBBF8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC5D0 \uC6C0\uCF1C\uC7A1\uB294 \uC190 3~5\uAC1C \uCD94\uAC00 \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC744 \uD76C\uADC0 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-resonant-cascade", name: "\uACF5\uBA85\uD558\uB294 \uD3ED\uD3EC\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4 \uD558\uB098\uB2F9 \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC774 10% \uB354 \uBE60\uB974\uAC8C \uC5F4\uB9AC\uACE0 \uB2EB\uD798", "\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, level: 0, max: 1 }
  )
};
const VariousScarabs1 = {
  top: "671px",
  left: "146px",
  class: "wide",
  list: Array(
    { id: "scarab-of-monstrous-lineage", name: "\uAE30\uAD34\uD55C \uD608\uD1B5\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB9C8\uBC95 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, level: 0, max: 2 },
    { id: "scarab-of-adversaries", name: "\uC801\uC218\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBCF5\uC81C\uB41C \uD76C\uADC0 \uBAAC\uC2A4\uD130\uB97C \uD3EC\uD568\uD55C \uBB34\uB9AC 4\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 2 },
    { id: "scarab-of-divinity", name: "\uC2E0\uC131\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uD76C\uADC0 \uBAAC\uC2A4\uD130 \uCD5C\uB300 3\uB9C8\uB9AC \uCD94\uAC00", "\uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uBAAC\uC2A4\uD130\uAC00 \uC0DD\uC131\uD558\uB294 \uC720\uB839\uC774 \uC8FC\uB294 \uD53C\uD574 100% \uC99D\uAC00"], chaos: 0, level: 0, max: 3 },
    { id: "scarab-of-hunted-traitors", name: "\uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790 \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 }
  )
};
const VariousScarabs2 = {
  top: "671px",
  left: "425px",
  class: "wide",
  list: Array(
    { id: "horned-scarab-of-bloodlines", name: "\uD608\uB9F9\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC758 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 150% \uC99D\uAC00", "\uC9C0\uC5ED \uB0B4 \uB9C8\uBC95 \uBAAC\uC2A4\uD130\uAC00 \uC18D\uC131 1\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-nemeses", name: "\uCC9C\uBC8C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC18D\uC131 2\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, level: 0, max: 2 },
    { id: "horned-scarab-of-preservation", name: "\uBCF4\uC804\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB2E4\uB978 \uAC11\uCDA9\uC11D\uB4E4\uC774 \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A\uC74C"], chaos: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-awakening", name: "\uAC01\uC131\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uBD80\uC5EC\uB41C \uC81C\uC791 \uC635\uC158 1\uAC1C \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-tradition", name: "\uC804\uD1B5\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAA8\uB4E0 \uD76C\uADC0 \uBC0F \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC774", "\uBCF4\uC0C1 \uC18D\uC131\uC5D0 \uC758\uD574 \uBCC0\uD654\uB428"], chaos: 0, level: 0, max: 1 }
  )
};
const VariousScarabs3 = {
  top: "726px",
  left: "146px",
  class: "wide",
  list: Array(
    { id: "scarab-of-stability", name: "\uC548\uC815\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uD3EC\uD0C8\uC774 50%\uC758 \uD655\uB960\uB85C \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A\uC74C"], chaos: 0, level: 0, max: 1 },
    { id: "scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 2000\uB9C8\uB9AC\uB85C \uAC15\uD654"], chaos: 0, level: 0, max: 2 },
    { id: "scarab-of-radiant-storms", name: "\uCC2C\uB780\uD55C \uD3ED\uD48D\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCC2C\uC5F0\uD55C \uD3ED\uD48D \uB4F1\uC7A5"], chaos: 0, level: 0, max: 1 },
    { id: "scarab-of-bisection", name: "\uC591\uB2E8\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uC811\uB450\uC5B4 \uBB34\uD6A8\uD654 \uB610\uB294 \uC811\uBBF8\uC5B4 \uBB34\uD6A8\uD654 \uC81C\uC791 \uC635\uC158 \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, level: 0, max: 1 }
  )
};
const VariousScarabs4 = {
  top: "726px",
  left: "504px",
  class: "wide",
  list: Array(
    { id: "horned-scarab-of-glittering", name: "\uBC88\uCA4D\uC784\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD50C\uB808\uC774\uC5B4\uAC00 \uCC98\uCE58\uD55C \uBAAC\uC2A4\uD130 \uC218\uC5D0 \uB530\uB77C \uC544\uC774\uD15C \uD76C\uADC0\uB3C4\uAC00 \uCD5C\uB300 400%\uAE4C\uC9C0", "\uC99D\uAC00\uD558\uACE0 \uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74\uC11C \uC11C\uC11C\uD788 \uAC10\uC18C"], chaos: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-pandemonium", name: "\uD63C\uB780 \uC720\uBC1C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uAC00 15% \uD655\uB960\uB85C \uBB34\uC791\uC704 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4 1\uB9C8\uB9AC\uB85C \uB4F1\uC7A5", "\uB9C8\uC9C0\uB9C9 \uC9C0\uB3C4 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uD574\uB2F9 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, level: 0, max: 1 }
  )
};
class Scarab {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "level", 0);
    __publicField(this, "max", 0);
    __publicField(this, "description", []);
  }
  static async fetch() {
    const groups = [
      Titanic,
      Sulphite,
      Divination,
      Anarchy,
      Ritual,
      Harvest,
      Kalguur,
      Influencing,
      Bestiary,
      Harbinger,
      Betrayal,
      Incursion,
      Domination,
      Torment,
      Cartography,
      Beyond,
      Ambush,
      Ultimatum,
      Expedition,
      Delirium,
      Legion,
      Blight,
      Abyss,
      Essence,
      Breach,
      VariousScarabs1,
      VariousScarabs2,
      VariousScarabs3,
      VariousScarabs4
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Scarab/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    priceRes.forEach((data) => {
      groups.forEach((group) => {
        group.list.forEach((scarab) => {
          if (scarab.id === data.id) {
            scarab.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
            scarab.level = calcLevel(data.primaryValue);
          }
        });
      });
    });
    iconRes.forEach((data) => {
      groups.forEach((group) => {
        group.list.forEach((scarab) => {
          if (scarab.id === data.id) {
            scarab.icon = `https://web.poecdn.com${data.image}`;
          }
        });
      });
    });
    return groups;
  }
}
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
var ItemTooltip_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-373269a2"), n = n(), popScopeId(), n);
const _hoisted_1$e = { class: "item-tooltip relative-position" };
const _hoisted_2$a = { class: "tooltip-header flex items-center" };
const _hoisted_3$7 = { class: "item-name q-mx-auto" };
const _hoisted_4 = { class: "item-content column items-center" };
const _hoisted_5 = { class: "row items-center" };
const _hoisted_6 = { class: "q-ml-xs" };
const _hoisted_7 = {
  key: 0,
  class: "row t-mt-10"
};
const _hoisted_8 = { class: "q-ml-xs" };
const _hoisted_9 = {
  key: 1,
  class: "row t-mt-10"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "q-ml-xs" }, "1", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "t-ml-10 t-mr-6 t-text-16",
  style: { "line-height": "1.2" }
}, "\u2248", -1));
const _hoisted_12 = { class: "q-ml-xs" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-separator" }, null, -1));
const _hoisted_14 = { class: "text-center scarab-description" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-separator" }, null, -1));
const _hoisted_16 = { class: "item-description text-center" };
const _sfc_main$f = defineComponent({
  ...{
    name: "ItemTooltip"
  },
  __name: "ItemTooltip",
  props: {
    item: {},
    max: { type: Boolean },
    description: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const overDivine = computed(() => props.item.chaos > store.CHAOS_PER_DIVINE);
    const divineValue = computed(() => {
      const value = props.item.chaos / store.CHAOS_PER_DIVINE;
      return value.toFixed(1);
    });
    const quantityPerDivine = computed(() => {
      const value = store.CHAOS_PER_DIVINE / props.item.chaos;
      return Math.round(value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QTooltip, { style: { "padding": "0" } }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$e, [
            createBaseVNode("div", _hoisted_2$a, [
              createBaseVNode("div", _hoisted_3$7, toDisplayString(_ctx.item.name), 1)
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(QImg, {
                  src: "images/chaos.png",
                  width: "20px"
                }),
                createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.item.chaos), 1)
              ]),
              overDivine.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(QImg, {
                  src: "images/divine.png",
                  width: "20px",
                  height: "20px",
                  style: { "margin-top": "-1px" }
                }),
                createBaseVNode("div", _hoisted_8, toDisplayString(divineValue.value), 1)
              ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(QImg, {
                  src: "images/divine.png",
                  width: "20px",
                  height: "20px",
                  style: { "margin-top": "-1px" }
                }),
                _hoisted_10,
                _hoisted_11,
                createVNode(QImg, {
                  src: _ctx.item.icon,
                  width: "20px",
                  height: "20px"
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_12, toDisplayString(quantityPerDivine.value), 1)
              ])),
              _ctx.max ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                _hoisted_13,
                createBaseVNode("div", _hoisted_14, "\uD55C\uB3C4 : " + toDisplayString(_ctx.item.max), 1)
              ], 64)) : createCommentVNode("", true),
              _ctx.description ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                _hoisted_15,
                createBaseVNode("div", _hoisted_16, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.item.description, (desc) => {
                    return openBlock(), createElementBlock("div", { key: desc }, toDisplayString(desc), 1);
                  }), 128))
                ])
              ], 64)) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var ItemTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-373269a2"]]);
var ScarabItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$d = {
  key: 0,
  class: "scarab-box empty"
};
const _sfc_main$e = defineComponent({
  ...{
    name: "ScarabItem"
  },
  __name: "ScarabItem",
  props: {
    scarab: {}
  },
  setup(__props) {
    const props = __props;
    const emptyScarabItem = computed(() => props.scarab.id === "empty");
    return (_ctx, _cache) => {
      return emptyScarabItem.value ? (openBlock(), createElementBlock("div", _hoisted_1$d)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["item-box scarab-box row flex-center", `highlight${_ctx.scarab.level}`])
      }, [
        createVNode(QImg, {
          src: _ctx.scarab.icon,
          width: "42px",
          height: "42px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", {
          class: normalizeClass(["absolute-bottom-right", `highlight${_ctx.scarab.level}-text`]),
          style: { "font-size": "11px", "line-height": "1", "bottom": "1px", "right": "2px", "z-index": "2" }
        }, toDisplayString(_ctx.scarab.chaos), 3),
        createVNode(ItemTooltip, {
          item: _ctx.scarab,
          max: "",
          description: ""
        }, null, 8, ["item"])
      ], 2));
    };
  }
});
var ScarabItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-df5fcf40"]]);
var ScarabTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$c = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$9 = { class: "loading-chaos" };
const _hoisted_3$6 = { class: "scarab-stash q-mx-auto" };
const _sfc_main$d = defineComponent({
  ...{
    name: "ScarabTab"
  },
  __name: "ScarabTab",
  setup(__props) {
    onMounted(async () => {
      await getScarabInfo();
      registerInterval(async () => {
        await getScarabInfo();
      }, 1e3 * 60 * 10);
    });
    onBeforeUnmount(() => {
      removeInterval();
    });
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const scarabGroups = ref([]);
    async function getScarabInfo() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      scarabGroups.value = await Scarab.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$c, [
              createBaseVNode("div", _hoisted_2$9, [
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
        createBaseVNode("div", _hoisted_3$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(scarabGroups.value, (group, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["row scarab-group", group.class]),
              style: normalizeStyle({ top: `${group.top}`, left: `${group.left}` })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                return openBlock(), createBlock(ScarabItem, {
                  key: `${index}-${sIndex}`,
                  scarab
                }, null, 8, ["scarab"]);
              }), 128))
            ], 6);
          }), 128))
        ])
      ], 64);
    };
  }
});
var ScarabTab = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3f6d0fe0"]]);
class Allflame {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "max", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
    __publicField(this, "description", []);
  }
  static async fetch() {
    const list = [
      { id: "syndicate-medallion", name: "\uC5F0\uD569 \uBA54\uB2EC\uB9AC\uC628", icon: "", chaos: 0, max: 0, top: "168px", left: "364px", description: [] },
      { id: "allflame-ember-of-resplendence", name: "\uAD11\uD718\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 2, top: "339px", left: "234px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uC544\uC774\uD15C\uC744 \uB5A8\uC5B4\uB728\uB9AC\uC9C0 \uC54A\uC74C", "\uBB34\uB9AC \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC544\uC774\uD15C \uD76C\uADC0\uB3C4\uAC00 \uCD5C\uB300 400%\uAE4C\uC9C0 \uC99D\uAC00\uD558\uACE0", "\uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74\uC11C \uC11C\uC11C\uD788 \uAC10\uC18C"] },
      { id: "allflame-ember-of-kulemak", name: "\uCFE8\uB808\uB9C9\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 2, top: "339px", left: "320px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uC6B0\uB450\uBA38\uB9AC\uAC00 \uBB34\uC791\uC704 \uC5F0\uD569 \uC7A5\uBE44\uB97C \uC7A5\uCC29\uD558\uACE0 \uC788\uC744", "\uAC00\uB2A5\uC131\uC774 \uC788\uB294 \uBB34\uC791\uC704 \uC5F0\uD569 \uB2E8\uC6D0", "\uB9C8\uC9C0\uB9C9 \uC9C0\uB3C4 \uBCF4\uC2A4\uAC00 \uC4F0\uB7EC\uC9C4 \uD6C4 \uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uBD80\uD65C\uD568"] },
      { id: "allflame-ember-of-the-ethereal", name: "\uCC9C\uC0C1\uC5D0 \uC18D\uD55C \uC790\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 4, top: "339px", left: "406px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uC7A5\uBE44, \uD50C\uB77C\uC2A4\uD06C, \uD305\uD06C\uB97C", "\uB5A8\uC5B4\uB728\uB9AC\uC9C0 \uC54A\uC74C"] },
      { id: "allflame-ember-of-propagation", name: "\uC99D\uC2DD\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 1, top: "339px", left: "494px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uD76C\uADC0\uC77C \uB54C \uC8FD\uB294 \uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uC9C0\uC5ED \uB0B4 \uB2E4\uB978", "\uD76C\uADC0 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC18D\uC131\uC744 \uD655\uC0B0\uC2DC\uD0B4"] },
      { id: "allflame-ember-of-the-gilded", name: "\uB3C4\uAE08\uB41C \uC790\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 4, top: "442px", left: "234px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC7A5\uBE44\uAC00 \uACE8\uB4DC\uB85C \uC804\uD658"] },
      { id: "allflame-ember-of-flesh", name: "\uC0B4\uC810\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 3, top: "442px", left: "320px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC\uC5D0 \uBAAC\uC2A4\uD130\uAC00 1\uB9C8\uB9AC \uC788\uC74C", "\uBAAC\uC2A4\uD130\uC758 \uC0DD\uBA85\uB825 \uD06C\uAC8C \uC99D\uAC00"] },
      { id: "allflame-ember-of-toads", name: "\uB450\uAEBC\uBE44\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 3, top: "442px", left: "406px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uBAAC\uC2A4\uD130\uAC00 \uBB34\uD574\uD55C \uB450\uAEBC\uBE44\uB85C \uB4F1\uC7A5"] },
      { id: "allflame-ember-of-the-wildwood", name: "\uC57C\uC0DD\uB9BC\uC758 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88", icon: "", chaos: 0, max: 2, top: "442px", left: "494px", description: ["\uC9C0\uC5ED\uC758 \uBAAC\uC2A4\uD130 \uBB34\uB9AC \uAD50\uCCB4", "\uBB34\uB9AC \uC6B0\uB450\uBA38\uB9AC \uCC98\uCE58 \uC2DC \uC9C0\uB3C4 \uBCF4\uC2A4\uAC00", "\uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88\uB85C \uAC15\uD654"] }
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/AllflameEmber/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    priceRes.forEach((data) => {
      list.forEach((item) => {
        if (item.id === data.id) {
          item.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    iconRes.forEach((data) => {
      list.forEach((item) => {
        if (item.id === data.id) {
          item.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    const responseF = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Fragment/${"Keepers"}`);
    const priceResF = responseF.data.lines;
    const iconResF = responseF.data.items;
    const medallionPrice = priceResF.filter((r) => r.id.indexOf("medallion") !== -1);
    const medallionIcon = iconResF.filter((r) => r.id.indexOf("medallion") !== -1);
    medallionPrice.forEach((data) => {
      list.forEach((item) => {
        if (item.id === data.id) {
          item.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    medallionIcon.forEach((data) => {
      list.forEach((item) => {
        if (item.id === data.id) {
          item.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
var LegionTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-597aa662"), n = n(), popScopeId(), n);
const _hoisted_1$b = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$8 = { class: "loading-chaos" };
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "legion-stash q-mx-auto" }, null, -1));
const _sfc_main$c = defineComponent({
  ...{
    name: "LegionTab"
  },
  __name: "LegionTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const list = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      list.value = await Allflame.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$b, [
              createBaseVNode("div", _hoisted_2$8, [
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
        _hoisted_3$5
      ], 64);
    };
  }
});
var LegionTab = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-597aa662"]]);
var AllflameItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$a = { class: "item-box allflame-box flex flex-center" };
const _hoisted_2$7 = {
  class: "absolute-bottom-right",
  style: { "font-size": "12px", "line-height": "1", "bottom": "2px", "right": "4px", "z-index": "2" }
};
const _sfc_main$b = defineComponent({
  ...{
    name: "AllflameItem"
  },
  __name: "AllflameItem",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(QImg, {
          src: _ctx.item.icon,
          width: "62px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2$7, toDisplayString(_ctx.item.chaos), 1),
        _ctx.item.id === "syndicate-medallion" ? (openBlock(), createBlock(ItemTooltip, {
          key: 0,
          item: _ctx.item
        }, null, 8, ["item"])) : (openBlock(), createBlock(ItemTooltip, {
          key: 1,
          item: _ctx.item,
          max: "",
          description: ""
        }, null, 8, ["item"]))
      ]);
    };
  }
});
var AllflameItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7e28e39c"]]);
var BetrayalTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$9 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$6 = { class: "loading-chaos" };
const _hoisted_3$4 = { class: "betrayal-stash q-mx-auto" };
const _sfc_main$a = defineComponent({
  ...{
    name: "BetrayalTab"
  },
  __name: "BetrayalTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const list = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      list.value = await Allflame.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$9, [
              createBaseVNode("div", _hoisted_2$6, [
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
        createBaseVNode("div", _hoisted_3$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${item.top}`, left: `${item.left}` })
            }, [
              createVNode(AllflameItem, { item }, null, 8, ["item"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var BetrayalTab = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-62868fa2"]]);
class Fossil {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
    __publicField(this, "description", []);
  }
  static async fetch() {
    const list = [
      { id: "jagged-fossil", name: "\uBFB0\uC871\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uBB3C\uB9AC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uCE74\uC624\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "113px" },
      { id: "dense-fossil", name: "\uC870\uBC00\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uBC29\uC5B4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC0DD\uBA85\uB825 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "197px" },
      { id: "frigid-fossil", name: "\uCC28\uB514\uCC2C \uD654\uC11D", icon: "", chaos: 0, description: ["\uB0C9\uAE30 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uD654\uC5FC \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "281px" },
      { id: "aberrant-fossil", name: "\uD2B9\uC774\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uCE74\uC624\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBC88\uAC1C \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "365px" },
      { id: "scorched-fossil", name: "\uADF8\uC744\uB9B0 \uD654\uC11D", icon: "", chaos: 0, description: ["\uD654\uC5FC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB0C9\uAE30 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "450px" },
      { id: "metallic-fossil", name: "\uAE08\uC18D\uC131 \uD654\uC11D", icon: "", chaos: 0, description: ["\uBC88\uAC1C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBB3C\uB9AC \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "535px" },
      { id: "pristine-fossil", name: "\uC628\uC804\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uC0DD\uBA85\uB825 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBC29\uC5B4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "59px", left: "618px" },
      { id: "bound-fossil", name: "\uC18D\uBC15\uC758 \uD654\uC11D", icon: "", chaos: 0, description: ["\uC18C\uD658\uC218 \uD639\uC740 \uC624\uB77C \uD639\uC740 \uC800\uC8FC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00"], top: "144px", left: "30px" },
      { id: "corroded-fossil", name: "\uBD80\uC2DD\uB41C \uD654\uC11D", icon: "", chaos: 0, description: ["\uBB3C\uB9AC \uC0C1\uD0DC \uC774\uC0C1 \uD639\uC740 \uCE74\uC624\uC2A4 \uC0C1\uD0DC \uC774\uC0C1 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC6D0\uC18C \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "144px", left: "113px" },
      { id: "opulent-fossil", name: "\uD638\uD654\uB85C\uC6B4 \uD654\uC11D", icon: "", chaos: 0, description: ["\uCD9C\uD604 \uD655\uB960 \uC18D\uC131 \uAC1C\uC218 \uC99D\uAC00", "\uD0DC\uADF8 \uC5C6\uB294 \uC18D\uC131 \uC5C6\uC74C"], top: "144px", left: "197px" },
      { id: "prismatic-fossil", name: "\uBD84\uAD11 \uD654\uC11D", icon: "", chaos: 0, description: ["\uC6D0\uC18C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBB3C\uB9AC \uC0C1\uD0DC \uC774\uC0C1 \uD639\uC740 \uCE74\uC624\uC2A4 \uC0C1\uD0DC \uC774\uC0C1 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "144px", left: "281px" },
      { id: "deft-fossil", name: "\uB0A0\uB835\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uCE58\uBA85\uD0C0 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB2A5\uB825\uCE58 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "144px", left: "365px" },
      { id: "aetheric-fossil", name: "\uC5D0\uD14C\uB974 \uD654\uC11D", icon: "", chaos: 0, description: ["\uC2DC\uC804 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uACF5\uACA9 \uC18D\uC131 \uBD80\uC5EC \uAC10\uC18C"], top: "144px", left: "450px" },
      { id: "lucent-fossil", name: "\uBE5B\uB098\uB294 \uD654\uC11D", icon: "", chaos: 0, description: ["\uB9C8\uB098 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC18D\uB3C4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "144px", left: "535px" },
      { id: "serrated-fossil", name: "\uD1B1\uB2C8 \uD654\uC11D", icon: "", chaos: 0, description: ["\uACF5\uACA9 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC2DC\uC804 \uC18D\uC131 \uBD80\uC5EC \uAC10\uC18C"], top: "144px", left: "618px" },
      { id: "shuddering-fossil", name: "\uC804\uC728\uC758 \uD654\uC11D", icon: "", chaos: 0, description: ["\uC18D\uB3C4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB9C8\uB098 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "144px", left: "700px" },
      { id: "tangled-fossil", name: "\uC5BD\uD600\uB4E0 \uD654\uC11D", icon: "", chaos: 0, description: ["\uBB34\uC791\uC704 \uC18D\uC131 \uC720\uD615 1\uAC1C\uC758 \uB4F1\uC7A5 \uD655\uB960\uC744 \uD06C\uAC8C \uB192\uC774\uACE0", "\uB2E4\uB978 \uBB34\uC791\uC704 \uC18D\uC131 \uC720\uD615 1\uAC1C\uB97C \uB4F1\uC7A5\uD558\uC9C0 \uC54A\uAC8C \uD569\uB2C8\uB2E4.", "\uD6A8\uACFC\uB294 \uACF5\uBA85\uAE30\uC758 \uBAA8\uB4E0 \uD648\uC5D0 \uD654\uC11D\uC744 \uC7A5\uCC29\uD55C \uD6C4 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4."], top: "228px", left: "71px" },
      { id: "bloodstained-fossil", name: "\uD53C\uC5BC\uB8E9 \uD654\uC11D", icon: "", chaos: 0, description: ["\uD0C0\uB77D", "\uD0C0\uB77D\uD55C \uACE0\uC815 \uC18D\uC131 \uBD80\uC5EC \uBCF4\uC720"], top: "228px", left: "155px" },
      { id: "gilded-fossil", name: "\uB3C4\uAE08\uB41C \uD654\uC11D", icon: "", chaos: 0, description: ["\uC0C1\uC778\uC5D0\uAC8C \uD310\uB9E4\uD560 \uB54C \uC5BB\uB294 \uD654\uD3D0 \uC99D\uAC00"], top: "228px", left: "281px" },
      { id: "fundamental-fossil", name: "\uADFC\uBCF8\uC801\uC778 \uD654\uC11D", icon: "", chaos: 0, description: ["\uB2A5\uB825\uCE58 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uCE58\uBA85\uD0C0 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "228px", left: "365px" },
      { id: "sanctified-fossil", name: "\uCD95\uC131\uB41C \uD654\uC11D", icon: "", chaos: 0, description: ["\uC18D\uC131 \uBD80\uC5EC \uACB0\uC815 \uC2DC \uAD00\uB828 \uC218\uCE58 \uAC1C\uC120", "\uACE0\uB808\uBCA8 \uC18D\uC131 \uBD80\uC5EC \uB4F1\uC7A5 \uBE48\uB3C4 \uC99D\uAC00"], top: "228px", left: "450px" },
      { id: "hollow-fossil", name: "\uACF5\uD5C8\uC758 \uD654\uC11D", icon: "", chaos: 0, description: ["\uC2EC\uC5F0 \uD648 \uBCF4\uC720"], top: "228px", left: "576px" },
      { id: "fractured-fossil", name: "\uBD84\uC5F4\uB41C \uD654\uC11D", icon: "", chaos: 0, description: ["\uBD84\uD560\uB41C \uBCF5\uC81C\uBCF8\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.", "\uC601\uD5A5\uC744 \uBC1B\uC740 \uC544\uC774\uD15C,", "\uC778\uCC48\uD2B8\uB41C \uC544\uC774\uD15C, \uACB0\uD569\uB41C \uC544\uC774\uD15C, \uBD84\uC5F4\uB41C \uC544\uC774\uD15C\uC740 \uBD84\uD560\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."], top: "228px", left: "660px" },
      { id: "glyphic-fossil", name: "\uC0C1\uD615 \uBB38\uC790 \uD654\uC11D", icon: "", chaos: 0, description: ["\uD0C0\uB77D \uC5D0\uC13C\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uBCF4\uC720"], top: "310px", left: "113px" },
      { id: "faceted-fossil", name: "\uC5F0\uB9C8\uD55C \uD654\uC11D", icon: "", chaos: 0, description: ["\uC82C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00"], top: "310px", left: "618px" }
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Fossil/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    priceRes.forEach((data) => {
      list.forEach((fossil) => {
        if (fossil.id === data.id) {
          fossil.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    iconRes.forEach((data) => {
      list.forEach((fossil) => {
        if (fossil.id === data.id) {
          fossil.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
class Resonator {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "level", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
  }
  static async fetch() {
    const list = [
      { id: "primitive-chaotic-resonator", name: "\uCD08\uAE30\uD615 \uD63C\uB3C8 \uACF5\uBA85\uAE30", icon: "", chaos: 0, level: 1, top: "632px", left: "186px" },
      { id: "potent-chaotic-resonator", name: "\uAC15\uD654\uD615 \uD63C\uB3C8 \uACF5\uBA85\uAE30", icon: "", chaos: 0, level: 2, top: "609px", left: "268px" },
      { id: "powerful-chaotic-resonator", name: "\uAC15\uB825 \uD63C\uB3C8 \uACF5\uBA85\uAE30", icon: "", chaos: 0, level: 3, top: "607px", left: "354px" },
      { id: "prime-chaotic-resonator", name: "\uCD5C\uC885\uD615 \uD63C\uB3C8 \uACF5\uBA85\uAE30", icon: "", chaos: 0, level: 4, top: "605px", left: "489px" }
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Resonator/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    priceRes.forEach((data) => {
      list.forEach((resonator) => {
        if (resonator.id === data.id) {
          resonator.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    iconRes.forEach((data) => {
      list.forEach((resonator) => {
        if (resonator.id === data.id) {
          resonator.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
var FossilItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$8 = {
  class: "absolute-bottom-right",
  style: { "font-size": "12px", "line-height": "1", "bottom": "2px", "right": "4px", "z-index": "2" }
};
const _sfc_main$9 = defineComponent({
  ...{
    name: "FossilItem"
  },
  __name: "FossilItem",
  props: {
    fossil: {}
  },
  setup(__props) {
    const props = __props;
    const icon = computed(() => props.fossil.icon);
    const pricelessClass = computed(() => {
      const chaos = Number(props.fossil.chaos);
      if (chaos >= 200) {
        return ["text-red", "highlight-red"];
      } else if (chaos >= 150) {
        return "text-orange-7";
      } else if (chaos >= 100) {
        return "text-amber-7";
      } else if (chaos >= 50) {
        return "text-yellow-5";
      } else if (chaos >= 10) {
        return "text-yellow-2";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["item-box fossil-box row flex-center", pricelessClass.value])
      }, [
        createVNode(QImg, {
          src: icon.value,
          width: "60px",
          height: "60px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_1$8, toDisplayString(_ctx.fossil.chaos), 1),
        createVNode(ItemTooltip, {
          item: _ctx.fossil,
          description: ""
        }, null, 8, ["item"])
      ], 2);
    };
  }
});
var FossilItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3d4fa21b"]]);
var ResonatorItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = {
  class: "absolute-bottom-right",
  style: { "font-size": "12px", "line-height": "1", "bottom": "4px", "right": "6px", "z-index": "2" }
};
const _sfc_main$8 = defineComponent({
  ...{
    name: "ResonatorItem"
  },
  __name: "ResonatorItem",
  props: {
    resonator: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["resonator-box flex flex-center", `unit-size-${_ctx.resonator.level}`])
      }, [
        createVNode(QImg, {
          src: _ctx.resonator.icon,
          alt: ""
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_1$7, toDisplayString(_ctx.resonator.chaos), 1),
        createVNode(ItemTooltip, { item: _ctx.resonator }, null, 8, ["item"])
      ], 2);
    };
  }
});
var ResonatorItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-5904578c"]]);
var FossilTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$5 = { class: "loading-chaos" };
const _hoisted_3$3 = { class: "fossil-stash q-mx-auto" };
const _sfc_main$7 = defineComponent({
  ...{
    name: "FossilTab"
  },
  __name: "FossilTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const fossilList = ref([]);
    const resonatorList = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      fossilList.value = await Fossil.fetch();
      resonatorList.value = await Resonator.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$6, [
              createBaseVNode("div", _hoisted_2$5, [
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
        createBaseVNode("div", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(fossilList.value, (fossil, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${fossil.top}`, left: `${fossil.left}` })
            }, [
              createVNode(FossilItem, { fossil }, null, 8, ["fossil"])
            ], 4);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(resonatorList.value, (resonator, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${resonator.top}`, left: `${resonator.left}` })
            }, [
              createVNode(ResonatorItem, { resonator }, null, 8, ["resonator"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var FossilTab = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cd5b0ea8"]]);
class Oil {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
    __publicField(this, "description", []);
  }
  static async fetch() {
    const list = [
      { id: "clear-oil", name: "\uD22C\uBA85\uD55C \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "36px", description: ["\uBAAC\uC2A4\uD130\uC758 \uC774\uB3D9 \uC18D\uB3C4 12% \uAC10\uC18C", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "sepia-oil", name: "\uC801\uAC08\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "110px", description: ["\uD0D1\uC758 \uD53C\uD574 25% \uC99D\uD3ED", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "amber-oil", name: "\uD638\uBC15\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "192px", description: ["\uD0D1 \uAC74\uC124 \uBC0F \uC5C5\uADF8\uB808\uC774\uB4DC \uBE44\uC6A9 25% \uAC10\uC18C", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "verdant-oil", name: "\uC2E0\uB85D\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "271px", description: ["\uACBD\uD5D8\uCE58 \uD68D\uB4DD 45% \uC99D\uAC00", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "teal-oil", name: "\uCCAD\uB85D\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "350px", description: ["\uC5ED\uBCD1 \uBAAC\uC2A4\uD130 \uC0DD\uC131 \uC18D\uB3C4 30% \uAC00\uC18D", "\uC778\uCE74\uC6B4\uD130 \uC9C0\uC18D\uC2DC\uAC04 50\uCD08 \uB2E8\uCD95", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "azure-oil", name: "\uB2F4\uCCAD\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "428px", description: ["\uC5ED\uBCD1 \uC0C1\uC790 5\uAC1C\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uC544\uC774\uD15C\uC758 \uC885\uB958\uC5D0 \uD589\uC6B4 \uC801\uC6A9", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "indigo-oil", name: "\uB0A8\uC0C9 \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "509px", description: ["\uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0 \uC5ED\uBCD1 \uBCF4\uC2A4 \uCD5C\uB300 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "tainted-oil", name: "\uB354\uB7FD\uD600\uC9C4 \uC131\uC720", icon: "", chaos: 0, top: "32px", left: "619px", description: [] },
      { id: "violet-oil", name: "\uBCF4\uB78F\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "75px", description: ["\uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC758 \uB369\uAD74\uC774 25%\uC758 \uD655\uB960\uB85C \uBCF4\uC0C1 \uC0C1\uC790 1\uAC1C \uCD94\uAC00 \uBCF4\uC720", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "crimson-oil", name: "\uC9C4\uD64D\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "153px", description: ["\uC5ED\uBCD1 \uC0C1\uC790 12\uAC1C\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uC544\uC774\uD15C\uC758 \uC885\uB958\uC5D0 \uD589\uC6B4 \uC801\uC6A9", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "black-oil", name: "\uAC80\uC740\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "232px", description: ["\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00", "\uC5ED\uBCD1 \uC0C1\uC790\uC5D0\uC11C 7% \uD655\uB960\uB85C \uBCF4\uC0C1 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"] },
      { id: "opalescent-oil", name: "\uC624\uD314\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "312px", description: ["\uC5ED\uBCD1 \uC0C1\uC790 18\uAC1C\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uC544\uC774\uD15C\uC758 \uC885\uB958\uC5D0 \uD589\uC6B4 \uC801\uC6A9", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "silver-oil", name: "\uC740\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "391px", description: ["\uC774 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC544\uC774\uD15C \uC218\uB7C9 80% \uC99D\uAC00", "\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00"] },
      { id: "golden-oil", name: "\uAE08\uBE5B \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "471px", description: ["\uBB34\uB9AC \uADDC\uBAA8 6% \uC99D\uAC00", "\uC5ED\uBCD1 \uC0C1\uC790\uC5D0\uC11C 30% \uD655\uB960\uB85C \uBCF4\uC0C1 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"] },
      { id: "reflective-oil", name: "\uD22C\uC601 \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "619px", description: [] },
      { id: "prismatic-oil", name: "\uBD84\uAD11 \uC131\uC720", icon: "", chaos: 0, top: "101px", left: "698px", description: [] }
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Oil/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    priceRes.forEach((data) => {
      list.forEach((oil) => {
        if (oil.id === data.id) {
          oil.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    iconRes.forEach((data) => {
      list.forEach((oil) => {
        if (oil.id === data.id) {
          oil.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
var OilItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = {
  class: "absolute-bottom-right",
  style: { "font-size": "11px", "line-height": "1", "bottom": "2px", "right": "4px", "z-index": "2" }
};
const _sfc_main$6 = defineComponent({
  ...{
    name: "OilItem"
  },
  __name: "OilItem",
  props: {
    oil: {}
  },
  setup(__props) {
    const props = __props;
    const pricelessClass = computed(() => {
      const chaos = Number(props.oil.chaos);
      if (chaos >= 200) {
        return ["text-red", "highlight-red"];
      } else if (chaos >= 150) {
        return "text-orange-7";
      } else if (chaos >= 100) {
        return "text-amber-7";
      } else if (chaos >= 50) {
        return "text-yellow-5";
      } else if (chaos >= 10) {
        return "text-yellow-2";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["item-box oil-box flex flex-center", pricelessClass.value])
      }, [
        createVNode(QImg, {
          src: _ctx.oil.icon,
          width: "46px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_1$5, toDisplayString(_ctx.oil.chaos), 1),
        createVNode(ItemTooltip, {
          item: _ctx.oil,
          description: ""
        }, null, 8, ["item"])
      ], 2);
    };
  }
});
var OilItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-091ddfd4"]]);
var OilTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$4 = { class: "loading-chaos" };
const _hoisted_3$2 = { class: "oil-stash q-mx-auto" };
const _sfc_main$5 = defineComponent({
  ...{
    name: "OilTab"
  },
  __name: "OilTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const oilList = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      oilList.value = await Oil.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$4, [
              createBaseVNode("div", _hoisted_2$4, [
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
        createBaseVNode("div", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(oilList.value, (oil, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${oil.top}`, left: `${oil.left}` })
            }, [
              createVNode(OilItem, { oil }, null, 8, ["oil"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var OilTab = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5d6688d4"]]);
class DeliriumOrb {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "max", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
    __publicField(this, "description", []);
  }
  static async fetch() {
    const list = [
      { id: "simulacrum-splinter", name: "\uBCF5\uC81C\uB41C \uC601\uD1A0 \uD30C\uD3B8", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bVNwbGludGVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ae73b9445e/DeliriumSplinter.png", chaos: 0, max: 0, top: "50px", left: "255px", description: ["300\uAC1C\uC758 \uD30C\uD3B8\uC744 \uC870\uD569\uD558\uBA74 \uBCF5\uC81C\uB41C \uC601\uD1A0\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4."] },
      { id: "simulacrum", name: "\uBCF5\uC81C\uB41C \uC601\uD1A0", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bUZyYWdtZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/92fba984ee/DeliriumFragment.png", chaos: 0, max: 0, top: "50px", left: "474px", description: ["\uC774 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC544\uC774\uD15C \uC218\uB7C9 5% \uC99D\uAC00"] },
      { id: "fine-delirium-orb", name: "\uC591\uC9C8\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "32px", left: "44px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uD654\uD3D0 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "singular-delirium-orb", name: "\uBE44\uBC94\uD55C \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "117px", left: "44px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uACE0\uC720 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "cartographers-delirium-orb", name: "\uC9C0\uB3C4\uC81C\uC791\uC790\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "117px", left: "132px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC9C0\uB3C4 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "skittering-delirium-orb", name: "\uB2EC\uB9AC\uB294 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "117px", left: "598px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uAC11\uCDA9\uC11D \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "armoursmiths-delirium-orb", name: "\uAC11\uC637\uC81C\uC791\uC790\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "117px", left: "683px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uBC29\uC5B4\uAD6C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "thaumaturges-delirium-orb", name: "\uB9C8\uC11D\uD559\uC790\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "204px", left: "44px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC82C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "jewellers-delirium-orb", name: "\uC96C\uC5BC\uB7EC \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "203px", left: "132px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC7A5\uC2E0\uAD6C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "foreboding-delirium-orb", name: "\uBD88\uAE38\uD55C \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "203px", left: "217px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC120\uAD6C\uC790 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "whispering-delirium-orb", name: "\uC18D\uC0AD\uC774\uB294 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "203px", left: "511px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC5D0\uC13C\uC2A4 \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "fossilised-delirium-orb", name: "\uD654\uC11D\uD654\uB41C \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "202px", left: "598px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uD654\uC11D \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "timeless-delirium-orb", name: "\uBB34\uAD81\uD55C \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "204px", left: "683px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uAD70\uB2E8 \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "blacksmiths-delirium-orb", name: "\uB300\uC7A5\uC7A5\uC774\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "44px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uBB34\uAE30 \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "abyssal-delirium-orb", name: "\uC2EC\uC5F0\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "132px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC2EC\uC5F0 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "obscured-delirium-orb", name: "\uAC00\uB824\uC9C4 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "217px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uADE0\uC5F4 \uC544\uC774\uD15C \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "fragmented-delirium-orb", name: "\uC870\uAC01\uB09C \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "511px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC870\uAC01 \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "diviners-delirium-orb", name: "\uC608\uC5B8\uC790\uC758 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "598px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC810\uC220 \uCE74\uB4DC \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] },
      { id: "blighted-delirium-orb", name: "\uC5ED\uBCD1 \uAC78\uB9B0 \uD658\uC601\uC758 \uC624\uBE0C", icon: "", chaos: 0, max: 0, top: "291px", left: "683px", description: ["\uC9C0\uB3C4 \uC544\uC774\uD15C\uC5D0 \uC5ED\uBCD1 \uBCF4\uC0C1 \uC720\uD615\uC774 \uD3EC\uD568\uB41C \uD658\uC601 \uD604\uC0C1\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4"] }
    ];
    const responseD = await api.get(`https://www.logisnet.co.kr/dev-api/poe/DeliriumOrb/${"Keepers"}`);
    const priceResD = responseD.data.lines;
    const iconResD = responseD.data.items;
    priceResD.forEach((data) => {
      list.forEach((orb) => {
        if (orb.id === data.id) {
          orb.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    iconResD.forEach((data) => {
      list.forEach((orb) => {
        if (orb.id === data.id) {
          orb.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    const responseF = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Fragment/${"Keepers"}`);
    const priceResF = responseF.data.lines;
    const iconResF = responseF.data.items;
    const simulacrumPrice = priceResF.filter((r) => r.id.indexOf("simulacrum") !== -1);
    const simulacrumIcon = iconResF.filter((r) => r.id.indexOf("simulacrum") !== -1);
    simulacrumPrice.forEach((data) => {
      list.forEach((orb) => {
        if (orb.id === data.id) {
          orb.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    simulacrumIcon.forEach((data) => {
      list.forEach((orb) => {
        if (orb.id === data.id) {
          orb.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
var DeliriumOrbItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "item-box orb-box flex flex-center" };
const _hoisted_2$3 = {
  class: "absolute-bottom-right",
  style: { "font-size": "11px", "line-height": "1", "bottom": "2px", "right": "4px", "z-index": "2" }
};
const _sfc_main$4 = defineComponent({
  ...{
    name: "DeliriumOrbItem"
  },
  __name: "DeliriumOrbItem",
  props: {
    orb: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(QImg, {
          src: _ctx.orb.icon,
          width: "56px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2$3, toDisplayString(_ctx.orb.chaos), 1),
        createVNode(ItemTooltip, {
          item: _ctx.orb,
          description: ""
        }, null, 8, ["item"])
      ]);
    };
  }
});
var DeliriumOrbItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-36610ab5"]]);
var DeliriumOrbTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$2 = { class: "loading-chaos" };
const _hoisted_3$1 = { class: "delirium-orb-stash q-mx-auto" };
const _sfc_main$3 = defineComponent({
  ...{
    name: "DeliriumOrbTab"
  },
  __name: "DeliriumOrbTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const list = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      list.value = await DeliriumOrb.fetch();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$2, [
              createBaseVNode("div", _hoisted_2$2, [
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
        createBaseVNode("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (orb, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${orb.top}`, left: `${orb.left}` })
            }, [
              createVNode(DeliriumOrbItem, { orb }, null, 8, ["orb"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var DeliriumOrbTab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-58b20716"]]);
class Catalyst {
  constructor() {
    __publicField(this, "id", "");
    __publicField(this, "name", "");
    __publicField(this, "icon", "");
    __publicField(this, "chaos", 0);
    __publicField(this, "top", "");
    __publicField(this, "left", "");
    __publicField(this, "description", []);
  }
  static async fetch() {
    const list = [
      { id: "tainted-catalyst", name: "\uB354\uB7FD\uD600\uC9C4 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TaintedCatalyst.webp", chaos: 0, top: "38px", left: "364px", description: ["\uD0C0\uB77D\uD55C \uBC18\uC9C0, \uBAA9\uAC78\uC774 \uB610\uB294 \uD5C8\uB9AC\uB760\uC5D0 \uBB34\uC791\uC704 \uC720\uD615 \uBC0F \uC218\uCE58\uC758 \uD004\uB9AC\uD2F0 1\uAC1C\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4", "\uB2E4\uB978 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4"] },
      { id: "abrasive-catalyst", name: "\uC5F0\uB9C8\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/AbrasiveCatalyst.webp", chaos: 0, top: "122px", left: "236px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uACF5\uACA9 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "tempering-catalyst", name: "\uC644\uD654\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TemperingCatalyst.webp", chaos: 0, top: "122px", left: "320px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uBC29\uC5B4 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "fertile-catalyst", name: "\uD48D\uC694\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/FertileCatalyst.webp", chaos: 0, top: "122px", left: "405px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uC0DD\uBA85\uB825 \uBC0F \uB9C8\uB098 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "accelerating-catalyst", name: "\uAC00\uC18D\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/SpeedModifierCatalyst.webp", chaos: 0, top: "122px", left: "488px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uC18D\uB3C4 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "unstable-catalyst", name: "\uBD88\uC548\uC815\uD55C \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/CriticalModifierCatalyst.webp", chaos: 0, top: "213px", left: "86px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uCE58\uBA85\uD0C0 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "turbulent-catalyst", name: "\uACA9\uB3D9\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TurbulentCatalyst.webp", chaos: 0, top: "213px", left: "167px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uC6D0\uC18C \uD53C\uD574 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "imbued-catalyst", name: "\uBD80\uC5EC\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/ImbuedCatalyst.webp", chaos: 0, top: "213px", left: "251px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uC2DC\uC804 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "prismatic-catalyst", name: "\uBD84\uAD11\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/PrismaticCatalyst.webp", chaos: 0, top: "213px", left: "475px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uC800\uD56D \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "intrinsic-catalyst", name: "\uBCF8\uC9C8\uC758 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/IntrinsicCatalyst.webp", chaos: 0, top: "213px", left: "558px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uB2A5\uB825\uCE58 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] },
      { id: "noxious-catalyst", name: "\uC720\uB3C5\uC131 \uAE30\uD3ED\uC81C", icon: "https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/ChaosPhysicalCatalyst.webp", chaos: 0, top: "213px", left: "639px", description: ["\uD004\uB9AC\uD2F0\uB97C \uCD94\uAC00\uD558\uC5EC \uBC18\uC9C0\uB098 \uBAA9\uAC78\uC774, \uD5C8\uB9AC\uB760\uC5D0 \uBD80\uC5EC\uB41C \uBB3C\uB9AC \uBC0F \uCE74\uC624\uC2A4 \uD53C\uD574 \uC18D\uC131\uC744 \uD5A5\uC0C1\uD569\uB2C8\uB2E4.", "\uAE30\uC874 \uD004\uB9AC\uD2F0 \uC720\uD615\uC744 \uB300\uCCB4\uD569\uB2C8\uB2E4."] }
    ];
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Currency/${"Keepers"}`);
    const priceRes = response.data.lines;
    const iconRes = response.data.items;
    const catPriceRes = priceRes.filter((r) => r.id.indexOf("catalyst") !== -1);
    const catIconRes = iconRes.filter((r) => r.id.indexOf("catalyst") !== -1);
    catPriceRes.forEach((data) => {
      list.forEach((cat) => {
        if (cat.id === data.id) {
          cat.chaos = Number(Number(data.primaryValue || 0).toFixed(1));
        }
      });
    });
    catIconRes.forEach((data) => {
      list.forEach((cat) => {
        if (cat.id === data.id) {
          cat.icon = `https://web.poecdn.com${data.image}`;
        }
      });
    });
    return list;
  }
}
var CatalystItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "item-box catalyst-box flex flex-center" };
const _hoisted_2$1 = {
  class: "absolute-bottom-right",
  style: { "font-size": "12px", "line-height": "1", "bottom": "2px", "right": "4px", "z-index": "2" }
};
const _sfc_main$2 = defineComponent({
  ...{
    name: "CatalystItem"
  },
  __name: "CatalystItem",
  props: {
    catalyst: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(QImg, {
          src: _ctx.catalyst.icon,
          width: "62px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2$1, toDisplayString(_ctx.catalyst.chaos), 1),
        createVNode(ItemTooltip, {
          item: _ctx.catalyst,
          description: ""
        }, null, 8, ["item"])
      ]);
    };
  }
});
var CatalystItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-05522993"]]);
var CatalystTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2 = { class: "loading-chaos" };
const _hoisted_3 = { class: "catalyst-stash q-mx-auto" };
const _sfc_main$1 = defineComponent({
  ...{
    name: "CatalystTab"
  },
  __name: "CatalystTab",
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
    const { registerInterval, removeInterval } = useInterval();
    const fetchLoading = ref(false);
    const catalystList = ref([]);
    async function getMetaData() {
      fetchLoading.value = true;
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
      catalystList.value = await Catalyst.fetch();
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
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(catalystList.value, (catalyst, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "absolute",
              style: normalizeStyle({ top: `${catalyst.top}`, left: `${catalyst.left}` })
            }, [
              createVNode(CatalystItem, { catalyst }, null, 8, ["catalyst"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var CatalystTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-742ab4ab"]]);
const _sfc_main = defineComponent({
  ...{
    name: "StashPage"
  },
  __name: "StashPage",
  setup(__props) {
    const currentTab = ref("scarab");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" }, {
        default: withCtx(() => [
          createVNode(QTabs, {
            modelValue: currentTab.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
            class: "bg-blue-grey-7 text-grey-6",
            "active-bg-color": "blue-5",
            "active-color": "white"
          }, {
            default: withCtx(() => [
              createVNode(QTab, {
                name: "scarab",
                label: "\uAC11\uCDA9\uC11D"
              }),
              createVNode(QTab, {
                name: "legion",
                label: "\uAD70\uB2E8"
              }),
              createVNode(QTab, {
                name: "betrayal",
                label: "\uBC30\uC2E0"
              }),
              createVNode(QTab, {
                name: "fossil",
                label: "\uD654\uC11D"
              }),
              createVNode(QTab, {
                name: "oil",
                label: "\uC131\uC720"
              }),
              createVNode(QTab, {
                name: "delirium-orb",
                label: "\uD658\uC601\uC624\uBE0C"
              }),
              createVNode(QTab, {
                name: "catalyst",
                label: "\uAE30\uD3ED\uC81C"
              }),
              createVNode(QTab, {
                name: "currency",
                label: "\uAE30\uBCF8\uD654\uD3D0"
              }),
              createVNode(QTab, {
                name: "influence",
                label: "\uC601\uD5A5\uB825\uD654\uD3D0"
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QTabPanels, {
            modelValue: currentTab.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTab.value = $event),
            style: { "background": "transparent", "padding-bottom": "200px" }
          }, {
            default: withCtx(() => [
              createVNode(QTabPanel, { name: "currency" }, {
                default: withCtx(() => [
                  createVNode(CurrencyTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "influence" }, {
                default: withCtx(() => [
                  createVNode(InfluenceTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "scarab" }, {
                default: withCtx(() => [
                  createVNode(ScarabTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "legion" }, {
                default: withCtx(() => [
                  createVNode(LegionTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "betrayal" }, {
                default: withCtx(() => [
                  createVNode(BetrayalTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "fossil" }, {
                default: withCtx(() => [
                  createVNode(FossilTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "oil" }, {
                default: withCtx(() => [
                  createVNode(OilTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "delirium-orb" }, {
                default: withCtx(() => [
                  createVNode(DeliriumOrbTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "catalyst" }, {
                default: withCtx(() => [
                  createVNode(CatalystTab)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
