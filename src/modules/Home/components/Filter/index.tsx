import React, { FC, useState } from 'react';
import Search from '../../../../components/Search';
import Select, { SelectOption } from '../../../../components/Select';

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

  const changeSearch = (val: string) => {
    // TODO: modify list
    setSearch(val);
  };

  const changeOrder = (val: any) => {
    // TODO: modify list
    setOrder(val);
  };

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
      {children}
    </main>
  );
};

export default Filter;
