import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { ListResponse, User } from '../../models';

export interface UserState {
  value: ListResponse<User>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  value: {} as ListResponse<User>,
  status: 'idle',
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: any) => {
      state.value += 1;
    },
    decrement: (state: any) => {
      state.value -= 1;
    },
    incrementByAmount: (state: any, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;


export default counterSlice.reducer;
