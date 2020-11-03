import React, { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'reactstrap'
import { selectAllStudents, addStudents, editStudents, deleteStudent, closeSuccessAlert, selectSuccessAlert } from './studentSlice'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import AddStudentModal from './modal/addStudentModal'
import EditStudentModal from './modal/editStudentModal'
import { Toast } from 'react-bootstrap'

const Students = () => {
  const [values, setCurrentValues] = useState({})
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [studentId, setStudentId] = useState({})
  const students = useSelector(selectAllStudents)
  const dispatch = useDispatch()
  const isOpen = useSelector(selectSuccessAlert)

  const handleChange = e => {
    const temp = { ...values, [e.target.name]: e.target.value }
    setCurrentValues(temp)
  }

  const handleAddStudent = () => {
    try {
      const resultAction = dispatch(addStudents(values))
      unwrapResult(resultAction)
      setIsOpenAddModal(false)
    } catch (err) { }
  }

  const handleEditStudent = (data) => {
    try {
      const resultAction = dispatch(editStudents({ ...data, ...values }))
      unwrapResult(resultAction)
      setIsOpenEditModal(false)
    } catch (err) { }
  }

  const handleOpenEditModal = (e) => {
    if (e.target.id) {
      setStudentId(e.target.id)
      setIsOpenEditModal(true)
    }
  }

  const handleOpenAddModal = e => {
    setCurrentValues({})
    setIsOpenAddModal(true)
  }

  const handleDelete = e => {
    dispatch(deleteStudent(e.target.id))
  }

  const renderstudentsTable = () => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Class</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Section</th>
            <th>-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student =>
            <tr key={student.id}>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.section}</td>
              <td><Button id={student.id} color="secondary" onClick={handleOpenEditModal}>Edit</Button></td>
              <td><Button id={student.id} color="danger" onClick={handleDelete}>Delete</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
  return (
    <div>
      <Toast onClose={(state) => dispatch(closeSuccessAlert(state))} show={isOpen} delay={3000} autohide>
        <Toast.Body>Success!!</Toast.Body>
      </Toast>
      <h1 id="tabelLabel" >List student</h1>
      <Button color="primary" onClick={handleOpenAddModal}>Add</Button>
      <AddStudentModal
        handleChange={handleChange}
        handleAddStudent={handleAddStudent}
        isOpenAddModal={isOpenAddModal}
        setIsOpenAddModal={setIsOpenAddModal}
      />
      {
        isOpenEditModal &&
        <EditStudentModal
          handleChange={handleChange}
          isOpenEditModal={isOpenEditModal}
          setIsOpenEditModal={setIsOpenEditModal}
          handleEditStudent={handleEditStudent}
          studentId={studentId}
        />
      }
      {renderstudentsTable()}
    </div>
  )
}
export default Students
