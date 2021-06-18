import styled, { css } from "styled-components";

export const Wrapper = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.small};
  `}
`;
