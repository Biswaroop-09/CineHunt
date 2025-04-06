import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {Card} from "../components";
import { useEffect } from "react";

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm = searchParams.get("q");
   
  const{data:movies}=useFetch(apiPath,queryTerm);

   useEffect(()=>
  {
    document.title=`Search result fot ${queryTerm} / CineHunt`;
  });
  return (
    <main>
      <section>
        <p className="text-2xl text-grey-700 dark:text-white">{movies.length===0?`No results Found for '${queryTerm}'`:`Result for '${queryTerm}'`}

        </p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}
       
      </div>
    </section>
  </main>
  )
}


