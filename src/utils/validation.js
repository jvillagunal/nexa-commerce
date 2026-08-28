export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())

export const validateUsername = (username) => {
  if (!username.trim()) return { valid: false, message: 'El usuario es obligatorio.' }
  if (!/^[a-zA-Z0-9._-]{4,20}$/.test(username)) return { valid: false, message: 'Usa entre 4 y 20 caracteres alfanuméricos.' }
  return { valid: true, message: '' }
}

export const validatePassword = (password) => {
  const rules = [password.length >= 8, /[A-Z]/.test(password), /[a-z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)]
  return { score: rules.filter(Boolean).length, valid: rules.every(Boolean) }
}