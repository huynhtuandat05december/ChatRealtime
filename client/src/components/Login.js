import React from 'react';
import { FastField, Form, Formik } from 'formik'
import Input from '../custom-fields/Input';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
function Login(props) {
    return (
        <Formik
            initialValues={{
                name: '',
                room: '',
            }
            }
        >
            {
                FormikProps => {
                    const { values } = FormikProps;
                    return (
                        <div className='login'>
                            <h2>Join to Chat</h2>
                            <Form className='form'>
                                <FastField
                                    name='name'
                                    label='Name'
                                    placeholder='E.g: John'
                                    component={Input}
                                />
                                <FastField
                                    name='room'
                                    label='Room'
                                    placeholder='E.g: Play'
                                    component={Input}
                                />
                            </Form>
                            <Link to={`/chat?name=${values.name}&room=${values.room}`}>
                                <Button
                                    variant="contained"
                                    color={"secondary"}
                                    size="large"
                                    // className={classes.button}
                                    startIcon={<ExitToAppIcon />}
                                    type='submit'
                                >
                                    Join
                                </Button>
                            </Link>
                        </div>
                    )
                }
            }


        </Formik >
    );
}

export default Login;