import { reactive } from 'vue'
import {poeGet} from 'src/model/poeApi';

export const store = reactive({
  CHAOS_PER_DIVINE: 0,
  async getMetaData() {
    const response = await poeGet('Currency')
    const divine = response?.data?.core?.rates?.divine
    if (divine) {
      this.CHAOS_PER_DIVINE = Math.round(1 / divine)
    }
  }
})
