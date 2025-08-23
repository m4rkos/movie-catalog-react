import axios from 'axios';
import type { MockMovie, PopularMovie } from '../dto/movie';

const API_KEY = import.meta.env.TOKEN; // cria uma key gratuita no site da TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<PopularMovie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};

export const getPopularMoviesMock = async (): Promise<MockMovie[]> => {
  return Promise.resolve([
    {
      id: 1,
      title: 'Matrix',
      poster_path: '/matrix.jpg',
      overview: 'Neo descobre a verdade sobre o mundo...',
      release_date: '1999-03-31',
    },
    {
      id: 2,
      title: 'Interestelar',
      poster_path: '/interestelar.jpg',
      overview: 'Viagem espacial para salvar a humanidade.',
      release_date: '2014-11-07',
    },
  ]);
};