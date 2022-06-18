import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BasicInfo from './pages/basic/BasicInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
