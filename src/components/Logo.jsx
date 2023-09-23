import React from 'react'
import { LogoWrapper } from './Style'
import logo from "../assets/images/4U NEWS Logo.png"

function Logo() {
  return (
    <div>
      <LogoWrapper>
        <img src={logo} alt="logo" style={{width: "100px", height: "100px"}}/>
      </LogoWrapper>
    </div>
  )
}

export default Logo