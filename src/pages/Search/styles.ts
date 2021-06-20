import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 5rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `}
`;

export const BooksWrapper = styled.div`
  margin-top: 4.2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.9rem 1.7rem;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

export const LoadMore = styled(Button)`
  ${({ theme }) => css`
    && {
      margin: 2rem 0;
      text-transform: none;
      font-size: 1.6rem;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.secondaryHover};
      }
    }
  `}
`;
