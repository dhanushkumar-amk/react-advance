import React, { useState } from 'react'

const FormComponent = () => {


// const [ nameValue, setNameValue ] = useState("");
// const [ emailValue, setEmailValue ] = useState("");



/*
function handleInputChange(event){
    const { value } = event.target;
    setNameValue(value);
}

function handleEmailChange(event) {
const { value } = event.target;
    setEmailValue(value);
}
*/

const [formData, setFormData] = useState({
    name : "",
    email : "",
})

function handleOnChange(event){
    const {name, value} = event.target;

    setFormData({
        ...formData,
        [name] : value
    })
}

function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
}
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit} >
            <input
            type="text"
            name='name'
            id='name'
            placeholder='Enter the name'
            value={formData.name}
            onChange={handleOnChange}
        />

         <input
            type="email"
            name='email'
            id='email'
            placeholder='Enter the email'
            value={formData.email}
            onChange={handleOnChange}
        />

        <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default FormComponent
