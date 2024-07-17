import React from "react";

const Student = ({ index, name, department, finalGrade, status }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{department}</td>
      {status === "Pass" ? <td>{finalGrade}</td> : <td>N/A</td>}
      <td>{status}</td>
    </tr>
  );
};

export default Student;
