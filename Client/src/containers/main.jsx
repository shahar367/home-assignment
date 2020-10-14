import React, { useState } from 'react';
import { Box, Button, Container, Input, makeStyles, Paper, TextField } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
import MissionCard from '../components/mission-card';

// import Animations from '../css/animation.module.css';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        paddingRight: 0
    },
    missionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2.5em auto',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    },
    showAllContainer: {
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});

let Main = () => {

    const classes = useStyles();

    const testImage = process.env.PUBLIC_URL + 'images/test1.jpg';

    return (
        <Container className={classes.container}>
            <Container className={classes.missionContainer}>
                <MissionCard key={`image1`} title="test" image={testImage} />
                <MissionCard key={`image2`} title="test" image={testImage} />
                <MissionCard key={`image3`} title="test" image={testImage} />
                <MissionCard key={`image4`} title="test" image={testImage} />
                <MissionCard key={`image5`} title="test" image={testImage} />
            </Container>
            <Paper elevation={0} className={classes.showAllContainer}>
                <Button variant='contained' color='primary'>Show All Missions</Button>
            </Paper>
        </Container>
    )
}

export default Main;