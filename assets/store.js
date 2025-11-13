import { api } from "./axios.js";
import { m as reactive } from "./index.js";
const store = reactive({
  CHAOS_PER_DIVINE: 0,
  async getMetaData() {
    var _a, _b, _c;
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/Currency/${"Keepers"}`);
    const divine = (_c = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.core) == null ? void 0 : _b.rates) == null ? void 0 : _c.divine;
    if (divine) {
      this.CHAOS_PER_DIVINE = Math.round(1 / divine);
    }
  }
});
export { store as s };
