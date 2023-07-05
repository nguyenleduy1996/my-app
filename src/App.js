
import { Container } from 'react-bootstrap';
import './App.scss';
import './components/Header';
import './components/TableUser';
import Header from './components/Header';
import TableUser from './components/TableUser';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Container>
          <TableUser />
      </Container> 
    </div>
  );
}

export default App;
