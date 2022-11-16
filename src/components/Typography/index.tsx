import React from 'react';

import { P, TypographyVariant } from './styles';

type TypographyProps = {
  children?: React.ReactNode | string;
  variant?: TypographyVariant;
  color?: string;
  className?: string; 
  fullWidth?: boolean;
  style?: any;
}

const Typography = ({
  children,
  variant = 'body',
  color,
  ...rest
}: TypographyProps): JSX.Element => (
  <P variant={variant} color={color} {...rest}>{children}</P>
);

export default Typography;