import React from "react";
import Cards from "../Cards";
import NavBar from "../../NavBar/NavBar";
import {TechnicalDetails,NonTechnicalDetails,WorkshopDetails} from '../../../Details'
  export default function WholeCards() {
    return (
    <div>
      <NavBar color="white" />
      <div style={{ margin: "30px" }}>
        {componentRender()}
        
      </div>
    </div>
  );
}
function componentRender(){
    if(window.location.pathname.includes('/Technical')){
        return(<Technical title="Technical Events" data={TechnicalDetails}/>)
    }
    else if(window.location.pathname.includes('/NonTechnical')){
        return(<Technical title="Non Technical Events" data={NonTechnicalDetails}/>)
    }
    else if(window.location.pathname.includes('/Workshop')){
        return(<Technical title="Workshop" data={WorkshopDetails}/>)
    }
}
function Technical(props) {
  return (
    <div>
        <center>
        <h1 style={{marginBottom:"40px",color:"white"}}>{props.title}</h1>
        </center>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {props.data.map((x) => {
          return (
            <div>
              <Cards title={x.name} description={x.description} img={x.img} Link={x.Link}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
