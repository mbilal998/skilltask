import React from 'react';
import { TextField, Container, makeStyles, Button } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { info } from '../../assets/Info';
import { useHistory } from 'react-router-dom';
import Model from '../SkillModel/Model';

import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Edit() {

    const location = useLocation();
    const classes = useStyles();
    let user = location.state.data;
    let history = useHistory();

    const [myname, setName] = useState(user.Name);
    const [myfathername, setFatherName] = useState(user.FatherName);
    const [mydesignation, setDesignation] = useState(user.Designation);
    const [mycompany, setCompany] = useState(user.Company);
    const [myaddress, setAddress] = useState(user.Address);

    const nameRef = useRef();
    const fathernameRef = useRef();
    const designationRef = useRef();
    const companyRef = useRef();
    const addressRef = useRef();

    const [count, setCount] = useState(0);

    const updatedata = () => {

        info[0].Name = nameRef.current.value;
        info[0].FatherName = fathernameRef.current.value;
        info[0].Designation = designationRef.current.value;
        info[0].Company = companyRef.current.value;
        info[0].Address = addressRef.current.value;
        history.push('/')
    }

    const handleCallback = (e) => {
        if (e) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    function findExpertiseLevel() {
        if (count <= 4) {
            return (
                <Badge color="secondary" badgeContent=" " variant="dot">
                    Bignner
                </Badge>
            );
        }
        if (count <= 7) {
            return (
                <Badge color="secondary" badgeContent=" " variant="dot">
                    mediocre
                </Badge>
            );
        }
        if (count <= 9) {
            return (
                <Badge color="secondary" badgeContent=" " variant="dot">
                    expert
                </Badge>
            );
        }
    }

    // TODO: React.Fragment

    return (
        <>
            <Container maxWidth="sm">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={nameRef} id="my-name" label="Name" value={myname} onChange={(e) => setName(e.target.value)} />
                    <TextField inputRef={fathernameRef} id="my-fathername" label="FatherName" value={myfathername} onChange={(e) => setFatherName(e.target.value)} />
                    <TextField inputRef={designationRef} id="my-designation" label="Designation" value={mydesignation} onChange={(e) => setDesignation(e.target.value)} />
                    <TextField inputRef={companyRef} id="my-company" label="Company" value={mycompany} onChange={(e) => setCompany(e.target.value)} />
                    <TextField inputRef={addressRef} id="my-address" label="Address" value={myaddress} onChange={(e) => setAddress(e.target.value)} />
                </form>

                <Button variant="contained" color="primary" onClick={() => updatedata()}>Update</Button>
                <hr></hr>
                <Model handleCallback={handleCallback} />

                <p>Your level is (count: {count}): {findExpertiseLevel()}</p>
            </Container>
        </>
    );
}
