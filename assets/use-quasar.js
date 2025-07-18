import { i as inject, K as quasarKey } from "./index.js";
function useQuasar() {
  return inject(quasarKey);
}
export { useQuasar as u };
