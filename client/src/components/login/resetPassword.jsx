import React, { useState } from "react";
import Layout from '../shared/layout';
import { Formik } from 'formik';
import './login.styles.scss';
import { Link, withRouter, useHistory} from 'react-router-dom';
import service from "../../services/authentitication.service";



const ResetPassword = () => {
/*
  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [registerForm, setRegisterForm] = useState({
    token: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { token, value } = e.target;
    setErrors({
      ...errors,
      [token]: "",
    });
    setRegisterForm({
      ...registerForm,
      [token]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(errors);

      service.resetPassword(registerForm).then(
        (res) => {
          if (res.message) history.push("/home");
          else {
            setMessage(res.message);
          }
        },
        (error) => {
          const resMessage = message.error.message;

          setMessage(resMessage);
        }
      );
  };
*/
    return (
        <Layout>
            <div className='card'>    
             <div className='log-in'>
            <h1>Change Password</h1>
            
            <div className='container'>
                <Formik >
                            <form /*onSubmit={handleSubmit}*/>
                                <div>
                                    <input
                                    type='text'
                                    name='token'
                                    placeholder='Enter your reset code'
                                    className='noname-input'
                                    //onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                    type='password'
                                    name='password'
                                    placeholder='New Password'
                                    className='noname-input'
                                    //onChange={handleChange}
                                    />
                                </div>
                                <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black noname-btn submit'
                                >
                                    Confirm
                                </button>
                                </div>
                            </form>
                </Formik>
            </div>
            </div>
            </div>
        </Layout>       
    );    
}

export default withRouter(ResetPassword);
