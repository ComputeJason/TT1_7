// Destination.js

// Destination.js

import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const createData = (destination, budget, notes) => {
  return { destination, budget, notes };
};

const Destination = () => {
  const [showInputFields, setShowInputFields] = useState(false);
  const [rows, setRows] = useState([
    createData("Destination 1", "$1000", "Notes for Destination 1"),
    createData("Destination 2", "$1500", "Notes for Destination 2"),
    createData("Destination 3", "$800", "Notes for Destination 3"),
  ]);

  const [newRow, setNewRow] = useState({ destination: '', budget: '', notes: '' });

  const handleInputChange = (e, key) => {
    setNewRow({ ...newRow, [key]: e.target.value });
  };

  const addRow = () => {
    if (newRow.destination.trim() !== '' && newRow.budget.trim() !== '' && newRow.notes.trim() !== '') {
      setRows([...rows, newRow]);
      setNewRow({ destination: '', budget: '', notes: '' });
      setShowInputFields(false); // Hide input fields after adding a new row
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      backgroundColor: '#add8e6', // light blue color
    }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setShowInputFields(true)} 
        style={{ marginBottom: '20px' }}
      >
        Add New Row
      </Button>

      {showInputFields && (
        <div>
          <TextField
            label="Destination"
            value={newRow.destination}
            onChange={(e) => handleInputChange(e, 'destination')}
            style={{ marginRight: '10px' }}
          />
          <TextField
            label="Cost"
            value={newRow.budget}
            onChange={(e) => handleInputChange(e, 'budget')}
            style={{ marginRight: '10px' }}
          />
          <TextField
            label="Notes"
            value={newRow.notes}
            onChange={(e) => handleInputChange(e, 'notes')}
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={addRow} style={{ marginTop: '10px' }}>
            Confirm
          </Button>
        </div>
      )}

      <TableContainer component={Paper} style={{ maxWidth: '800px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Destination</TableCell>
              <TableCell align="right">Budget</TableCell>
              <TableCell align="right">Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.destination}
                </TableCell>
                <TableCell align="right">{row.budget}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Destination;





