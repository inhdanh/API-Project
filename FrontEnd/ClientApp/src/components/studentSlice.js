import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../api'

const initialState = {
  students: [],
  status: 'idle',
  openSuccessAlert: false
}

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await API.get('api/Students')
  return response.data
})
export const addStudents = createAsyncThunk('students/addStudents', async data => {
  const response = await API.post('api/Students', data)
  return response.data
})
export const editStudents = createAsyncThunk('students/editStudents', async data => {
  const response = await API.put(`api/Students/${data.id}`, data)
  return response.data
})
export const deleteStudent = createAsyncThunk('students/deleteStudent', async id => {
  const response = await API.delete(`api/Students/${id}`)
  return response.data
})

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    closeSuccessAlert (state) {
      state.openSuccessAlert = false
    }
  },
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
    [addStudents.pending]: (state) => {
      state.status = 'loading'
    },
    [addStudents.fulfilled]: (state, action) => {
      state.students.push(action.payload)
      state.openSuccessAlert = true
    },
    [editStudents.fulfilled]: (state, action) => {
      const idx = state.students.findIndex(student => student.id == action.payload.id)
      state.students.splice(idx, 1, action.payload)
    },
    [deleteStudent.fulfilled]: (state, action) => {
      const idx = state.students.findIndex(student => student.id == action.payload.id)
      state.students.splice(idx, 1)
    }
  }
})
export const selectAllStudents = state => state.students.students
export const selectSuccessAlert = state => state.students.openSuccessAlert
export const selectStudentById = (state, studentId) => state.students.students.find(student => student.id == studentId)
export default studentsSlice.reducer
export const { closeSuccessAlert } = studentsSlice.actions