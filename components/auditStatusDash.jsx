import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@mui/material";
import { useEffect, useState } from 'react';

export default function AuditStatusDash() {
  const [contractStatus, setContractStatus] = useState({});
  
  useEffect(() => {
    // Fetch the status of the contract review from the smart contract here
    // and update the contractStatus state with the data
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-medium text-yellow-400 mb-4 mt-5 text-center">🔥 Audit Status Dashboard</h1>
      <TableContainer component={Paper}>
        <Table className='min-w-fit' aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Contract Name</TableCell>
              <TableCell align="right">Completion Percentage</TableCell>
              <TableCell align="right">Low Severity Issues</TableCell>
              <TableCell align="right">Medium Severity Issues</TableCell>
              <TableCell align="right">High Severity Issues</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {contractStatus.contractName}
              </TableCell>
              <TableCell align="right">{contractStatus.completionPercentage}%</TableCell>
              <TableCell align="right">{contractStatus.lowSeverityIssues}</TableCell>
              <TableCell align="right">{contractStatus.medSeverityIssues}</TableCell>
              <TableCell align="right">{contractStatus.highSeverityIssues}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}