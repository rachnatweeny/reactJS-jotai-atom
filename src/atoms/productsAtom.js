import { atom } from 'jotai'

export const productsAtom = atom([
  { id: 1, name: 'Classic Watch', price: 129, description: 'Timeless leather strap watch.' },
  { id: 2, name: 'Wireless Headphones', price: 199, description: 'Noise-cancelling over-ear headphones.' },
  { id: 3, name: 'Coffee Mug', price: 19, description: 'Ceramic mug, 350ml.' }
])

export const searchAtom = atom('')

export const filteredProductsAtom = atom((get) => {
  const q = get(searchAtom).trim().toLowerCase()
  if (!q) return get(productsAtom)
  return get(productsAtom).filter((p) => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q))
})

export const addProductAtom = atom(null, (get, set, newProduct) => {
  const product = { id: Date.now(), ...newProduct }
  set(productsAtom, (prev) => [...prev, product])
})

