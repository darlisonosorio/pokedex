import styled from 'styled-components';

export type TypographyVariant = 'body' | 'subtitle' | 'header';

type PProps = {
  variant: TypographyVariant;
  color?: string;
}

const sizes = {
  'body': '1em',
  'subtitle': '1.4em',
  'header': '2em',
};

export const P = styled.p<PProps>`
  margin: 0;
  font-size: ${({ variant }) => sizes[variant]};
  color: ${({ color }) => color ?? 'var(--text-color)'}; 
`;
