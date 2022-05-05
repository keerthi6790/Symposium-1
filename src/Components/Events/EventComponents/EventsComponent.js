import React from "react";
import "./EventsComponent.css";
export default function EventsComponent(props) {
  return (
      <div className="EventsList">
        <div className="EventImg" style={{ background: `${props.color}` }}>
          <img src={props.img} className="Technical" />
        </div>
        <div className="EventDetails">
          <div className="EventName">
            <div>Sympoisum-2k22</div>
            <div>
              <h2 className="EventCategory">{props.EventName}</h2>
            </div>
            <div className="EventInfo">
              <p>{props.description}</p>
            </div>
            <div className="ContactDetails">
              <p>{props.mentor}</p>
              <p>Read more...</p>
            </div>
          </div>
        </div>
      </div>
  );
}
