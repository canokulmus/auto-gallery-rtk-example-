import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    searcTerm: '',
    data: [
        { id: nanoid(), name: 'BMW', cost: 100000 },
        { id: nanoid(), name: 'Mercedes', cost: 120000 },
        { id: nanoid(), name: 'Audi', cost: 80000 },
        { id: nanoid(), name: 'Porsche', cost: 200000 },
    ]
}

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar: (state, action) => {
            state.data = state.data.filter(car => car.id !== action.payload);
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
