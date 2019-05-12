import React, { Component } from "react";
import { Location } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";

class Maps extends Component {
  render() {
    return (
      <Location
        apiKey="AIzaSyBdhEZBl6PFx3L7POHBQRd2leJZkUNfAIc"
        lat={26.5}
        lng={-80.2}
        zoom={10}
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
