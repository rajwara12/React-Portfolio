import Sdata from "./Sdata" 
import Card from "./Card"
export default function Services() {
    return (
       <>
      <div className="my-5">
     <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid header" >
              <div className="row">
                  <div className="col-lg-10 mx-auto">
                      <div className="row gy-4">
                      {
                       Sdata.map((val, ind)=>{
                           return <Card key={ind} title={val.title} imgsrc={val.imgsrc} desc={val.desc} link={val.link}/>
                       })
                      }

                      </div>
                      </div> 
                      </div> 
                      </div> 
       </> 
    )
}
