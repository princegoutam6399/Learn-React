import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Enquiry from './Enquiry';
// import { useState } from 'react';

function App() {
  // let [uname,setUname]=useState('')
  // let [pass,setPass] = useState('')

  // let handleSubmit=(event)=>{
  //   event.preventDefault()
  //   console.log(uname,pass);
  // }

  // let getUname=(event)=>{
  //   setUname(event.target.value)
  // }
  return (
    <div className="App">
      <Enquiry/>
      {/* <div className='container pt-5'>
        <div className='row'>
          <div className='col-lg-3'>
            <form onSubmit={handleSubmit}>
              <div className='text-start mb-3'>
                <label>User Name:</label>
                <input type='text' className='form-control' onChange={(event)=>setUname(event.target.value)} value={uname}></input>
              </div>
              <div className='text-start mb-3'>
                <label>Password:</label>
                <input type='text' className='form-control' onChange={(event)=>setPass(event.target.value)} value={pass}></input>
              </div>
              <div className='text-start mb-3'>
                  <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
