import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../api/PokemonAPI';
import Header from '../../components/Header';
import { Pokemon } from '../../model/Pokemon';
import PokemonFilters from './components/PokemonFilters';

const HomePage = () => {
  const [list, setList] = useState<Pokemon[]>([]);

  useEffect(() => {
    loadList();
  }, []); 

  const loadList = async () => {
    const result = await getPokemons();
    setList(result);
  }
  
  return (
    <>
      <Header />
      <PokemonFilters data={list} />
    </>
  );
}

export default HomePage;
