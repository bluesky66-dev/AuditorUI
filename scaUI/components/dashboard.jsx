import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const [contracts, setContracts] = useState([]);

	useEffect(() => {
		// TODO: Grab data from auditor
	}, []);

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-medium mb-4 text-center">
				🔥 Audit Issue Dashboard
			</h1>
			<TableContainer component={Paper}>
				<Table className='min-w-fit' aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Contract Name</TableCell>
							<TableCell align="right">Submitter</TableCell>
							<TableCell align="right">Status</TableCell>
							<TableCell align="right">View Details</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{contracts.map((contract) => (
							<TableRow key={contract.id}>
								<TableCell component="th" scope="row">
									{contract.name}
								</TableCell>
								<TableCell align="right">
									{contract.submitter}
								</TableCell>
								<TableCell align="right">
									{contract.status}
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
		</div>
	);
}
