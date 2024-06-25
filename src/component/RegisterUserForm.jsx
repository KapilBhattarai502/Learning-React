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
          <label>Full Name</label>
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

         
          
          
          <Button type="submit" variant="contained">Submit</Button>
        </form>
      )}
    </Formik>
  );
};
export default RegisterUserForm;