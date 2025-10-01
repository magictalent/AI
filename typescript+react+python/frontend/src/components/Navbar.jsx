import React from 'react'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-indigo-500">☰</button>
        <h1 className="text-lg font-semibold">Overview</h1>
      </div>
      <div className="flex items-center gap-4">
        <input
          className="border border-gray-300 rounded px-3 py-1 text-black"
          placeholder="Search..."
        />
        <div className="rounded-full bg-gray-200 w-9 h-9 flex items-center justify-center text-gray-800">
          A
        </div>
      </div>
    </header>
  )
}
