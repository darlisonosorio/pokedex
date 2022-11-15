import styled from 'styled-components';

const rowStyle = `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.header`
  ${rowStyle}
  height: 84px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  background-color: var(--primary);
  z-index: 5;
`;

export const AvailableContent = styled.div.attrs({
  className: 'container clearfix'
})`
  ${rowStyle}
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  ${rowStyle}
  justify-content: flex-start;
  gap: 16px;
`;

export const RightContent = styled.div`
  ${rowStyle}
  justify-content: flex-end;
  gap: 16px;
`;

export const Title = styled.h1`
  color: var(--white-color);
  padding: 0;
  margin: 0;
  line-height: 100%;
`;

export const Icon = styled.i`
  color: var(--white-color);
`;