import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChangePreventers from './Pages/ChangePreventers';
import Dispensables from './Pages/Dispensables';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index path='home' element={<Home />}></Route>
          <Route path='change-preventers' element={<ChangePreventers />}></Route>
          <Route path='dispensables' element={<Dispensables />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
