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

export const SwipperWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  .slider {
    width: 15rem;
  }
`;

export const OvarWrapper = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
`;
