import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/home'
import Navbar from './components/navbar'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>
              }
              
              />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
