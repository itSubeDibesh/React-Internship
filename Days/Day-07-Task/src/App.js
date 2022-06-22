import './App.css';
import Navbar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'

// Page Components
import BasicInfo from './pages/BasicInfo/BasicInfo';
import ConfirmInfo from './pages/ConfirmInfo/ConfirmInfo';

// Other Components
import Alert from './components/Alert/Alert';

// Providers
import AlertProvider from './providers/AlertProvider';
import DetailProvider from './providers/DetailProvider';

function App() {
  return (
    <>
      <DetailProvider>
        <Navbar />
        <AlertProvider>
          <Alert />
          <Routes>
            <Route path="/" element={<BasicInfo />} />
            <Route path="confirm" element={<ConfirmInfo />} />
          </Routes>
        </AlertProvider>
      </DetailProvider>
    </>
  );
}

export default App;
