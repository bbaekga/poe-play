import { i as inject, F as quasarKey } from "./index.js";
function useQuasar() {
  return inject(quasarKey);
}
export { useQuasar as u };
