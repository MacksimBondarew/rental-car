import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://65074e7e3a38daf4803f6598.mockapi.io";

export const featchCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkApi) => {
        console.log(321321);
        try {
            const response = await axios.get(
                '/car'
            );
            console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);