import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RootState {
  products: ProductState;
}

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string; 
  brand: string;
  title: string;
  tags: string[];
  subtitle: string;
  reviews: Review[];
  sales: Sale[];
  retailer: string;
  image: string;
  details: string[];
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    }
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
