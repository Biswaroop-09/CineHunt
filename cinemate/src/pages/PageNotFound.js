import { useEffect } from "react";
import {Link} from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png"

export const PageNotFound = () => {



  useEffect(()=>
{
  document.title=`Page Not Found / CineHunt`;
});
  return (
    <main>
     <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-grey-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
          <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found"/>
      </div>
      </div>
      <div  className="flex justify-center my-4">

        <Link to="/">
        <button className="w-64 text-xl text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow rounded-lg px-5 py-2.5">
        Back to Cinemate
        </button>
        </Link>

      </div>
     </section>
    </main>
  )
}


