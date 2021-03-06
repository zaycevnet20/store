import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IChoice {
    firstValue: any
}

const initialState: IChoice = {
    firstValue: [0, 1000],
}

export const choiceSLice = createSlice({
    name: 'choiceRange',
    initialState,
    reducers: {
        firstScaleNumber: (state: { firstValue: number; }, action: PayloadAction<number>) => {
            state.firstValue = action.payload
        }
    }
})

export const { firstScaleNumber} = choiceSLice.actions

export default choiceSLice.reducer