import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchSearchFilms = async (query, page) => {
  const response = await axios.get(`search/movie`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmM0NDkzNWM4NTZlYTc4ZWVjZDMwNjMwOGYwNWU3MyIsInN1YiI6IjY2NDRlN2ViMjZkMjA1NGJkYTU4NGM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGbJL9j8HutrXwq5pxoOFSCUYbHIClxyISxmpvoMlEQ',
    },
    params: {
      query: query,
      page: page,
      include_adult: false,
      language: 'en-US',
    },
  });

  return response.data;
};
