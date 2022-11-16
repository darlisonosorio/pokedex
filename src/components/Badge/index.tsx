import React from 'react';

import * as S from './styles';

type BadgeProps = {
  children?: any;
  color?: string;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
  style?: any;
};

const Badge = ({
  children,
  onClick,
  ...rest
}: BadgeProps): JSX.Element => {
  return (
    <S.Badge onClick={onClick} {...rest}>{children}</S.Badge>
  );
};

export default Badge;
