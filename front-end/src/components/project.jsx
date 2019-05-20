import React, { Component } from "react";

import { Modal, OverlayTrigger } from "react-bootstrap";

import {
  Card,
  Grid,
  Cell,
  CardTitle,
  Button,
  // CardMenu,
  CardActions,
  Icon,
  // IconButton,
} from "react-mdl";

class App extends Component {
  render() {
    let { modaltitle, modaltext, modalheader } = this.props;

    return (
      <Modal
        {...this.props}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        style={{ background: "rgb(0,0,0,0.6)" }}
      >
        <Modal.Header
          style={{ backgroundColor: "#002a30", color: "white" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>{modaltitle}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body as="list">
          <Grid>
            <Cell col={12}>
              <h4>PROJECT INFORMATION</h4>
              <p>{modaltext}</p>
              <hr />
              <h5>{modalheader}</h5>
              </Cell>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Project extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    const {
      modaltitle,
      modaltext,
      modalheader,
      cardBackgroundURL,
      githubURL,
      demoURL
    } = this.props;

    const githubTooltip = ({
      placement,
      scheduleUpdate,
      arrowProps,
      outOfBoundaries,
      show: _show,
      ...props
    }) => (
      <div
        {...props}
        classID="overlay"
        style={{
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          ...props.style
        }}
      >
        Review my code!
      </div>
    );

    const modalTooltip = ({
      placement,
      scheduleUpdate,
      arrowProps,
      outOfBoundaries,
      show: _show,
      ...props
    }) => (
      <div
        {...props}
        classID="overlay"
        style={{
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          ...props.style
        }}
      >
        Click for more info!
      </div>
    );

    const demoTooltip = ({
      placement,
      scheduleUpdate,
      arrowProps,
      outOfBoundaries,
      show: _show,
      ...props
    }) => (
      <div
        {...props}
        classID="overlay"
        style={{
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          ...props.style
        }}
      >
        Live Demo!
      </div>
    );

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Card
        classID="box"
        shadow={5}
        style={{
          position: "relative",
          width: "35rem",
          height: "28rem",
          display: "inline-block",
          background: `url(${cardBackgroundURL}) center / cover`,
          margin: "2rem 0 2rem 0",
          overflow: "hidden"
        }}
      >
        <CardTitle expand />
        <CardActions>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <OverlayTrigger
              delay={{ show: 250, hide: 200 }}
              placement="top"
              overlay={githubTooltip}
            >
              <i
                style={{
                  fontSize: "2rem",
                  color: "#f8ffb9",
                  position: "absolute",
                  bottom: "0.5rem",
                  left: "0.5rem"
                }}
                className="fa fa-github"
                aria-hidden="true"
              />
            </OverlayTrigger>
          </a>

                <a href={demoURL} target="_blank" rel="noopener noreferrer">
                  <OverlayTrigger
                    delay={{ show: 250, hide: 200 }}
                    placement="top"
                    overlay={demoTooltip}
                  >
                    <Icon
                      name="info"
                      style={{
                        fontSize: "2rem",
                        color: "#ff0",
                        position: "absolute",
                        bottom: ".5rem",
                        left: "2.5rem"
                      }}
                    />
                    {/* <i style={{fontSize:'2em', color:'white', position: "relative", top: "2.2em", right: '5.3em'}} className="fa fa-flash" aria-hidden="true" /> */}
                  </OverlayTrigger>
                </a>
          <OverlayTrigger
            delay={{ show: 250, hide: 200 }}
            placement="top"
            overlay={modalTooltip}
          >
            <h4
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
                position: "absolute",
                bottom: "0.6rem",
                left: "5rem",
                textTransform: "uppercase",
                fontFamily: "monospace",
                fontWeight: "bold"
              }}
              onClick={() => this.setState({ modalShow: true })}
            >
              {modaltitle}
            </h4>
          </OverlayTrigger>

        </CardActions>

        {/* <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu> */}

        <App
          show={this.state.modalShow}
          onHide={modalClose}
          modaltitle={modaltitle}
          modaltext={modaltext}
          modalheader={modalheader}
        />
      </Card>
    );
  }
}

export default Project;
