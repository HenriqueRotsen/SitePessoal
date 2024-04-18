import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.js'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App;