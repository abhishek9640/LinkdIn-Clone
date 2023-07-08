import React, { useEffect, useState} from 'react';
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../api/firebaseConfig";
import Loader from '../components/common/Loader';
import { getUniqeID } from '../helpers/getUniqueid';

export default function Home({ currentUser }) {
    const [loading, setLoading] = useState(true);
    // const [currentUser, setcurrentUser] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
      onAuthStateChanged(auth, (res) => {
          if(!res?.accessToken){
          navigate("/");
          } else {
            setLoading(false);
          }
      })
  },[]);
  return loading ? <Loader /> : <HomeComponent currentUser={currentUser}/>;
}
