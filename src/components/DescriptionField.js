import React from 'react';
import './DescriptionField.css';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class DescriptionField extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.icon = props.icon;
    this.description = props.description;
  }

  render() {
    return (
      <div className='DescriptionField'>

      </div>
    );
  }

}

export default DescriptionField;