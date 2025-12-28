import React from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Product Listing</h1>
          <p className="text-base text-gray-600">Manage your products with Jotai state management</p>
        </header>
        <section className="mb-8">
          <AddProductForm />
        </section>
        <section>
          <ProductList />
        </section>
      </main>
    </div>
  )
}
