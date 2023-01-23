import {
	Container,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
  } from "@mui/material";
import AuditSubmissionForm from "../components/auditForm";
  
  export default function Home() {
	return (
	  <div >
		<header className="px-4 py-8">
		  <h1 className="text-3xl text-gray-900 font-medium text-center">Smart Contract Auditing Inc.</h1>
  
		  <Typography className="text-yellow-400 text-center px-4">
		  Smart Contract Auditing (SCA) is a professional group of blockchain, smart contract, and distributed systems engineers who work together to develop solutions for blockchain-based applications. We provide services to teams that require blockchain contract auditing, verification, and code reviews. Our goal is to ensure that all smart contracts are secure and free from vulnerabilities, by providing expert contract security reviews, application security auditing, and contract verification services. With SCA, you can trust that your contracts are in good hands.
		  </Typography>
		  <div className="text-center">
				<br/>
		  </div>
		</header>    
		
	  <AuditSubmissionForm />

	  <footer className="py-4">
    <h6 className="text-lg text-gray-900 font-medium text-center">
      Smart Contract Auditing Inc.
    </h6>
    <Typography className="text-yellow-400 text-center">
      We are dedicated to providing the best cybersecurity solutions for
      blockchain-based applications.
    </Typography>
  </footer>
</div>
	)
  }


