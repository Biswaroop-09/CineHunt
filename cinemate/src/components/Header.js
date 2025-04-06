import { useState , useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );
  const navigate=useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");

    document.documentElement.classList.toggle("dark");
  };

  const activeClass = "text-base text-blue-900 dark:text-blue-400 font-semibold hover:text-blue-700";
  const inActiveClass = "text-base text-gray-900 dark:text-gray-300 hover:text-blue-500";

    const handleSubmit=(e)=>{
      e.preventDefault();
      const queryTerm=e.target.search.value;
      e.target.reset();

      return navigate(`/search?q=${queryTerm}`);

    }
  return (
    <header>
      <nav className="bg-white border-b-2 dark:bg-gray-900 border-gray-200 w-full  dark:border-b-1 dark:border-gray-900">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={Logo} className="h-10" alt="Cinemate Logo" />
            <span className="text-2xl font-semibold text-black dark:text-white">CineHunt</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/toprated" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? (
                 <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 4V2M12 22v-2M4.22 4.22l-1.42-1.42M19.78 19.78l1.42 1.42M2 12H4M22 12h-2M4.22 19.78l-1.42 1.42M19.78 4.22l1.42-1.42M12 6a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M17.293 13.293a8 8 0 11-9.586-9.586 7 7 0 109.586 9.586z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Search Bar */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSubmit}>
              <input type="text" id="search-navbar" name="search"
                className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:text-gray-800 dark:placeholder-gray-600"
                placeholder="Search..."
                autoComplete="off"
              />

              </form>

              
              <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200">
            <ul className="flex flex-col items-center p-4 space-y-4">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>Home</NavLink></li>
              <li><NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>Popular</NavLink></li>
              <li><NavLink to="/movies/toprated" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>Top Rated</NavLink></li>
              <li><NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>Upcoming</NavLink></li>
              <li className="w-full px-4">
                <form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." autoComplete="off"/>
                </form>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
