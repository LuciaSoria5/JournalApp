import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        status: 'not-authenticated', // checking, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },

    reducers: {
        login: ( state, action ) => {

        },
        logout: ( state, payload ) => {

        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    }
});

// action creation functions
export const { login, logout, checkingCredentials } = authSlice.actions;