import React, { useState } from "react"
import { register } from "../api"

export default function Register({ onRegistered }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password !== confirm) {
      setError("Passwords do not match")
      return
    }

    const res = await register(username, password)
    if (res.message) {
      setSuccess(res.message)
      setTimeout(() => onRegistered(), 1500) // redirect to login after success
    } else {
      setError(res.error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  )
}
