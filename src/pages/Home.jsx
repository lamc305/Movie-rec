import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import getMovieList from "../services/getMovieList"

const ListOfMovies = React.lazy(() => import('../components/ListOfMovies'))

function Home() {


  const [movies, setMovies] = useState(null)
  const [search, setSearch] = useState('revenue')
  const navigate = useNavigate()
  const color = useColorModeValue('red.300', 'blue.500')
  const colorScheme = useColorModeValue('red', 'blue')

  useEffect(() => {
    getMovieList(search)
      .then(setMovies)
  }, [search])

  const handlePage = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(`/list/${search}/2`)
  }


  return (
    <>
      <Helmet>
        <title>Movie Rec | Home</title>
        <meta name='description' content='Movie Page' />
      </Helmet>

      <Box w='90vw' m='50px auto'>
        <Tabs
          isFitted
          variant='enclosed'
          isLazy
          isManual
          colorScheme={colorScheme}
          w='100%'
          borderColor={color}
        >
          <TabList
            display='flex'
            justifyContent='space-around'
          >
            <Tab
              onClick={() => setSearch('revenue')}
              fontSize='1.5rem'
            >Revenue</Tab>
            <Tab
              fontSize='1.5rem'
              onClick={() => setSearch('popularity')}
            >Popularity</Tab>

          </TabList>

          <TabPanels>

            <TabPanel>
              {movies && <ListOfMovies movies={movies} />}
              {movies &&
                <Box
                  w='100%'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Button
                    onClick={handlePage}
                  >Discover more</Button>
                </Box>
              }
            </TabPanel>
            <TabPanel>
              {movies && <ListOfMovies movies={movies} />}
              {movies &&
                <Box
                  w='100%'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Button onClick={handlePage}>
                    Discover more</Button>
                </Box>}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )

}

export default React.memo(Home)