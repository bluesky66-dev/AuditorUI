import React, { use } from "react";
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
import {
	useContract,
	useContractReads,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
	useSigner,
} from "wagmi";
import { AuditorAddr } from "../utils/contracts.js";
import AuditorAbi from "../utils/abi.json";
import { ethers } from "ethers";

export default function AuditorDashboard() {
	const { data: signer } = useSigner();
	const [assignedAudits, setAssignedAudits] = useState([]);
	const [auditHistory, setAuditHistory] = useState([]);
	const [auditorProfile, setAuditorProfile] = useState([]);
	const [isAuditor, setIsAuditor] = useState(false);
	const account = useAccount();
	const [auditorID, setAuditorID] = useState(0);

	const auditorInstance = useContract({
		address: AuditorAddr,
		abi: AuditorAbi,
		signerOrProvider: signer,
	});

	const handleRegistration = async () => {
		console.log("registering auditor for wallet", account?.address);
		console.log(auditorInstance);
		const tx = await auditorInstance.registerAuditor(account.address);
		await tx.wait();
		setIsAuditor(true);
	};

	async function setup(address) {
		async function getAuditor() {
			let is = await auditorInstance.auditorAddrToID(address);
			let isStr = is.toNumber();
			if (is.toString() === "0") {
				if (
					(await auditorInstance.auditorIDToAddr(0)) ===
					address
				) {
					setIsAuditor(true);
				}
				setIsAuditor(false);
			} else {
				setIsAuditor(true);
			}

			let profile = await auditorInstance.auditorDetails(isStr - 1)
			console.log("profile", profile)

			let _lows = profile.lows
			let _meds = profile.meds
			let _highs = profile.highs
			let _total = profile.total
			let _numSubmits = profile.numOfSubmits
			let isActive = profile.isActive
			let id = isStr - 1

			let lows = _lows.toNumber()
			let meds = _meds.toNumber()
			let highs = _highs.toNumber()
			let total = _total.toNumber()

			let newProfile = {
				id: id,
				lows: lows,
				meds: meds,
				highs: highs,
				total: total,
				numSubmits: _numSubmits,
				isActive: isActive
			}

			setAuditorProfile(newProfile)
		}
		getAuditor();
	}


	return (
		<div className="container mx-auto">
			<h1 className="text-3xl text-yellow-400 font-medium text-center">
				🔥 Auditor Dashboard
			</h1>

			{isAuditor === false ? (
				<main className="p-20 text-center">
					<h2 className="text-2xl text-center text-white mb-8">
						You are not an auditor in the system
					</h2>
					<div className="flex flex-col items-center">
					<Button
							color="primary"
							variant="contained"
							onClick={handleRegistration}
						>
							{"I want to become an auditor"}
						</Button>
						<Button
							color="primary"
							variant="contained"
							onClick={() => setup(account.address)}
						>
							{"I'm already an auditor"}
						</Button>
					</div>
				</main>
			) : (
				<>
					<h2 className="text-xl text-yellow-400 text-center font-medium mb-4 pt-5 underline">
						🔥 Assigned Audits
					</h2>
					<TableContainer component={Paper} className="mb-10">
						<Table className="min-w-fit" aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Audit ID</TableCell>
									<TableCell align="right">
										Contract Name
									</TableCell>
									<TableCell align="right">
										Submitter
									</TableCell>
									<TableCell align="right">
										View Details
									</TableCell>
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
					<h2 className="text-xl text-yellow-400 text-center font-medium pt-5 mb-4">
						🔥 Audit History
					</h2>
					<TableContainer component={Paper}>
						<Table className="min-w-fit" aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Audit ID</TableCell>
									<TableCell align="right">
										Contract Name
									</TableCell>
									<TableCell align="right">
										Submitter
									</TableCell>
									<TableCell align="right">Status</TableCell>
									<TableCell align="right">
										View Details
									</TableCell>
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
					<h2 className="text-xl text-yellow-400 text-center font-medium pt-5 ">
						🔥 Auditor Profile
					</h2>
					<TableContainer component={Paper} className="my-1">
						<Table className="min-w-fit" aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell align="right">
										Total Audits
									</TableCell>
									<TableCell align="right">
										High Severity Issues
									</TableCell>
									<TableCell align="right">
										Medium Severity Issues
									</TableCell>
									<TableCell align="right">
										Low Severity Issues
									</TableCell>
									<TableCell align="right">Active</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell component="th" scope="row">
										{auditorProfile.name} TODO: onchain name
									</TableCell>
									<TableCell align="right">
										{auditorProfile.total}
									</TableCell>
									<TableCell align="right">
										{auditorProfile.highs}
									</TableCell>
									<TableCell align="right">
										{auditorProfile.meds}
									</TableCell>
									<TableCell align="right">
										{auditorProfile.lows}
									</TableCell>
									<TableCell align="right">
										{auditorProfile.isActive ? "Yes" : "No"}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<AuditQueue />
				</>
			)}
		</div>
	);
}
