import { useEffect, useState } from 'react'
import './App.css'
import { getPopularMoviesMock } from './service/movieService';
import type { MockMovie } from './dto/movie';

function App() {
  const [movies, setMovies] = useState<MockMovie[]>([]);

  useEffect(() => {
    getPopularMoviesMock().then(setMovies);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Filmes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-2 rounded text-white">
            <img
              src={
                movie.poster_path.startsWith('/')
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : movie.poster_path
              }
              alt={movie.title}
              className="rounded mb-2"
            />
            <h2 className="font-semibold">{movie.title}</h2>
            <p className="text-sm">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
