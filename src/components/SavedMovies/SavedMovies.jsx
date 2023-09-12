import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
        <div className='movies__divider'></div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
