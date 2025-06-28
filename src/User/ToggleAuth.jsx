import React from 'react'

const ToggleAuth = ( { toggleState } ) => {
  return (
    <div className="toggleBoxa">
      <div className="togglePanela toggleLefta">
         <h1>Hello, there </h1>
         <p>Don't Have an Account </p>
         <button className="btna registerBtna" onClick={toggleState}>Register</button>
      </div>

      <div className="togglePanela toggleRighta">
         <h1>Welcome Back!</h1>
         <p>Already Have an Account</p>
         <button className="btna loginBtna" onClick={toggleState}>Login</button>
      </div>
   </div>

  )
}

export default ToggleAuth


