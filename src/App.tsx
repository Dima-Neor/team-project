import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage from "./components/LoginPage";
import RegisteringPage from "./components/RegisteringPage";
import ResetPass from "./components/ResetPass";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/reg'} element={<RegisteringPage/>}/>
            <Route path={'/reset_pass'} element={<ResetPass/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
