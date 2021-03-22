import React, { useState } from 'react'
import './signup.styles.scss';
import Layout from '../../components/shared/layout';
import '../../App.scss';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase';
import { withRouter } from 'react-router-dom';


const validate =values => {

    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.firstname) { errors.firstname = 'Required' }
    if (!values.password) {errors.password = 'Required' }
    if (!values.passwordConfirm) {errors.passwordConfirm = 'Required' }

    else if ((values.password !== values.passwordConfirm)) 
      { errors.passwordConfirm = 'Passwords do not match';
    }
    return errors;
}
const Signup = ({ history: { push }}) =>{
    
const [error, setError] = useState(null);

    const initialValues = {
        firstname : '',
        email : '',
        password : '',
        passwordConfirm: '',
    }
    
 const handleSignUp = async (values, { setSubmitting }) => {
     const {firstname, email, password } = values;
     
      
     try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password); 
        await createUserProfileDocument(user, { displayName : firstname});
        push('/home');
        setSubmitting(false);
        } catch (error) {
            console.log(error);
           setSubmitting(false);
           setError(error);
        }
 }
    return (
        <Layout>
       <div className='sign-up'>
           <h1>Sign Up</h1>
           <div className='form-container'>
               <Formik
               initialValues={initialValues}
               validate={validate}
               onSubmit={handleSignUp}
               >
               {
                   ({values, errors, handleChange, handleSubmit, isSubmitting})=>{
                    const { firstname, email, password, passwordConfirm} = errors;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                type='text'
                                name='firstname'
                                onChange={handleChange}
                                value={values.firstname}
                                placeholder='First Name'
                                className={ ' noname-input ' + (firstname ? 'error' : '')}
                                />

                            </div>

                            <div>
                                <input
                                type='email'
                                name='email'
                                onChange={handleChange}
                                value={values.email}
                                placeholder='Email'
                                className={ ' noname-input ' + (email ? 'error' : '')}
                                />
                                

                            </div>

                            <div>
                                <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                                value={values.password}
                                placeholder='Password'
                                className={ ' noname-input ' + (password ? 'error' : '')}
                                />

                            </div>

                            <div>
                                <input
                                type='Password'
                                name='passwordConfirm'
                                onChange={handleChange}
                                value={values.passwordConfirm}
                                placeholder='Password Confirmation'
                                className={ ' noname-input ' + (passwordConfirm ? 'error' : '')}
                                />

                            </div>
                            <div className='submit-btn'>
                                <button
                                type='submit'
                                disabled={isSubmitting}
                                className='button is-black noname-btn submit'
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className='error-message'>
                                {
                                error &&<p>{error.message}</p>
                                }
                            </div>
           <div>
           <Link to='log-in'  className='disc'>
               Already have an account? Log In
               </Link> 
               </div>
                        </form>
                    )   
                   }
               }
               
               </Formik>
           </div> 
               </div>
       
        </Layout>
    )

}


export default withRouter(Signup);