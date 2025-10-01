const API_URL = "http://localhost:5000/api"

// ---------------- AUTH ----------------
export async function register(username, password) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
  return res.json()
}

export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
  return res.json()
}

export async function getMe(token) {
  const res = await fetch(`${API_URL}/me`, {
    headers: { Authorization: token },
  })
  return res.json()
}

// ---------------- TODOS ----------------
export async function fetchTodos() {
  const res = await fetch(`${API_URL}/todos`)
  return res.json()
}

export async function createTodo(text) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  return res.json()
}

export async function toggleTodo(id, done) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done }),
  })
  return res.json()
}

// ---------------- SHOP (if needed later) ----------------
export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products`)
  return res.json()
}
