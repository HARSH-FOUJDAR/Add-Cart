import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
