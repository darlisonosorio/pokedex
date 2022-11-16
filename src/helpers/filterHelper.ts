import { Pokemon } from "../model/Pokemon";
import { PokemonTypeEnum } from "../model/PokemonTypeEnum";

export type CompareMethod = (a: Pokemon, b: Pokemon) => any;

const compareMethods:Map<String, CompareMethod> = new Map([
  ['1', (a: Pokemon, b: Pokemon) => a.national_number.localeCompare(b.national_number) ],
  ['2', (a: Pokemon, b: Pokemon) => b.national_number.localeCompare(a.national_number) ],
  ['3', (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name) ],
  ['4', (a: Pokemon, b: Pokemon) => b.name.localeCompare(a.name) ],
]);


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

  const filtered = data.filter(it => filters ? filters.every(filter => filter(it)) : true);
  return filtered.sort(compareMethods.get(order));
};
