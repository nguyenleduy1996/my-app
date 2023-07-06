
import { Container } from 'react-bootstrap';
import './App.scss';
import './components/Header';
import './components/TableUser';
import Header from './components/Header';
import TableUser from './components/TableUser';
import { useState } from 'react';
import ModelAddNew from './components/ModelAddNew';

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = ()  =>{
    setIsShowModalAddNew(false)
  }
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span> <b> list User:</b></span>
            <button type="button" className="btn btn-danger"
              onClick={() => {setIsShowModalAddNew(true)}}
            >Add</button>
        </div>
          <TableUser />
      </Container> 
      <ModelAddNew 
          show = {isShowModalAddNew}
          handleClose = {handleClose}
      />
    </div>
  );
}

export default App;
