import * as S from "./styles";
import noCover from "../../assets/images/nocover.jpg";
import Tooltip from "@material-ui/core/Tooltip";

export type BookProps = {
  coverURL: string;
  coverAlt: string;
  title: string;
  author: string;
};

const Book = ({ author, coverAlt, coverURL, title }: BookProps) => {
  return (
    <S.Wrapper>
      <S.Cover src={coverURL ? coverURL : noCover} alt={coverAlt} />
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
    </S.Wrapper>
  );
};

export default Book;
