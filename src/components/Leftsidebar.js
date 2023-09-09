import React, { useState } from 'react';
import {FcHome ,FcReading ,FcTodoList ,FcVideoCall ,FcAbout ,FcIdea ,FcShop ,FcLike ,FcBusinessContact ,FcBriefcase ,FcDisclaimer } from "react-icons/fc";
import {BsFillMicFill } from "react-icons/bs";
import {FaTags,FaDev } from "react-icons/fa";
import {AiFillFacebook , AiFillGithub ,AiOutlineTwitter ,AiFillInstagram} from "react-icons/ai";
import {BiSolidMessageSquareDots } from "react-icons/bi";
import {RiSettingsFill} from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import {GrFormClose} from "react-icons/gr"



const Leftsidebar = (props) => {
  const[hideMore ,sethideMore] = useState(false);
  const tags = [
    "react",
    "graphql",
    "nodejs",
    "sass",
    "javascript",
    "html",
    "css",
    "webdev",
    "opensource",
    "beginners",
    "python",
    "git",
    "vscode",
    "npm",
    "sql",
    "ubuntu",
    "aws",
  ];
  const toggelMenue= ()=>{
    sethideMore(!hideMore);
  }

  return (
    <>
    <div className='liftSidebar'>
      <ul className='first-asside'>
        <li> <i> <FcHome/> </i> Home </li>
        <li> <i> <FcReading/>  </i> Reading List </li>
        <li> <i> <FcTodoList/> </i>  list  </li>
        <li> <i> <BsFillMicFill/> </i> Podcasts </li>
        <li> <i> <FcVideoCall/> </i> Videos </li>
        <li> <i> <FaTags/> </i> Tags</li>
        {!hideMore && <li onClick={toggelMenue}> More ... </li> }
        {hideMore && 
        <div onClick={toggelMenue}>
          <li> <i> <FcAbout/> </i> Code of Content </li>
          <li> <i> <FcIdea/> </i> FAQ </li>
          <li> <i> <FcShop/> </i> DEV Shop  </li>
          <li> <i> <FcLike /></i> Sponsers </li>
          <li> <i> <FaDev /></i>  About  </li>
          <li> <i> <FcBriefcase/>  </i> Privacy Policey</li>
          <li> <i> <FcDisclaimer/> </i> Termes of  Use </li>
          <li> <i> <FcBusinessContact/> Contact  </i></li>
          <li><div  className=''>  <i>  <AiFillFacebook/> </i>  <i> <AiFillGithub/> </i>  <i> <AiOutlineTwitter/> </i>   <i> <AiFillInstagram/> </i>    <i> <BiSolidMessageSquareDots/> </i>    </div></li>
        </div>
        }
      </ul>
      <div className='footer'>
        <div className='header-left'> 
        <h1> My Tags </h1>
        <i> <CgShapeHexagon/>  </i>
       </div>
      <ul>
        {tags.map((tag,id)=>{
          return(
            <li   key={id}> <a href='/'> #{tag} </a></li>
          )
        })}
      </ul>
      </div>
    </div>
    {
     props.showSideBar && 
     <div  className='menu-Side'>
     <div className='header-menu'>
       <h1> DEV Community  </h1>
       <i  className='icon-corse' onClick={()=>props.closeMenue()}> <GrFormClose/> </i>
     </div>
     <ul className='first-asside'>
      <li> <i> <FcHome/> </i> Home </li>
      <li> <i> <FcReading/>  </i> Reading List </li>
      <li> <i> <FcTodoList/> </i>  list  </li>
      <li> <i> <BsFillMicFill/> </i> Podcasts </li>
      <li> <i> <FcVideoCall/> </i> Videos </li>
      <li> <i> <FaTags/> </i> Tags</li>
      {!hideMore && <li onClick={toggelMenue}> More ... </li> }
      {hideMore && 
      <div onClick={toggelMenue}>
        <li> <i> <FcAbout/> </i> Code of Content </li>
        <li> <i> <FcIdea/> </i> FAQ </li>
        <li> <i> <FcShop/> </i> DEV Shop  </li>
        <li> <i> <FcLike /></i> Sponsers </li>
        <li> <i> <FaDev /></i>  About  </li>
        <li> <i> <FcBriefcase/>  </i> Privacy Policey</li>
        <li> <i> <FcDisclaimer/> </i> Termes of  Use </li>
        <li> <i> <FcBusinessContact/> Contact  </i></li>
        <li><div  className=''>  <i>  <AiFillFacebook/> </i>  <i> <AiFillGithub/> </i>  <i> <AiOutlineTwitter/> </i>   <i> <AiFillInstagram/> </i>    <i> <BiSolidMessageSquareDots/> </i>    </div></li>
      </div>
      }
    </ul>
   </div>
    }
    </>
  )
}

export default Leftsidebar
