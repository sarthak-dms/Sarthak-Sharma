import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineContacts} from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import './nav.css'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav