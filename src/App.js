import './Styles/App.css';
import Home from './Pages/Home';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import ChangePreventers from './Pages/ChangePreventers';
import Dispensables from './Pages/Dispensables';
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='change-preventers' element={<ChangePreventers />}></Route>
          <Route path='dispensables' element={<Dispensables />}></Route>
          <Route path="*" element={<Navigate to="/home" />} replace={true}></Route>
        </Route>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
