import React from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 p-4">
            Product Listing by
            <span className="ml-4 inline-block align-middle bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white px-3 py-1 rounded-full text-lg font-semibold shadow-lg">
              Rachna Kumari Tiwari
            </span>
          </h1>
          <p className="text-lg text-gray-600">Manage your products with Jotai state management</p>
        </header>
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <AddProductForm />
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <ProductList />
        </section>
      </main>
    </div>
  )
}
