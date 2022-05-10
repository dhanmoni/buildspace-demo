import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AuthPage from './pages/AuthPage'

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Landing />}
          />
          <Route
            exact
            path="/login"
            element={<AuthPage/>}
          />
        </Routes>
      </BrowserRouter>
  )
}

export default App
