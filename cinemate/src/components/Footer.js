import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      

<footer className="bg-white dark:bg-gray-900 shadow-sm m-4 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-400  sm:text-center ">© 2030 <Link to="/" className="hover:underline">CineHunt</Link>. All Rights Reserved ~ Biswaroop
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="https://www.instagram.com/biswa_boozy_fox/" rel="noreferrer" className=" hover:text-blue-700 me-4 md:me-6">Instagram</Link>
        </li>
        <li>
            <Link to="https://www.linkedin.com/in/biswaroop-joardar-76823b247/" rel="noreferrer" className=" hover:text-blue-700 me-4 md:me-6">LinkedIn</Link>
        </li>
         <li>
            <Link to="https://github.com/Biswaroop-09" rel="noreferrer" className=" hover:text-blue-700">GitHub</Link>
        </li>
    </ul>
    </div>
</footer>

    </footer>
  )
}

