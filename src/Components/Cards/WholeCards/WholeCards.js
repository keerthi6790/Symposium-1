import React from "react";
import Cards from "../Cards";
import TechnicalImg from "../../../Technical.png";
import NonTechnical from "../../../NonTechnical.png";
import Workshop from "../../../Workshop.png";
import NavBar from "../../NavBar/NavBar";
const TechnicalDetails = [
    {
      name: "Dinesh",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${TechnicalImg}`,
      Link:"Dinesh"
    },
    {
      name: "web development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${TechnicalImg}`,
      Link:"Events/Technical/Webdevelopment"
    },
    {
      name: "App development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${NonTechnical}`,
      Link:"/Technical/Appdevelopment"
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
      Link:"/Technical/TreasureHunt"
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
  ];
  const NonTechnicalDetails = [
    {
      name: "Paper presentation",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${TechnicalImg}`,
    },
    {
      name: "App development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${NonTechnical}`,
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
  ];
  const WorkshopDetails = [
    {
      name: "Paper presentation",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${TechnicalImg}`,
    },
    {
      name: "App development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${NonTechnical}`,
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
    {
      name: "Treasure Hunt",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
      img: `${Workshop}`,
    },
  ];
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
