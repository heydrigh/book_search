import * as S from "./styles";
import Title from "../Title";
import AditionalContent from "../AditionalContent";
import bookCover from "../../assets/images/bookCover.png";

const CurrentlyReading = () => {
  return (
    <S.Wrapper>
      <S.header>
        <Title text="Currently Reading" />
        <AditionalContent text="All" />
      </S.header>
      <S.BookInfos>
        <S.BookCover>
          <img src={bookCover} alt="book cover" />
        </S.BookCover>
        <S.BookDetails>
          <S.BookTitle>Originals</S.BookTitle>
          <S.BookAuthor>by Adam Grant</S.BookAuthor>
          <S.BookPages>Chapter 2 From 9</S.BookPages>
        </S.BookDetails>
      </S.BookInfos>
    </S.Wrapper>
  );
};

export default CurrentlyReading;
