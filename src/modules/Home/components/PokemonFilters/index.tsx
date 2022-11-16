import React, { FC, useCallback, useEffect, useState } from 'react';
import Badge from '../../../../components/Badge';
import Search from '../../../../components/Search';
import Select, { SelectOption } from '../../../../components/Select';
import Typography from '../../../../components/Typography';
import { Pokemon } from '../../../../model/Pokemon';
import { PokemonTypeEnum } from '../../../../model/PokemonTypeEnum';
import PokemonList from '../PokemonList';

import * as S from './styles';

type FilterProps = {
  data: Pokemon[];
};

const OrderOptions: SelectOption[] = [
  {
    value: 1,
    description: 'Menor número primeiro',
  },
  { value: 2, description: 'Maior número primeiro' },
  { value: 3, description: 'A - Z' },
  { value: 4, description: 'Z - A' },
];

type CompareMethod = (a: Pokemon, b: Pokemon) => any;

const compareMethods: CompareMethod[] = [
  (a, b) => b.national_number.localeCompare(a.national_number),
  (a, b) => a.national_number.localeCompare(b.national_number),
  (a, b) => b.name.localeCompare(a.name),
  (a, b) => a.name.localeCompare(b.name),
]

const PokemonFilters: FC<FilterProps> = ({ data }) => {

  const [ search, setSearch ] = useState('');
  const [ tags, setTags ] = useState<PokemonTypeEnum[]>([]);
  const [ order, setOrder ] = useState(OrderOptions[0].value);
  const [ favorites, setFavorites] = useState(false);
  const [ filteredList, setFilteredList] = useState(data);

  
  const getFilteredData = () => {
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
    return filtered.sort(compareMethods[order - 1]);
  };

  useEffect(() => {
    updateFilteredList();
  }, [data, search, order, favorites]);

  const updateFilteredList = () => {
    setFilteredList(getFilteredData());
  };

  const changeSearch = (val: string) => {
    setSearch(val);
  };

  const changeOrder = (val: any) => {
    setOrder(val);
  };

  const changeFavorites = () => {
    setFavorites(!favorites);
  };

  const selectTag = useCallback((tag: PokemonTypeEnum) => {
    const indexOfTag = tags.indexOf(tag);
    if (indexOfTag === -1) {
      tags.push(tag);
    } else {
      tags.splice(indexOfTag, 1);
    }
    setTags(tags);
    updateFilteredList();
  }, [tags, filteredList, data]);

  return (
    <main className="wrapper container">
      <S.HeaderFilter>
        <S.FilterContent className="col-6">
          <Search
            value={search}
            placeholder="Pesquisar por nome ou número"
            onChange={changeSearch}
          />
        </S.FilterContent>
        <S.FilterContent className="col-3">
          <S.SelectLabel>Ordenar Por</S.SelectLabel>
          <Select
            value={order}
            options={OrderOptions}
            onChange={(event) => changeOrder(event.target.value)}
          />
        </S.FilterContent>
      </S.HeaderFilter>

      <S.SideContent>
        <S.SideFilter className="col-2">
          <Typography fullWidth>Filtrar por Tipo</Typography>
          <S.Tags>
            {Object.values(PokemonTypeEnum).map(tag => (
              <Badge
                key={tag}
                onClick={() => selectTag(tag)}
                selected={tags.includes(tag)}
              >
                {tag}
              </Badge>
            ))}
          </S.Tags>

          <Typography fullWidth>Filtrar Favoritos</Typography>
          <div className="form-check form-switch">
            <S.Switch
              checked={favorites}
              onChange={changeFavorites}
            />
          </div>
        </S.SideFilter>

        <S.ListContent className="col-10">
          <PokemonList data={filteredList} />
        </S.ListContent>

      </S.SideContent>
    </main>
  );
};

export default PokemonFilters;
