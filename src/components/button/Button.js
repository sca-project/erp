import React from 'react'
import './button.css'
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';

const Button = ({listCard}) => {
  return (
    

    <div className="">
       
      <div className="cardLink ">
        {listCard.map((item, index) => (
          <NavLink
            className=" card cardLink-item "
            key={index}
            to={item.route}
            
          >
            <Icon path={item.icon} size={1} color={"var(--vert)"} />

            <div>{item.link}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
  
}

export default Button