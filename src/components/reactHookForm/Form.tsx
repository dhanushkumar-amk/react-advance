import { useForm, SubmitHandler } from "react-hook-form"

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FormData>()

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
}

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name", {required : "Name is required"})} />
                {errors.name && <p style={{color: "red"}} >{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  {...register("email", {required : "email is required", pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                }})} />
                {errors.email && <p style={{color: "red"}} >{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password", {required : "Password is required", minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long"
                }})} />
                {errors.password && <p style={{color: "red"}} >{errors.password.message}</p>}
            </div>

                <button type="submit">submit</button>


        </form>
    </div>
  )
}

export default Form
