import React from 'react'
import { fetchTodos, createTodo, toggleTodo } from '../api'

export default function Todo() {
  const [items, setItems] = React.useState([])
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    fetchTodos().then(setItems)
  }, [])

  async function add() {
    if (!text.trim()) return
    const n = await createTodo(text)
    setItems(prev => [n, ...prev])
    setText('')
  }

  async function onToggle(id, done) {
    const updated = await toggleTodo(id, done)
    setItems(prev => prev.map(p => (p.id === id ? updated : p)))
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-xl font-semibold">Todo List</h2>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="New task"
        />
        <button
          onClick={add}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {items.map(i => (
          <li
            key={i.id}
            className="flex items-center gap-3 bg-white p-3 rounded shadow"
          >
            <input
              type="checkbox"
              checked={i.done}
              onChange={e => onToggle(i.id, e.target.checked)}
            />
            <div className={i.done ? 'line-through text-gray-400' : ''}>
              {i.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
