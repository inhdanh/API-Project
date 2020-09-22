import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../api'

const initialState = {
    students: [],
    status: 'idle',
    error: null
}

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const response = await API.get('api/Students')
    return response.data
})
export const addStudents = createAsyncThunk('students/addStudents', async data => {
    const response = await API.post('api/Students', data)
    return response.data
})
const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchStudents.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchStudents.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.students = action.payload
        },
        [fetchStudents.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [addStudents.fulfilled]: (state, action) => {
            state.students.push(action.payload)
        }
    }
})
export const selectAllStudents = state => state.students.students
export default studentsSlice.reducer