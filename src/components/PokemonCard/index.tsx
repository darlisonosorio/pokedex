import React, { useCallback, useState } from 'react';
import { Pokemon } from '../../model/Pokemon';
import Typography from '../Typography';

import * as S from './styles';

type PokemonCardProps = {
  data: Pokemon;
  className?: string;
  style?: any;
};

const PokemonCard = ({
  data,
  ...rest
}: PokemonCardProps): JSX.Element => {
  const [favorite, setFavorite] = useState(data.favorite ?? false);

  const changeFavorite = useCallback(() => {
    data.favorite = !(data.favorite ?? false);
    setFavorite(data.favorite);
  }, [data]);

  return (
    <div {...rest}>
      <S.CardImage
        favorite={data.favorite}
        onClick={changeFavorite}
      >
        <img
          src={data.sprites?.normal}
          className="card-img-top"
          alt="Pokemon Image"
        />
      </S.CardImage>
      <S.CardBody>
        <Typography color="#999999">N° {data.national_number}</Typography>
        <Typography variant="subtitle" color="#000000">N° {data.name}</Typography>
        <S.CardTags>
          {data.type ? data.type.map(type => (
            <S.CardBadge type={type}>{type}</S.CardBadge>
          )) : null}
        </S.CardTags>
      </S.CardBody>
    </div>
  );
};

export default PokemonCard;
