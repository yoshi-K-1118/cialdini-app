import { reactive } from 'vue'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const authStore = reactive({
  user: null,
  profile: null,
  loading: true,
})

export async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user) {
    authStore.user = session.user
    await fetchProfile()
  }
  authStore.loading = false

  supabase.auth.onAuthStateChange(async (event, session) => {
    authStore.user = session?.user ?? null
    if (authStore.user) await fetchProfile()
    else authStore.profile = null
  })
}

export async function fetchProfile() {
  const token = (await supabase.auth.getSession()).data.session?.access_token
  if (!token) return
  const apiBase = import.meta.env.VITE_API_BASE_URL || ''
  const res = await fetch(`${apiBase}/api/user/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (res.ok) authStore.profile = await res.json()
}

export async function signOut() {
  await supabase.auth.signOut()
  authStore.user = null
  authStore.profile = null
}
