import { i as inject, e as emptyRenderFn, r as ref, a as computed, o as onBeforeUnmount, v as onMounted, M as tabsKey, N as withDirectives, R as Ripple, h, O as stopAndPrevent, P as isKeyCode, S as shouldIgnoreKey, T as QIcon, q as hMergeSlot, g as getCurrentInstance, U as isDeepEqual, c as createComponent, V as onDeactivated, H as nextTick, W as vmIsDestroyed, w as watch, p as provide, X as onActivated, d as hSlot, Y as createDirective, Z as client, G as noop, _ as leftClick, $ as addEvt, a0 as preventDraggable, a1 as position, a2 as cleanEvt, a3 as Transition, a4 as getNormalizedVNodes, a5 as KeepAlive, a6 as hDir, a7 as prevent, I as listenOpts, a8 as vmHasRouter, n as onUnmounted, a9 as injectProp, aa as Teleport, ab as createGlobalNode, ac as removeGlobalNode, s as defineComponent, y as openBlock, ad as createElementBlock, B as createVNode, C as createBaseVNode, ae as Fragment, D as createTextVNode, af as toDisplayString, ag as createCommentVNode, ah as normalizeClass, A as withCtx, ai as renderList, aj as vShow, E as normalizeStyle, z as createBlock, ak as pushScopeId, al as popScopeId } from "./index.js";
import { u as uid, g as getModifierDirections, s as shouldStart, c as clearSelection, r as removeFocusWaitFlag, a as addFocusWaitFlag } from "./focus-manager.js";
import { Q as QResizeObserver, g as getScrollbarWidth, a as getScrollTarget } from "./scroll.js";
import { u as useTimeout, Q as QImg, a as useInterval } from "./use-interval.js";
import { u as useDarkProps, a as useDark, _ as _export_sfc, Q as QCheckbox } from "./plugin-vue_export-helper.js";
import { Q as QPage } from "./QPage.js";
import { a as axios } from "./axios2.js";
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
const Titanic = {
  top: "64px",
  left: "152px",
  class: "",
  list: Array(
    { id: "titanic-scarab", name: "\uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uBB34\uB9AC \uADDC\uBAA8 \uC99D\uAC00 1%\uB2F9 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568, \uD53C\uD574, \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC758 \uD76C\uADC0\uB3C4 \uBC0F \uC218\uB7C9 1% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "titanic-scarab-of-treasures", name: "\uBCF4\uBB3C\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBCF4\uC0C1 1\uAC1C \uCD94\uAC00 \uBCF4\uC720", "\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uC758 \uAC15\uC778\uD568 30% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "titanic-scarab-of-legend", name: "\uC804\uC124\uC758 \uAC70\uB300\uD55C \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uBAAC\uC2A4\uD130 \uC18D\uC131 2\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Sulphite = {
  top: "64px",
  left: "326px",
  class: "",
  list: Array(
    { id: "sulphite-scarab", name: "\uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uB2C8\uCF54 \uB4F1\uC7A5", "\uC9C0\uB3C4 \uC18C\uC720\uC790\uAC00 \uD68D\uB4DD\uD558\uB294 \uC544\uD669\uC0B0\uC5FC 150% \uC99D\uD3ED"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "sulphite-scarab-of-fumes", name: "\uC5F0\uAE30\uC758 \uC544\uD669\uC0B0\uC5FC \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC544\uD669\uC0B0\uC5FC\uC774 \uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30 \uBC29\uCD9C", "\uACA9\uC559\uC2DC\uD0A4\uB294 \uC5F0\uAE30\uC758 \uC601\uD5A5\uC744 \uBC1B\uB294 \uC801\uC740 \uC544\uC774\uD15C \uC218\uB7C9 50% \uC99D\uAC00", "\uC9C0\uB3C4 \uB0B4 \uC544\uD669\uC0B0\uC5FC\uC744 \uB0A8\uB3D9\uC11D \uAD11\uC0B0\uC758 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Divination = {
  top: "64px",
  left: "500px",
  class: "",
  list: Array(
    { id: "divination-scarab-of-the-cloister", name: "\uD68C\uB791\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790 \uBB34\uB9AC 8~12\uAC1C\uAC00 \uCD94\uAC00\uB85C \uB4F1\uC7A5", "\uB3C4\uC774\uB4DC\uB9AC\uC758 \uD5CC\uC2E0\uC790\uAC00 \uCE74\uB4DC \uBB36\uC74C\uC744 \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960 1% \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "divination-scarab-of-plenty", name: "\uD48D\uBD80\uD568\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC810\uC220 \uCE74\uB4DC\uB97C \uB5A8\uC5B4\uB728\uB9B4 \uD655\uB960\uC774 1000% \uC99D\uAC00\uD55C", "\uC810\uC220\uC5D0 \uB2FF\uC740 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 \uBB34\uB9AC 6~10\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "divination-scarab-of-pilfering", name: "\uD6D4\uCCD0\uB0C4\uC758 \uC810\uC220 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC810\uC220 \uCE74\uB4DC\uB97C \uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8", "\uC9C0\uB3C4\uC758 \uD574\uB2F9 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uAC15\uD0C8\uD55C \uC810\uC220 \uCE74\uB4DC\uAC00 \uB9CE\uC744\uC218\uB85D", "\uB09C\uC774\uB3C4\uAC00 \uB192\uC544\uC9C0\uACE0 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uAC00 \uC8FC\uB294 \uD53C\uD574 \uC99D\uAC00", "\uC9C0\uB3C4\uC758 \uD574\uB2F9 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4 \uCC98\uCE58 \uC2DC \uAC15\uD0C8\uD55C \uBAA8\uB4E0 \uC810\uC220 \uCE74\uB4DC \uBCF5\uC81C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Anarchy = {
  top: "118px",
  left: "70px",
  class: "",
  list: Array(
    { id: "anarchy-scarab", name: "\uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0C8\uC8FC \uC720\uBC30\uC790 4\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "anarchy-scarab-of-gigantification", name: "\uBE44\uB300\uD654\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD669\uC57C \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 30%\uC758 \uD655\uB960\uB85C \uD0C8\uC8FC \uAC70\uC778\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "anarchy-scarab-of-partnership", name: "\uD611\uB825\uC758 \uD63C\uB780 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD669\uC57C \uD0C8\uC8FC \uC720\uBC30\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uC30D\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ritual = {
  top: "118px",
  left: "242px",
  class: "",
  list: Array(
    { id: "ritual-scarab-of-selectiveness", name: "\uC120\uD0DD\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 \uBB34\uC791\uC704 \uBCC0\uACBD\uD560 \uB54C \uCCAB 2\uD68C\uB294 \uBE44\uC6A9 \uC5C6\uC74C", "\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC5D0\uC11C \uD5CC\uC815\uD488\uC744 1\uD68C \uCD94\uAC00\uB85C \uBB34\uC791\uC704 \uBCC0\uACBD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "ritual-scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD \uC81C\uB2E8\uC774 \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 \uC0DD\uC131", "\uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88\uC774 \uC8FC\uBCC0\uC758 \uD50C\uB808\uC774\uC5B4\uB4E4\uC5D0\uAC8C \uACF5\uBB3C \uC810\uC218 \uD68D\uB4DD\uB7C9 100% \uC99D\uAC00 \uBD80\uC5EC"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ritual-scarab-of-abundance", name: "\uD48D\uBD80\uD568\uC758 \uC758\uC2DD \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC758\uC2DD\uC73C\uB85C \uC5BB\uB294 \uD5CC\uC815\uD488 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 }
  )
};
const Harvest = {
  top: "118px",
  left: "414px",
  class: "",
  list: Array(
    { id: "harvest-scarab", name: "\uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-doubling", name: "\uBCF5\uC81C\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC0DD\uAE30\uAC00 \uBCF5\uC81C\uB428", "\uC9C0\uC5ED \uB0B4 \uC218\uD655 \uBAAC\uC2A4\uD130\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uD3ED"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harvest-scarab-of-cornucopia", name: "\uD48D\uC694\uC758 \uBFD4\uC758 \uC218\uD655 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2E0\uC131\uD55C \uC232\uC774 \uB4F1\uC7A5\uD560 \uC2DC, \uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC2E0\uC131\uD55C \uC232\uC5D0 \uAC01 \uC720\uD615\uC758 4\uB4F1\uAE09 \uC528\uC557 \uCD5C\uB300 1\uAC1C\uC529 \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Kalguur = {
  top: "118px",
  left: "584px",
  class: "",
  list: Array(
    { id: "kalguuran-scarab", name: "\uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAD11\uB9E5 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "kalguuran-scarab-of-guarded-riches", name: "\uBCF4\uD638\uBC1B\uB294 \uC7AC\uBB3C\uC758 \uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD11\uB9E5\uC744 \uBC29\uC5B4\uD558\uB294 \uBAAC\uC2A4\uD130\uAC00 \uB9C8\uBC95 \uC774\uC0C1\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "kalguuran-scarab-of-refinement", name: "\uC815\uC81C\uC758 \uCE7C\uAD6C\uB974 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD11\uB9E5\uC774 \uAD11\uC11D \uCC44\uAD11\uC744 \uC9C0\uC2DC\uD558\uB294 \uB300\uC2E0 \uC81C\uB828\uD55C \uC8FC\uAD34 \uBD80\uC5EC"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Influencing = {
  top: "174px",
  left: "302px",
  class: "",
  list: Array(
    { id: "influencing-scarab-of-the-shaper", name: "\uC250\uC774\uD37C\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC250\uC774\uD37C \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-the-elder", name: "\uC5D8\uB354\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5D8\uB354 \uC601\uD5A5\uB825 \uACB0\uACFC\uBB3C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-hordes", name: "\uAD70\uB2E8\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC601\uD5A5\uC744 \uBC1B\uC740 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uC758 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "influencing-scarab-of-conversion", name: "\uC804\uD5A5\uC758 \uC601\uD5A5\uB825 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC250\uC774\uD37C \uC218\uD638\uC790, \uC5D8\uB354 \uC218\uD638\uC790, \uC815\uBCF5\uC790 \uB610\uB294 \uACE0\uC720 \uACB0\uD569 \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Bestiary = {
  top: "200px",
  left: "70px",
  class: "",
  list: Array(
    { id: "bestiary-scarab", name: "\uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC544\uC778\uD558\uB974 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "bestiary-scarab-of-the-herd", name: "\uB5BC\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC544\uC778\uD558\uB974\uAC00 \uB4F1\uC7A5\uD558\uB294 \uC9C0\uC5ED\uC5D0 \uBD89\uC740 \uC57C\uC218 5\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "bestiary-scarab-of-duplicating", name: "\uBCF5\uC81C\uC758 \uC57C\uC218 \uB3C4\uAC10 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uD3EC\uD68D\uD558\uB294 \uC57C\uC218\uC758 \uBCF5\uC81C\uBCF8 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Harbinger = {
  top: "200px",
  left: "535px",
  class: "",
  list: Array(
    { id: "harbinger-scarab", name: "\uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790 3\uBA85 \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 },
    { id: "harbinger-scarab-of-obelisks", name: "\uC624\uBCA8\uB9AC\uC2A4\uD06C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uAC15\uD654\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C \uC0DD\uC131", "\uAC15\uD654\uB41C \uC624\uBCA8\uB9AC\uC2A4\uD06C\uB294 \uD30C\uAD34\uB420 \uC2DC \uC77C\uC815 \uD655\uB960\uB85C \uD654\uD3D0 \uD30C\uD3B8\uC744 \uB5A8\uC5B4\uB728\uB9BC"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-regency", name: "\uC12D\uC815\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 50%\uC758 \uD655\uB960\uB85C \uAC15\uB825\uD55C \uC120\uAD6C\uC790 \uBCF4\uC2A4\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "harbinger-scarab-of-warhoards", name: "\uC804\uC7C1\uBE44\uCD95\uBB3C\uC758 \uC120\uAD6C\uC790 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC120\uAD6C\uC790\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uD654\uD3D0 \uD30C\uD3B8\uC774 \uBCF5\uC81C\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Betrayal = {
  top: "229px",
  left: "302px",
  class: "",
  list: Array(
    { id: "betrayal-scarab", name: "\uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC900 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-the-allflame", name: "\uC62C\uD50C\uB808\uC784\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC62C\uD50C\uB808\uC784 \uC789\uAC78\uBD88\uC774 \uAD50\uCCB4\uD558\uB294 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uC758 \uC218 75% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "betrayal-scarab-of-reinforcements", name: "\uBCF4\uAC15\uC758 \uBC30\uC2E0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBD88\uBA78\uC790 \uC5F0\uD569 \uB2E8\uC6D0\uC774 \uC9C0\uC6D0\uAD70\uC744 \uB3D9\uBC18\uD560 \uD655\uB960 50% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Incursion = {
  top: "260px",
  left: "70px",
  class: "",
  list: Array(
    { id: "incursion-scarab", name: "\uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC54C\uBC14 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "incursion-scarab-of-invasion", name: "\uCE68\uB7B5\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAE30\uC2B5 \uBAAC\uC2A4\uD130 \uBB34\uB9AC 12~16\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "incursion-scarab-of-champions", name: "\uC6A9\uC0AC\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["35%\uC758 \uD655\uB960\uB85C \uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBAA8\uB4E0 \uBAAC\uC2A4\uD130\uAC00 \uB9C8\uBC95 \uC774\uC0C1\uC73C\uB85C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uAE30\uC2B5\uC758 \uBB34\uB9AC \uADDC\uBAA8 15% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "incursion-scarab-of-timelines", name: "\uC2DC\uAC04\uC120\uC758 \uAE30\uC2B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uCC98\uCE58\uD558\uB294 \uCD5C\uC885 \uAC74\uCD95\uAC00\uAC00 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC744 \uB5A8\uC5B4\uB728\uB9BC", "\uC9C0\uC5ED\uC5D0\uC11C \uB5A8\uC5B4\uC9C0\uB294 \uC544\uC774\uD15C\uD654\uB41C \uC0AC\uC6D0\uC774 \uD604\uC7AC \uC0AC\uC6D0 \uAD6C\uC870\uC5D0 \uAE30\uBC18\uD574 \uC0DD\uC131\uB418\uC9C0\uB9CC, \uBC29\uC758 \uB4F1\uAE09\uC740 \uBB34\uC791\uC704 \uBCC0\uACBD"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Domination = {
  top: "260px",
  left: "535px",
  class: "",
  list: Array(
    { id: "domination-scarab", name: "\uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 },
    { id: "domination-scarab-of-apparitions", name: "\uC720\uB839\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC720\uB839 \uC131\uC18C 2\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "domination-scarab-of-evolution", name: "\uC9C4\uD654\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC9C4\uD654\uC758 \uC131\uC18C 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "domination-scarab-of-terrors", name: "\uACF5\uD3EC\uC758 \uC9C0\uBC30 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC131\uC18C\uB97C 1\uB9C8\uB9AC\uC758 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uAC00 \uBC29\uC5B4", "\uC9C0\uB3C4\uC758 \uB9C8\uC9C0\uB9C9 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uC774 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Torment = {
  top: "284px",
  left: "302px",
  class: "",
  list: Array(
    { id: "torment-scarab", name: "\uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC0AC\uB85C\uC7A1\uD78C \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC9C0\uC5ED \uB0B4", "\uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 25%\uC758 \uD655\uB960\uB85C \uD574\uBC29"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "torment-scarab-of-peculiarity", name: "\uAE30\uC774\uD568\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uB0B4 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC774 \uD2B9\uC774\uD55C \uBCC0\uD654\uD615\uC73C\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "torment-scarab-of-possession", name: "\uC0AC\uB85C\uC7A1\uD798\uC758 \uACE0\uD1B5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 1/4 \uD655\uB960\uB85C \uCD5C\uB300 1\uB9C8\uB9AC\uC758 \uACE0\uD1B5\uBC1B\uB294 \uD63C\uBC31\uC5D0\uAC8C \uC0AC\uB85C\uC7A1\uD798"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 4 }
  )
};
const Cartography = {
  top: "338px",
  left: "132px",
  class: "",
  list: Array(
    { id: "cartography-scarab-of-escalation", name: "\uC99D\uB300\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uB294 \uC9C0\uB3C4 \uC18D\uC131 \uD558\uB098\uB2F9 \uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4 10% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-risk", name: "\uC704\uD5D8\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBB34\uC791\uC704 \uC18D\uC131 2\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "cartography-scarab-of-corruption", name: "\uD0C0\uB77D\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uBE44-\uACE0\uC720 \uC9C0\uB3C4\uAC00 \uC18D\uC131 8\uAC1C\uAC00 \uBD80\uC5EC\uB41C \uD0C0\uB77D\uD55C \uC9C0\uB3C4\uB85C \uB5A8\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "cartography-scarab-of-the-multitude", name: "\uAD70\uC911\uC758 \uC9C0\uB3C4 \uC81C\uC791 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC774 \uB192\uC740 \uBAAC\uC2A4\uD130\uB85C", "\uC774\uB8E8\uC5B4\uC9C4 \uBB34\uB9AC\uAC00 8~12\uAC1C \uB4F1\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBAAC\uC2A4\uD130\uB294 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC9C0\uB3C4 \uC218\uB7C9\uC774 300% \uC99D\uAC00\uD569\uB2C8\uB2E4."], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 }
  )
};
const Beyond = {
  top: "338px",
  left: "426px",
  class: "",
  list: Array(
    { id: "beyond-scarab", name: "\uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uC11C\uB85C \uAC00\uAE4C\uC774 \uC788\uB294 \uC801\uC744 \uCC98\uCE58\uD558\uBA74 \uC774\uACC4 \uBAAC\uC2A4\uD130\uB97C \uBD88\uB7EC\uC634"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-haemophilia", name: "\uD608\uC6B0\uBCD1\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC758 \uBCD1\uD569 \uBC94\uC704 50% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "beyond-scarab-of-resurgence", name: "\uC7AC\uAE30\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB0AE\uC740 \uC0DD\uBA85\uB825 \uC0C1\uD0DC\uC5D0\uC11C \uACA9\uC559\uD568", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uBCF4\uC2A4\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uB354\uB7FD\uD600\uC9C4 \uD654\uD3D0 100% \uC99D\uAC00", "\uC9C0\uC5ED \uB0B4 \uC774\uACC4 \uD3EC\uD0C8\uC774 \uACE0\uC720 \uBCF4\uC2A4\uB97C \uC0DD\uC131\uD560 \uD655\uB960 30% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "beyond-scarab-of-the-invasion", name: "\uCE68\uB7B5\uC758 \uC774\uACC4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBC0F \uACE0\uC720 \uBAAC\uC2A4\uD130 \uCC98\uCE58 \uC2DC \uC774\uACC4 \uD3EC\uD0C8 8~12\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ambush = {
  top: "394px",
  left: "133px",
  class: "",
  list: Array(
    { id: "ambush-scarab", name: "\uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0 3\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 3 },
    { id: "ambush-scarab-of-hidden-compartments", name: "\uBE44\uBC00 \uACF5\uAC04\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uB97C 15%\uC758 \uD655\uB960\uB85C \uB2E4\uC2DC \uC5F4 \uC218 \uC788\uC74C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-potency", name: "\uC7A0\uC7AC\uB825\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uC758 \uBE44\uACE0\uC815 \uC18D\uC131 \uD6A8\uACFC 75% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-containment", name: "\uBD09\uC1C4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uB2E4\uC218\uC758 \uAE08\uACE0 \uCD94\uAC00", "\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uB9E4\uBCF5 \uC911"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ambush-scarab-of-discernment", name: "\uBD84\uBCC4\uC758 \uB9E4\uBCF5 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAE08\uACE0\uAC00 \uBCF4\uB2E4 \uD76C\uADC0\uD55C \uC885\uB958\uC77C \uD655\uB960\uC774 \uB192\uC544\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Ultimatum = {
  top: "394px",
  left: "427px",
  class: "",
  list: Array(
    { id: "ultimatum-scarab", name: "\uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-bribing", name: "\uB9E4\uC218\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uACB0\uC804 \uBAAC\uC2A4\uD130\uAC00 \uC8FC\uB294 \uACBD\uD5D8\uCE58 150% \uC99D\uAC00", "\uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uB77C\uC6B4\uB4DC 2\uAC1C\uB97C \uCD94\uAC00\uB85C \uC644\uB8CC\uD55C \uAC83\uCC98\uB7FC \uBCF4\uC0C1\uC744 \uC90C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "ultimatum-scarab-of-dueling", name: "\uACB0\uD22C\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uAC00 \uD56D\uC0C1 \uACE0\uC720 \uBCF4\uC2A4\uB85C \uC774\uC5B4\uC9D0"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-catalysing", name: "\uAE30\uD3ED\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC9C0\uB3C4 \uC18C\uC720\uC790\uAC00", "\uBCF4\uC0C1\uC73C\uB85C \uAE30\uD3ED\uC81C\uB9CC \uD68D\uB4DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "ultimatum-scarab-of-inscription", name: "\uC0C8\uAE40\uC758 \uACB0\uC804 \uAC11\uCDA9\uC11D", icon: "", description: ["\uAE30\uD3ED\uC81C\uB97C \uC8FC\uB294 \uC9C0\uC5ED \uB0B4 \uACB0\uC804 \uC778\uCE74\uC6B4\uD130 \uBCF4\uC0C1\uC774", "\uC9C0\uB3C4 \uC18C\uC720\uC790\uC5D0\uAC8C \uAE30\uD3ED\uC81C\uAC00 \uC544\uB2CC \uC0C8\uACA8\uC9C4 \uACB0\uC804\uC744 \uC90C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Expedition = {
  top: "450px",
  left: "132px",
  class: "",
  list: Array(
    { id: "expedition-scarab", name: "\uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-runefinding", name: "\uB8EC \uD0D0\uC0C9\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uB8EC \uBAAC\uC2A4\uD130", "\uD45C\uC2DC\uBB3C \uC218\uB7C9 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "expedition-scarab-of-verisium-powder", name: "\uBCA0\uB9AC\uC2DC\uC6C0 \uD654\uC57D\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uD3ED\uBC1C\uBB3C \uC218\uB7C9 50% \uC99D\uAC00", "\uD3ED\uBC1C\uBB3C \uBC18\uACBD 80 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "expedition-scarab-of-archaeology", name: "\uACE0\uACE0\uD559\uC758 \uD0D0\uD5D8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD0D0\uD5D8 \uC778\uCE74\uC6B4\uD130\uC758 \uC720\uBB3C\uC5D0 \uC811\uBBF8\uC5B4 \uBC0F \uC811\uB450\uC5B4 2\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Delirium = {
  top: "450px",
  left: "427px",
  class: "",
  list: Array(
    { id: "delirium-scarab", name: "\uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uD658\uC601\uC758 \uAC70\uC6B8 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-mania", name: "\uAD11\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uD658\uC601 \uBCF4\uC0C1 \uB9C9\uB300\uAC00 100% \uBE68\uB9AC \uCC44\uC6CC\uC9D0", "\uC9C0\uC5ED \uB0B4 \uD658\uC601\uC774 \uAC70\uC6B8\uACFC\uC758 \uAC70\uB9AC\uC5D0 \uBE44\uB840\uD574 50% \uB354 \uBE60\uB974\uAC8C \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "delirium-scarab-of-paranoia", name: "\uD3B8\uC9D1\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uAC00 \uBCF4\uC0C1 \uC720\uD615 2\uAC1C \uCD94\uAC00 \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "delirium-scarab-of-neuroses", name: "\uC2E0\uACBD\uC99D\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD658\uC601 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uBAA8\uB4E0 \uACE0\uC720 \uD658\uC601 \uBCF4\uC2A4 \uB4F1\uC7A5", "11\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC9C0\uB3C4\uC5D0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "delirium-scarab-of-delusions", name: "\uB9DD\uC0C1\uC758 \uD658\uC601 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC9C0\uB3C4\uC5D0 \uD658\uC601 \uD604\uC0C1 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Legion = {
  top: "506px",
  left: "132px",
  class: "",
  list: Array(
    { id: "legion-scarab", name: "\uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCD94\uAC00 \uAD70\uB2E8 \uC778\uCE74\uC6B4\uD130 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "legion-scarab-of-officers", name: "\uC7A5\uAD50\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC5D0 \uBCD1\uC7A5 5\uBA85 \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-command", name: "\uC9C0\uD718\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uC9C4\uC601\uC774 \uC7A5\uAD70 \uB300\uB3D9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "legion-scarab-of-eternal-conflict", name: "\uC601\uC6D0\uD55C \uBD84\uC7C1\uC758 \uAD70\uB2E8 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uC5EC\uB7EC \uBC88 \uAE68\uC6B8 \uC218 \uC788\uC74C", "\uC9C0\uC5ED \uB0B4 \uAD70\uB2E8 \uBAAC\uC2A4\uD130\uB97C \uAE68\uC6B8 \uB54C\uB9C8\uB2E4 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Blight = {
  top: "506px",
  left: "427px",
  class: "",
  list: Array(
    { id: "blight-scarab", name: "\uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 1\uAC1C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-the-blightheart", name: "\uBA54\uB9C8\uB978 \uC2EC\uC7A5\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0 \uC5ED\uBCD1 \uAC78\uB9B0 \uC0C1\uC790 1\uAC1C \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uC801 \uC6E8\uC774\uBE0C \uC218\uAC00 \uD06C\uAC8C \uC99D\uD3ED", "\uC5ED\uBCD1 \uAC78\uB9B0 \uC801\uC744 \uB9CE\uC774 \uCC98\uCE58\uD560\uC218\uB85D \uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uAC78\uB9B0 \uC0C1\uC790\uC758", "\uD06C\uAE30\uAC00 \uCEE4\uC9C0\uACE0 \uBCF4\uC0C1\uC774 \uB298\uC5B4\uB0A8"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-blooming", name: "\uAC1C\uD654\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130\uC5D0\uC11C \uACE0\uC720 \uBCF4\uC2A4 \uCD5C\uB300 3\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5", "\uC5ED\uBCD1 \uC778\uCE74\uC6B4\uD130 \uB0B4 \uACE0\uC720 \uC801\uC758 \uC0DD\uBA85\uB825 100% \uC99D\uAC00", "\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 14\uB4F1\uAE09 \uC774\uC0C1\uC758 \uC5ED\uBCD1 \uAC78\uB9B0 \uC9C0\uB3C4\uAC00 \uC5ED\uBCD1\uC5D0 \uC720\uB9B0\uB2F9\uD55C \uC9C0\uB3C4\uB85C \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "blight-scarab-of-invigoration", name: "\uACE0\uBB34\uC758 \uC5ED\uBCD1 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC15\uD654\uC758 \uD0D1\uC774 \uAC01\uAC01 \uBC94\uC704 \uB0B4 \uC5ED\uBCD1 \uBAAC\uC2A4\uD130\uC758", "\uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1\uC744 \uC99D\uAC00\uC2DC\uD0B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Abyss = {
  top: "560px",
  left: "132px",
  class: "",
  list: Array(
    { id: "abyss-scarab", name: "\uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uC2EC\uC5F0 1\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-multitudes", name: "\uAD70\uC911\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uBAAC\uC2A4\uD130 75% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "abyss-scarab-of-edifice", name: "\uAC74\uCD95\uBB3C\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0 \uC9C0\uD558\uB85C \uC5F0\uACB0\uB418\uC9C0 \uC54A\uB294 \uC2EC\uC5F0\uC774 \uBA85\uACC4\uC758 \uCCA8\uD0D1\uC73C\uB85C \uC774\uC5B4\uC9D0", "\uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC774 \uC774\uB3D9\uD558\uBA70 \uBE44\uCD95\uBB3C \uC0DD\uC131"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "abyss-scarab-of-profound-depth", name: "\uC2EC\uC6D0\uD55C \uAE4A\uC774\uC758 \uC2EC\uC5F0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uD574\uB2F9 \uC2EC\uC5F0 \uB0B4\uC5D0 \uBA3C\uC800 \uB4F1\uC7A5\uD558\uB294 \uAD6C\uB369\uC774\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uC2EC\uC5F0\uC5D0\uC11C \uB098\uC628", "\uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Essence = {
  top: "560px",
  left: "426px",
  class: "",
  list: Array(
    { id: "essence-scarab", name: "\uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uAC07\uD78C \uBAAC\uC2A4\uD130 2\uB9C8\uB9AC \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "essence-scarab-of-ascent", name: "\uC0C1\uC2B9\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0\uC11C \uBC1C\uACAC\uD558\uB294 \uC5D0\uC13C\uC2A4\uAC00 1\uB4F1\uAE09 \uB192\uAC8C \uBC1C\uACAC\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-stability", name: "\uC548\uC815\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC5D0\uC11C \uD0C0\uB77D\uC758 \uC720\uBB3C \uC0AC\uC6A9 \uC2DC \uC5D0\uC13C\uC2A4\uB97C \uC5C5\uADF8\uB808\uC774\uB4DC \uB610\uB294", "\uBCC0\uD654\uC2DC\uD0A4\uB294 \uACB0\uACFC\uB9CC \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-calcification", name: "\uC11D\uD68C\uD654\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uC790\uC5F0\uC801\uC73C\uB85C \uC11C\uC2DD\uD558\uB294 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC5D0\uC13C\uC2A4\uC5D0 \uAC07\uD798"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "essence-scarab-of-adaptation", name: "\uC801\uC751\uC758 \uC5D0\uC13C\uC2A4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uAC00 \uD480\uB824\uB098\uBA74 \uC9C0\uC5ED \uB0B4 \uB2E4\uB978 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uBB34\uC791\uC704 \uC5D0\uC13C\uC2A4 \uC18D\uC131 \uBD80\uC5EC", "\uC5D0\uC13C\uC2A4 \uC18D\uC131\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uAC07\uD78C \uBAAC\uC2A4\uD130\uC758", "\uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const Breach = {
  top: "616px",
  left: "257px",
  class: "",
  list: Array(
    { id: "breach-scarab", name: "\uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 2\uAC1C \uCD94\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 5 },
    { id: "breach-scarab-of-lordship", name: "\uC9C0\uC704\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4\uC758 \uAC01 \uADE0\uC5F4\uC5D0 \uADE0\uC5F4 \uAD70\uC8FC \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-splintering", name: "\uD30C\uD3B8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC774 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uADE0\uC5F4 \uD30C\uD3B8 50% \uC99D\uD3ED"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "breach-scarab-of-snares", name: "\uC62C\uAC00\uBBF8\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC5D0 \uC6C0\uCF1C\uC7A1\uB294 \uC190 3~5\uAC1C \uCD94\uAC00 \uB4F1\uC7A5", "\uC9C0\uC5ED \uB0B4 \uC6C0\uCF1C\uC7A1\uB294 \uC190\uC744 \uD76C\uADC0 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uAC00 \uBC29\uC5B4"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "breach-scarab-of-resonant-cascade", name: "\uACF5\uBA85\uD558\uB294 \uD3ED\uD3EC\uC758 \uADE0\uC5F4 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4 \uD558\uB098\uB2F9 \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4\uC774 10% \uB354 \uBE60\uB974\uAC8C \uC5F4\uB9AC\uACE0 \uB2EB\uD798", "\uC774\uBBF8 \uC5F4\uB9B0 \uADE0\uC5F4\uC758 \uC218\uC5D0 \uB530\uB77C \uC9C0\uC5ED \uB0B4 \uADE0\uC5F4 \uBAAC\uC2A4\uD130\uC758 \uB09C\uC774\uB3C4\uC640 \uBCF4\uC0C1 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const VariousScarabs1 = {
  top: "671px",
  left: "146px",
  class: "wide",
  list: Array(
    { id: "scarab-of-monstrous-lineage", name: "\uAE30\uAD34\uD55C \uD608\uD1B5\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB9C8\uBC95 \uBB34\uB9AC \uADDC\uBAA8 40% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-adversaries", name: "\uC801\uC218\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uBCF5\uC81C\uB41C \uD76C\uADC0 \uBAAC\uC2A4\uD130\uB97C \uD3EC\uD568\uD55C \uBB34\uB9AC 4\uAC1C \uCD94\uAC00 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-divinity", name: "\uC2E0\uC131\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uD76C\uADC0 \uBAAC\uC2A4\uD130 \uCD5C\uB300 2\uB9C8\uB9AC \uCD94\uAC00", "\uD310\uD14C\uC628\uC758 \uC190\uAE38\uC5D0 \uB2FF\uC740 \uBAAC\uC2A4\uD130\uAC00 \uC0DD\uC131\uD558\uB294 \uC720\uB839\uC774 \uC8FC\uB294 \uD53C\uD574 100% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-hunted-traitors", name: "\uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCAD3\uAE30\uB294 \uBC30\uC2E0\uC790 \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const VariousScarabs2 = {
  top: "671px",
  left: "425px",
  class: "wide",
  list: Array(
    { id: "horned-scarab-of-bloodlines", name: "\uD608\uB9F9\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC758 \uB9C8\uBC95 \uBAAC\uC2A4\uD130 150% \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-nemeses", name: "\uCC9C\uBC8C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD76C\uADC0 \uBAAC\uC2A4\uD130\uAC00 \uC18D\uC131 2\uAC1C \uCD94\uAC00 \uBCF4\uC720"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-preservation", name: "\uBCF4\uC804\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uB2E4\uB978 \uAC11\uCDA9\uC11D\uB4E4\uC774 \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A\uC74C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-awakening", name: "\uAC01\uC131\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uBD80\uC5EC\uB41C \uC81C\uC791 \uC635\uC158 1\uAC1C \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-tradition", name: "\uC804\uD1B5\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAA8\uB4E0 \uD76C\uADC0 \uBC0F \uACE0\uC720 \uBAAC\uC2A4\uD130\uAC00 \uB5A8\uC5B4\uB728\uB9AC\uB294 \uC544\uC774\uD15C\uC774", "\uBCF4\uC0C1 \uC18D\uC131\uC5D0 \uC758\uD574 \uBCC0\uD654\uB428"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const VariousScarabs3 = {
  top: "726px",
  left: "146px",
  class: "wide",
  list: Array(
    { id: "scarab-of-stability", name: "\uC548\uC815\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uD3EC\uD0C8\uC774 50%\uC758 \uD655\uB960\uB85C \uC0AC\uC6A9\uD574\uB3C4 \uC18C\uBAA8\uB418\uC9C0 \uC54A\uC74C"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "scarab-of-wisps", name: "\uB3C4\uAE68\uBE44\uBD88\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130\uAC00 \uC77C\uC815 \uD655\uB960\uB85C \uC57C\uC0DD\uB9BC \uB3C4\uAE68\uBE44\uBD88 2000\uB9C8\uB9AC\uB85C \uAC15\uD654"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 2 },
    { id: "scarab-of-radiant-storms", name: "\uCC2C\uB780\uD55C \uD3ED\uD48D\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED\uC5D0 \uCC2C\uC5F0\uD55C \uD3ED\uD48D \uB4F1\uC7A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "scarab-of-bisection", name: "\uC591\uB2E8\uC758 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uB3C4 \uC7A5\uCE58\uC5D0\uC11C \uC811\uB450\uC5B4 \uBB34\uD6A8\uD654 \uB610\uB294 \uC811\uBBF8\uC5B4 \uBB34\uD6A8\uD654 \uC81C\uC791 \uC635\uC158 \uC120\uD0DD \uAC00\uB2A5"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
  )
};
const VariousScarabs4 = {
  top: "726px",
  left: "504px",
  class: "wide",
  list: Array(
    { id: "horned-scarab-of-glittering", name: "\uBC88\uCA4D\uC784\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uD50C\uB808\uC774\uC5B4\uAC00 \uCD5C\uADFC 4\uCD08 \uC774\uB0B4 \uCC98\uCE58\uD55C \uBAAC\uC2A4\uD130 \uC218\uC5D0 \uB530\uB77C \uC544\uC774\uD15C \uD76C\uADC0\uB3C4\uAC00 \uCD5C\uB300 200%\uAE4C\uC9C0, \uC544\uC774\uD15C \uC218\uB7C9\uC774 \uCD5C\uB300 50%\uAE4C\uC9C0 \uC99D\uAC00"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 },
    { id: "horned-scarab-of-pandemonium", name: "\uD63C\uB780 \uC720\uBC1C\uC758 \uBFD4 \uB2EC\uB9B0 \uAC11\uCDA9\uC11D", icon: "", description: ["\uC9C0\uC5ED \uB0B4 \uBAAC\uC2A4\uD130 \uBB34\uB9AC\uAC00 15% \uD655\uB960\uB85C \uBB34\uC791\uC704 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4 1\uB9C8\uB9AC\uB85C \uB4F1\uC7A5", "\uB9C8\uC9C0\uB9C9 \uC9C0\uB3C4 \uBCF4\uC2A4\uC5D0 \uB300\uD55C \uC18D\uC131\uC774 \uD574\uB2F9 \uC544\uD2C0\uB77C\uC2A4 \uBCF4\uC2A4\uC5D0\uB3C4 \uC801\uC6A9"], chaos: 0, exalted: 0, divine: 0, level: 0, max: 1 }
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
const _hoisted_1$5 = {
  key: 0,
  class: "scarab-box empty"
};
const _hoisted_2$5 = { class: "row justify-center q-mb-lg" };
const _hoisted_3$5 = {
  class: "flex flex-center",
  style: { "width": "100px" }
};
const _hoisted_4$5 = {
  class: "bg-blue-grey-5",
  style: { "font-size": "13px", "padding": "7px 12px", "border-radius": "6px" }
};
const _hoisted_5$5 = { class: "row items-center" };
const _hoisted_6 = { class: "q-ml-xs q-px-xs" };
const _hoisted_7 = { class: "row items-center q-mt-xs" };
const _hoisted_8 = { class: "q-ml-xs q-px-xs" };
const _hoisted_9 = { class: "row items-center q-mt-xs" };
const _hoisted_10 = { class: "q-ml-xs q-px-xs" };
const _hoisted_11 = { class: "text-center scarab-name" };
const _hoisted_12 = { class: "text-center scarab-description" };
const _hoisted_13 = { class: "text-center scarab-description" };
const _sfc_main$6 = defineComponent({
  ...{
    name: "ScarabItem"
  },
  __name: "ScarabItem",
  props: {
    scarab: {},
    chaosType: { type: Boolean },
    divineType: { type: Boolean },
    highlight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const emptyScarabItem = computed(() => props.scarab.id === "empty");
    return (_ctx, _cache) => {
      return emptyScarabItem.value ? (openBlock(), createElementBlock("div", _hoisted_1$5)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["scarab-box row flex-center", _ctx.highlight ? `highlight${props.scarab.level}` : ""])
      }, [
        createVNode(QImg, {
          src: props.scarab.icon,
          width: "42px",
          height: "42px",
          style: { "z-index": "2" }
        }, null, 8, ["src"]),
        createBaseVNode("div", {
          class: normalizeClass(["absolute-bottom-right", _ctx.highlight ? `highlight${props.scarab.level}-text` : ""]),
          style: { "font-size": "11px", "line-height": "1", "bottom": "1px", "right": "2px", "z-index": "2" }
        }, [
          _ctx.chaosType ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(props.scarab.chaos), 1)
          ], 64)) : createCommentVNode("", true),
          _ctx.divineType ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(props.scarab.divine), 1)
          ], 64)) : createCommentVNode("", true)
        ], 2),
        createVNode(QTooltip, { class: "q-pa-md" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$5, [
              createBaseVNode("div", _hoisted_3$5, [
                createVNode(QImg, {
                  src: props.scarab.icon,
                  width: "46px",
                  height: "46px"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_4$5, [
                createBaseVNode("div", _hoisted_5$5, [
                  createVNode(QImg, {
                    src: "images/chaos.png",
                    width: "20px"
                  }),
                  createBaseVNode("div", _hoisted_6, toDisplayString(props.scarab.chaos), 1)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createVNode(QImg, {
                    src: "images/exalted.png",
                    width: "20px"
                  }),
                  createBaseVNode("div", _hoisted_8, toDisplayString(props.scarab.exalted), 1)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createVNode(QImg, {
                    src: "images/divine.png",
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
var ScarabItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-56311aee"]]);
var ScarabTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-10962cac"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$4 = { class: "loading-chaos" };
const _hoisted_3$4 = {
  class: "row justify-center items-center q-mt-xl q-mb-md q-gutter-x-md relative-position",
  style: { "height": "32px" }
};
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5$4 = { class: "scarab-stash q-mx-auto" };
const _sfc_main$5 = defineComponent({
  ...{
    name: "ScarabTab"
  },
  __name: "ScarabTab",
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
    const fetchLoading = ref(false);
    const highlight = ref(true);
    const scarabGroups = ref([
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
    ]);
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
      const response = await api.get("https://www.logisnet.co.kr/dev-api/poe/Scarab/Mercenaries");
      const res = response.data.lines;
      res.forEach((data) => setMetaData(data));
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
    }
    function setMetaData(data) {
      scarabGroups.value.forEach((group) => {
        group.list.forEach((scarab) => {
          if (scarab.id === data.detailsId) {
            scarab.icon = data.icon;
            scarab.chaos = Number(Number(data.chaosValue || 0).toFixed(2));
            scarab.exalted = Number(Number(data.exaltedValue || 0).toFixed(2));
            scarab.divine = Number(Number(data.divineValue || 0).toFixed(2));
            scarab.level = calcLevel(data.chaosValue);
          }
        });
      });
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
        createBaseVNode("div", _hoisted_3$4, [
          _hoisted_4$4,
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
          }, [
            createVNode(QImg, {
              src: "images/chaos.png",
              width: "32px"
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
          }, [
            createVNode(QImg, {
              src: "images/divine.png",
              width: "32px"
            })
          ], 2),
          createVNode(QCheckbox, {
            label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
            modelValue: highlight.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => highlight.value = $event),
            dense: "",
            style: { "margin-left": "32px" }
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_5$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(scarabGroups.value, (group, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["row scarab-group", group.class]),
              style: normalizeStyle({ top: `${group.top}`, left: `${group.left}` })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group.list, (scarab, sIndex) => {
                return openBlock(), createBlock(ScarabItem, {
                  key: `${index}-${sIndex}`,
                  scarab,
                  "chaos-type": chaosType.value,
                  "divine-type": divineType.value,
                  highlight: highlight.value
                }, null, 8, ["scarab", "chaos-type", "divine-type", "highlight"]);
              }), 128))
            ], 6);
          }), 128))
        ])
      ], 64);
    };
  }
});
var ScarabTab = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-10962cac"]]);
const FossilList = [
  { id: "jagged-fossil", name: "\uBFB0\uC871\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBB3C\uB9AC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uCE74\uC624\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "65px", left: "118px" },
  { id: "dense-fossil", name: "\uC870\uBC00\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBC29\uC5B4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC0DD\uBA85\uB825 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "202px" },
  { id: "frigid-fossil", name: "\uCC28\uB514\uCC2C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uB0C9\uAE30 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uD654\uC5FC \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "286px" },
  { id: "aberrant-fossil", name: "\uD2B9\uC774\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uCE74\uC624\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBC88\uAC1C \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "370px" },
  { id: "scorched-fossil", name: "\uADF8\uC744\uB9B0 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uD654\uC5FC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB0C9\uAE30 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "455px" },
  { id: "metallic-fossil", name: "\uAE08\uC18D\uC131 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBC88\uAC1C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBB3C\uB9AC \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "540px" },
  { id: "pristine-fossil", name: "\uC628\uC804\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC0DD\uBA85\uB825 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBC29\uC5B4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "64px", left: "623px" },
  { id: "bound-fossil", name: "\uC18D\uBC15\uC758 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC18C\uD658\uC218 \uD639\uC740 \uC624\uB77C \uD639\uC740 \uC800\uC8FC \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00"], top: "149px", left: "35px" },
  { id: "corroded-fossil", name: "\uBD80\uC2DD\uB41C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBB3C\uB9AC \uC0C1\uD0DC \uC774\uC0C1 \uD639\uC740 \uCE74\uC624\uC2A4 \uC0C1\uD0DC \uC774\uC0C1 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC6D0\uC18C \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "149px", left: "118px" },
  { id: "opulent-fossil", name: "\uD638\uD654\uB85C\uC6B4 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uCD9C\uD604 \uD655\uB960 \uC18D\uC131 \uAC1C\uC218 \uC99D\uAC00", "\uD0DC\uADF8 \uC5C6\uB294 \uC18D\uC131 \uC5C6\uC74C"], top: "149px", left: "202px" },
  { id: "prismatic-fossil", name: "\uBD84\uAD11 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC6D0\uC18C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uBB3C\uB9AC \uC0C1\uD0DC \uC774\uC0C1 \uD639\uC740 \uCE74\uC624\uC2A4 \uC0C1\uD0DC \uC774\uC0C1 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "149px", left: "286px" },
  { id: "deft-fossil", name: "\uB0A0\uB835\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uCE58\uBA85\uD0C0 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB2A5\uB825\uCE58 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "149px", left: "370px" },
  { id: "aetheric-fossil", name: "\uC5D0\uD14C\uB974 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC2DC\uC804 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uACF5\uACA9 \uC18D\uC131 \uBD80\uC5EC \uAC10\uC18C"], top: "149px", left: "455px" },
  { id: "lucent-fossil", name: "\uBE5B\uB098\uB294 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uB9C8\uB098 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC18D\uB3C4 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "149px", left: "540px" },
  { id: "serrated-fossil", name: "\uD1B1\uB2C8 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uACF5\uACA9 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uC2DC\uC804 \uC18D\uC131 \uBD80\uC5EC \uAC10\uC18C"], top: "149px", left: "623px" },
  { id: "shuddering-fossil", name: "\uC804\uC728\uC758 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC18D\uB3C4 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uB9C8\uB098 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "149px", left: "705px" },
  { id: "tangled-fossil", name: "\uC5BD\uD600\uB4E0 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBB34\uC791\uC704 \uC18D\uC131 \uC720\uD615 1\uAC1C\uC758 \uB4F1\uC7A5 \uD655\uB960\uC744 \uD06C\uAC8C \uB192\uC774\uACE0", "\uB2E4\uB978 \uBB34\uC791\uC704 \uC18D\uC131 \uC720\uD615 1\uAC1C\uB97C \uB4F1\uC7A5\uD558\uC9C0 \uC54A\uAC8C \uD569\uB2C8\uB2E4.", "\uD6A8\uACFC\uB294 \uACF5\uBA85\uAE30\uC758 \uBAA8\uB4E0 \uD648\uC5D0 \uD654\uC11D\uC744 \uC7A5\uCC29\uD55C \uD6C4 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4."], top: "233px", left: "76px" },
  { id: "bloodstained-fossil", name: "\uD53C\uC5BC\uB8E9 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uD0C0\uB77D", "\uD0C0\uB77D\uD55C \uACE0\uC815 \uC18D\uC131 \uBD80\uC5EC \uBCF4\uC720"], top: "233px", left: "160px" },
  { id: "gilded-fossil", name: "\uB3C4\uAE08\uB41C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC0C1\uC778\uC5D0\uAC8C \uD310\uB9E4\uD560 \uB54C \uC5BB\uB294 \uD654\uD3D0 \uC99D\uAC00"], top: "233px", left: "284px" },
  { id: "fundamental-fossil", name: "\uADFC\uBCF8\uC801\uC778 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uB2A5\uB825\uCE58 \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00", "\uCE58\uBA85\uD0C0 \uC18D\uC131 \uBD80\uC5EC \uC5C6\uC74C"], top: "234px", left: "370px" },
  { id: "sanctified-fossil", name: "\uCD95\uC131\uB41C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC18D\uC131 \uBD80\uC5EC \uACB0\uC815 \uC2DC \uAD00\uB828 \uC218\uCE58 \uAC1C\uC120", "\uACE0\uB808\uBCA8 \uC18D\uC131 \uBD80\uC5EC \uB4F1\uC7A5 \uBE48\uB3C4 \uC99D\uAC00"], top: "233px", left: "454px" },
  { id: "hollow-fossil", name: "\uACF5\uD5C8\uC758 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC2EC\uC5F0 \uD648 \uBCF4\uC720"], top: "233px", left: "581px" },
  { id: "fractured-fossil", name: "\uBD84\uC5F4\uB41C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uBD84\uD560\uB41C \uBCF5\uC81C\uBCF8\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.", "\uC601\uD5A5\uC744 \uBC1B\uC740 \uC544\uC774\uD15C,", "\uC778\uCC48\uD2B8\uB41C \uC544\uC774\uD15C, \uACB0\uD569\uB41C \uC544\uC774\uD15C, \uBD84\uC5F4\uB41C \uC544\uC774\uD15C\uC740 \uBD84\uD560\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."], top: "233px", left: "663px" },
  { id: "glyphic-fossil", name: "\uC0C1\uD615 \uBB38\uC790 \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uD0C0\uB77D \uC5D0\uC13C\uC2A4 \uC18D\uC131 \uBD80\uC5EC \uBCF4\uC720"], top: "317px", left: "117px" },
  { id: "faceted-fossil", name: "\uC5F0\uB9C8\uD55C \uD654\uC11D", icon: "", chaos: 0, divine: 0, description: ["\uC82C \uC18D\uC131 \uBD80\uC5EC \uC99D\uAC00"], top: "316px", left: "622px" }
];
var FossilTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-44e1665f"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$3 = { class: "loading-chaos" };
const _hoisted_3$3 = {
  class: "row justify-center items-center q-mt-xl q-mb-md q-gutter-x-md relative-position",
  style: { "height": "32px" }
};
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5$3 = { class: "fossil-stash q-mx-auto" };
const _sfc_main$4 = defineComponent({
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
    const api = axios.create();
    const { registerInterval, removeInterval } = useInterval();
    const currencyType = ref("chaos");
    const chaosType = computed(() => currencyType.value === "chaos");
    const divineType = computed(() => currencyType.value === "divine");
    const fetchLoading = ref(false);
    const highlight = ref(true);
    const list = ref(FossilList);
    async function getMetaData() {
      fetchLoading.value = true;
      const response = await api.get("https://www.logisnet.co.kr/dev-api/poe/Fossil/Mercenaries");
      const res = response.data.lines;
      res.forEach((data) => setMetaData(data));
      setTimeout(() => {
        fetchLoading.value = false;
      }, 3e3);
    }
    function setMetaData(data) {
      list.value.forEach((fossil) => {
        if (fossil.id === data.detailsId) {
          fossil.icon = data.icon;
          fossil.chaos = Number(Number(data.chaosValue || 0).toFixed(2));
          fossil.divine = Number(Number(data.divineValue || 0).toFixed(2));
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$3, [
              createBaseVNode("div", _hoisted_2$3, [
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
          _hoisted_4$3,
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
          }, [
            createVNode(QImg, {
              src: "images/chaos.png",
              width: "32px"
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
          }, [
            createVNode(QImg, {
              src: "images/divine.png",
              width: "32px"
            })
          ], 2),
          createVNode(QCheckbox, {
            label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
            modelValue: highlight.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => highlight.value = $event),
            dense: "",
            style: { "margin-left": "32px" }
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (fossil, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "fossil-unit",
              style: normalizeStyle({ top: `${fossil.top}`, left: `${fossil.left}` })
            }, [
              createVNode(QImg, {
                src: fossil.icon,
                width: "60px",
                height: "60px",
                style: { "z-index": "2" }
              }, null, 8, ["src"])
            ], 4);
          }), 128))
        ])
      ], 64);
    };
  }
});
var FossilTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-44e1665f"]]);
var OilTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-94f04702"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$2 = { class: "loading-chaos" };
const _hoisted_3$2 = {
  class: "row justify-center items-center q-mt-xl q-mb-md q-gutter-x-md relative-position",
  style: { "height": "32px" }
};
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "oil-stash q-mx-auto" }, null, -1));
const _sfc_main$3 = defineComponent({
  ...{
    name: "OilTab"
  },
  __name: "OilTab",
  setup(__props) {
    const currencyType = ref("chaos");
    const chaosType = computed(() => currencyType.value === "chaos");
    const divineType = computed(() => currencyType.value === "divine");
    const fetchLoading = ref(false);
    const highlight = ref(true);
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
        createBaseVNode("div", _hoisted_3$2, [
          _hoisted_4$2,
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
          }, [
            createVNode(QImg, {
              src: "images/chaos.png",
              width: "32px"
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
          }, [
            createVNode(QImg, {
              src: "images/divine.png",
              width: "32px"
            })
          ], 2),
          createVNode(QCheckbox, {
            label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
            modelValue: highlight.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => highlight.value = $event),
            dense: "",
            style: { "margin-left": "32px" }
          }, null, 8, ["modelValue"])
        ]),
        _hoisted_5$2
      ], 64);
    };
  }
});
var OilTab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-94f04702"]]);
var DeliriumOrbTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-0ba1a514"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2$1 = { class: "loading-chaos" };
const _hoisted_3$1 = {
  class: "row justify-center items-center q-mt-xl q-mb-md q-gutter-x-md relative-position",
  style: { "height": "32px" }
};
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "delirium-orb-stash q-mx-auto" }, null, -1));
const _sfc_main$2 = defineComponent({
  ...{
    name: "DeliriumOrbTab"
  },
  __name: "DeliriumOrbTab",
  setup(__props) {
    const currencyType = ref("chaos");
    const chaosType = computed(() => currencyType.value === "chaos");
    const divineType = computed(() => currencyType.value === "divine");
    const fetchLoading = ref(false);
    const highlight = ref(true);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, {
          "enter-active-class": "animated fadeInDown",
          "leave-active-class": "animated fadeOutUp"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("div", _hoisted_2$1, [
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
          _hoisted_4$1,
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
          }, [
            createVNode(QImg, {
              src: "images/chaos.png",
              width: "32px"
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
          }, [
            createVNode(QImg, {
              src: "images/divine.png",
              width: "32px"
            })
          ], 2),
          createVNode(QCheckbox, {
            label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
            modelValue: highlight.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => highlight.value = $event),
            dense: "",
            style: { "margin-left": "32px" }
          }, null, 8, ["modelValue"])
        ]),
        _hoisted_5$1
      ], 64);
    };
  }
});
var DeliriumOrbTab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0ba1a514"]]);
var CatalystTab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-20a8ebd2"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "absolute flex flex-center",
  style: { "width": "100%", "height": "50px", "top": "0" }
};
const _hoisted_2 = { class: "loading-chaos" };
const _hoisted_3 = {
  class: "row justify-center items-center q-mt-xl q-mb-md q-gutter-x-md relative-position",
  style: { "height": "32px" }
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\uD654\uD3D0\uB2E8\uC704", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "catalyst-stash q-mx-auto" }, null, -1));
const _sfc_main$1 = defineComponent({
  ...{
    name: "CatalystTab"
  },
  __name: "CatalystTab",
  setup(__props) {
    const currencyType = ref("chaos");
    const chaosType = computed(() => currencyType.value === "chaos");
    const divineType = computed(() => currencyType.value === "divine");
    const fetchLoading = ref(false);
    const highlight = ref(true);
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
          _hoisted_4,
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", chaosType.value ? "active-currency" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => currencyType.value = "chaos")
          }, [
            createVNode(QImg, {
              src: "images/chaos.png",
              width: "32px"
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["cursor-pointer currency-type", divineType.value ? "active-currency" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => currencyType.value = "divine")
          }, [
            createVNode(QImg, {
              src: "images/divine.png",
              width: "32px"
            })
          ], 2),
          createVNode(QCheckbox, {
            label: "\uAC00\uACA9 \uD558\uC774\uB77C\uC774\uD2B8",
            modelValue: highlight.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => highlight.value = $event),
            dense: "",
            style: { "margin-left": "32px" }
          }, null, 8, ["modelValue"])
        ]),
        _hoisted_5
      ], 64);
    };
  }
});
var CatalystTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-20a8ebd2"]]);
const _sfc_main = defineComponent({
  ...{
    name: "StashPage"
  },
  __name: "StashPage",
  setup(__props) {
    const currentTab = ref("fossil");
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
                name: "scarabs",
                label: "\uAC11\uCDA9\uC11D"
              }),
              createVNode(QTab, {
                name: "fossil",
                label: "\uD654\uC11D"
              }),
              createVNode(QTab, {
                name: "oils",
                label: "\uC131\uC720"
              }),
              createVNode(QTab, {
                name: "delirium-orbs",
                label: "\uD658\uC601\uC624\uBE0C"
              }),
              createVNode(QTab, {
                name: "catalyst",
                label: "\uAE30\uD3ED\uC81C"
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QTabPanels, {
            modelValue: currentTab.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTab.value = $event),
            style: { "background": "transparent" }
          }, {
            default: withCtx(() => [
              createVNode(QTabPanel, { name: "scarabs" }, {
                default: withCtx(() => [
                  createVNode(ScarabTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "fossil" }, {
                default: withCtx(() => [
                  createVNode(FossilTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "oils" }, {
                default: withCtx(() => [
                  createVNode(OilTab)
                ]),
                _: 1
              }),
              createVNode(QTabPanel, { name: "delirium-orbs" }, {
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
