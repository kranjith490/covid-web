import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Card = (props) => {
  const { label, y } = props.data;
  console.log(label, y);
  let particular;
  if (label === "confirmed") {
    particular = "Active Cases";
  } else if (label === "recovered") {
    particular = "Rescused";
  } else {
    particular = "Death";
  }
  return (
    <Grid lg={3} md={3} sm={12} xs={12} item className="card">
      <Typography variant="h4">{particular}</Typography>
      <Typography variant="h6"> Number of active cases is {y} </Typography>
    </Grid>
  );
};

export default Card;
