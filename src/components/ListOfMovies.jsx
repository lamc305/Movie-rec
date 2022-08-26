import { Grid } from "@chakra-ui/react"
import React from "react"
import Poster from "./Poster"

function ListOfMovies({ movies }) {
  return (
    <Grid templateColumns='repeat(auto-fill, 250px)' w='90vw' m='50px auto' justifyContent='center' minH='100vh'>
      {movies.map(({ id, poster_path, original_title, release_date, vote_average }) => (
        <Poster
          key={id}
          id={id}
          poster_path={poster_path}
          original_title={original_title}
          release_date={release_date}
          vote_average={vote_average}
        />
      ))}
    </Grid>
  )
}

export default React.memo(ListOfMovies)