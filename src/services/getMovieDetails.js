import Swal from "sweetalert2"
import { apiKey } from "./apiConfig"

function getMovieDetails(id){
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  return fetch(URL)
    .then(res => res.json())
    .then(res => {
      const data = res
      return data
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
}

export default getMovieDetails