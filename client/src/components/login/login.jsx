import React, { useState} from 'react';
import Layout from '../shared/layout';
import { Formik } from 'formik';
import './login.styles.scss';
import { Link, withRouter } from 'react-router-dom';




const LogIn = () => {

    
    return (

        <Layout>
            <div className='card'>
             <div className='log-in'>
            <h1>Log In</h1>
            <div className='container'>
                <Formik >
               
                            <form >
                                <div>
                                    <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className='noname-input'
                                    />
                                </div>

                                <div>
                                    <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className='noname-input'
                                    />
                                </div>
                                <div className='submit-btn'>
                                    <button
                                    type='submit'
                                    className='button is-black noname-btn submit'
                                    >
                                        Log In
                                    </button>
                                    
                                </div>
                               <div className='error-message'>
                                   
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
                        
                

                </Formik>
            </div>

            </div>
            </div>
        </Layout>
        
    ) 
    
}

export default withRouter(LogIn);
