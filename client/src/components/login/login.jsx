import React, { useState} from 'react';
import Layout from '../shared/layout';
import { Formik } from 'formik';
import './login.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';



const LogIn = ({ history : { push } }) => {

    const [error, setError] = useState(null);
    const initialValues = {
    email: '',
    password : ''
    }; 
    const handleLogIn = async (values, { setSubmitting }) => {
        const {email, password } = values;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            push('/home')
            
        }catch(error){
            console.log(error);
            setSubmitting(false);
            setError(error);
        }
    }
    return (
        <Layout>
            <div className='card'>
             <div className='log-in'>
            <h1>Log In</h1>
            <div className='container'>
                <Formik
                initialValues={initialValues}
                onSubmit={handleLogIn}
                >
                {
                    ({values, handleChange, handleSubmit, isSubmitting}) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    placeholder='Email'
                                    value={values.email}
                                    className='noname-input'
                                    />
                                </div>

                                <div>
                                    <input
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    value={values.password}
                                    className='noname-input'
                                    />
                                </div>
                                <div className='submit-btn'>
                                    <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='button is-black noname-btn submit'
                                    >
                                        Log In
                                    </button>
                                    
                                </div>
                               <div className='error-message'>
                                   {
                                       error && <p>{error.message}</p>
                                   }
                               </div>
                <div>
                                <Link to='/'  className='disc'>
                                        Forgot Password ?
                                    </Link>
                                    <Link to='sign-up'  className='disc'>
                                        Need an account? Sign Up
                                    </Link>
                                </div>
                            </form>
                        )
                    }
                }

                </Formik>
            </div>

            </div>
            </div>
        </Layout>
    )
}
export default withRouter(LogIn);