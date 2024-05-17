import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrailerFilms = async id => {
  const response = await axios.get(`/movie/${id}/videos`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmM0NDkzNWM4NTZlYTc4ZWVjZDMwNjMwOGYwNWU3MyIsInN1YiI6IjY2NDRlN2ViMjZkMjA1NGJkYTU4NGM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGbJL9j8HutrXwq5pxoOFSCUYbHIClxyISxmpvoMlEQ',
    },
  });
    
  return response.data;
};
