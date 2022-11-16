import React from 'react';
import { Pokemon } from '../../model/Pokemon';

import * as S from './styles';

export interface SelectOption {
  value: any;
  description: string;
}

type SelectProps = {
  value: any;
  options: SelectOption[];
  onChange?: (event: any) => void;
  placeholder?: string;
  className?: string;
  style?: any;
}

const Select = ({
  value,
  options,
  onChange,
  placeholder,
  ...rest
}: SelectProps): JSX.Element => (
  <S.Select
    value={value}
    onChange={onChange}
    aria-label={placeholder}
    {...rest}
  >

    {placeholder && placeholder.trim.length ? (
      <S.Option value="">{placeholder}</S.Option>
    ) : null }

    {options.map(it => (
      <S.Option
        key={it.value}
        value={it.value}
      >
        {it.description}
      </S.Option>
    ))}

  </S.Select>
);

export default Select;
