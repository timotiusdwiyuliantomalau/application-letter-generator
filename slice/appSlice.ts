// src/redux/slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  formValue: any;
  textPDF: string;
}

const initialState: CounterState = {
  formValue: {},
  textPDF: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTextPDF: (state, action: PayloadAction<string>) => {
      state.textPDF = action.payload;
    },
    setFormValue: (state, action: PayloadAction<any>) => {
      state.formValue = action.payload;
    },
  },
});

export const { setTextPDF, setFormValue } = counterSlice.actions;

export default counterSlice.reducer;
