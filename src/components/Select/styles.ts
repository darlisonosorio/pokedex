import styled from 'styled-components';

export const Select = styled.select
.attrs(({className = ''}) => ({
  className: className + ' form-select'
}))``;

export const Option = styled.option``;
