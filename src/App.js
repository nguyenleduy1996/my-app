
import { Container } from 'react-bootstrap';
import './App.scss';
import './components/Header';
import './components/TableUser';
import Header from './components/Header';
import TableUser from './components/TableUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <div className='app-container'>
          <Header />
          <Container>
              <TableUser />
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
