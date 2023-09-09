import React from 'react'

const CardComponent = ({tag,articles}) => {
 
  return (
    <div className='cardComponent'>
      <div  className='header-card'>
      <h1> {tag} </h1>
      {
        tag == "Listings"  &&  ( <a href='#' > see All </a>)
      }
      </div>
      <ul className='content-card'>
        {
         articles.map((a)=>{
          return(
          <li key={a.id}>
              <a className='main-title'> {a.mainTitle} </a>
              {a.subText && <small className='text-small' > {a.subText} </small>}
              {a.newarticle &&  <span> New </span>}
          </li>
          )
         })
        }
      </ul>
    </div>
  )
}

export default CardComponent
