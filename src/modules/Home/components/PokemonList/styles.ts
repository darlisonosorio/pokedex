import styled from 'styled-components';
import PokemonCard from '../../../../components/PokemonCard';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 48px 24px;
  padding: 16px;
`;

export const Card = styled(PokemonCard)`
  width: 165px;
`;