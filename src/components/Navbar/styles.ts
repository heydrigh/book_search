import styled, { css, keyframes } from "styled-components";

const hoverAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 28%;
  }
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 17.5rem;
    height: 6rem;
    background-color: ${theme.colors.white};
    border-radius: 0.6rem;
  `}
`;

export const LinkButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    cursor: pointer;
    border-right: 1px solid #bfbebf;
    position: relative;
    & + & {
      border-right: 0;
    }
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        margin-top: 2.8rem;
        background-color: ${theme.colors.iconGray};
        animation: ${hoverAnimation} 0.3s forwards;
      }
    }
  `}
`;
