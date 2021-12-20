import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Form from './pages/Sign/Form'
import Signin from './pages/Sign/Signin'

function App() {
  return (
    <div className="App">

      <Routes >
        <Route path='/signup' element={<Form />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/home" element={Home()} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>)
}


export default App;
