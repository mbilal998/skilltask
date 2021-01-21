import React from 'react';
import { TextField, Container, makeStyles, Button, Typography } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Model from '../SkillModel/Model';

import Badge from '@material-ui/core/Badge';
import styled from 'styled-components';

const P = styled.p`
    color:green;
    margin-top:20
`;

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
    let index = location.state.index;
    let history = useHistory();

    const [myname, setName] = useState({ name: user.Name, nameError: '' });
    const [myfathername, setFatherName] = useState({ fathername: user.FatherName, fathernameError: '' });
    const [mydesignation, setDesignation] = useState({ designation: user.Designation, designationError: '' });
    const [mycompany, setCompany] = useState({ company: user.Company, companyError: '' });
    const [myaddress, setAddress] = useState({ address: user.Address, addressError: '' });

    const nameRef = useRef();
    const fathernameRef = useRef();
    const designationRef = useRef();
    const companyRef = useRef();
    const addressRef = useRef();

    const [count, setCount] = useState(0);

    const validateError = () => {
        //console.log(myname.name.length);

        let isError = false;
        if ((myname.name.length) < 5) {
            isError = true;
            setName({ ...myname, nameError: "Name must me at least 5 charactor" })
        }
        if ((myfathername.fathername.length) < 5) {
            isError = true;
            setFatherName({ ...myfathername, fathernameError: "Father Name must me at least 5 charactor" })
        }
        if (mydesignation.designation.length === 0) {
            isError = true;
            setDesignation({ ...mydesignation, designationError: "Designation Required" })
        }
        if (mycompany.company.length === 0) {
            isError = true;
            setCompany({ ...mycompany, companyError: "Company Required" })
        }
        if (myaddress.address.length === 0) {
            isError = true;
            setAddress({ ...myaddress, addressError: "Addresss Required" })
        }
        return isError;
    }

    const updatedata = () => {

        const err = validateError();

        if (!err) {

            const jsonkey = 'mydata_2';

            const formjson = {
                "Name": nameRef.current.value,
                "FatherName": fathernameRef.current.value,
                "Designation": designationRef.current.value,
                "Company": companyRef.current.value,
                "Address": addressRef.current.value
            }

            let josnarray = [];

            josnarray = JSON.parse(window.localStorage.getItem(jsonkey)) || [];

            josnarray[index] = formjson;

            window.localStorage.setItem(
                jsonkey,
                JSON.stringify(josnarray)
            )

            history.push('/')
        }
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
                <Badge style={{ backgroundColor: 'yellow', color: 'white' }} badgeContent="" className={classes.margin}>
                    <Typography className={classes.padding}>Bignner</Typography>
                </Badge>
            );
        }
        if (count <= 7) {
            return (
                <Badge style={{ backgroundColor: 'blue', color: 'white' }} badgeContent="" className={classes.margin}>
                    <Typography className={classes.padding}>Mediocre</Typography>
                </Badge>
            );
        }
        if (count <= 9) {
            return (
                <Badge style={{ backgroundColor: 'green', color: 'white' }} badgeContent="" className={classes.margin}>
                    <Typography className={classes.padding}>Expert</Typography>
                </Badge>
            );
        }
    }

    // TODO: React.Fragment

    // TODO: Form kae upper useref use karooo

    return (
        <>
            <Container maxWidth="sm">
                <form className={classes.root} noValidate autoComplete="off" style={{ marginTop: 20 }}>

                    <TextField inputRef={nameRef} id="my-name" label="Name" value={myname.name} helperText={myname.nameError} onChange={(e) => setName({ ...myname, name: e.target.value })} />

                    <TextField inputRef={fathernameRef} id="my-fathername" label="FatherName" value={myfathername.fathername} helperText={myfathername.fathernameError} onChange={(e) => setFatherName({ ...myfathername, fathername: e.target.value })} />

                    <TextField inputRef={designationRef} id="my-designation" label="Designation" value={mydesignation.designation} helperText={mydesignation.designationError} onChange={(e) => setDesignation({ ...mydesignation, designation: e.target.value })} />

                    <TextField inputRef={companyRef} id="my-company" label="Company" value={mycompany.company} helperText={mycompany.companyError} onChange={(e) => setCompany({ ...mycompany, company: e.target.value })} />

                    <TextField inputRef={addressRef} id="my-address" label="Address" value={myaddress.address} helperText={myaddress.addressError} onChange={(e) => setAddress({ ...myaddress, address: e.target.value })} />
                </form>

                <Button variant="contained" color="primary" onClick={() => updatedata()}>Update</Button>
                <hr></hr>
                <Model handleCallback={handleCallback} />

                <P>Your level is (count: {count}): {findExpertiseLevel()}</P>
            </Container>
        </>
    );
}
