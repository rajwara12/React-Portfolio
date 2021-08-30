import React from 'react'
 
import {NavLink} from "react-router-dom";  
export default function Card(props) {
    return (
        <>
         <div className="col-md-4 col-10 mx-auto">
                      
                       
 <div class="card" >
  <img src={props.imgsrc} class="card-img-top" width="100%" height="auto" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <NavLink to={props.link} class="btn btn-primary">Get Now</NavLink>
  </div>
</div>
</div>

        </>
    )
}
