import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const base_url = 'http://localhost:3000/api/';

const userSlice = createSlice({

    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
        users: []
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = null
        },
        logout: (state) => {
            state.user = null
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        setLoading: (state) => {
            state.loading = true
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
        register: (state, action) => {
            state.users.push(action.payload);  // Add the new user to the users array
            state.loading = false;
            state.error = null;
        }

    }

});


export const { login, logout, setError, register , setLoading,setUsers } = userSlice.actions


export const loginUser = (email, password) => async (dispatch) => {

    dispatch(setLoading())
    try {
        const res = await axios.post(base_url + 'user/login', {
            email: email,
            password
        })
        const user = res.data
        dispatch(login(user))
     

    } catch (error) {
        dispatch(setError('Failed to sign in'))
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

// get all users 

export const getAllUsers = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const res = await axios.get(base_url + 'user/')
        const users = res.data;
        dispatch(setUsers(users))
      
    } catch (error) {
        dispatch(setError('Failed to get users'))
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

// create  new user 

export const createUser = (user) => async (dispatch) => {
    dispatch(setLoading())
    console.log('====================================');
    console.log(user,'🫡🫡');
    try {
        const res = await axios.post('http://localhost:3000/api/user/', 
       user)
        const newUser = res.data
        console.log('====================================');
        loginUser(newUser,'hellooooo' )
        dispatch(register(newUser))
       

    } catch (error) {

        dispatch(setError('Failed to create user'))
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}



export default userSlice.reducer;
