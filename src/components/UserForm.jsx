import React, {useState} from 'react';
import Display from './Display';


const UserForm = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    
    return (
    <div>
        <form>  
            <div>
                <label>First Name</label> <br />
                <input type="text" name="firstname" value ={firstname}
                onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label> <br />
                <input type="text" name ="lastname" value={lastname} 
                onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div>
                <label>Email</label> <br />
                <input type="text" name ="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label> <br />
                <input type="password" name="password" value={password}
                onChange = {(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label> <br />
                <input type="password" name="confirm" value={confirm}
                onChange={(e)=>setConfirm(e.target.value)}/>
            </div>
        </form>
        <Display firstname={firstname} lastname={lastname} email={email} password={password} confirm={confirm} />
    </div>
  )
}

export default UserForm