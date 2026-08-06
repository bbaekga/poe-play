import { poeGet } from 'src/model/poeApi'
import { PoeResponse } from 'src/model/interface'
import uniqueList from 'src/model/unique.json'
import {NullString} from 'src/model/commonTypes';

interface IUniqueItem {
  id: string
  name: NullString
  hover: NullString
  weightValue: NullString
  defaultDustAmount: NullString
  quantityDustAmount: NullString
}

interface UniqueResponse {
  name: string
  links?: number
  chaosValue: number
  divineValue: number
}

export class UniqueItem {
  id: string
  name: NullString
  hover: NullString
  weightValue: number
  defaultDustAmount: number
  quantityDustAmount: number
  chaos: number
  divine: number
  selected: boolean

  constructor(data: IUniqueItem) {
    this.id = data.id
    this.name = data.name
    this.hover = 'https://poedb.tw' + data.hover
    this.weightValue = data?.weightValue?.length ? parseFloat(data.weightValue) : 0
    this.defaultDustAmount = data?.defaultDustAmount?.length ? parseInt(data.defaultDustAmount) : 0
    this.quantityDustAmount = data?.quantityDustAmount?.length ? parseInt(data.quantityDustAmount) : 0
    this.chaos = 0
    this.divine = 0
    this.selected = false
  }

  get dustPerChaos() {
    if (this.chaos > 0 && this.defaultDustAmount > 0) {
      return Math.round(this.defaultDustAmount / this.chaos)
    }
    return 0
  }

  get dustPerDivine() {
    if (this.divine > 0 && this.defaultDustAmount > 0) {
      return Math.round(this.defaultDustAmount / this.divine)
    }
    return 0
  }

  static async fetch() {
    const list = uniqueList.map(data => new UniqueItem(data))
    function parsing(response: UniqueResponse[]) {
      list.forEach(unique => {
        if (unique.chaos !== 0) {
          return
        }
        response.forEach(item => {
          const links = item?.links || null
          if (!links) {
            const id = unique.id.replace(/[\s']/g, '').toLowerCase()
            const name = item.name.replace(/[\s']/g, '').toLowerCase()
            if (name.indexOf(id) !== -1) {
              const chaos = item?.chaosValue || 0
              unique.divine = item?.divineValue || 0
              unique.chaos = chaos < 0 ? 1 : chaos
            }
          }
        })
      })
    }
    // Fetched in parallel, but parsed in this order on purpose: parsing() skips
    // uniques that already have a price, so the first category to match wins.
    const responses = await Promise.all(
      ['weapon', 'armour', 'accessory', 'jewel'].map(slot =>
        poeGet<PoeResponse<UniqueResponse>>(`unique/${slot}`)
      )
    )
    responses.forEach(response => parsing(response.data.lines))
    return list.filter(u => u.chaos !== 0)
  }
}
