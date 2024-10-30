// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import InvoiceDetails from './components/InvoiceDetails';
import InvoiceList from './components/InvoiceList';
import Nav from './components/Nav';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      {/* <InvoiceList></InvoiceList> */}
      <Routes>
        <Route path='/' element = {<Home></Home>} />
        <Route path='/Invoice' element =  {<InvoiceList />} />
        <Route path = '/InvoiceDetails/:id' element = {<InvoiceDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
