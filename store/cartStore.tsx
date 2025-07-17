import { Product } from "@/consts";
import { create } from "zustand";

export interface ProductCart extends Product {
  cantidad: number;
}

interface CartState {
  items: ProductCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, amount: number) => void;
  getTotal: () => number;
    getTotalItems: () => number;

}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const existing = get().items.find((item) => item.id === product.id);

    if (existing) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, cantidad: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  clearCart: () => set({ items: [] }),

  updateQuantity: (id, amount) => {
    set({
      items: get().items.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, item.cantidad + amount) }
          : item
      ),
    });
  },

getTotalItems: () =>
  get().items.reduce((total, item) => total + item.cantidad, 0),


  getTotal: () =>
    get().items.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    ),
}));
