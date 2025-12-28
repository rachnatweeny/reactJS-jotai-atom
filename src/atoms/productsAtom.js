import { atom } from 'jotai'

const defaultProducts = [
  { id: 1, name: 'Classic Watch', price: 129, description: 'Timeless leather strap watch.' },
  { id: 2, name: 'Wireless Headphones', price: 199, description: 'Noise-cancelling over-ear headphones.' },
  { id: 3, name: 'Coffee Mug', price: 19, description: 'Ceramic mug, 350ml.' }
]

const getStoredProducts = () => {
  try {
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored) : defaultProducts
  } catch {
    return defaultProducts
  }
}

const saveProducts = (products) => {
  try {
    localStorage.setItem('products', JSON.stringify(products))
  } catch (error) {
    console.error('Failed to save products:', error)
  }
}

export const productsAtom = atom(getStoredProducts())

export const searchAtom = atom('')

export const filteredProductsAtom = atom((get) => {
  const q = get(searchAtom).trim().toLowerCase()
  if (!q) return get(productsAtom)
  return get(productsAtom).filter((p) => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q))
})

export const addProductAtom = atom(null, (get, set, newProduct) => {
  const product = { id: Date.now(), ...newProduct }
  const updated = [...get(productsAtom), product]
  set(productsAtom, updated)
  saveProducts(updated)
})

export const deleteProductAtom = atom(null, (get, set, productId) => {
  const updated = get(productsAtom).filter((p) => p.id !== productId)
  set(productsAtom, updated)
  saveProducts(updated)
})

