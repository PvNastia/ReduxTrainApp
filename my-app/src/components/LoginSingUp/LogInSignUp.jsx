import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUser } from "./LoginSingUpSlice";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
function LoginSingUp() {

    const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
     const navigate = useNavigate()

   const handleSubmit = () => {
    if (action === "Login") {
        dispatch(loginUser({ email: email, name: name || 'User' }));
        alert("Success! You are now logged in.");
            setEmail('');
            setName('');
            setPassword('');
            
          
            navigate("/"); 
    } else {
    
        alert("Registration successful! Please login.");
        setAction("Login"); 
    }
}

    return (
        <div className="log-container" >
            <h2 className="text">{action}</h2>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src="" alt="" />
                    <input type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
                </div>}

                <div className="input">
                    <input type="email"
                     placeholder="Email" 
                    value={email} 
                     onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password"
                     placeholder="Password"  
                    value={password} 
                     onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-pass">Lost Password? <span>Click</span></div>}

            <div className="submit-container">
            
                <button className="submit" onClick={handleSubmit}>
                    {action === "Login" ? "Login" : "Sign Up"}
                </button>

                <div className="switch-buttons">
                    <button
                        className={action === "Login" ? "submit gray" : "submit"}
                        onClick={() => setAction("Sign Up")}
                    >
                        Register
                    </button>
                    <button
                        className={action === "Sign Up" ? "submit gray" : "submit"}
                        onClick={() => setAction("Login")}
                    >
                        Have an account?
                    </button>
                </div>
            </div>


        </div>
    )
}
export default LoginSingUp