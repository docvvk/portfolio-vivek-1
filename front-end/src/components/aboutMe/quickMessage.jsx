import React, { Component } from "react";
import axios from "axios";
// import { ContactUs } from "@front10/landing-page-book/dist/components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@front10/landing-page-book/dist/themes/default/index.css";

class QuickMessage extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      //   <ContactUs
      //     showText
      //     showPlaceholder
      //     apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"
      //   />
      <div>
        <h3>CONTACT ME</h3>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" />
            {/* <input type="text" className="form-control" size="5" id="message"></input> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default QuickMessage;
