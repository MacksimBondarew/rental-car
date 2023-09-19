import { createSlice } from '@reduxjs/toolkit';
import { featchCars } from './operations';

const handlePending = state => {
    state.cars.isLoading = true;
};
const handleRejected = (state, action) => {
    state.cars.isLoading = false;
    state.cars.error = action.payload;
};

const state = {
    cars: {
        items: [],
        isLoading: false,
        error: null,
    },
};
const cars = createSlice({
    name: 'cars',
    initialState: state,
    extraReducers: builder => {
        builder
            .addCase(featchCars.pending, handlePending)
            .addCase(featchCars.fulfilled, (state, action) => {
                state.cars.isLoading = false;
                state.cars.error = null;
                console.log(action.payload)
                state.cars.items = action.payload;
            })
            .addCase(featchCars.rejected, handleRejected);
    //     builder
    //         .addCase(addContact.pending, handlePending)
    //         .addCase(addContact.fulfilled, (state, action) => {
    //             state.contacts.isLoading = false;
    //             state.contacts.error = null;
    //             state.contacts.items.push(action.payload);
    //         })
    //         .addCase(addContact.rejected, handleRejected);
    //     builder
    //         .addCase(deleteContact.pending, handlePending)
    //         .addCase(deleteContact.rejected, handleRejected)
    //         .addCase(deleteContact.fulfilled, (state, action) => {
    //             state.contacts.isLoading = false;
    //             state.contacts.error = null;
    //             state.contacts.items = state.contacts.items.filter(
    //                 name => name.id !== action.payload
    //             );
    //         });
    },
});

export const carsReducer = cars.reducer;