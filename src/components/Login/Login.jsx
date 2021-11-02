import './Login.css';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';

const Login = () => {

    const validationSchema = yup.object().shape({
        login: yup.string().typeError('should be a string').required('required'),
        password: yup.string().typeError('should be a string').required('required')
    })

    return (
        <div>
            <h1>Login form</h1>
            <Formik
            initialValues = {
                {
                    login: '',
                    password: ''
                }
            }
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {console.log(values)}}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isValid}) => (
                    <Form className='form'>
                        <p>
                            <label htmlFor={'login'}>Login</label><br/>
                            <input
                                className='input'
                                type={'text'}
                                name={'login'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                                autoComplete="off"
                            />
                        </p>
                        {touched.login && errors.login && <p className='error'>{errors.login}</p>}
                        <p>
                            <label htmlFor={'password'}>Password</label><br/>
                            <input
                                className='input'
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                autoComplete="off"
                            />
                        </p>
                        {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                        <br/>
                        <Button variant="contained" type={'submit'} onClick={handleSubmit} disabled={!isValid}>
                            Log in
                        </Button>
                        <Button variant="contained" type='reset'>
                            Reset
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
