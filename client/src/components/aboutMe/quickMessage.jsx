import React, { Component } from "react";
import axios from "axios";
import { Button, TextArea } from "semantic-ui-react";

class QuickMessage extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:9000/send",
      data: {
        name: name,
        email: email,
        message: message
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
      <div className="contactUs">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <TextArea
              type="text"
              className="form-control"
              id="message"
            />
          </div>
          <Button type="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export default QuickMessage;
