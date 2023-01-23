import React from "react";

import { useEffect, useState } from "react";

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
			<h1 className="text-3xl text-yellow-400 text-center font-medium ">
				🔥 Manager Dashboard
			</h1>
			<div className="mb-4">
				<h2 className="text-xl text-yellow-400 text-center font-medium mb-2 pt-5">
					🔥 Contract Submissions
				</h2>
				<TableContainer component={Paper}>
					<Table className="min-w-fit" aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Submission ID</TableCell>
								<TableCell align="right">
									Contract Name
								</TableCell>
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
									<TableCell align="right">
										{submission.contractName}
									</TableCell>
									<TableCell align="right">
										{submission.submitter}
									</TableCell>
									<TableCell align="right">
										{submission.status}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className="mb-4">
				<h2 className="text-xl text-yellow-400 text-center font-medium mb-2 pt-5">
					🔥 Auditor Details
				</h2>
				<TableContainer component={Paper}>
					<Table className="min-w-fit" aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Auditor ID</TableCell>
								<TableCell align="right">Name</TableCell>
								<TableCell align="right">Address</TableCell>
								<TableCell align="right">
									Number of Submissions
								</TableCell>
								<TableCell align="right">Active</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{auditorDetails.map((auditor) => (
								<TableRow key={auditor.id}>
									<TableCell component="th" scope="row">
										{auditor.id}
									</TableCell>
									<TableCell align="right">
										{auditor.name}
									</TableCell>
									<TableCell align="right">
										{auditor.address}
									</TableCell>
									<TableCell align="right">
										{auditor.numberOfSubmissions}
									</TableCell>
									<TableCell align="right">
										{auditor.isActive ? "Yes" : "No"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

				<h2 className="text-xl text-yellow-400 mt-24 text-center font-medium mb-2 pt-5">
					🔥 Fee Details
				</h2>
				<div className="my-4">
					<div className="my-2 text-center ">
						<div className="my-2 ">Registration Fee</div>
						<TextField variant="outlined" className="mx-auto" value={registrationFee} />
						<Button color="primary" variant="contained">
							{"Update Registration Fee"}
						</Button>

						<div className="my-2">Audit Fee</div>
						<TextField variant="outlined" className="mx-auto" value={auditFee} />
						<Button color="primary" variant="contained">{"Update Audit Fee"}</Button>
            </div>
				</div>
			</div>
		</div>
	);
}
