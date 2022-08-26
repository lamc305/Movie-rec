import Swal from "sweetalert2"
import { apiKey } from "./apiConfig"

function getMovieSearch(keyword){
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`
  return  fetch(URL)
    .then(res => res.json())
    .then(res => {
      const data = res.results
      return data
    })
    .catch(() => (
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    ))

}

export default getMovieSearch