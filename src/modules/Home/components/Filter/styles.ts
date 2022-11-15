import styled from 'styled-components';
import Typography from '../../../../components/Typography';

export const HeaderFilter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectLabel = styled(Typography)`
  white-space: nowrap;
  margin-right: 16px;
`;
