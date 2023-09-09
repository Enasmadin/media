import React from 'react';
import { BiHeart } from "react-icons/bi";
import {FaRegComment} from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime  from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

const ArticalCompnent = ({articale}) => {
  return (
    <div className='articalComponent'>
       <div  className='artical-image'>
         {articale.cover_image &&
         <a  href={articale.url} style={{backgroundImage :`url(${articale.cover_image})`}} >  &nbsp;  </a>
         }
       </div>
       <div   className='artical-page'>
       <div  className='artical-detalies'>
       <div  className='contain-image-date'>
        <div  className='u-image'>
         <img  src={articale.user.profile_image_90} alt=""/>
        </div>
        <div  className='u-detalies'>
          <a   href={`http://dev.to/${articale.user.username}`}> 
          <span> {articale.user.username} </span>
         </a>
         <a href={articale.url}>
         <span> { new Date(articale.published_at).toLocaleDateString(undefined ,{
           day:"numeric",
           month:"long"
         })}
          &nbsp; ({dayjs(articale.published_timestamp).fromNow()})
          </span>
         </a>
        </div>
      </div>
      <div className='title-artical'>
      <a href={articale.url}>
        <h3> {articale.title} </h3>
      </a>
      </div>
      <div  className='tags'>
       {articale.tag_list.map((tag,id)=>{
       return(<a key={id}  href={`http://dev.to/${articale.tags}`}  > <span> #{tag} </span></a>)
        })}
      </div>
      </div>
      <div  className='footer-artical'>
       <div className='addtional-detalie'>
       {articale.public_reactions_count + articale.positive_reactions_count > 0 && <a href={articale.url}> 
         <span className='action-button'>
            <i>
            <BiHeart />
           </i>
             &nbsp;
             {articale.public_reactions_count + articale.positive_reactions_count}
             <span className='hideen-mobile'>  reactions  </span>
           </span>
        </a>}
        <a href={articale.url}>
          <span className='action-button'>
            <i>
            <FaRegComment/>
           </i>
            {
             articale.comments_count > 0 ? (
              <span> 
              {articale.comments_count}
              <span className='hideen-mobile'> Comments </span>
              </span>) 
            :null}
              {
                articale.comments_count == 0 ? (
                 <>
                  <span  className='hideen-mobile'> Add comment  </span> 
                 {/* <span  className='hideen-mobile'> Add comment  </span> */}
                 </> 
                )
              :null}
            </span>
          </a>
        </div>
        <div className='save'>
        <small> 1  min read </small>
        <button> Save </button>
        </div>
       </div>
     </div>
    </div>
  )
}

export default ArticalCompnent
 