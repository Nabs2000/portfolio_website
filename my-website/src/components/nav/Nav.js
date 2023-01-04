import React from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {RiSuitcase2Line, RiServiceLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'
export function Nav() {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><RiSuitcase2Line /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiPhoneCall /></a>
    </nav>
  )
}
