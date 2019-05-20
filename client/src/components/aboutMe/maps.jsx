import React, { Component } from "react";
import { Location } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";

const apiKey = process.env.REACT_APP_API_KEY

class Maps extends Component {
  render() {
    return (
      <Location
        className={"maps"}
        apiKey={apiKey}
        lat={43.7}
        lng={-79.6}
        zoom={9.5}
        markers={[
          {
            icon: "fa fa-map-marker",
            color: "danger",
            lat: 26.5,
            lng: -80.2
          },
          {
            icon: "fa fa-map-marker",
            color: "primary",
            lat: 26.6,
            lng: -80.3
          }
        ]}
      />
    );
  }
}

export default Maps;
