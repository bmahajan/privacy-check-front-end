import React from 'react';
import { Grid, Paper, Typography, Toolbar, AppBar } from '@material-ui/core';

class CompAnalysisPane extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        // }
    }

    render() {
        return(
            <>
            <NavBar />
            
            <Paper elevation={3}>
                <Grid container noWrap alignContent='center' alignItems='center' direction='column' justify='center' spacing={1}>
                    <Grid item zeroMinWidth>
                        <Paper> 
                            <Typography noWrap> item 1 </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper> item 2 </Paper>
                    </Grid>
                </Grid>
                <Grid container alignContent='center' alignItems='center' direction='column' justify='center' spacing={2}>
                    <Grid item>
                        <Paper> item 3 </Paper>
                    </Grid>
                    <Grid item>
                        <Paper> item 4 </Paper>
                    </Grid>
                </Grid>
            </Paper>
            </>
           
        );
    }
}

class NavBar extends React.Component {
    render() {
        return(
            <AppBar position='static'>
                <Toolbar>

                </Toolbar>
            </AppBar>
        );
    }
}

export default CompAnalysisPane;