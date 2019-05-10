import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        const { startYear, endYear, jobName, jobDescription } = this.props;
        return (
      <Grid>
        <Cell col={4}>
          <h4>
            {startYear} - {endYear}
          </h4>
        </Cell>

        <Cell col={8}>
          <h4>{jobName}</h4>
          <h5>{jobDescription}</h5>
        </Cell>
      </Grid>
    );
  }
} 

export default Experience;
