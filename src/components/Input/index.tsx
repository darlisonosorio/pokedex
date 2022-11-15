import React from 'react';

import * as S from './styles';

type InputProps = {
  type?: string;
  value?: string | number;
  onChange?: (event: any) => void;
  placeholder?: string;
  className?: string; 
  name?: string;
  style?: any;
}

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  ...rest
}: InputProps): JSX.Element => (
  <S.Input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label={placeholder}
    {...rest}
  />
);

export default Input;