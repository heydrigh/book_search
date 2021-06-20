import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 5.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 37.5rem;
  `}
`;

export const BackButton = styled.div`
  width: 100%;
  align-items: flex-start;
  cursor: pointer;
`;

export const BookCover = styled.div`
  img {
    width: 15.1rem;
    height: 23.4rem;
  }
`;

export const BookTitle = styled.div`
  ${({ theme }) => css`
    margin-top: 3.1rem;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.textTitle};
    text-align: left;
    width: 100%;
  `}
`;

export const BookDescription = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.descriptionGray};
    font-size: ${theme.font.sizes.xsmall};
    text-align: left;
    width: 100%;
    margin-top: 1rem;
  `}
`;

export const BookAuthors = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondary};
    text-align: left;
    width: 100%;
    margin-top: 0.7rem;
  `}
`;

export const BookPublisher = styled.div``;

export const PageCount = styled.div``;

export const Categories = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.ultrasmall};
    text-align: left;
    width: 100%;
    margin-top: 1rem;
  `}
`;

export const InformationsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.ultrasmall};
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;

    div + div {
      margin: 1rem;
    }
  `}
`;

export const AverageRating = styled.div``;

export const Language = styled.div``;

export const Price = styled.div``;

export const BuyAt = styled.a`
  font-size: 1.4rem;
`;
