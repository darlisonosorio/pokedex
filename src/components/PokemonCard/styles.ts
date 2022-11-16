import styled from "styled-components";
import { PokemonTypeEnum } from "../../model/PokemonTypeEnum";

type CardImageProps = {
  favorite?: boolean;
}

export const CardImage = styled.figure.attrs({
  className: 'rounded',
})<CardImageProps>`
  position: relative;
  background-color: var(--light-gray-color);
  margin-bottom: 4px;
  min-width: 100%;
  min-height: 165px;
  font-weight: 500;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: red;

  ::after { 
    position: absolute;
    top: 8px;
    right: 8px;
    content: '\f004';
    font-family: FontAwesome;
    font-weight: normal;
    text-decoration:none;

    ${({ favorite }) => favorite ? `
      visibility: visible;
      color: var(--primary);
    ` : `
      visibility: hidden;
      color: transparent;
    `}
  }

  &:hover::after {
    visibility: visible;
  }
`;

export const CardBody = styled.section``;

export const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

type CardBadgeProps = {
  type: PokemonTypeEnum;
}

export const CardBadge = styled.span.attrs({
  className: 'badge',
})<CardBadgeProps>`
  background-color: ${({ type }) => `var(--${type.toLowerCase()}-color)`};
`;