import React from 'react'
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

    const { register, handleSubmit, formState : {errors}, reset } = useForm();

    function onSubmitForm(formData){
        console.log(formData);
        reset();    
    }

  return (
    <div>
        <h1>ReactHookForm</h1>
        <form onSubmit={handleSubmit(onSubmitForm)} >
            <div>
                <label>Name</label>
                <input {...register("name", { required : true})} type="text" name='name'/>
            </div>
              <div>
                <label>Email</label>
                <input {...register("email", {required : true})} type="email" name='email'/>
                {
                    errors.email && errors.email.type === 'required' ? <p style={{color : "red"}} >Email is required</p> : null
                }
            </div>
              <div>
                <label>Password</label>
                <input {...register("password",{ required : true, min : 8})} type="password" name='password'/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReactHookForm
