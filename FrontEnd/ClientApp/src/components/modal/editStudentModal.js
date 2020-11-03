import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { selectStudentById, editStudents } from '../studentSlice'

const EditStudentModal = ({
  handleChange,
  isOpenEditModal,
  setIsOpenEditModal,
  handleEditStudent,
  studentId
}) => {
  const studentDetail = useSelector(state => selectStudentById(state, studentId))

  return (
    <Modal isOpen={isOpenEditModal}>
      <ModalHeader>Edit new student</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup row>
            <Label for="age" sm={2}>Age</Label>
            <Col sm={10}>
              <Input type="text" name="age" id="age" onChange={handleChange} defaultValue={studentDetail.age} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="class" sm={2}>Class</Label>
            <Col sm={10}>
              <Input type="text" name="class" id="class" onChange={handleChange} defaultValue={studentDetail.class} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input type="text" name="name" id="name" onChange={handleChange} defaultValue={studentDetail.name} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="roll" sm={2}>Roll</Label>
            <Col sm={10}>
              <Input type="text" name="roll" id="roll" onChange={handleChange} defaultValue={studentDetail.roll} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="section" sm={2}>Section</Label>
            <Col sm={10}>
              <Input type="text" name="section" id="section" onChange={handleChange} defaultValue={studentDetail.section} />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => handleEditStudent(studentDetail)}>Save</Button>
        <Button color="secondary" onClick={() => setIsOpenEditModal(false)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}
export default EditStudentModal