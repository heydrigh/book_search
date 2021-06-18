import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`;

export const header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 3rem;
  `}
`;
