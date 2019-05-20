import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class K8Projects extends Component {
  render() {
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      appendDots: dots => (
        <ul style={{ margin: "-2rem", borderRadius: "20px", padding: "10px" }}>
          {" "}
          {dots}{" "}
        </ul>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            border: "1px black solid"
          }}
        >
          P{i + 1}
        </div>
      )
    };

    return (
      // <div className="projects-grid">
      <div>
        <Slider {...settings}>
          <Project
            modaltitle={"GOOGLE CLOUD PLATFORM"}
            modalheader={'Google Cloud Platform Essentials'}
            modaltext={
              "HANDS-ON practice with the Google Cloud Platform’s fundamental tools and services. From writing Cloud Shell commands and deploying your first virtual machine, to running applications on Kubernetes Engine or with load balancing, GCP Essentials is a prime introduction to the platform’s basic features."
            }
            cardBackgroundURL={
              "https://media.wired.com/photos/59272d29f3e2356fd800bad8/master/w_762,c_limit/logo_lockup_cloud_platform_icon_vertical-2-s.jpg"
            }
            githubURL={"https://google.qwiklabs.com/quests/23"}
            demoURL={"https://google.qwiklabs.com/public_profiles/a55f1b0d-f645-4aa6-8b04-f42100fc76c3"}
            // teckList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"KUBERNETES IN GOOGLE CLOUD"}
            modalheader={"Qwiklabs Kubernetes in The Google CLoud"}
            modaltext={
              "HANDS-ON practice configuring Docker images and containers, and deploying fully-fledged Kubernetes Engine applications. KUBERNETES is the most popular container orchestration system and the Google Kubernetes Engine was designed specifically to support managed Kubernetes deployments in the Google Cloud."
            }
            cardBackgroundURL={
              "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/kubernetes_tutorials.png?1537459683"
            }
            githubURL={"https://google.qwiklabs.com/quests/29"}
            demoURL={"https://google.qwiklabs.com/public_profiles/a55f1b0d-f645-4aa6-8b04-f42100fc76c3"}
          />

          <Project
            modaltitle={"PORTFOLIO INSTANCE"}
            modalheader={"GIT - CD/CI - IMAGE REGISTRY - RELEASE - DEPLOY"}
            modaltext={
              "PORTFOLIO website build on REACT-JS containerized with DOCKER deployed in GOOGLE CLOUD through KUBERNETES CLUSTERS"
            }
            cardBackgroundURL={
              "https://d1w9csuen3k837.cloudfront.net/Pictures/1280x720/7/1/2/135712_Index_CW120218_Machine-learning-assesses-cross-coupling-reactions.jpg"
            }
            // githubURL={"https://github.com/docvvk/FriendFinder"}
            // demoURL={"https://desolate-stream-21303.herokuapp.com/"}
          />
        </Slider>
      </div>
    );
  }
}

export default K8Projects;
