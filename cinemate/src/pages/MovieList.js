import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useEffect } from "react";

export const MovieList = ({ apiPath,title }) => {
    const { data: movies } = useFetch(apiPath);
     useEffect(()=>
    {
      document.title=`${title} / CineHunt`;
    });

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.length > 0 ? (
                        movies.map((movie) => <Card key={movie.id} movie={movie} />)
                    ) : (
                        <p className="text-center w-full text-gray-400">Loading movies...</p>
                    )}
                </div>
            </section>
        </main>
    );
};
