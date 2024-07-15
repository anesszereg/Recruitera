import { createSlice } from "@reduxjs/toolkit";

import axiox from "axios";

const base_url = "http://localhost:3000/api/";


const materialSlice = createSlice({
    name: "material",
    initialState: {
        materials: []
    },
    reducers: {
        setMaterials: (state, action) => {
            state.materials = action.payload
        },
        addMaterial: (state, action) => {
            state.materials.push(action.payload)
        },
        deleteMaterial: (state, action) => {
            state.materials = state.materials.filter(material => material._id !== action.payload)
        },
        updateMaterial: (state, action) => {
            state.materials = state.materials.map(material => {
                if (material._id === action.payload._id) {
                    return action.payload
                }
                return material
            })
        }
    }
})

export const { setMaterials, addMaterial, deleteMaterial, updateMaterial } = materialSlice.actions

export const fetchMaterials = () => async (dispatch) => {

    try {
        const res = await axiox.get(base_url + 'materials/')
        const materials = res.data
        dispatch(setMaterials(materials))
    } catch (error) {
        console.log(error)
    }
}

export const createMaterial = (material) => async (dispatch) => {
    try {
        const res = await axiox.post(base_url + 'materials', material)
        dispatch(addMaterial(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const delete_Material = (id) => async (dispatch) => {
    try {
        await axiox.delete(base_url + 'materials/' + id)
        dispatch(deleteMaterial(id))
    } catch (error) {
        console.log(error)
    }
}

export const update_Material = (material) => async (dispatch) => {
    try {
        const res = await axiox.put(base_url + 'materials/' + material._id, material)
        dispatch(updateMaterial(res.data))
    } catch (error) {
        console.log(error)
    }
}




export default materialSlice.reducer