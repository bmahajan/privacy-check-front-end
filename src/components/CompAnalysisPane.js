import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import NavBar from './NavBar';

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
                <Grid container alignContent='center' alignItems='center' direction='column' justify='center' spacing={1}>
                    <Grid item>
                        <Paper> 
                            <Typography noWrap> item 1 </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography noWrap> item 2 </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={2}>
                <Grid container alignContent='center' alignItems='center' direction='column' justify='center' spacing={1}>
                    <Grid item>
                        <Paper>
                            <Typography noWrap> item 3 </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography noWrap> item 4 </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            </>
           
        );
    }
}

export default CompAnalysisPane;