import React from "react";
import students from "./StudentsData";
import Student from "./Student.jsx";

const Students = () => {
  return (
    <div>
      <h2>Student Data</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student
              key={index}
              index={index + 1}
              name={student.name}
              department={student.department}
              finalGrade={student.finalGrade}
              status={student.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
