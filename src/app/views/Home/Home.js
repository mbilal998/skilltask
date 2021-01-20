import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function Home() {
    const classes = useStyles();
    let history = useHistory();
    let info = [];

    // info = window.localStorage.getItem('mydata_2');

    // console.log(info);
    const user2 = JSON.parse(window.localStorage.getItem('mydata_2'));

    const [user, setUser] = useState(user2);

    return (


        <Container maxWidth="lg" >
            <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={() => history.push('/add')}>Add</Button>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Name</StyledTableCell>
                            <StyledTableCell align="right">FatherName</StyledTableCell>
                            <StyledTableCell align="right">Designation&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Company&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Address&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.length > 0 && user.map((row, index) => (
                            <StyledTableRow key={row.Name}>
                                <StyledTableCell component="th" scope="row">{row.Name}</StyledTableCell>
                                <StyledTableCell align="right">{row.FatherName}</StyledTableCell>
                                <StyledTableCell align="right">{row.Designation}</StyledTableCell>
                                <StyledTableCell align="right">{row.Company}</StyledTableCell>
                                <StyledTableCell align="right">{row.Address}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant="contained" color="primary" onClick={() => history.push('/edit', { data: row, index: index })}>Edit</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    );

}

export default Home;
