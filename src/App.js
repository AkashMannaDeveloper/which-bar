import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>This is Home Page</h1>} />

          <Route element={<PrivateComponent />}>
            <Route path='/products' element={<h1>This is Profile Page</h1>} />
            <Route path='/add' element={<h1>This is add Page</h1>} />
            <Route path='/update/:id' element={<h1>This is upate Page</h1>} />
            <Route path='/profile' element={<h1>This is Profile Page</h1>} />
            <Route path='/logout' element={<h1>This is Logout Page</h1>} />
          </Route>
          
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<h1>This is signup Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
