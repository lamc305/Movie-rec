import Swal from "sweetalert2"
import { apiKey } from "./apiConfig"


function getMovieList(search, page) {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=${search}.desc&include_adult=false&include_video=True&page=${ page || 1 }&with_watch_monetization_types=flatrate`)
    .then(res => res.json())
    .then(res => {
      const data = res.results
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

export default getMovieList