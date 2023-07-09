import React, { useState } from 'react';
import { editProfile } from '../../../api/FirestoreAPIs';
import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
    const[editInputs, setEditInputs] = useState({});
    const getinput = (event) => {
        let { name, value} = event.target;
        let input = { [name]: value };
        setEditInputs({...editInputs, ...input });
    };
    const updateProfileData = async () => {
       await editProfile(currentUser?.userID, editInputs) ;
       await onEdit();
    }
    return (
        <div className='profile-card'>
            <div>
                <button onClick={onEdit} className='edit-btn'>Go Back</button>
            </div>
            <div className='profile-edit-inputs'>
                <input onChange={getinput} className='common-input' placeholder='Name' name='name' />

                <input onChange={getinput} className='common-input' placeholder='Headline' name='headline' />

                <input onChange={getinput} className='common-input' placeholder='Location' name='location' />

                <input onChange={getinput} className='common-input' placeholder='Company' name='company'/>

                <input onChange={getinput} className='common-input' placeholder='College' name='college' />
            </div>
            <div className='save-container'>
            <button className='save-btn'onClick={ updateProfileData }>Save</button>
            </div>
        </div>
    )
}
