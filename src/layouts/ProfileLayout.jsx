import React, {useMemo, useState } from 'react';
import Profile from '../Pages/Profile';
import { getCurrentUser } from '../api/FirestoreAPIs';
import Topbar from '../components/common/Topbar';

export default function ProfileLayout() {
  const [currentUser, setcurrentUser] = useState({})
  useMemo (() => {
    getCurrentUser(setcurrentUser);
  }, [])
  return (
    <div>
        <Topbar />
        <Profile currentUser={currentUser}/>
    </div>
  );
}
