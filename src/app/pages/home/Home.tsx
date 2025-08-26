import { useEffect, useState } from 'react'
import './Home.scss'
import { 
  //getPopularMovies, 
  getPopularMovies$, 
  //getPopularMoviesMock 
} from '../../../service/movieService';
import type { 
  //MockMovie, 
  //PopularMovie, 
  PopularMovieResult } from '../../../dto/movie';
import { Subscription } from "rxjs";

function Home() {
  ///const [movies, setMovies] = useState<MockMovie[]>([]);
  const [popularMoviesObservable, setPopularMoviesObservable] = useState<PopularMovieResult[]>();
  ///const [popularMoviesPromise, setPopularMoviesPromise] = useState<PopularMovieResult[]>();

  useEffect(() => {
    ///getPopularMoviesMock().then(setMovies);
    // getPopularMovies()
    //   .then(setPopularMoviesPromise)
    //   .finally();
    
    const sub: Subscription = getPopularMovies$(1, "pt-BR")
      .subscribe(setPopularMoviesObservable);
    return () => sub.unsubscribe();
  }, []);

  // MOCK MOVIES
  // return (
  //   <div className="p-4">
  //     <h1 className="text-2xl font-bold mb-4">Catálogo de Filmes</h1>
  //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  //       {popularMovies[0].results?.map((movie) => (
  //         <div key={movie.id} className="bg-gray-800 p-2 rounded text-white">
  //           <img
  //             src={
  //               movie.poster_path.startsWith('/')
  //                 ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  //                 : movie.poster_path
  //             }
  //             alt={movie.title}
  //             className="rounded mb-2"
  //           />
  //           <h2 className="font-semibold">{movie.title}</h2>
  //           <p className="text-sm">{movie.release_date}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <>
      {/* <h1>Movie Catalog</h1>
      <h4>By api with Observable</h4>
      { popularMoviesPromise
        ? <ul>
          {popularMoviesPromise.map((m) => (
            <li key={m.id}>{m.title}</li>
          ))}
        </ul> 
        : <span>No data</span>
      } */}

      <div className="p-4">
       <h1 className="text-2xl font-bold mb-4">Catálogo de Filmes</h1>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {popularMoviesObservable?.map((movie) => (
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
    </>
  )
}

export default Home
