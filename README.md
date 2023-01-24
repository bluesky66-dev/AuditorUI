# Auditor: Smart Contract Auditing

## Introduction

The UI for the [Auditor](https://github.com/Keyrxng/a-dApp-aDay/blob/main/src/Auditor/Auditor.sol) protocol built by yours truly. It allows protocol's to submit smart contracts for a small fee which grows exponentially for every audit that is currently in the queue. Registered auditors can self-assign audits. Submission are made directly to the contract and all findings are stored on-chain.

The interested thing 

* * 

1. Submit Smart Contracts for audit, paying the submission fee.
2. Wait for Auditors to assign and conduct their audit process.
3. Audit results are stored on-chain, the audit is finalized by the submitter when they are satisified by the findings.
4. Auditor is paid based on their findings (The more findings, the higher the pay.) while the protocol accrues fees from submissions and auditor registrations.

* *

* * *

### How to Use
* *

 1. OpenSeason, Submissions can be made, auditors can be registered and audits can be assigned.
 2. Payments are semi-handled, findings are stored via mappings (<code>lows[AuditID][IssueNumber] = bytes("Findings")</code>).
 3. TBA as more functionality is built in and UI is updated.

* *
* * *

### Notes

* I understand storage costs and know that there are far far more gas effective ways to store this information, I'll explore other options eventually but for now, I'd rather not get mired in gas costs for the sake of a demo.