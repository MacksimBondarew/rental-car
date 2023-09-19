import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = "https://65074e7e3a38daf4803f6598.mockapi.io";

export const featchCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(
                '/car'
            );
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const updateFavorite = createAsyncThunk(
    'cars/updateFavorite',
    async (updateObject, thunkApi) => {
        try {
            const { id, updatedCar } = updateObject;
            const response = await axios.put(
                `/car/${id}`, updatedCar
            );
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);