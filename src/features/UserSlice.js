import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    '/users/login',
    async ({email, password}, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', {email, password})
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                return res
            } else {
                return thunkAPI.rejectWithValue(res);
            }
        } catch (e) {
            console.log('Error', e.response.data)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false

            return state;
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, {payload}) => {
            state.email = payload.email;
            state.username = payload.username;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, {payload}) => {
            console.log('payload', payload)
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        }
    }
})

export const {clearState} = userSlice.actions;

export const userSelector = (state) => state.user;