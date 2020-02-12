import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import NavBar from './NavBar';
import CompetitorCard from './CompetitorCard';

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
            
            <Paper elevation={2}>
                <Grid container alignContent='center' alignItems='center' direction='column' justify='center' spacing={1}>
                    <Grid item>
                        <CompetitorCard company="Facebook" score="11%"></CompetitorCard>
                        <CompetitorCard company="Twitter" score="50%"></CompetitorCard>
                        <CompetitorCard company="TikTok" score="40%"></CompetitorCard>
                    </Grid>
                </Grid>
            </Paper>
            </>
           
        );
    }
}

export default CompAnalysisPane;