import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../Data/Data";
import MovieCard from "../Components/MovieCard.jsx";
import MovieGallery from "../Components/MovieGallery.jsx";
import SearchBox from "../Components/SearchBox.jsx";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">
        🏠 หน้าแรก
      </h1>

      <p className="mt-2 text-slate-500">
        ยินดีต้อนรับสู่ MovieHub
      </p>

      <div className="mx-auto mt-8 max-w-5xl">

        <MovieCard
          title={movies[0].title}
          year={movies[0].year}
        />

        <MovieCard
          title={movies[1].title}
          year={movies[1].year}
        />

        <MovieCard
          title={movies[2].title}
          year={movies[2].year}
        />

        <MovieCard
          title={movies[3].title}
          year={movies[3].year}
        />

        <MovieCard
          title={movies[4].title}
          year={movies[4].year}
        />

        <MovieCard
          title={movies[5].title}
          year={movies[5].year}
        />

        <MovieCard
          title={movies[6].title}
          year={movies[6].year}
        />

        <MovieCard
          title={movies[7].title}
          year={movies[7].year}
        />

        <MovieCard
          title={movies[8].title}
          year={movies[8].year}
        />

        <MovieCard
          title={movies[9].title}
          year={movies[9].year}
        />

      </div>
    <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
    <div ClassName="mx-auto mt-8 max-w-md">
      <MovieGallery />
    </div>
    </div>
  );
}

export default Home;
