import React, { useState } from 'react';
import Header from './Layout/Header';
import ProfileSideBar from "../components/Profile/ProfileSideBar.jsx"
import ProfileContent from "../components/Profile/ProfileContent.jsx"
import styles from '../styles/style';

const Profile = () => {
    const [active,setActive]=useState(1)
    return (
        <div>
           <Header/>
           <div className={`${styles.section} flex bg-[#f5f5f5] py-10`} >
            <div className= " 800px:w-[335px] w-[50px] flex items-center">
                <ProfileSideBar active={active} setActive={setActive}/>
            </div>
            <div className="w-full">
                   <ProfileContent active={active}/>
            </div>
         
           </div>
        </div>
    );
};

export default Profile;