import { createSlice } from "@reduxjs/toolkit";
import { featchCars, updateFavorite } from "./operations";

const handlePending = (state) => {
    state.cars.isLoading = true;
    state.reload = true;
};
const handleRejected = (state, action) => {
    state.cars.isLoading = false;
    state.cars.error = action.payload;
    state.reload = false;
};

const state = {
    cars: {
        items: [],
        isLoading: false,
        error: null,
    },
    reload: false,
};
const cars = createSlice({
    name: "cars",
    initialState: state,
    extraReducers: (builder) => {
        builder
            .addCase(featchCars.pending, handlePending)
            .addCase(featchCars.fulfilled, (state, action) => {
                state.cars.isLoading = false;
                state.cars.error = null;
                state.cars.items = action.payload;
            })
            .addCase(featchCars.rejected, handleRejected);
        builder
            .addCase(updateFavorite.pending, handlePending)
            .addCase(updateFavorite.fulfilled, (state) => {
                state.cars.isLoading = false;
                state.cars.error = null;
                state.reload = false;
            })
            .addCase(updateFavorite.rejected, handleRejected);
        builder;
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
