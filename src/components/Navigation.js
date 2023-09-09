import React, { useState } from 'react';
import { FaDev } from 'react-icons/fa';
import {BiSolidMessageRoundedCheck} from 'react-icons/bi'; 
import {HiBell} from 'react-icons/hi';
import  headerImage from "../image/499-200x200.jpg" ;
import {BiMenu} from 'react-icons/bi';
import {BsSearch} from 'react-icons/bs';


const Navigation = (props) => {
const[toggel,setToggel]=useState(false);

const toggelMenu = ()=>{
   setToggel(!toggel)
}
  return (
    <div  className='header'>
      <div   className='Right-header'>
        <div   className='toggel-icon'>
            <BiMenu className='icon-right' onClick={()=>props.openMenue()}/>
        </div>
             <FaDev className='logo'/>
        <div   className='form'>
          <form>
            <input  type='text'  placeholder='search ...'   aria-label='search'/>
          </form>
        </div>
           
      </div>
      <div   className='Left-header'>
       <button> Write a post </button>
       
        <ul className='header-icon'>
          <li className='icon-search'> <BsSearch className='icon'/> </li>
          <li>  <BiSolidMessageRoundedCheck className='icon'/> </li>
          <li>  <HiBell className='icon'/> </li>
          
        </ul>

        <div   className='header-image' onClick={toggelMenu}>
          <img  src={headerImage} alt="headerImage" />
        </div>
        {toggel && 
          <div   className='menue'>
          <ul>
            <li>
               <a  href="/" > CodeBucks <small> @codebucks</small> </a>
            </li>
            <li>
               <a  href="/" > Dashboard </a>
            </li>
            <li>
               <a  href="/" > Writing aPost  </a>
            </li>
            <li>
               <a  href="/" > Reading list   </a>
            </li>
            <li>
               <a  href="/" > Setting  </a>
            </li>
            <li>
               <a  href="/" > SignOut  </a>
            </li>
          </ul>

       </div>
        }
      
       </div>
       
    </div>
  )
}

export default Navigation
