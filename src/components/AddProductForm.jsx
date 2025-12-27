import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { addProductAtom } from '../atoms/productsAtom'

export default function AddProductForm() {
  const [, addProduct] = useAtom(addProductAtom)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addProduct({ name: name.trim(), price: Number(price) || 0, description: description.trim() })
    setName('')
    setPrice('')
    setDescription('')
  }

  return (
    <form onSubmit={submit} className="mb-6 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-medium mb-3">Add Product</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="col-span-1 sm:col-span-2 px-3 py-2 border border-gray-200 rounded"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          className="px-3 py-2 border border-gray-200 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="col-span-1 sm:col-span-3 px-3 py-2 border border-gray-200 rounded"
        />
      </div>
      <div className="mt-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Product</button>
      </div>
    </form>
  )
}
