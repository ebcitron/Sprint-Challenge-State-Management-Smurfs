import React from 'react';
import {withFormik, Form, Field} from 'formik';
import Axios from 'axios';
import { connect } from 'react-redux';
import {getSmurfs} from './actions';

function SmurfForm({values, errors, touched, isSubmitting}){
 
    return(
        <div className = "SmurfForm">
            <h3>Add A Smurf!</h3>
            <Form>
                <div>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field type="text" name ="name" placeholder="Name"/>
                </div>
                <div>
                    {touched.age && errors.age && <p>{errors.age}</p>}
                       <Field type="number" name ="age" placeholder="Age"/>
               </div>
                <div>
                {touched.height && errors.height && <p>{errors.height}</p>}
                <Field type="number" name ="height" placeholder="Height"/>
                </div>           
                <button disabled = {isSubmitting} type="submit">Submit Smurf!</button>
            </Form>
        </div>
    );
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height}){
        return{
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    handleSubmit(values, {resetForm, setSubmitting, setErrors}){
        console.log("Formik Values: ", values);
        Axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
            console.log('PostRes', res);
            resetForm();
            setSubmitting(false);
           
        })
        .catch(err => {
            console.log('PostErr', err);
            setSubmitting(false);
        })
    }
})(SmurfForm);

const mapStateToProps = state => {
    return {
     ...state   
    }
}

export default connect(mapStateToProps, {getSmurfs})(FormikSmurfForm);