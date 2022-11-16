import styled from 'styled-components';

type BadgeProps = {
  color?: string;
  className?: string;
  selected?: boolean;
};

export const Badge = styled.div.attrs(
({ className }) => ({
  className: className + ' badge',
}))<BadgeProps>`
  font-size: 1em;
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
  border-radius: 24px;
  border: 1px solid ${({ color }) => color ?? 'var(--primary)'};
  ${({ selected, color }) => selected ? `
    background-color: ${color ?? 'var(--primary)'};
    color: var(--white-color);
  ` : `
    background-color: var(--white-color);
    color: ${color ?? 'var(--primary)'};
  `}
`;