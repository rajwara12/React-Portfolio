import React from 'react'

export default function Contact() {
    return (
         <>
    
        <div className="container  ">
        <h1 className="mt-3">Contact Us</h1>
            <div className="row  ">
                <div className=" col-10 col-lg-6  ">
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name here...."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">E-Mail</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email here...."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your subject here...."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your's Query</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your detail query here...."/>
</div>
<input type="text" className="btn  btn-info" value="Submit" />
                </div>
            </div>
        </div>
        
         </>
    )
}
