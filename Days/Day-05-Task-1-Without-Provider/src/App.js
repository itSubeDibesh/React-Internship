import './App.css';
import Navbar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Page Components
import BasicInfo from './pages/BasicInfo/BasicInfo';
import ConfirmInfo from './pages/ConfirmInfo/ConfirmInfo';

// Other Components
import Alert from './components/Alert/Alert';

function App() {
  const
    [alert, setAlert] = useState({
      showAlert: false,
      message: '',
    }),
    [userDetails, setUserDetails] = useState(null)
    ;
  return (
    <>
      <Navbar userDetails={userDetails} />
      <Alert showAlert={alert.showAlert} message={alert.message} />
      <Routes>
        <Route path="/" element={<BasicInfo setAlert={setAlert} setUserDetails={setUserDetails} />} />
        <Route path="confirm" element={<ConfirmInfo userDetails={userDetails} setUserDetails={setUserDetails} />} />
      </Routes>
    </>
  );
}

export default App;
