import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Blogs from './pages/Blogs';
import LoginForm from './pages/Login';
import Signup from './pages/Signup';
import Createblog from './pages/Createblog';
import Logout from './pages/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/createblog' element={<Createblog />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     Welcome bro
    //     <LoginForm />
    //     <Signup />
    //     <Blogs />
    //   </header>
    // </div>
  );
}

export default App;
