import React, { useState } from 'react'

const Form = () => {

    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
    }

    return (
        <div className='mt-5'>
            <div className="container p-5 h-auto text-start w-25 bg-danger-subtle">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' id="email" onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" id="password" onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form