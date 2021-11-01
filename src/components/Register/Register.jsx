import './Register.css';
import {Formik, FieldArray} from 'formik';
import * as yup from 'yup';
import { off } from 'process';

const Register = () => {


    const validationSchema = yup.object().shape({
        name: yup.string().typeError('should be a string').required('required'),
        secondName: yup.string().typeError('should be a string').required('required'),
        password: yup.string().typeError('should be a string').required('required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords must match').required('required'),
        email: yup.string().email('Inpur correct email').required('required'),
        confirmEmail: yup.string().email('Inpur correct email').required('required').oneOf([yup.ref('email')], 'emails must match'),
        file: yup.array().of(yup.object().shape({
            file: yup.mixed(),
            type: yup.string().oneOf([], 'add correct file!'),
            name: yup.string()
        }))
    })

    const getFileSchema = (file) => file && {
        file: file,
        type: file.type,
        name: file.name
    }
    return (
         <div>
             <h1>Registration form</h1>
                <Formik
                    initialValues = {
                        {
                            name: '',
                            secondName: '',
                            password: '',
                            confirmPassword: '',
                            email: '',
                            confirmEmail: '',
                            avatar: undefined

                        }
                    }
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(values) => {console.log(values)}}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div className='form'>
                            <p>
                                <label htmlFor={'name'}>Name</label><br/>
                                <input
                                    className='input'
                                    type={'text'}
                                    name={'name'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </p>
                            {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                            <p>
                                <label htmlFor={'secondName'}>Surname</label><br/>
                                <input
                                    className='input'
                                    type={'text'}
                                    name={'secondName'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.secondName}
                                />
                            </p>
                            {touched.secondName && errors.secondName && <p className='error'>{errors.secondName}</p>}
                            <p>
                                <label htmlFor={'password'}>Password</label><br/>
                                <input
                                    autoComplete="off"
                                    className='input'
                                    type={'password'}
                                    name={'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </p>
                            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                            <p>
                                <label htmlFor={'confirmPassword'}>Confirm Password</label><br/>
                                <input
                                    className='input'
                                    type={'password'}
                                    name={'confirmPassword'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                />
                            </p>
                            {touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                            <p>
                                <label htmlFor={'email'}>Email</label><br/>
                                <input
                                    className='input'
                                    type={'text'}
                                    name={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </p>
                            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                            <p>
                                <label htmlFor={'confirmEmail'}>Confirm Email</label><br/>
                                <input
                                    className='input'
                                    type={'text'}
                                    name={'confirmEmail'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmEmail}
                                />
                            </p>
                            {touched.confirmEmail && errors.confirmEmail && <p className='error'>{errors.confirmEmail}</p>}
                            {console.log(values.avatar)}
                            <FieldArray name='avatar'>
                                {(arrayHelper) => (
                                    <p>
                                        <label htmlFor={'avatar'}>
                                            Avatar
                                        </label><br/>
                                        <input
                                            type={'file'}
                                            name={'avatar'}
                                            onChange={(event) => {
                                                const {files} = event.target
                                                const avatar = getFileSchema(files.item(0))
                                                if (!avatar){
                                                    arrayHelper.remove(0)
                                                }
                                                if (Array.isArray(values.avatar)) {
                                                    arrayHelper.replace(0, avatar)
                                                }else{
                                                    arrayHelper.push(avatar)
                                                }
                                            }}
                                        />
                                    </p>
                                )}
                            </FieldArray>


                            <button
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}
                            >Register</button>
                        </div>
                    )}
                </Formik>
            </div>
    )
}

export default Register
