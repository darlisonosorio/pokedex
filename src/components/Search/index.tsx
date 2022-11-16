import React from 'react';
import Input from '../Input';

import * as S from './styles';

type SearchProps = {
  placeholder: string,
  value: string,
  onChange: (val: string) => void,
  className?: string,
  style?: any,
}

const Search = ({
  placeholder,
  value,
  onChange,
  ...rest
}: SearchProps) => {
  const changeSearch = (event: any) => {
    onChange(event.target.value);
  };

  const clearSearch = () => {
    onChange('');
  };

  return (
    <S.Wrapper>
      <Input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={changeSearch}
        {...rest}
      />
      {value && value.length ? (
        <S.InputIcon
          className="icon-close icon-large"
          onClick={clearSearch}
        />
      ): (
        <S.InputIcon className="icon-search icon-large" />
      )}
    </S.Wrapper>
  );
};

export default Search;
