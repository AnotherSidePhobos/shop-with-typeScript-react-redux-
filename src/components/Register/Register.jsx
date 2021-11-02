import './Register.css';
// import {Formik, FieldArray} from 'formik';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { off } from 'process';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Register = () => {

    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
      })
      return (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log("values: ", values)
          }}
        >
          {formik => (
            <div className='container'>
              <h1>Sign Up</h1>
              <Form>
                <TextField label="First Name" name="firstName" type="text" /><br/>
                <TextField label="last Name" name="lastName" type="text" /><br/>
                <TextField label="Email" name="email" type="email" /><br/>
                <TextField label="password" name="password" type="password" /><br/>
                <TextField label="Confirm Password" name="confirmPassword" type="password" /><br/>
                <Button variant='contained' type="submit">Register</Button>
                <Button variant='contained' type="reset">Reset</Button>
              </Form>
            </div>
          )}
        </Formik>
      )
}

export default Register
