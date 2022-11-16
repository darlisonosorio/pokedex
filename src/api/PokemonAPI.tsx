import axios from 'axios';
import { Pokemon } from '../model/Pokemon';
import { PokemonResponse } from '../model/PokemonResponse';

const API_URL = 'https://unpkg.com/pokemons@1.1.0/pokemons.json';

export const getPokemons = async () => {
	try {
		const res = await axios.get<PokemonResponse>(
      API_URL,
      {
        headers: {},
        params: {}
		  }
    );
    // remove duplications
    return res.data.results.reduce<Pokemon[]>((a,b) => {
      if (!a.length || a[a.length -1].national_number !== b.national_number) {
        a.push(b);
      }
      return a;
    }, []);
	} catch (err) {
    return [];
	}
};