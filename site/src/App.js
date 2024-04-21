import Header from './components/Header.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home.js'


function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" exact Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;