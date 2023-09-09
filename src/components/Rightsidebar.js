import React from 'react'
import CardComponent from "./CardComponent";
import {listings} from "../../src/data";
import {news} from "../../src/data";
import {help} from "../../src/data";
const Rightsidebar = () => {
  return (
    <div className='right-sidebar-page'>
      <div className='header-sidebar'>
        <div  className='image-sidebar'>
        <img   src="https://picsum.photos/200/300" alt ="header-sidebar"/>
        </div>
        <h1>"Hack the Planet" with New Relic & DEV</h1>
        <p> Use New Relic to build a climate-change observability app for the chance to win up to $5,000!  <small  className='link-tohickloim'> join the hackathon </small></p>
      </div> 
      <div className='card'>
        <CardComponent  tag="Listings" articles={listings}/> 
        <CardComponent  tag = "#News"  articles={news}/>
        <CardComponent  tag = "#help"  articles={help}/>
      </div>
    </div>
  )
}

export default Rightsidebar
