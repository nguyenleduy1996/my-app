import Button from 'react-bootstrap/Button';
import { memo, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { loginAPI } from '../Service/UserService';
import { ToastContainer, toast } from 'react-toastify';
const Login = (props) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingAPI, setLoadingAPI] = useState(false);

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
       }else{
        toast.error("email password do not math")
        setLoadingAPI(false)
       }
       setLoadingAPI(false)
    }


    return (<>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
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
               {loadingAPI && <i class="fas fa-spinner fa-spin"></i>}   Login
            </Button>
        </Form>
    </>)
}
export default Login