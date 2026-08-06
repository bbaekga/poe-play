export interface IItem {
  id: string
  name: string
  icon: string
  chaos: number
  level?: number
  max?: number
  top?: string
  left?: string
  description?: Array<string>
}

export interface PriceResponse {
  id: string
  primaryValue: number
}

export interface IconResponse {
  id: string
  image: string
  detailsId: string
}

/**
 * Shape every league-scoped proxy endpoint returns. `lines` carries the prices
 * and varies per endpoint, so callers that need more than `PriceResponse` pass
 * their own line type: PoeResponse<UniqueResponse>.
 */
export interface PoeResponse<TLine = PriceResponse> {
  core?: {
    rates?: {
      divine?: number
    }
  }
  lines: Array<TLine>
  items: Array<IconResponse>
}
