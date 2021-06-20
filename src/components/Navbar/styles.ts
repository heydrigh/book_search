import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37.5rem;
    height: 6rem;
    background-color: ${theme.colors.white};
    border-radius: 0.6rem;
  `}
`;
