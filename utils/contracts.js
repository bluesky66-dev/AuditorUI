export const AuditorAddr = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
export const AuditorABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "required",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        }
      ],
      "name": "InsufficientValue",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "auditor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auditId",
          "type": "uint256"
        }
      ],
      "name": "AuditAssigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lowSeverityIssues",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "medSeverityIssues",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "highSeverityIssues",
          "type": "uint256"
        }
      ],
      "name": "AuditCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAuditor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "protocolName",
          "type": "bytes"
        }
      ],
      "name": "NewAuditorAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "auditId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "submitter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "protocolName",
          "type": "string"
        }
      ],
      "name": "SourceCodeSubmitted",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "Manager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "assignAudit",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "auditFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "auditID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "auditQueue",
      "outputs": [
        {
          "internalType": "address",
          "name": "submitter",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isReviewed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "dateSubmitted",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "comments",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "protocolName",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "med",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "high",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "auditId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "auditorAddrToID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "auditorDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "auditor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "numberOfSubmits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "highs",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "meds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lows",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "auditorID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "auditorIDToAddr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "auditorQueue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "auditorRegFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "audits",
      "outputs": [
        {
          "internalType": "address",
          "name": "submitter",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isReviewed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "dateSubmitted",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "comments",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "protocolName",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "med",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "high",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "auditId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_med",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_high",
          "type": "uint256"
        },
        {
          "internalType": "bytes[]",
          "name": "_lows",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "_meds",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "_highs",
          "type": "bytes[]"
        }
      ],
      "name": "finaliseAudit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAuditSubmissionCost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAuditorCost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "highs",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lows",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "meds",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAuditor",
          "type": "address"
        }
      ],
      "name": "registerAuditor",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "removeAuditor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "protocolName",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "comments",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "_repo",
          "type": "bytes"
        }
      ],
      "name": "requestAudit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "setAuditFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "setAuditorFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "sourceCodes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_med",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_high",
          "type": "uint256"
        }
      ],
      "name": "submitFindings",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]