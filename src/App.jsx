import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import CartPage from './Components/CartPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './Redux/Store'

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Router>
      <Navbar />
        <Routes>
           <Route path="/" element={<Body />}/>
           <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </Router>
    </div>
    </Provider>
  )
}

export default App
