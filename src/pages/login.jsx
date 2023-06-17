import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function login() {

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const [error, setError] = useState({});

  const users = [];
  const SubmetMe = (event) => {
    if (hasErrors(email, pass)) {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      users.push({ email, pass });
      console.log(users)
    }

  }
  function handleEmailChange(event) {
    setemail(event.target.value);

  }
  function handlePassChange(event) {
    setpass(event.target.value);

  }
  const hasErrors = (email, pass) => {
    const errors = {};

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      errors.email = "Your email not Valid";
    }

    if (!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      errors.pass = "password must be more than 8 char [A-Z&a-z&0-9]";
    }

    setError(errors);
    return Object.keys(errors).length;
  };

  return (
    <>
      <div>
        <div className="continer">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <br />  <br />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                  
                  {!error.email && (
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  )}
                  {error.email && (
                    <div id="email" className="form-text text-danger">
                      {error?.email}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={pass} onChange={handlePassChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                  {error.pass && (
                    <div id="password" className="form-text text-danger">
                      {error?.pass}
                    </div>
                  )}
                </Form.Group>
                <div className='text-center'>
                  <Button variant="primary" type="submit" onClick={SubmetMe}>
                    Submit
                  </Button>
                </div>

              </Form>
              <br />  <br />
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default login;