import styled from 'styled-components';

export type TypographyVariant = 'body' | 'subtitle' | 'header';

type PProps = {
  variant: TypographyVariant;
  fullWidth?: boolean;
  color?: string;
}

const sizes = {
  'body': '1em',
  'subtitle': '1.3em',
  'header': '2em',
};

export const P = styled.p<PProps>`
  margin: 0;
  font-size: ${({ variant }) => sizes[variant]};
  font-weight: ${({ variant }) => variant === 'body' ? '400' : '600' };
  color: ${({ color }) => color ?? 'var(--text-color)'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;
