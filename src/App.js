
import { Container } from 'react-bootstrap';
import './App.scss';
import './components/Header';
import './components/TableUser';
import Header from './components/Header';

import Home from './components/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import TableUser from './components/TableUser';
import Login from './components/Login';


function App() {
  return (
    <>
        <div className='app-container'>
          <Header />
          <Container>
          
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User" element={<TableUser />} />
                <Route path="/Login" element={<Login />} />
     
              </Routes>
          
          </Container> 
       
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </>
    
  );
}

export default App;
