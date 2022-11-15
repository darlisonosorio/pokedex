import React from 'react';
import Pokeball from '../../assets/pokeball.svg';
import SynviaA from '../../assets/synviaA.svg';

import * as S from './styles';

type HeaderProps = {
  title?: String;
};

const Header = ({ title = 'Pokédex' }: HeaderProps): JSX.Element => (
  <S.Wrapper>
    <S.AvailableContent>
      <S.LeftContent>
        <img src={Pokeball} alt="Pokeball Logo" />
        <S.Title>{ title }</S.Title>
      </S.LeftContent>
      <S.RightContent>
        <img src={SynviaA} alt="User Logo" />
        <S.Icon className="icon-signout icon-2x" aria-hidden="true" />
      </S.RightContent>
    </S.AvailableContent>
  </S.Wrapper>
);

export default Header;
