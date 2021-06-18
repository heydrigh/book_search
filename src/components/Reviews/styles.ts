import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4.5rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 3rem;
  `}
`;

export const VideoWrapper = styled.div`
  margin-top: 1.5rem;
  img {
    border-radius: 0.5rem;
  }
`;
