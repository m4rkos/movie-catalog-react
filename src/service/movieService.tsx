import { defer, of, type Observable } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
import type { MockMovie, PopularMovieResult } from '../dto/movie';
import { http } from "./http";
import axios from "axios";

export const getPopularMovies = async (): Promise<PopularMovieResult[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movie/popular`, {
      params: {
        api_key: import.meta.env.VITE_KEY,
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

// Observable com paginação e idioma opcionais
export const getPopularMovies$ = ( page = 1, language = "pt-BR" ): Observable<PopularMovieResult[]> =>
  defer(() => http.get('/movie/popular', {params: { page, language } })).pipe(
    map((res) => res.data.results as PopularMovieResult[]),
    retry({ count: 2, delay: 800 }), // tenta mais 2x
    catchError((err) => {
      console.error("Erro ao buscar filmes populares:", err);
      return of<PopularMovieResult[]>([]); // fallback seguro
    })
  );

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