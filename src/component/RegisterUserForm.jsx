import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterUserForm = () => {
  return (
    <Formik
      initialValues={{ fullName: '' }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        
      })}
      onSubmit={(values)=>{
        console.log(values);


      }}
    >
      {({handleSubmit,errors,touched,getFieldProps}) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...getFieldProps('fullName')}
          />
          {touched.fullName && errors.fullName ? (
            <div style={{
              color:"red"
            }}>{errors.fullName}</div>
          ) : null}

         
          
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
export default RegisterUserForm;