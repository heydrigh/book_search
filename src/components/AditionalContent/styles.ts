import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.links};
    font-size: ${theme.font.sizes.xxsmall};
    cursor: pointer;
  `}
`;
