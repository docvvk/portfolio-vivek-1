import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div
        className="contact-body kenburns-top"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80') 50% no-repeat",
          overflow: "auto"
        }}
      >
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Vivek Malhan</h2>
            <img
              // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png "
              src="https://ischoolconnect.com/blog/wp-content/uploads/2018/12/programmers-concept-with-flat-design_23-2147841208-Copy-1.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "70%", margin: "auto", paddingTop: "2em" }}>
              I am passionate about approaching programming challenges from
              different angles, and collaborating with others to create
              meaningful web applications. My coding journey started about an
              year ago and the love for coding has been growing since then.{" "}
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    647-327-4455
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope " aria-hidden="true" />
                    vivek.malhan@yahoo.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    doc.vvk
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
