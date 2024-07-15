import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const base_url = 'http://localhost:3000/api/';

const clientSlice = createSlice({

    name: 'user',
    initialState: {
        clients: []
    },
    reducers: {
        setClients: (state, action) => {
            state.clients = action.payload
        },
        addClient: (state, action) => {
            state.clients.push(action.payload)
        },
        deleteClient: (state, action) => {
            state.clients = state.clients.filter(client => client._id !== action.payload)
        },
        updateClient: (state, action) => {
            state.clients = state.clients.map(client => {
                if (client._id === action.payload._id) {
                    return action.payload
                }
                return client
            })
        }

    }

});


export const { 
    setClients,
    addClient,
    deleteClients,
    updateClients
 } = clientSlice.actions 


export const fetchClients = () => async (dispatch) => {
    try {
        const res = await axios.get(base_url + 'clients/')
        const clients = res.data
        dispatch(setClients(clients))
    } catch (error) {
        console.log(error)
    }
}


export const createClient = (client) => async (dispatch) => {
    try {
        const res = await axios.post(base_url + 'clients', client)
        dispatch(addClient(res.data))
    } catch (error) {
        console.log(error)
    }
}



export const deleteClient = (id) => async (dispatch) => {
    try {
        await axios.delete(base_url + 'client/' + id)
        dispatch(deleteClient(id))
    } catch (error) {
        console.log(error)
    }
}



export const updateClient = (client) => async (dispatch) => {
    try {
        const res = await axios.put(base_url + 'client/' + client._id, client)
        dispatch(updateClient(res.data))
    } catch (error) {
        console.log(error)
    }
}



export default clientSlice.reducer