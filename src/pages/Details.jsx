import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getMovieDetails from "../services/getMovieDetails"
import MovieDetails from "../components/MovieDetails"
import { Helmet } from "react-helmet"

function Details() {

  const [details, setDetails] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  useEffect(() => {
    getMovieDetails(id).then(setDetails)
  }, [id])

  return (
    <>
      {details &&
        <Helmet>
          <title>Movie Rec | {details.title}</title>
          <meta name='description' content={`Details of ${details.title}`} />
        </Helmet>}

      {details &&
        <MovieDetails details={details} backPage={backPage} />
      }
    </>
  )
}

export default React.memo(Details)