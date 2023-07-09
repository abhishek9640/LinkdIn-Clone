import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkedinLogo from "../../../assets/linkedin_logo.png";
import user from "../../../assets/user_icon.png";
import './index.scss';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import ProfilePopup from '../../../components/common/ProfilePopup/index';

export default function Topbar() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const goToRoute = (route) => {
    navigate(route);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='topbar-main'>
      <img className='linkedinLogo' src={LinkedinLogo} alt="LinkedinLogo" />
      <div className='home-icon'>
        <AiOutlineSearch size={30} className='icon' />
        <AiOutlineHome size={30} className='icon' onClick={() => goToRoute('/home')} />
        <AiOutlineUser size={30} className='icon' onClick={() => goToRoute('/profile')} />
        <BsBriefcase size={30} className='icon' />
        <AiOutlineMessage size={30} className='icon' />
        <AiOutlineBell size={30} className='icon' />
      </div>
      <img className='user-icon' onClick={togglePopup} src={user} alt="UserIcon" />
      {showPopup && <ProfilePopup />}
    </div>
  );
}
