import React from 'react';
import logoAda from '../img/logoAda.png';

import "./header.css";

export default function Header() {
  return ( 
    <header className='LogoAda'>
      <img src={logoAda} alt="ada logo" loading="lazy" width="108" height="46"  />
    </header>
  )
}
