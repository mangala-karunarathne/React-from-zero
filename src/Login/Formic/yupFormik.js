import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <div> First Name </div>
            <div>
                <Field name="firstName" placeholder="Enter Your First Name"/>
                    {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
            </div>
            <div> Last Name </div>
            <div>
                <Field name="lastName" placeholder="Enter Your Last Name"/>
                    {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
            </div>
            <div> Email Address </div>          
            <div>
                <Field name="email" type="email" placeholder="Enter Your Email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div></div>
            <div>
                <button type="submit">Submit</button>
            </div>
           
        </Form>
            
          
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;