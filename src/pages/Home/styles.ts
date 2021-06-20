import styled, { css, keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 37.5rem;
    align-items: center;
    background-color: ${theme.colors.primary};
    height: 100vh;
    padding: 5rem 2rem 2rem 2rem;

    animation: ${appearFromLeft} 1s ease-in;
  `}
`;

export const GreetingWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Username = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;
