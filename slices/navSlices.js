import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: null,
    email: null,
    password: null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
     
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    } 
});
export const {setEmail, setPassword} = navSlice.actions;


export const selectEmail = (state) => state.nav.email;
export const salectPassword = (state) => state.nav.password;

export default navSlice.reducer;
