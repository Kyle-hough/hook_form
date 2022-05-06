import React from 'react'

const Display = (props) => {
  return (
    <div>
        <p>Name: {props.firstname} {props.lastname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirm}</p>
    </div>
  )
}

export default Display