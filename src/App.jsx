import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import List from './pages/List'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import ListOfSearch from './pages/ListOfSearch'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {

  
  return (
    <Box minH='100%' minW='100%'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/list/:search/:page' element={<List />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/search/:keyword' element={<ListOfSearch />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App
