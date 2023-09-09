import React, { useEffect, useState } from 'react';
import ArticalCompnent from "./ArticalCompnent";
import ArticalSkelton from "./ArticalSkelton";

const Content = () => {
const[articales,setAricales]=useState([]);

const fetchAgin = ()=>{
if(articales !== null){
  fetch("https://dev.to/api/articles")
  .then(data=>data.json())
  .then(result=> setAricales([...articales,...result]));
}
}

const handelScroll=()=>{
 const html = document.documentElement;
 const body = document.body;
 const windowHeight = "innerHeight" in window ? window.innerHeight :html.offsetHeight;
 const DocHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
 )
const windowBottom = windowHeight + window.pageYOffset ;
if(windowBottom >= DocHeight){
console.log("we reached the bottom ");
// fetchAgin();
}
}


useEffect(()=>{
window.addEventListener("scroll" ,handelScroll);
return ()=>window.removeEventListener("scroll",handelScroll);
},[articales]);

  useEffect(() => {
  setTimeout(async () => {
  const res = await fetch("https://dev.to/api/articles");
  const data = await res.json();
   setAricales(data);
  console.log(articales ,"articales")
  console.log(data ,"data");
    }, 2000);
  }, []);

  return (
    <div className='content-page'>
       <div  className='header-page'>
        <div className='first-line'>
            <a   href="#">  Posts </a>
        </div>
        <div className='seconed-line'>
           <a href='#'>Feed</a>
           <a href='#'>Week</a>
           <a href='#'>Month</a>
           <a href='#'>Infinty</a>
           <a href='#'>Latest</a>
        </div>
       
        <div className='seconed-line-tablet'>
         <select>
          <option value="0"> Feed </option>
          <option value="1"> Week </option>
          <option value="2"> Month </option>
          <option value="3"> Infinty </option>
          <option value="4"> Latest </option>
         </select>
       </div>
       </div> 
       <div  className='articales'>
        {
          articales && (articales.map((artical)=> { 
            return <ArticalCompnent  key={artical.id}  articale={artical}/>
          }))
        }
         
        {articales.length == 0  && [1, 2, 3, 4, 5].map((a) => <ArticalSkelton key={a} />)}

      </div>
    </div>
  )
}

export default Content
