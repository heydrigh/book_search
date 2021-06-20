import * as S from "./styles";
import noCover from "../../assets/images/nocover.jpg";

export interface BookProps {
  coverURL: string;
  coverAlt: string;
  title: string;
  author: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Book = ({ author, coverAlt, coverURL, title, onClick }: BookProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Cover src={coverURL ? coverURL : noCover} alt={coverAlt} />
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
    </S.Wrapper>
  );
};

export default Book;
