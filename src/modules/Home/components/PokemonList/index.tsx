import React from 'react';
import { Pokemon } from '../../../../model/Pokemon';

import * as S from './styles';

type PokemonListProps = {
  data: Pokemon[];
};

const PokemonList = ({ data }: PokemonListProps): JSX.Element => (
  <S.Wrapper>
    {data.map(it => (
      <S.Card
        data={it}
        key={it.national_number}
      />
    ))}
  </S.Wrapper>
);

export default PokemonList;
