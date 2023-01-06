import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { lo,sun,dash_logo  } from '../assets';
import { navlinks } from './constant';
const Icon = ({ styles, name, imgUrl, IsActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${IsActive&& IsActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!IsActive? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${IsActive !== name && 'grayscale'}`} />
    )}
  </div>
)
const Dashboard = () => {
    const [IsActive,setActive]=useState("dashboard");
    const navigate=useNavigate();
  return (
    <>
    <div className='  flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link to="/">
      <Icon styles="w-[30px] h-[30px] bg-[#2c2f32]" imgUrl={dash_logo} />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
      <div className="flex flex-col justify-center items-center gap-3">
      {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={IsActive}
              handleClick={() => {
                if(!link.disabled) {
                  setActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}          
        </div>
        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
    </>
  )
}

export default Dashboard;