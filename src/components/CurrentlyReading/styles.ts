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

export const BookInfos = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 3rem;
    width: 33.1rem;
    height: 10rem;
    margin-left: -4rem;
    background-color: ${theme.colors.green};
    border-radius: 0.3rem;
    box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  `}
`;

export const BookDetails = styled.div`
  margin-left: 13rem;
`;

export const BookTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export const BookAuthor = styled.p`
  font-family: "Roboto", sans-serif;
  color: #74776d;
  margin-top: 0.5rem;
`;

export const BookPages = styled.div`
  ${({ theme }) => css`
    margin-top: 2.2rem;
    color: ${theme.colors.text};
  `}
`;

export const BookCover = styled.div`
  margin-top: -1.5rem;
  margin-left: 3rem;
  overflow: hidden;
  position: absolute;
`;
