import React from "react";
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
import { useEffect, useState } from "react";
import AuditQueue from "./auditQueue";

export default function AuditorDashboard() {
	const [assignedAudits, setAssignedAudits] = useState([]);
	const [auditHistory, setAuditHistory] = useState([]);
	const [auditorProfile, setAuditorProfile] = useState({});

	useEffect(() => {
		// Fetch the list of assigned audits, audit history and auditor profile from the smart contract here
		// and update the corresponding states with the data
	}, []);

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-medium mb-4 text-center">
                🔥 Auditor Dashboard
			</h1>
			<h2 className="text-xl font-medium mb-4 underline">Assigned Audits</h2>
			<TableContainer component={Paper} className='mb-10'>
				<Table className="min-w-fit" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Audit ID</TableCell>
							<TableCell align="right">Contract Name</TableCell>
							<TableCell align="right">Submitter</TableCell>
							<TableCell align="right">View Details</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{assignedAudits.map((audit) => (
							<TableRow key={audit.id}>
								<TableCell component="th" scope="row">
									{audit.id}
								</TableCell>
								<TableCell align="right">
									{audit.contractName}
								</TableCell>
								<TableCell align="right">
									{audit.submitter}
								</TableCell>
								<TableCell align="right">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
										View Details
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>


			<h2 className="text-xl font-medium mb-4">Audit History</h2>
			<TableContainer component={Paper}>
				<Table className="min-w-fit" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Audit ID</TableCell>
							<TableCell align="right">Contract Name</TableCell>
							<TableCell align="right">Submitter</TableCell>
							<TableCell align="right">Status</TableCell>
							<TableCell align="right">View Details</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{auditHistory.map((audit) => (
							<TableRow key={audit.id}>
								<TableCell component="th" scope="row">
									{audit.id}
								</TableCell>
								<TableCell align="right">
									{audit.contractName}
								</TableCell>
								<TableCell align="right">
									{audit.submitter}
								</TableCell>
								<TableCell align="right">
									{audit.status}
								</TableCell>
								<TableCell align="right">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
										View Details
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<h2 className="text-xl font-medium mb-4">Auditor Profile</h2>
			<TableContainer component={Paper}>
                <Table className="min-w-fit" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Total Audits</TableCell>
                            <TableCell align="right">High Severity Issues</TableCell>
                            <TableCell align="right">Medium Severity Issues</TableCell>
                            <TableCell align="right">Low Severity Issues</TableCell>
                            <TableCell align="right">Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {auditorProfile.name}
                            </TableCell>
                            <TableCell align="right">
                                {auditorProfile.totalAudits}
                            </TableCell>
                            <TableCell align="right">
                                {auditorProfile.highSeverityIssues}
                            </TableCell>
                            <TableCell align="right">
                                {auditorProfile.mediumSeverityIssues}
                            </TableCell>
                            <TableCell align="right">
                                {auditorProfile.lowSeverityIssues}
                            </TableCell>
                            <TableCell align="right">
                                {auditorProfile.isActive ? "Yes" : "No"}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <AuditQueue/>

		</div>
	);
}
