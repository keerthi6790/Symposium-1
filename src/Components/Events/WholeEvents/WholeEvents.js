import React from "react";
import EventsComponent from "../EventComponents/EventsComponent";
import Technical from "../../../Technical.png";
import NonTechnical from "../../../NonTechnical.png";
import Workshop from "../../../Workshop.png";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function WholeEvents() {
  return (
    <div>
      <NavBar color="white" />
      <center>
        <h1 style={{ marginTop: "50px", color: "#20296C" }}>Events</h1>
      </center>
      <Link to="/Events/Technical">
        <EventsComponent
          img={Technical}
          EventName="Technical Event"
          description="This is the second part of the SMM starter pack series of
              articles. If you made it this far, you must be willing to learn
              about promoting business through social media."
          mentor="Mr.XXX"
          color="#D2EBF7"
        />
      </Link>
      <Link to="/Events/NonTechnical">
        <EventsComponent
          img={NonTechnical}
          EventName="Non Technical Event"
          description="This is the second part of the SMM starter pack series of
              articles. If you made it this far, you must be willing to learn
              about promoting business through social media."
          mentor="Mr.XXX"
          color="linear-gradient(135deg, #F395BA 0%, #FED182 100%);"
        />
      </Link>
      <Link to="/Events/Workshop">
        <EventsComponent
          img={Workshop}
          EventName="Workshop"
          description="This is the second part of the SMM starter pack series of
              articles. If you made it this far, you must be willing to learn
              about promoting business through social media."
          mentor="Mr.XXX"
          color="#BCD1FF"
        />
      </Link>
    </div>
  );
}
