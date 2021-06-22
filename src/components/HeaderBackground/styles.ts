import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 29.2rem;
    width: 37.6rem;
    top: 0;
    position: absolute;
    background-color: ${theme.colors.headerBg};
    border-radius: 0 0 5rem 0;
    z-index: -1;
  `}
`;

export const OvarWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const RedBall = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${theme.colors.secondary};
    left: 5rem;
    top: 15rem;
  `}
`;

export const BlackBall = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 7rem;
    top: 14rem;
    height: 6.3rem;
    width: 6.3rem;
    border-radius: 50%;
    background-color: ${theme.colors.darkBlue};
  `}
`;
