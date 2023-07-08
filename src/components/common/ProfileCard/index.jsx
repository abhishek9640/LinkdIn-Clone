import React from 'react';
import "./index.scss";

export default function ProfileCard({ currentUser, onEdit }) {
    return <div className='profile-card'>
        <div>
            <button onClick={onEdit} className='edit-btn'>Edit</button>
        </div>
        <h3 className='userName'>{currentUser.name}</h3>
        <p className='userEmail'>{currentUser.email}</p>
    </div>;
}
