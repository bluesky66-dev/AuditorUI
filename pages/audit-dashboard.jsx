import React from 'react'
import AuditStatusDash from '../components/auditStatusDash'
import Dashboard from '../components/dashboard'

function audit_dashboard() {
  return (
    <><Dashboard />
    <div className="ml-72 pt-5"></div>
    <AuditStatusDash /></>
  )
}

export default audit_dashboard