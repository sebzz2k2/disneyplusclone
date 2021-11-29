import React from "react";

function Header() {
  return (
    <div className="h-16 bg-gray-450 flex items-center py-0 px-9 ">
      <img src="/images/logo.svg" alt="disney-logo" className="w-20" />

      <div className="flex flex-1 ml-5 items-center">
        <a href="" className="flex items-center py-0 px-3">
          <img src="/images/home-icon.svg" alt="home" className="h-4" />
          <span className="text-sm tracking-wide">HOME</span>
        </a>

        <a href="" className="flex items-center py-0 px-3">
          <img src="/images/search-icon.svg" alt="search" className="h-4" />
          <span className="text-sm tracking-wide">SEARCH</span>
        </a>

        <a href="" className="flex items-center py-0 px-3">
          <img
            src="/images/watchlist-icon.svg"
            alt="watchlist"
            className="h-4"
          />
          <span className="text-sm tracking-wide">WATCHLIST</span>
        </a>

        <a href="" className="flex items-center py-0 px-3">
          <img src="/images/original-icon.svg" alt="original" className="h-4" />
          <span className="text-sm tracking-wide">ORIGINALS</span>
        </a>

        <a href="" className="flex items-center py-0 px-3">
          <img src="/images/movie-icon.svg" alt="movie" className="h-4" />
          <span className="text-sm tracking-wide">MOVIES</span>
        </a>
        <a href="" className="flex items-center py-0 px-3">
          <img src="/images/series-icon.svg" alt="series" className="h-4" />
          <span className="text-sm tracking-wide">SERIES</span>
        </a>
      </div>

      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="user-img"
        className="w-12 h-12 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Header;
