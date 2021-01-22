import React from 'react';
import { TextField, Container, makeStyles, Button } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Add() {

    //const location = useLocation();
    const classes = useStyles();
    ///let user = location.state.data;
    let history = useHistory();

    const [myname, setName] = useState({ name: '', nameError: '' });
    const [myfathername, setFatherName] = useState({ fathername: '', fathernameError: '' });
    const [mydesignation, setDesignation] = useState({ designation: '', designationError: '' });
    const [mycompany, setCompany] = useState({ company: '', companyError: '' });
    const [myaddress, setAddress] = useState({ address: '', addressError: '' });

    const formref = useRef();

    const validateError = () => {

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
                "Name": formref.current['my-name'].value,
                "FatherName": formref.current['my-fathername'].value,
                "Designation": formref.current['my-designation'].value,
                "Company": formref.current['my-company'].value,
                "Address": formref.current['my-address'].value
            }

            let josnarray = [];

            josnarray = JSON.parse(window.localStorage.getItem(jsonkey)) || [];

            josnarray.push(formjson);

            window.localStorage.setItem(
                jsonkey,
                JSON.stringify(josnarray)
            )
            history.push('/')
        }
    }

    // TODO: React.Fragment

    // TODO: Form kae upper useref use karooo

    return (
        <>
            <Container maxWidth="sm">
                <form ref={formref} className={classes.root} noValidate autoComplete="off" style={{ marginTop: 20 }}>

                    <TextField id="my-name" label="Name" value={myname.name} helperText={myname.nameError} onChange={(e) => setName({ ...myname, name: e.target.value })} />

                    <TextField id="my-fathername" label="FatherName" value={myfathername.fathername} helperText={myfathername.fathernameError} onChange={(e) => setFatherName({ ...myfathername, fathername: e.target.value })} />

                    <TextField id="my-designation" label="Designation" value={mydesignation.designation} helperText={mydesignation.designationError} onChange={(e) => setDesignation({ ...mydesignation, designation: e.target.value })} />

                    <TextField id="my-company" label="Company" value={mycompany.company} helperText={mycompany.companyError} onChange={(e) => setCompany({ ...mycompany, company: e.target.value })} />

                    <TextField id="my-address" label="Address" value={myaddress.address} helperText={myaddress.addressError} onChange={(e) => setAddress({ ...myaddress, address: e.target.value })} />
                </form>

                <Button variant="contained" color="primary" onClick={() => updatedata()}>Save</Button>
            </Container>
        </>
    );
}
