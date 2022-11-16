import styled from 'styled-components';
import Typography from '../../../../components/Typography';

export const HeaderFilter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
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

export const SideContent = styled.section`
  display: flex;
  flex-direction: row;
`;

export const SideFilter = styled.div`
  width: 180px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
`