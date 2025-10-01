import React, { useState } from "react"
import { login } from "../api"

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await login(username, password)
    if (res.token) {
      localStorage.setItem("token", res.token)
      onLogin(res.token)
    } else {
      setError(res.error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  )
}
