import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    
  return (
    <div>

        <form>
            <div>
                <label>First Name</label> <br />
                <input type="text" onChange = {(e) => setFirstname(e.target.value)} />{}
            </div>
            <div>
                <label>Last Name</label> <br />
                <input type="text" onChange = {(e) => setLastname(e.target.value)} />{}
            </div>
            <div>
                <label>Email</label> <br />
                <input type="text" onChange = {(e) => setEmail(e.target.value)} />{}
            </div>
            <div>
                <label>Password</label> <br />
                <input type="password" onChange = {(e) => setPassword(e.target.value)} />{}
            </div>
            <div>
                <label>Confirm Password</label> <br />
                <input type="password" onChange = {(e) => setConfirmpassword(e.target.value)} />{}
            </div>
        </form>
        <div>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmpassword}</p>
        </div>
    </div>
  )
}

export default UserForm