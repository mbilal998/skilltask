import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { info } from '../../assets/Info';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function Home() {
    const classes = useStyles();
    let history = useHistory();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="right">FatherName</TableCell>
                        <TableCell align="right">Designation&nbsp;</TableCell>
                        <TableCell align="right">Company&nbsp;</TableCell>
                        <TableCell align="right">Address&nbsp;</TableCell>
                        <TableCell align="right">Action&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {info.map((row) => (
                        <TableRow key={row.Name}>
                            <TableCell component="th" scope="row">{row.Name}</TableCell>
                            <TableCell align="right">{row.FatherName}</TableCell>
                            <TableCell align="right">{row.Designation}</TableCell>
                            <TableCell align="right">{row.Company}</TableCell>
                            <TableCell align="right">{row.Address}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="primary" onClick={() => history.push('/edit', { data: row })}>Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Home;