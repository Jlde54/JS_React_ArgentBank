import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    firstName: "",
    lastName: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        login: (state, action) => {
            state.token = action.payload.token
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        logout: (state) => {
            state.token = null
            state.firstName = ""
            state.lastName = ""
        },
        updateUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const {login, logout, updateUser} = userSlice.actions
export default userSlice.reducer