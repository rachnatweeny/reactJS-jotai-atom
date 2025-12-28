import React from 'react'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai'
import { filteredProductsAtom, searchAtom, deleteProductAtom } from '../atoms/productsAtom'

export default function ProductList() {
  const [products] = useAtom(filteredProductsAtom)
  const [search, setSearch] = useAtom(searchAtom)
  const deleteProduct = useSetAtom(deleteProductAtom)

  return (
    <section aria-labelledby="products-title">
      <h2 id="products-title" className="text-2xl font-semibold mb-6 text-gray-800">Products</h2>
      <form className="mb-6 bg-white p-4 rounded-lg shadow" aria-label="Search products">
        <fieldset>
          <legend className="sr-only">Search Filters</legend>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label htmlFor="search-1" className="sr-only">Search products by name or description</label>
              <input
                id="search-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
              />
            </div>
          </div>
        </fieldset>
      </form>

      {products.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">No products found. Try adjusting your search or add a new product.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-indigo-300" role="listitem">
              <button
                onClick={() => deleteProduct(p.id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110 shadow-md cursor-pointer"
                aria-label={`Delete ${p.name}`}
                title={`Delete ${p.name}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <figure className="mb-4">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center text-gray-400 font-medium overflow-hidden">Image</div>
              </figure>
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{p.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{p.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-2xl font-bold text-indigo-600" aria-label={`Price: ${p.price} dollars`}>${p.price}</span>
                <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all hover:shadow-lg transform hover:scale-105 font-medium" aria-label={`Buy ${p.name}`}>Buy</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
