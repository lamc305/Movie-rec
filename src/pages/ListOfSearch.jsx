import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import ListOfMovies from "../components/ListOfMovies"
import getMovieSearch from "../services/getMovieSearch"

function ListOfSearch() {
  const [movies, setMovies] = useState(null)
  const { keyword } = useParams()
  const color = useColorModeValue('black', 'white')

  useEffect(() => {
    getMovieSearch(keyword).then(setMovies)
  }, [keyword])


  return (
    <>
      <Helmet>
        <title>Search of {keyword}</title>
        <meta name='description' content={`Search of ${keyword}`} />
      </Helmet>
      {movies &&
        <>
          {movies.length !== 0 ?
            <ListOfMovies movies={movies} />
            :
            <Box w='80vw' h='63vh' m='50px auto'>
              <Text 
                color={color}
                fontSize='1.4rem'
                textAlign='center'
              >There is no results of "<b><em>{keyword}</em></b>"</Text>
            </Box>
          }
        </>
      }
    </>
  )
}

export default ListOfSearch