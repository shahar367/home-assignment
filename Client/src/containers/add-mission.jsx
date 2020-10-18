import React, { useState } from 'react';
import { Box, Button, Container, Input, makeStyles, TextField } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
import { useForm } from 'react-hook-form';
// import Animations from '../css/animation.module.css';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& > div': {
            marginBottom: 10,
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

let AddMission = ({ handleAddMission }) => {

    const [missionTitle, setMissionTitle] = useState('');

    const [missionImage, setMissionImage] = useState([{
        name: ''
    }]);

    const classes = useStyles();

    const { register, handleSubmit } = useForm();

    const handleSubmitMission = () => {
        handleAddMission({
            missionTitle,
            missionImage
        })
        setMissionTitle('');
        setMissionImage([{
            name: ''
        }])
    }

    const handleMissionTitleChange = (value) => {
        setMissionTitle(value)
    }

    const handlelImageChange = (imageFiles) => {
        imageFiles = Array.from(imageFiles)
        setMissionImage(imageFiles)
    }

    return (
        <Container >
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitMission)}>
                <TextField autoComplete={false} name="missionTitle-conteiner" InputLabelProps={{name: "missionTitle-label"}} inputProps={{ name: "missionTitle" }} label='Mission Title' value={missionTitle} placeholder={'Enter mission title'} ref={register({ required: true })} required
                    onChange={(event) => handleMissionTitleChange(event.target.value)}
                    error={missionTitle === ""}
                    helperText={missionTitle === "" ? 'Empty field!' : ' '}>
                </TextField>
                <Box component='div'>
                    <Button variant='contained' component='label' className={classes.uploadImageButton}>
                        Upload Image
                    <Input type="file" inputProps={{ accept: "image/*" }} style={{ display: "none" }} onChange={(event) => handlelImageChange(event.target.files)} />
                    </Button>
                    <Input component='label' disabled value={missionImage[0].name}></Input>
                </Box>
                <Button variant='contained' className={classes.submitButton} type='submit'>
                    Add Mission
            </Button>
            </form>
        </Container>
    )
}

export default AddMission;