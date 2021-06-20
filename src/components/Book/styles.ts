import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 10rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.2s ease-in;
    &:hover {
      box-shadow: -4px 7px 7px -1px rgba(0, 0, 0, 0.28);
      margin: -4px -7px 0 0;
      border-radius: 0.4rem;
    }
  `}
`;

export const Cover = styled.img`
  width: 10.5rem;
  height: 15.3rem;
  object-fit: cover;
  cursor: pointer;
`;

export const Author = styled.p`
  ${({ theme }) => css`
    margin-top: 0.4rem;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
    color: ${theme.colors.textGray};
    font-size: ${theme.font.sizes.ultrasmall};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    margin-top: 0.9rem;
    font-weight: 700;
    color: ${theme.colors.textGray};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;
