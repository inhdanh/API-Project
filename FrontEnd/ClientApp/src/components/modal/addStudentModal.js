import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const AddStudentModal = ({
    handleChange,
    isOpenAddModal,
    handleAddStudent,
    setIsOpenAddModal
}) => {
    return (
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
          <Button color="primary" onClick={handleAddStudent}>Create</Button>
          <Button color="secondary" onClick={() => setIsOpenAddModal(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
}
export default AddStudentModal