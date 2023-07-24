import Button from 'react-bootstrap/Button';
import {  useState } from 'react';
import Form from 'react-bootstrap/Form';
import { loginAPI } from '../Service/UserService';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = (props) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingAPI, setLoadingAPI] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token){
            navigate("/")
        }
    },[])
    const handleLogin = async () => {
        
       if(!email || !password ){
            toast.error("Missing Info")
            setLoadingAPI(false)
            return
       }
       setLoadingAPI(true)
       let res = await loginAPI(email,password)
       if(res && res.token){
            localStorage.setItem("token", res.token)
            navigate("/")
       }else{
            if(res && res.status === 400){
                toast.error(res.data.error);
            }
       }
       setLoadingAPI(false)
    }


    return (<>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address ( eve.holt@reqres.in )</Form.Label>
                <Form.Control value={email} onChange={(event) =>{ setEmail(event.target.value)}} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(event) =>{ setPassword(event.target.value)}} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={() => {handleLogin()}} variant="primary" type="button">
               {loadingAPI && <i className="fas fa-spinner fa-spin"></i>}   Login
            </Button>
        </Form>
    </>)
}
export default Login