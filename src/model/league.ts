import { reactive } from 'vue'
import { api } from 'boot/axios'

// The logisnet proxy fetches poe.ninja's index-state server-side (poe.ninja
// sends no Access-Control-Allow-Origin header, so the browser cannot read it
// directly) and returns just the current league name with CORS enabled:
//   GET /dev-api/poe/current-league  ->  { "league": "Allflame" }
const CURRENT_LEAGUE_URL = 'https://www.logisnet.co.kr/dev-api/poe/current-league'

// Safety net only. If the league API is unreachable the app keeps working on the
// league that was baked in at build time (build.env.LEAGUE in quasar.config.js).
const FALLBACK_LEAGUE = String(process.env.LEAGUE || '')

interface CurrentLeagueResponse {
  league?: string
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
    const response = await api.get<CurrentLeagueResponse>(CURRENT_LEAGUE_URL)
    const name = response?.data?.league
    if (!name) {
      throw new Error('league is missing from the current-league response')
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
