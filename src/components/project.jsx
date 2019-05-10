import React, { Component } from "react";

import { Modal, OverlayTrigger } from "react-bootstrap";

import {
  Card,
  Grid,
  Cell,
  CardTitle,
  Button,
  CardMenu,
  CardActions,
  Icon,
  IconButton,
  Checkbox
} from "react-mdl";

class App extends Component {
  render() {
    let { modaltitle, modaltext } = this.props;

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ background: "rgb(0,0,0,0.6)" }}
      >
        <Modal.Header
          style={{ backgroundColor: "#0F2027", color: "white" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {modaltitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Cell col={6}>
              <h3>Project Information</h3>
              <p>{modaltext}</p>
            </Cell>
            <Cell col={6}>
              <h3>Technologies</h3>
              <Checkbox label="HTML5" ripple defaultChecked />
              <Checkbox label="CSS3" ripple defaultChecked />
              <Checkbox label="JavaScript" ripple defaultChecked />
              <Checkbox label="jQuery" ripple defaultChecked />
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
          // position: "absolute",
          // opacity: "0.5",
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          // width: "100%",
          // height: "100%",
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
          // position: "absolute",
          // opacity: "0.5",
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          // width: "100%",
          // height: "100%",
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
          // position: "absolute",
          // opacity: "0.5",
          zIndex: 99,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "2px 10px",
          color: "white",
          borderRadius: 3,
          top: "0",
          left: "0",
          // width: "100%",
          // height: "100%",
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
          width: "15rem",
          height: "15rem",
          display: "inline-block",
          background: `url(${cardBackgroundURL}) center / cover`,
          margin: "auto",
          overflow: "hidden"
        }}
      >
        <CardTitle expand />
        <CardActions
          style={{
            height: "52px",
            padding: "16px",
            background: "rgba(0,0,0,0.2)",
            fontFamily: "Anton",
            textAlign: "center"
          }}
        >
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <OverlayTrigger
              delay={{ show: 250, hide: 200 }}
              placement="top"
              overlay={githubTooltip}
            >
              {/* <Tooltip label="Review my code!" position="top" large> */}
              <i
                style={{
                  fontSize: "2rem",
                  color: "white",
                  position: "absolute",
                  bottom: "0.5rem",
                  left: "0.5rem"
                }}
                className="fa fa-github"
                aria-hidden="true"
              />
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
                textAlign: "center",
                cursor: "pointer",
                position: "absolute",
                bottom: "0",
                left: "3.5rem",
                textTransform: "uppercase",
                fontFamily: "Anton"
              }}
              onClick={() => this.setState({ modalShow: true })}
            >
              {modaltitle}
            </h4>
          </OverlayTrigger>

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
                  color: "white",
                  position: "absolute",
                  bottom: ".5rem",
                  right: ".5rem"
                }}
              />
              {/* <i style={{fontSize:'2em', color:'white', position: "relative", top: "2.2em", right: '5.3em'}} className="fa fa-flash" aria-hidden="true" /> */}
            </OverlayTrigger>
          </a>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>

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
