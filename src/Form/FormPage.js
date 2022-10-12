import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const FormPage = () => {
    const [input, setInput] = useState({});
    const [errorData, setErrorData] = useState(0);

    const onInputChanged = (event) => {
        if (event.target.name === "gender") {
            setInput((input) => ({
                ...input,
                [event.target.name]: event.target.checked
            }));
        }
        else {
            setInput((input) => ({
                ...input,
                [event.target.name]: event.target.value
            }));
        }
    };
    const SignUp = () => {
        if (!input.name) {
            setErrorData(1)
        }
        else if (!input.username) {
            setErrorData(2)
        }
        else if (!input.email) {
            setErrorData(3)
        }
        else if (!input.date) {
            setErrorData(4)
        }
        else if (!input.gender) {
            setErrorData(5)
        }
        else {
            setErrorData('');
            alert("Sign up")
        }
    };
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder='Full Name' onChange={onInputChanged} value={input.name} />
                    {errorData === 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Full Name. </div> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='username' placeholder='Username' onChange={onInputChanged} value={input.username} />
                    {errorData === 2 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Username. </div> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={onInputChanged} value={input.eamil} />
                    {errorData === 3 ? <div className="errorMessage" style={{ color: "red" }}> Enter Email Adress </div> : ''}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> <br />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="date" name='date' placeholder='Username' onChange={onInputChanged} value={input.date} /> 
                    {errorData === 4 ? <div className="errorMessage" style={{ color: "red" }}> Select Your Date of birth </div> : ''}
                </Form.Group>
                <div>
                    <Form.Check
                        inline

                        label="Male"
                        name="gender"
                        type="radio"
                        onChange={onInputChanged}
                        value={input.gender}
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        onChange={onInputChanged}
                        value={input.gender}
                    />

                </div>

                {errorData === 5 ? <div className="errorMessage" style={{ color: "red" }}> Select Your Gender </div> : ''}


                <Button className='loginSytemBtn mx-3' onClick={SignUp}>Sign Up</Button>
            </Form>
        </Container>
    )
}

export default FormPage