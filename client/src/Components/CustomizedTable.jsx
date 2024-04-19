import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.error.main, // Change background color to red
    color: theme.palette.common.white,
    textTransform: 'uppercase', // Capitalize text in header row
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTable = ({ rows, columns }) => {
  return (
    <TableContainer component={Paper} sx={{ marginLeft: '10%', width: '80%', marginY: '5rem' }}> {/* Set width to 80% */}
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.length === 0 ? (
            <TableRow>
              <StyledTableCell colSpan={columns.length} align="center">
                No data found in database
              </StyledTableCell>
            </TableRow>
          ) : (
            rows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column) => (
                  <StyledTableCell key={column}>
                    {row[column]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;
