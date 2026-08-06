import { AxiosResponse } from 'axios'
import { api } from 'boot/axios'
import { resolveLeague } from 'src/model/league'
import { PoeResponse } from 'src/model/interface'

const POE_API_BASE = 'https://www.logisnet.co.kr/dev-api/poe'

/**
 * GETs a league-scoped endpoint on the price proxy: poeGet('Oil') requests
 * `${POE_API_BASE}/Oil/${league}`. The league is resolved from the league API
 * once per page load, so callers never deal with it directly.
 */
export function poeGet<T = PoeResponse>(path: string): Promise<AxiosResponse<T>> {
  return resolveLeague().then(league =>
    api.get<T>(`${POE_API_BASE}/${path}/${encodeURIComponent(league)}`)
  )
}
