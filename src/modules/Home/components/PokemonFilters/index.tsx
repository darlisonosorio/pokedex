import React, { FC, useCallback, useEffect, useState } from 'react';
import Badge from '../../../../components/Badge';
import Search from '../../../../components/Search';
import Select, { SelectOption } from '../../../../components/Select';
import Typography from '../../../../components/Typography';
import { filterPokemons } from '../../../../helpers/filterHelper';
import { Pokemon } from '../../../../model/Pokemon';
import { PokemonTypeEnum } from '../../../../model/PokemonTypeEnum';
import PokemonList from '../PokemonList';

import * as S from './styles';

type FilterProps = {
  data: Pokemon[];
};

const OrderOptions: SelectOption[] = [
  { value: '1', description: 'Menor número primeiro' },
  { value: '2', description: 'Maior número primeiro' },
  { value: '3', description: 'A - Z' },
  { value: '4', description: 'Z - A' },
];

const PokemonFilters: FC<FilterProps> = ({ data }) => {

  const [ search, setSearch ] = useState('');
  const [ tags, setTags ] = useState<PokemonTypeEnum[]>([]);
  const [ order, setOrder ] = useState('1');
  const [ favorites, setFavorites] = useState(false);
  const [ filteredList, setFilteredList] = useState(data);
  
  useEffect(() => {
    setFilteredList(filterPokemons(data, favorites, order, tags, search));
  }, [data, search, order, tags, favorites]);

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
    setFilteredList(filterPokemons(data, favorites, order, tags, search));
  }, [tags, filteredList, order, search, favorites, data]);

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
