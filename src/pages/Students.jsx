import React, { useState } from "react";

// validat(nameStudent,emailStudent,phoneStudent)

export default function Students() {
  const [nameStudent, setnameStudent] = useState("");
  const [emailStudent, setemailStudent] = useState("");
  const [phoneStudent, setphoneStudent] = useState("");
  const [studentsArray, setStudentArray] = useState([]);
  const [error, setError] = useState({});

  const handelName = (e) => {
    setnameStudent(e.target.value);
  };

  const handelEmail = (e) => {
    setemailStudent(e.target.value);
  };

  const handelPhone = (e) => {
    setphoneStudent(e.target.value);
  };

  const handelSubmit = (e) => {
    if (hasErrors(nameStudent, emailStudent, phoneStudent)) {
      e.preventDefault();
    } else {
      e.preventDefault();
 
      const newStudent = { nameStudent, emailStudent, phoneStudent };
      setStudentArray((prevStudents) => [...prevStudents, newStudent]);
      console.log(studentsArray);
    }
  };

  const hasErrors = (nameStudent, emailStudent, phoneStudent) => {
    const errors = {};
    if (!nameStudent.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)) {
      errors.nameStudent = "Your name not Valid ";
    }

    if (
      !emailStudent.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      errors.emailStudent = "Your email not Valid";
    }

    if (!phoneStudent.match(/^[0-9]{10}$/)) {
      errors.phoneStudent = "your phone number not valid must be 11 number";
    }

    setError(errors);
    return Object.keys(errors).length;
  };

  return (
    <div className="container overflow-auto">
      <div className="row mt-5 mb-5 pt-5 pb-5 gap-5 overflow-auto">
        <div className="col-md-5 border p-3 shadow rounded align-self-baseline">
          <form onSubmit={handelSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="nameStu" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameStu"
                aria-describedby="nameHelp"
                value={nameStudent}
                onChange={handelName}
              />
              {error.nameStudent && (
                <div id="nameHelp" className="form-text text-danger">
                  {error?.nameStudent}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="emailStu" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailStu"
                aria-describedby="emailHelp"
                value={emailStudent}
                onChange={handelEmail}
              />
              {error.emailStudent && (
                <div id="nameHelp" className="form-text text-danger">
                  {error?.emailStudent}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="PhoneStu" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="PhoneStu"
                aria-describedby="phoneHelp"
                value={phoneStudent}
                onChange={handelPhone}
              />
              {error.phoneStudent && (
                <div id="nameHelp" className="form-text text-danger">
                  {error?.phoneStudent}
                </div>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* start table */}
        <div className="col-md-6 border shadow rounded" >
          <table className="table table-striped overflow-auto" >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">student Name</th>
                <th scope="col">student Email</th>
                <th scope="col">student Phone</th>
              </tr>
            </thead>
            <tbody>
              {studentsArray.map((student, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.nameStudent}</td>
                  <td>{student.emailStudent}</td>
                  <td>{student.phoneStudent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
