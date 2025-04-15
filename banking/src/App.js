import './App.css'
import NoPage from './Pages/NoPage/NoPage'
import Main from './Pages/Main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
