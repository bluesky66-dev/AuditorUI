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

export default function AuditQueue() {
	const [auditQueue, setAuditQueue] = useState([]);

	useEffect(() => {
		// Fetch the list of audits in the queue from the smart contract here
		// and update the auditQueue state with the data
	}, []);

	return (
		<div className="container mx-auto pt-5">
			<h1 className="text-2xl text-yellow-400 mt-5 font-medium mb-4 text-center">
            🔥 Audit Queue
			</h1>
			<TableContainer component={Paper}>
				<Table className="min-w-fit" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Audit ID</TableCell>
							<TableCell align="right">Contract Name</TableCell>
							<TableCell align="right">Submitter</TableCell>
							<TableCell align="right">Pick and Review</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{auditQueue.map((audit) => (
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
									<Button
										variant="contained"
										color="primary"
										onClick={() => {
											// Call the function to pick and review the audit from the smart contract here
										}}
									>
										Pick and Review
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
