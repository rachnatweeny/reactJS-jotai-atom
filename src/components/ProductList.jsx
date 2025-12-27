import React from 'react'
import { useAtom } from 'jotai'
import { filteredProductsAtom, searchAtom } from '../atoms/productsAtom'

export default function ProductList() {
  const [products] = useAtom(filteredProductsAtom)
  const [search, setSearch] = useAtom(searchAtom)

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-3 py-2 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.id} className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">Image</div>
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
            <p className="text-sm text-gray-500 mb-3">{p.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-indigo-600 font-bold">${p.price}</span>
              <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Buy</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
