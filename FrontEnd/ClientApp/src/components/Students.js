import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import API from '../api'

const Students = () => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    API.get('api/Student', res => {
      if (res.data)
        setStudents(res.data)
    })
  }, [])

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
      <Button color="primary">Add</Button>
      {renderstudentsTable()}
    </div>
  );
}
export default Students
