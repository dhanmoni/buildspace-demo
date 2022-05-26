import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AuthPage from './pages/AuthPage'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'

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
          <Route
            exact
            path="/home"
            element={
              <Home/>
            // <PrivateRoute>
            //   <Home/>
            // </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
  )
}

export default App
