import React from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Product Listing (Jotai + Tailwind)</h1>
          <p className="text-sm text-gray-500">Example product list using Jotai atoms for state</p>
        </header>
        <AddProductForm />
        <ProductList />
      </div>
    </div>
  )
}
