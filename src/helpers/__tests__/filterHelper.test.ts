import { Pokemon } from '../../model/Pokemon';
import { PokemonTypeEnum } from '../../model/PokemonTypeEnum';
import { filterPokemons } from '../filterHelper';

const data: Pokemon[] = [
  {
    national_number: '001',
    name: 'Pikachu',
    type: [ PokemonTypeEnum.ELECTRIC ],
    favorite: true,
    sprites: { normal: '', large: '', animated: '', }
  },
  {
    national_number: '002',
    name: 'Charizard',
    type: [ PokemonTypeEnum.FIRE ],
    favorite: false,
    sprites: { normal: '', large: '', animated: '', }
  },
  {
    national_number: '003',
    name: 'Squirtle',
    type: [ PokemonTypeEnum.WATER ],
    favorite: true,
    sprites: { normal: '', large: '', animated: '', }
  },
  {
    national_number: '004',
    name: 'Bulbasaur',
    type: [ PokemonTypeEnum.GROUND ],
    favorite: false,
    sprites: { normal: '', large: '', animated: '', }
  }
];

test('Filter by number', () => {
  const result = filterPokemons(data, false, '1', [], '001');
  expect(result.map(it => it.national_number)).toHaveLength(1);
  expect(result[0].name).toBe('Pikachu');
})

test('Filter by name', () => {
  const result = filterPokemons(data, false, '1', [], 'Bulbasaur');
  expect(result.map(it => it.national_number)).toHaveLength(1);
  expect(result[0].name).toBe('Bulbasaur');
});

test('Filter by tag', () => {
  const result = filterPokemons(data, false, '1', [PokemonTypeEnum.WATER], '');
  expect(result.map(it => it.national_number)).toHaveLength(1);
  expect(result[0].name).toBe('Squirtle');
});

test('Filter by favorites', () => {
  const result = filterPokemons(data, true, '1', [], '');
  expect(result.map(it => it.national_number)).toHaveLength(2);
  expect(result[0].name).toBe('Pikachu');
  expect(result[1].name).toBe('Squirtle');
});

test('Order number asc', () => {
  const result = filterPokemons(data, false, '1', [], '');
  expect(result.map(it => it.national_number)).toHaveLength(4);
  expect(result[0].name).toBe('Pikachu');
  expect(result[1].name).toBe('Charizard');
  expect(result[2].name).toBe('Squirtle');
  expect(result[3].name).toBe('Bulbasaur');
});


test('Order number desc', () => {
  const result = filterPokemons(data, false, '2', [], '');
  expect(result.map(it => it.national_number)).toHaveLength(4);
  expect(result[0].name).toBe('Bulbasaur');
  expect(result[1].name).toBe('Squirtle');
  expect(result[2].name).toBe('Charizard');
  expect(result[3].name).toBe('Pikachu');
});

test('Order A - Z', () => {
  const result = filterPokemons(data, false, '3', [], '');
  expect(result.map(it => it.national_number)).toHaveLength(4);
  expect(result[0].name).toBe('Bulbasaur');
  expect(result[1].name).toBe('Charizard');
  expect(result[2].name).toBe('Pikachu');
  expect(result[3].name).toBe('Squirtle');
});

test('Order Z - A', () => {
  const result = filterPokemons(data, false, '4', [], '');
  expect(result.map(it => it.national_number)).toHaveLength(4);
  expect(result[0].name).toBe('Squirtle');
  expect(result[1].name).toBe('Pikachu');
  expect(result[2].name).toBe('Charizard');
  expect(result[3].name).toBe('Bulbasaur');
});


