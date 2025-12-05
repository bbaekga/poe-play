import { H as onDeactivated, o as onBeforeUnmount, I as vmIsDestroyed, g as getCurrentInstance } from "./index.js";
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
export { useInterval as u };
