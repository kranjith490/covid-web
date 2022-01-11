import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Card = (props) => {
  const { label, y, title } = props.data;
  let color;
  if (label === "confirmed") {
    color = "color-orange";
  } else if (label === "deaths") {
    color = color = "color-red";
  } else {
    color = color = "color-green";
  }
  return (
    <Grid lg={3} md={3} sm={12} xs={12} item className={`card ${color}`}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4"> {y} </Typography>
    </Grid>
  );
};

export default Card;
