const API_KEY='a7392a413c5ebbcf44c55646b5989568'

export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-ES`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-ES`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37&language=es-ES`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-ES`,
    fetchTV:`/discover/movie?api_key=${API_KEY}&with_genres=10770&language=es-ES`,
}
