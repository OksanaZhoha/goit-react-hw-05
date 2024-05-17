import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingFilms = async top => {
  const response = axios.get(`trending/movie/${top}?language=en-US`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmM0NDkzNWM4NTZlYTc4ZWVjZDMwNjMwOGYwNWU3MyIsInN1YiI6IjY2NDRlN2ViMjZkMjA1NGJkYTU4NGM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGbJL9j8HutrXwq5pxoOFSCUYbHIClxyISxmpvoMlEQ',
    },
  });

  return (await response).data.results;
};
