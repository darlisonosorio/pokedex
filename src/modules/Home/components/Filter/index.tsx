import React, { FC, useState } from 'react';
import Badge from '../../../../components/Badge';
import Search from '../../../../components/Search';
import Select, { SelectOption } from '../../../../components/Select';
import Typography from '../../../../components/Typography';

import * as S from './styles';

type FilterProps = {
  children?: React.ReactNode;
};

const OrderOptions: SelectOption[] = [
  { value: 1, description: 'Menor número primeiro' },
  { value: 2, description: 'Maior número primeiro' },
  { value: 3, description: 'A - Z' },
  { value: 4, description: 'Z - A' },
];

const Filter: FC<FilterProps> = ({ children }) => {
  const [ search, setSearch ] = useState('');
  const [ order, setOrder ] = useState(OrderOptions[0].value);
  const [ favorites, setFavorites] = useState(false);
  const tags = [
    'Bug', 'Dark', 'Dragon', 'Eletric', 'Fairy', 'Fighter', 'Fire', 'Flying',
  ];

  const changeSearch = (val: string) => {
    // TODO: modify list
    setSearch(val);
  };

  const changeOrder = (val: any) => {
    // TODO: modify list
    setOrder(val);
  };

  const changeFavorites = (val: any) => {
    setFavorites(val);
  }

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
        <S.SideFilter>
          <Typography fullWidth>Filtrar por Tipo</Typography>
          <S.Tags>
            {tags.map(it => (
              <Badge key={it} >{it}</Badge>
            ))}
          </S.Tags>

          <Typography fullWidth>Filtrar Favoritos</Typography>
          <div className="form-check form-switch">
            <input
              type="checkbox"
              checked={favorites}
              onChange={() => changeFavorites(!favorites)}
              className="form-check-input"
              role="switch"
            />
          </div>
        </S.SideFilter>

        {children}

      </S.SideContent>
    </main>
  );
};

export default Filter;
