import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    firstName: "",
    lastName: "",
    loading: false,
    error: null
}
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const resLogin = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            const dataLogin = await resLogin.json()
            if (!resLogin.ok) throw new Error(dataLogin.message || "Invalid credentials")
    
            const resProfile = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${dataLogin.body.token}`,
                    "Content-Type": "application/json",
                },
            })
            const dataProfile = await resProfile.json()
            if (!resProfile.ok) throw new Error(dataProfile.message || "Error retrieving profile")
    
            return {
                token: dataLogin.body.token,
                firstName: dataProfile.body.firstName,
                lastName: dataProfile.body.lastName,
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ({token, firstName, lastName}, {rejectWithValue}) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstName, lastName }),
            })
            const data = await response.json()
            if (!response.ok) {
            throw new Error(data.message || "Update error")
            }
        
            return { firstName, lastName }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        logout: (state) => {
            state.token = null
            state.firstName = ""
            state.lastName = ""
            state.loading = false
            state.error = null
            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder) => {
        builder
        // Login user
        .addCase(loginUser.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false,
            state.token = action.payload.token
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            localStorage.setItem("token", action.payload.token)
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
        // Update user
        .addCase(updateUser.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false,
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
})

export const {logout} = userSlice.actions
export default userSlice.reducer