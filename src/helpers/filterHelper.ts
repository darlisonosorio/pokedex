import { Pokemon } from "../model/Pokemon";
import { PokemonTypeEnum } from "../model/PokemonTypeEnum";

export type CompareMethod = (a: Pokemon, b: Pokemon) => any;

const compareMethods = (order: any): CompareMethod => {
  switch(order) {
    case'2': 
      return (a: Pokemon, b: Pokemon) => a.national_number.localeCompare(b.national_number);
    case '3':
      return (a: Pokemon, b: Pokemon) => b.name.localeCompare(a.name);
    case '4':
      return (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name);
    default:
      return (a: Pokemon, b: Pokemon) => b.national_number.localeCompare(a.national_number);
  }
};


export const filterPokemons = (
  data: Pokemon[],
  favorites: boolean,
  order: any,
  tags: PokemonTypeEnum[],
  search: String
) => {
  const filters: ((a: Pokemon) => boolean)[] = [];
  if (favorites) {
    filters.push(it => it.favorite === true);
  }

  if (tags.length) {
    filters.push(it => it.type.some(type => tags.includes(type)));
  }

  if (search.trim().length) {
    const lowercaseSearch = search.toLocaleLowerCase();
    filters.push(it =>
      it.national_number.toLowerCase().includes(lowercaseSearch) ||
      it.name.toLowerCase().includes(lowercaseSearch)
    );
  }

  const filtered = filters.length
    ? data.filter(it => filters.every(filter => filter(it)))
    : data;
  
  return filtered.sort(compareMethods(order));
};
