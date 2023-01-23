import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from "../styles/Home.module.css";

export default function AuditSubmissionForm() {
  const [contractName, setContractName] = useState('');
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div className="container mx-auto text-center">
      <code><h1 className="text-3xl text-gray-900 font-medium mb-4 text-center">Audit Submission Form</h1></code>
      <form className="mb-4">
        <TextField
          label="Contract Name"
          value={contractName}
          onChange={(event) => setContractName(event.target.value)}
          variant="outlined"
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Repository URL"
          value={repositoryUrl}
          onChange={(event) => setRepositoryUrl(event.target.value)}
          variant="outlined"
          fullWidth
          className="mb-4"
          />
        <TextField
          label="Comments (Optional)"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          className="mb-4"
        />
        <Button  variant="contained" color="primary" onClick={() => {
          // submit the contract source code, repository URL, and contract name to the smart contract here
        }}>
          Submit
        </Button>
      </form>
    </div>
  );
}