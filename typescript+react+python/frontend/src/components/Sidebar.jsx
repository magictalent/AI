import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Dashboard' },
  { to: '/todo', label: 'Todo' },
  { to: '/shop', label: 'Shop' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen">
      <div className="p-4 text-xl font-bold text-white">My Dashboard</div>
      <nav className="p-4">
        {items.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            end
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? 'bg-gray-800 font-semibold' : ''
              }`
            }
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
