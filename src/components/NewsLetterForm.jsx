import React, { useContext, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { EmailContext, FormStatusContext } from '../App';

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Valid email required").required("Email is required")
});


const NewsLetterForm = () => {
    const formContext = useContext(FormStatusContext);
    const { setEmail } = useContext(EmailContext);

    return (
        <>
            <Formik initialValues={{
                email: '',
            }}
                validationSchema={SignUpSchema}
                validateOnChange
                onSubmit={values => {
                    setTimeout(() =>  {
                        if (!!values) {
                            formContext.setFormStatus({ formStatus: true });
                            setEmail(values.email);
                        }
                    }, 1000);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className='min-h-1/4'>
                        <div className='mt-8 mb-4'>
                            <div className='flex flex-row justify-between font-roboto-bold'>
                                <label htmlFor="email" className="block text-sm/6 sm:font-xs text-dark-grey">Email address</label>
                                {errors?.email && touched.email ? <small className='text-tomato text-sm/6 sm:font-xs block' >{errors.email}</small> : null}
                            </div>

                            <div className="mt-2">
                                <Field type="email" disabled={isSubmitting} name="email" placeholder='email@company.com' id="email" className={errors?.email && touched.email ? "has-error form-input" : "form-input"} />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button type="submit" disabled={isSubmitting} className="form-btn">
                                {isSubmitting ? <ClipLoader loading={isSubmitting} size={24} speedMultiplier={2} color='#ffffff' aria-label="Loading Spinner"/> :
                                <span>Subscribe to monthly newsletter</span>
                                }
                                </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default NewsLetterForm;