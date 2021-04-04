import React from 'react'

const SignupSuccess = () => {

  return (
    <div className="d-flex flex-column flex">
      <div className="navbar light bg pos-rlt box-shadow">
        <div className="mx-auto">
          <a href="/" className="navbar-brand">
            <span className="hidden-folded d-inline">
              <img src="../assets/images/mcmaster-logo.png" alt="." className="logo-login" />
            </span>
          </a>
        </div>
      </div>
      <div id="content-body">
        <div className="py-5 text-center w-100">
          <div className="mx-auto w-auto-xs">
            <div className="px-3">
              <h2 className="pb-2">Thank you for registering</h2>
              <p>Please check your email to confirm registration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupSuccess;