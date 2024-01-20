import React from "react"; 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.$(tableCellClasses.head}': {
        color: "white",
        backgroundColor: "black",
    },
    ['&.$(tableCellClasses.body}']: {
        fontSize: 14,
    }
}))

const StyledTableHeaderCell = styled(tableCellClasses.head)(({theme}) => ({
    backgroundColor: "black",
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  

function createData(destinationName, destinationCost, destionationNotes) {
    return {destinationName, destinationCost, destionationNotes}
}

const rows = [
    createData('Marina Bay Sands', '50', 'Some notes about this'), 
    createData('Gardens By The Bay', '100', 'very nice garden')
]
  
function ItineraryDetails() { 
  return ( 
    <div style={{width: '100%'}}>
        <div className="itineraryTitle">
            <h1> Itinerary Title </h1>
        </div>
        <div className="topText">
            <p> Budget: $300 </p>
            <p> Current Cost: $200 </p>
            <p> Country: Singapore </p>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label = "customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Destination Name</StyledTableCell>
                        <StyledTableCell>Destination Cost</StyledTableCell>
                        <StyledTableCell>Notes on Destination</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key = {row.destinationName}>
                            <StyledTableCell component="th" scope="row">
                                {row.destinationName}
                            </StyledTableCell>
                            <StyledTableCell> {row.destinationCost} </StyledTableCell>
                            <StyledTableCell> {row.destionationNotes} </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    
  ); 
} 

export default ItineraryDetails;