import React, { useState } from 'react'
import AuditStatusDash from '../components/auditStatusDash'
import Dashboard from '../components/dashboard'
import {
	Button,
} from "@mui/material";
function audit_dashboard() {
  const [isSubmitter, setIsSubmitter] = useState(false)
  return (
    <>
    
    {isSubmitter === false ? (
			<div className="container mx-auto">
			<h1 className="text-3xl text-yellow-400 font-medium text-center">
				🔥 Audit Submission Dashboard
			</h1>
				<main className="p-20 text-center">
					<h2 className="text-2xl text-center text-white mb-8">
						You haven't submitted any contracts for audit.
					</h2>
					<div className="flex flex-col items-center">
					<Button
							color="primary"
							variant="contained"
              size='large'
							// onClick={handleRegistration}
						>
							{"I want to submit a contract for audit"}
						</Button>					<Button
							color="primary"
							variant="contained"
              size='large'
							onClick={() => setIsSubmitter(true)}
						>
							{"I've already requested an audit!"}
						</Button>
					</div>
				</main>
      </div>
			) :(
      <><Dashboard /><div className="ml-72 pt-5"></div><AuditStatusDash /></>
      )}

    </>
  )
}

export default audit_dashboard