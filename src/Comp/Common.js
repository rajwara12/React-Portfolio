import React from 'react'
import web from "../images/web1.jpg"
import {NavLink} from "react-router-dom"; 
export default function Common(props) {
    return (
        <div>
            <section  >
            <div className="container-fluid header" >
              <div className="row">
                  <div className="col-lg-10 mx-auto">
                  <div className="row">
                      <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1>{props.title}</h1>
                        <h1>Grow your business with <strong className="brand-name"> ProDevelopers</strong></h1>
                        <p className="my-3">
                            We are team of talented developers making websites
                        </p>
                        <div className="mt-3">
                         <NavLink to={props.src} className="btn  btn-get-started rounded">{props.link}</NavLink>
                        </div>
                       
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2 ">
                            <img src={web} width="100%" height="auto" className="img-fluid animated"  alt= 'imagess' />
                        </div>
                      </div>
                  </div>
                  </div>
                  </div>
                  </section>
        </div>
    )
}
