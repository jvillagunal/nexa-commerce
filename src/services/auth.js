const SESSION_KEY = 'nexa_token'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
const request = async (path, options = {}) => {
  const token = localStorage.getItem(SESSION_KEY)
  const response = await fetch(`${API_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) } })
  const body = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(body.message || 'No fue posible completar la operación.')
  return body.data
}
export const api = { request }
export const authService = {
  getSession: () => JSON.parse(localStorage.getItem('nexa_user') || 'null'),
  register: async (data) => { const result = await request('/auth/register', { method: 'POST', body: JSON.stringify(data) }); localStorage.setItem(SESSION_KEY, result.token); localStorage.setItem('nexa_user', JSON.stringify(result.user)); return result.user },
  login: async (email, password) => { const result = await request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }); localStorage.setItem(SESSION_KEY, result.token); localStorage.setItem('nexa_user', JSON.stringify(result.user)); return result.user },
  logout: () => { localStorage.removeItem(SESSION_KEY); localStorage.removeItem('nexa_user') },
}