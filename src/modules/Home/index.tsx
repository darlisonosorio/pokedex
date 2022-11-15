import React from 'react';
import Header from '../../components/Header';
import Filter from './components/Filter';
import ListContent from './components/ListContent';

const HomePage = () => (
  <>
    <Header />
    <Filter>
      <ListContent />
    </Filter>
  </>
);

export default HomePage;
