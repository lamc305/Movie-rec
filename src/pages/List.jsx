import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ListOfMovies from '../components/ListOfMovies'
import getMovieList from '../services/getMovieList'

function List() {

  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  const { page, search } = useParams()

  useEffect(() => {
    getMovieList(search, page).then(setMovies)
  }, [page])

  const changeNextPage = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    navigate(`/list/${search}/${Number(page) + 1}`)
  }
  const changeBackPage = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(`/list/${search}/${Number(page) - 1}`)
  }

  if (movies === undefined) return <Navigate to='*' />

  return (
    <>  
      <Helmet>
        <title>Movie Rec | {search}</title>
        <meta name='description' content={`List of ${search} movies `} />
      </Helmet>
      <ListOfMovies movies={movies} />
      {movies && 
      <HStack w='100vw' pb='50px' justifyContent='center'>
        {page > 2 &&
          <Button
            onClick={changeBackPage}
            leftIcon={<ArrowBackIcon />}
          >
            Back Page
          </Button>}
        <Button
          borderRadius='full'
          cursor='default'
        >
          {page}
        </Button>
        {page < 500 &&
          <Button
            rightIcon={<ArrowForwardIcon />}
            onClick={changeNextPage}
          >
            Next Page
          </Button>
        }
      </HStack>}
    </>
  )
}

export default List