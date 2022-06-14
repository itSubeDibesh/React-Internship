import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import BasicInfo from './pages/basic/BasicInfo'
import OtherInfo from './pages/other/OtherInfo';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<BasicInfo />} />
        <Route path='/other' element={<OtherInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
