import React, { useState } from 'react';
import { Box, Button, Container, Input, makeStyles, TextField } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
// import Animations from '../css/animation.module.css';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& > div': {
            margin: 10,
            minWidth: 'calc(50% + 10px)'
        }
    },
    uploadImageButton: {
        backgroundColor: lightBlue[600],
        color: '#fff',
        textTransform: 'inherit',
        marginRight: 4,
        '&:hover': {
            backgroundColor: lightBlue[800],
        }
    },
    submitButton: {
        backgroundColor: green[500],
        color: '#fff',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: green[700],
        }
    }
});

let AddMission = () => {

    const [missionTitle, setMissionTitle] = useState('');

    const [missionImage, setMissionImage] = useState({
        name: ''
    });

    const classes = useStyles();

    const handleSubmitMission = () => {

    }

    const handleMissionTitleChange = (value) => {

    }

    const handlelImageChange = (imageFile) => {
        setMissionImage(imageFile)
    }

    return (
        <Container className={classes.container}>
            <TextField label='Mission Title' value={missionTitle} placeholder={'Enter mission title'} required
                onChange={(event) => handleMissionTitleChange(event.target.value)}>
            </TextField>
            <Box component='div'>
                <Button variant='contained' component='label' className={classes.uploadImageButton}>
                    Upload Image
                    <Input type="file" style={{ display: "none" }} onChange={(event) => handlelImageChange(event.target.files[0])} />
                </Button>
                <Input component='label' disabled value={missionImage.name}></Input>
            </Box>
            <Button variant='contained' className={classes.submitButton} onClick={handleSubmitMission}>
                Add Mission
            </Button>
        </Container>
    )
}

export default AddMission;