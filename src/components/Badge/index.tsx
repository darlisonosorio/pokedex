import React from 'react';

import * as S from './styles';

type BadgeProps = {
  children?: any;
  color?: string;
  selected?: boolean;
  className?: string;
  style?: any;
};

const Badge = ({
  children,
  ...rest
}: BadgeProps): JSX.Element => {
  return (
    <S.Badge {...rest}>{children}</S.Badge>
  );
};

export default Badge;
