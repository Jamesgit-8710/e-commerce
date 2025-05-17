// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../services/productService';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
