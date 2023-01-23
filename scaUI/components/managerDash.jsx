import React from 'react';

import { useEffect, useState } from 'react';

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
    TextField,
	Button,
} from "@mui/material";

export default function ManagerDashboard() {
  const [contractSubmissions, setContractSubmissions] = useState([]);
  const [auditorDetails, setAuditorDetails] = useState([]);
  const [auditFee, setAuditFee] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);

  useEffect(() => {
    // Fetch the contract submissions, auditor details, audit fee and registration fee from the smart contract here
    // and update the contractSubmissions, auditorDetails, auditFee and registrationFee state with the data
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-medium mb-4 text-center">Manager Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Contract Submissions</h2>
        <TableContainer component={Paper}>
          <Table className='min-w-fit' aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Submission ID</TableCell>
                <TableCell align="right">Contract Name</TableCell>
                <TableCell align="right">Submitter</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contractSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell component="th" scope="row">
                    {submission.id}
                  </TableCell>
                  <TableCell align="right">{submission.contractName}</TableCell>
                  <TableCell align="right">{submission.submitter}</TableCell>
                  <TableCell align="right">{submission.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Auditor Details</h2>
        <TableContainer component={Paper}>
          <Table className='min-w-fit' aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Auditor ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Number of Submissions</TableCell>
                <TableCell align="right">Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auditorDetails.map((auditor) => (
                <TableRow key={auditor.id}>
                  <TableCell component="th" scope="row">
                    {auditor.id}
                  </TableCell>
                  <TableCell align="right">{auditor.name}</TableCell>
                  <TableCell align="right">{auditor.address}</TableCell>
                  <TableCell align="right">{auditor.numberOfSubmissions}</TableCell>
                  <TableCell align="right">{auditor.isActive ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Settings</h2>
        <div className="flex mb-4">
          <TextField
            label="Audit Fee"
            type="number"
            value={auditFee}
            onChange={(event) => setAuditFee(event.target.value)}
          />
                    <Button variant="contained" color="primary" className="ml-4" onClick={() => {
            // update the audit fee on the smart contract here
          }}>Update</Button>
        </div>
        <div className="flex mb-4">
          <TextField
            label="Registration Fee"
            type="number"
            value={registrationFee}
            onChange={(event) => setRegistrationFee(event.target.value)}
          />
          <Button variant="contained" color="primary" className="ml-4" onClick={() => {
            // update the registration fee on the smart contract here
          }}>Update</Button>
        </div>
      </div>
    </div>
  );
}