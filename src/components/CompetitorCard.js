import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
    card: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: 5,
        padding: 1,
        variant: 'elevation',
    },
});

class CompetitorCard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <Grid container alignItems='center'>
                    <Grid item>
                        <CardContent >
                            <Typography variant='h6' align='center'>
                                <p>{this.props.company}: {this.props.score}</p>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default withStyles(useStyles)(CompetitorCard);
