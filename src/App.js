import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChangePreventers from './Pages/ChangePreventers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path="home" element={<Home />}></Route>
          <Route path='change-preventers' element={<ChangePreventers />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
