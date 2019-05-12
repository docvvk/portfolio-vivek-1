import React, { Component } from "react";
import { ContactInfo } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";



class Contact extends Component {
  render() {
    return (
        <ContactInfo
        showBorder
        showIcons
        address="9728 Birchwood St. Navarre, FL 32566"
        email="contact@front10.com"
        phone="+001 3521 4587"
        mobile="+001 3521 4587"
        fax="208-658744"
        website="www.front10.com"
    />
    );
  }
}

export default Contact;

