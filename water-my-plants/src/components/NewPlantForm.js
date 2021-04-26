import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './CreatePlantSchema'
import styled from 'styled-components'
 
const Container = styled.div`
   height: 80vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   height: 100%;
 
   .errors {
       color: red;
   }
`
 
const initialFormValues = {
   nickName: '',
   species: '',
   water: '',
   image: '',
}
const initialErrors = {
   nickName: '',
   species: '',
   water: '',
}
 
export default function CreatePlant() {
   const [formValues, setFormValues] = useState(initialFormValues)
   const [errors, setErrors] = useState(initialErrors);
   const [disabled, setDisabled] = useState(true)
 
   const change = evt => {
       const { name, value } = evt.target
 
       yup
       .reach(schema, name)
       .validate(value)
       .then(() => {
       setErrors({
        ...errors,
        [name]: "",
    });
    })
    .catch((err) => {
    setErrors({
        ...errors,
        [name]: err.errors[0],
    });
    });

    setFormValues({...formValues, [name]: value})
}

useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

const submit = evt => {
    evt.preventDefault();
    const newPlant = [{
        nickName: formValues.nickName.trim(),
        species: formValues.species,
        water: formValues.water.trim(),
        image: formValues.image.trim(),
    }]
    console.log(newPlant)
    setFormValues(initialFormValues);
}

return (
   <Container>
    {/* Icon here? */}
    <h2>Create New Plant!</h2>
    <Form onSubmit={submit}>
        <label>Nick Name
            <input
                type='text'
                name='nickName'
                value={formValues.nickName}
                onChange={change}
            />           
            <div className='errors'>{errors.nickName}</div>
        </label>
        <label>Species
        <select type='text' name='species' value={formValues.species} onChange={change}>
                   <option disabled value='' >--SELECT--</option>
                   <option value='temp'>temporary option</option>                        
               </select>       
               <div className='errors'>{errors.species}</div> 
           </label>
           <label>H<sub>2</sub>O frequency
               <input
                   type='text'
                   name='water'
                   value={formValues.water}
                   onChange={change}
               />           
               <div className='errors'>{errors.water}</div>
           </label>
           <label>{'Image (optional)'}
               <input
                   type='file'
                   name='image'
                   value={formValues.image}
                   onChange={change}
                   />           
               </label>
               <button disabled={disabled}>Create</button>
           </Form>
          </Container>
       )
    }
    