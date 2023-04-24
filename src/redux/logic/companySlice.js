import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await axios.get('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies');
  const companies = Object.entries(response.data)
    .flatMap(([id, company]) => ({ ...company, id }));
  return companies;
});

const initialState = [];

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => action.payload);
  },
});

export default companySlice.reducer;
