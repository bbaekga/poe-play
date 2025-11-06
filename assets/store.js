import { api } from "./axios.js";
import { m as reactive } from "./index.js";
const store = reactive({
  CHAOS_PER_DIVINE: 0,
  async getMetaData() {
    const response = await api.get(`https://www.logisnet.co.kr/dev-api/poe/currency/${"Keepers"}`);
    const list = response.data.lines;
    list.forEach((data) => {
      if (data.detailsId === "divine-orb") {
        this.CHAOS_PER_DIVINE = data.chaosEquivalent;
      }
    });
  }
});
export { store as s };
