import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import API from '../api'

const Students = () => {
  const [students, setStudents] = useState([])
  const [newStudent, setNewStudent] = useState({})
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const getStudentList = () => {
    API.get('api/Student', res => {
      if (res.data)
        setStudents(res.data)
    })
  }

  useEffect(() => {
    getStudentList()
  }, [])

  const handleChange = e => {
    const temp = { ...newStudent, [e.target.name]: e.target.value }
    setNewStudent(temp)
  }

  const handleAddStudent = () => {
    API.post('api/Student', newStudent, (res) => {
      if (res.data) {
        getStudentList()
        setIsOpenAddModal(false)
      }
    })
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
      <Modal isOpen={isOpenAddModal}>
        <ModalHeader>Add new student</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="age" sm={2}>Age</Label>
              <Col sm={10}>
                <Input type="number" name="age" id="age" onChange={handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="class" sm={2}>Class</Label>
              <Col sm={10}>
                <Input type="number" name="class" id="class" onChange={handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" id="name" onChange={handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="roll" sm={2}>Roll</Label>
              <Col sm={10}>
                <Input type="number" name="roll" id="roll" onChange={handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="section" sm={2}>Section</Label>
              <Col sm={10}>
                <Input type="text" name="section" id="section" onChange={handleChange} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddStudent}>Add</Button>
          <Button color="secondary" onClick={() => setIsOpenAddModal(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
      {renderstudentsTable()}
    </div>
  );
}
export default Students
