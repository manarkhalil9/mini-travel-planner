import './App.css'
import { Route, Routes } from 'react-router'
import Cities from './pages/Cities'

const App = () => {

  return (
    <>
      <main>
      <Routes>
        <Route path = "/" element={<Cities/>} />
      </Routes>
      </main>
    </>
  )
}

export default App
