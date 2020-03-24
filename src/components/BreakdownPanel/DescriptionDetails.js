import React from 'react';
import Typography from "@material-ui/core/Typography";

export default function DescriptionDetails(props) {

  return (
    <div>
      <Typography>{props.details}</Typography>
    </div>
  );
}