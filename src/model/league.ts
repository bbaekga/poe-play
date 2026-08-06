import { reactive } from 'vue'
import { api } from 'boot/axios'

// poe.ninja serves this endpoint without an Access-Control-Allow-Origin header,
// so a browser can send the request but cannot read the response. Until the
// logisnet proxy exposes a passthrough for it, resolution fails in the browser
// and the FALLBACK_LEAGUE below is used. Point this at the proxy route once it
// exists — that is the only change needed here.
const INDEX_STATE_URL = 'https://poe.ninja/poe1/api/data/index-state'

// Safety net only. If the league API is unreachable the app keeps working on the
// league that was baked in at build time (build.env.LEAGUE in quasar.config.js).
const FALLBACK_LEAGUE = String(process.env.LEAGUE || '')

interface LeagueRef {
  name: string
  url: string
  displayName: string
}

interface IndexStateResponse {
  economyLeagues?: Array<LeagueRef>
}

export const leagueState = reactive({
  name: '',
  isFallback: false
})

let pending: Promise<string> | null = null

/**
 * Resolves the current economy league once per page load and caches the result.
 * Concurrent callers share a single in-flight request, so mounting several stash
 * tabs at once still hits the league API only once.
 */
export function resolveLeague(): Promise<string> {
  if (leagueState.name) {
    return Promise.resolve(leagueState.name)
  }
  if (!pending) {
    pending = requestLeague()
  }
  return pending
}

async function requestLeague(): Promise<string> {
  try {
    const response = await api.get<IndexStateResponse>(INDEX_STATE_URL)
    const name = response?.data?.economyLeagues?.[0]?.name
    if (!name) {
      throw new Error('economyLeagues[0].name is missing from the index-state response')
    }
    return applyLeague(name, false)
  } catch (error: unknown) {
    if (!FALLBACK_LEAGUE) {
      // Nothing to fall back to, so let the next caller retry instead of
      // caching a rejected promise forever.
      pending = null
      throw new Error(`Failed to resolve the current league: ${getErrorMessage(error)}`)
    }
    console.error(
      `Failed to resolve the current league, falling back to "${FALLBACK_LEAGUE}"`,
      error
    )
    return applyLeague(FALLBACK_LEAGUE, true)
  }
}

function applyLeague(name: string, isFallback: boolean): string {
  leagueState.name = name
  leagueState.isFallback = isFallback
  return name
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}
