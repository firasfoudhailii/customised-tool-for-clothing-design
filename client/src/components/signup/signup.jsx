import React, { useState } from 'react'
import './signup.styles.scss';
import Layout from '../../components/shared/layout';
import '../../App.scss';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



const Signup = () =>{
 
      
    return (
        <Layout>
       <div className='sign-up'>
           <h1>Sign Up</h1>
           <div className='form-container'>
               <Formik>
              
                        <form>
                            <div>
                                <input
                                type='text'
                                name='firstname'
                                placeholder='First Name'
                                className=' noname-input'
                                />

                            </div>

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
                                className=' noname-input'
                                />

                            </div>

                            <div>
                                <input
                                type='Password'
                                name='passwordConfirm'
                                placeholder='Password Confirmation'
                                className='noname-input'
                                />

                            </div>
                            <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black noname-btn submit'
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className='error-message'>
                               
                            </div>
           <div>
           <Link to='log-in'  className='disc'>
               Already have an account? Log In
               </Link> 
               </div>
                        </form>
                    
               
               
               </Formik>
           </div> 
               </div>
       
        </Layout>
    )

}


export default withRouter(Signup);