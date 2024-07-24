import Header from './components/Header.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home.js'
import { Curriculo } from './pages/Curriculo.js'
import { Contato } from './pages/Contato.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/curriculo" Component={Curriculo}/>
        <Route path="/contato" Component={Contato}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;