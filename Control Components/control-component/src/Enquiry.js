import React, { useState } from 'react'

export default function Enquiry() {
    
    let [formdata, setFormData] = useState(
        {
            uname: '',
            uemail: '',
            uphone: '',
            umessage: '',
            index: ''
        }
    )

    let [userData, setUserData] = useState([])

    let getValue = (event) => {
        let oldData = { ...formdata }
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData)
    }

    let handleSubmit = (event) => {
        let currUserFormData = {
            uname: formdata.uname,
            uemail: formdata.uemail,
            uphone: formdata.uphone,
            umessage: formdata.umessage
        }

        
        let oldUserData = [...userData, currUserFormData];
        // console.log(oldUserData);
        setUserData(oldUserData);

        event.preventDefault();
        
    }
    
    return (
        <div>
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col-lg-3'>
                        {userData.length}
                        <form onSubmit={handleSubmit}>
                            <div className='m-3 text-start'>
                                <label>Name</label>
                                <input type='text' onChange={getValue} className='form-control' value={formdata.uname} name='uname'></input>
                            </div>
                            <div className='m-3 text-start'>
                                <label>Email</label>
                                <input type='text' onChange={getValue} className='form-control' value={formdata.uemail} name='uemail'></input>
                            </div>
                            <div className='m-3 text-start'>
                                <label>Phone</label>
                                <input type='text' onChange={getValue} className='form-control' value={formdata.uphone} name='uphone'></input>
                            </div>
                            <div className='m-3 text-start'>
                                <label>Message</label>
                                <input type='text' onChange={getValue} className='form-control' value={formdata.umessage} name='umessage'></input>
                            </div>
                            <div className='text-start ms-3'>
                                <button className='btn btn-primary'>
                                {
                                    formdata.index !== "" ? 'Update' : 'Save'
                                }
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
