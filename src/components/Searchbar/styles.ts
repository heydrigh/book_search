import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 33.6rem;
    height: 4.8rem;
    border-radius: ${theme.border.searchBox};
    position: relative;
    img {
      position: absolute;
      top: 1.6rem;
      left: 1.5rem;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.border.searchBox};
    padding-left: 4.1rem;
    &:placeholder {
      color: ${theme.colors.placeholder};
    }
    &:focus {
      outline: none;
    }
  `}
`;
