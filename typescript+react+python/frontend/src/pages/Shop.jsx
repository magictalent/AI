import React from 'react'
import { fetchProducts } from '../api'

export default function Shop() {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <div className="font-semibold">{p.title}</div>
            <div className="mt-1 text-gray-600">${p.price}</div>
            <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
