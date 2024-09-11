import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {

    const { loginWithRedirect } = useAuth0();

  return (
    <div>
        <button onClick={()=>loginWithRedirect()} className='btn btn-warning text-black mt-4'>Sign in</button>
    </div>
  )
}

export default Auth