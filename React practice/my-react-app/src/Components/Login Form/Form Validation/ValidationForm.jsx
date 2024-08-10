import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const ValidationForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  const delay = (d) =>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  }

  return (
    <div>
      {isSubmitting && <div>Loading..</div>}
      <div className="form-container d-flex justify-content-center pt-5">
        <div className="top p-5 w-50 bg-danger-subtle">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username" ,{ required:{value:true,message:"This field is required"} ,minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"max length is 8"}})} className='mb-2 w-auto' placeholder='Name' /><br />
            {errors.username && <div className='text-danger'>{errors.username.message}</div>}
            <input type="password" {...register("password")} className='mb-2 w-auto' placeholder='Password' />
            <br />
            <input disabled={isSubmitting} type="submit" value="Submit" className='btn btn-primary' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ValidationForm