import React, { useState, useEffect }  from "react"; 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.$(tableCellClasses.head}': {
        color: "white",
        backgroundColor: "black",
    },
    ['&.$(tableCellClasses.body}']: {
        fontSize: 14,
    }
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
  
const ItineraryDetails = ( {itineraryID}) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetchData();
    }, [itineraryID]);

    const fetchData = async () => {
		try {
			// Replace the following with the actual API fetch logic
			const response = await fetch(
				`http://localhost:4000/api/itinerarydestination/destinations/${itineraryID}`
			);
			const data = await response.json();

			// Set destinations regardless of whether the fetch was successful
			setDestinations(data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
			// You can handle errors here if needed
		}
	};

  return ( 
    <div style={{width: '100%'}}>
        <div className="itineraryTitle">
            <h1> Itinerary Title </h1>
        </div>
        <div className="topText">
            <p> Budget: $300 </p>
            <p> Current Cost: $150 </p>
            <p> Country: Singapore </p>
        </div>

        <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: '20px' }}
        >
            Add New Destination
        </Button>

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
                    {destinations.map((row) => (
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