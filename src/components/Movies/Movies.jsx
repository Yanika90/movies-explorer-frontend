import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
        <MoreMoviesButton />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
