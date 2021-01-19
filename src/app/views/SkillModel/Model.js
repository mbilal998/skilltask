import React from 'react';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Container, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function Model(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
    });

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
        props.handleCallback(event.target.checked);
    };

    return (
        <>
            <div>
                <Button variant="contained" color="primary" type="button" onClick={handleOpen}>Skills</Button>
            </div>
            <Container maxWidth="sm">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="PHP"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                                    label="HTML"
                                />
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                                    label="JS"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                                    label="CSS"
                                />
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                                    label="SCSS"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                                    label="REACTJS"
                                />
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                    label="NODEJS"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedH} onChange={handleChange} name="checkedH" />}
                                    label="POSTGRESS"
                                />
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedI} onChange={handleChange} name="checkedI" />}
                                    label="LARAVEL"
                                />
                            </FormGroup>
                        </div>
                    </Fade>
                </Modal>
            </Container>
        </>
    );
}

export default Model;
