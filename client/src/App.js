import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './componentes/Home';
import InfoCreate from './componentes/InfoCreate';
// import Switch from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/create" element={<InfoCreate />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
