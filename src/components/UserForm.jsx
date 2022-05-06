import React, {useState} from 'react';
import Display from './Display';


const UserForm = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Sucessfully submitted!")
        setHasBeenSubmitted(true)
    }

    return (
    <div>
        {

        !hasBeenSubmitted&&
            <form onSubmit={handleSubmit}>  
                <div>
                    <label>First Name</label> <br />
                    <input type="text" name="firstname" value ={firstname}
                    onChange={(e)=>setFirstname(e.target.value)}/>
                    {
                        firstname && firstname.length <2 &&
                        <span style ={{color:"red"}}>First Name must be at least 2 characters</span>
                    }
                </div>
                <div>
                    <label>Last Name</label> <br />
                    <input type="text" name ="lastname" value={lastname} 
                    onChange={(e)=>setLastname(e.target.value)}/>
                    {
                        lastname && lastname.length <2 &&
                        <span style ={{color:"red"}}>Last Name must be at least 2 characters</span>
                    }
                </div>
                <div>
                    <label>Email</label> <br />
                    <input type="text" name ="email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                    {
                        email && email.length <5 &&
                        <span style ={{color:"red"}}>Email must be at least 5 characters</span>
                    }
                </div>
                <div>
                    <label>Password</label> <br />
                    <input type="password" name="password" value={password}
                    onChange = {(e)=>setPassword(e.target.value)} />
                    {
                        password && password.length <8 &&
                        <span style ={{color:"red"}}>Password must be at least 8 characters</span>
                    }
                </div>
                <div>
                    <label>Confirm Password</label> <br />
                    <input type="password" name="confirm" value={confirm}
                    onChange={(e)=>setConfirm(e.target.value)}/>
                    {
                        confirm && confirm !== password && 
                        <span style ={{color:"red"}}>Passwords do not match </span>
                    }
                </div>
                <button>Create</button>
            </form>
        }
        <Display firstname={firstname} lastname={lastname} email={email} password={password} confirm={confirm} />
    </div>
  )
}

export default UserForm