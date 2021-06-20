import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";
import { Item } from "../../types/volumes";
import { Link, useRouteMatch } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

type BookParams = {
  id: string;
};

const Details = () => {
  const [book, setBook] = useState<Item>();
  const [loading, setLoading] = useState(false);
  const { params } = useRouteMatch<BookParams>();

  const getBookDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<Item>(`/${params.id}`);
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    getBookDetails();
  }, [getBookDetails]);

  return (
    <S.Wrapper>
      <S.BackButton>
        <Link to="/search">
          <FiArrowLeft color={"#000"} size={24} />
        </Link>
      </S.BackButton>
      <S.BookCover>
        <img src={book?.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
      </S.BookCover>
      <S.BookTitle>{book?.volumeInfo.title}</S.BookTitle>
      <S.BookAuthors>{book?.volumeInfo.authors.join(", ")}</S.BookAuthors>
      <S.BookDescription
        dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description }}
      />
      <S.Categories>
        <strong>Categories:</strong> {book?.volumeInfo.categories?.join(", ")}
      </S.Categories>
      <S.InformationsWrapper>
        <S.AverageRating>
          Average rating: {book?.volumeInfo.averageRating}
        </S.AverageRating>
      </S.InformationsWrapper>
      <S.InformationsWrapper>
        <S.Language>Language: {book?.volumeInfo.language}</S.Language>
        <S.PageCount>Pages: {book?.volumeInfo.pageCount}</S.PageCount>
        <S.Price>
          Price: {book?.saleInfo?.listPrice?.amount}
          {book?.saleInfo?.listPrice?.currencyCode}
        </S.Price>
      </S.InformationsWrapper>

      <S.BuyAt href={book?.saleInfo?.buyLink}>Click to buy </S.BuyAt>
    </S.Wrapper>
  );
};

export default Details;
