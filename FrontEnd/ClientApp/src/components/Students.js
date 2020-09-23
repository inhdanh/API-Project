import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import { selectAllStudents, selectStudentById, addStudents, editStudents } from './studentSlice'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit';
import AddStudentModal from './modal/addStudentModal';
import EditStudentModal from './modal/editStudentModal';

const Students = () => {
  const [currentStudent, setCurrentStudent] = useState({})
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [studentId, setStudentId] = useState({})
  const students = useSelector(selectAllStudents)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [])

  const handleChange = e => {
    const temp = { ...currentStudent, [e.target.name]: e.target.value }
    setCurrentStudent(temp)
  }

  const handleAddStudent = async () => {
    try {
      const resultAction = await dispatch(addStudents(currentStudent))
      unwrapResult(resultAction)
      setIsOpenAddModal(false)
    } catch (err) { }
  }

  const handleEditStudent = async (data) => {
    try {
      const resultAction = await dispatch(editStudents({ ...data, ...currentStudent }))
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
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
  return (
    <div>
      <h1 id="tabelLabel" >List student</h1>
      <Button color="primary" onClick={() => setIsOpenAddModal(true)}>Add</Button>
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
  );
}
export default Students
