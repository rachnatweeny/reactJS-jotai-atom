import React, { useState } from 'react'
import { useSetAtom } from 'jotai'
import { addProductAtom } from '../atoms/productsAtom'

export default function AddProductForm() {
  const addProduct = useSetAtom(addProductAtom)
  const [form, setForm] = useState({ name: '', price: '', description: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('Product name is required')
      return
    }
    const price = Number(form.price)
    if (!form.price || price <= 0) {
      setError('Price must be greater than 0')
      return
    }
    addProduct({ name: form.name.trim(), price, description: form.description.trim() })
    setForm({ name: '', price: '', description: '' })
    setError('')
  }

  return (
    <section aria-labelledby="add-product-title" className="mb-6 bg-white p-6 rounded-lg shadow">
      <h2 id="add-product-title" className="text-2xl font-semibold mb-4 text-gray-800">Add Product</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-300" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={submit} className="space-y-4">
        <fieldset className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              maxLength="100"
              id="product-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              aria-required="true"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="product-price" className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              id="product-price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="0.00"
              type="number"
              step="0.01"
              aria-required="true"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="col-span-1 sm:col-span-3">
            <label htmlFor="product-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="product-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors font-semibold"
          aria-label="Add new product"
        >
          Add Product
        </button>
      </form>
    </section>
  )
}
