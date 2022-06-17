import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import BasicInfo from './pages/basic/BasicInfo'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<BasicInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
