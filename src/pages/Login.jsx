import {useState, useRef, useEffect} from "react";
import{useNavigate} from "react-router-dom";
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        emailRef.current.focus();
    },[]);
    const handleLogin = () =>
    {
        if(email === "admin@gmail.com" && password === "admin1234")
        {
            alert("Login Success");
            localStorage.setItem("auth",true);
            navigate("/admin");
        }
        else {
            alert("Wrong Email or Password");
        }
    };
    return(
        <>
        <input ref ={emailRef} value ={email} onChange={(e) => setemail(e.target.value)} />
        <input type="password" value ={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        </>
    );
    };
export default Login;