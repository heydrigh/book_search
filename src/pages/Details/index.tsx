import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";
import { Item } from "../../types/volumes";
import { Link, useRouteMatch } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import { CircularProgress } from "@material-ui/core";
import Navbar from "../../components/Navbar";

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
      {loading && <CircularProgress />}

      <S.BookCover>
        <img src={book?.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
      </S.BookCover>
      <S.BookTitle>{book?.volumeInfo.title}</S.BookTitle>
      <S.BookAuthors>
        {!!book?.volumeInfo.authors
          ? book?.volumeInfo.authors.join(", ")
          : "Unknown author"}
      </S.BookAuthors>
      <S.BookDescription
        dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description }}
      />
      {!!book?.volumeInfo.categories && (
        <S.Categories>
          <strong>Categories:</strong> {book?.volumeInfo.categories?.join(", ")}
        </S.Categories>
      )}

      <S.InformationsWrapper>
        {book?.volumeInfo.averageRating && (
          <S.AverageRating>
            Average rating: {book?.volumeInfo.averageRating}
          </S.AverageRating>
        )}
      </S.InformationsWrapper>
      <S.InformationsWrapper>
        <S.Language>
          Language: <strong>{book?.volumeInfo.language}</strong>
        </S.Language>

        <S.PageCount>
          Pages: <strong>{book?.volumeInfo.pageCount}</strong>
        </S.PageCount>
        {book?.saleInfo?.listPrice?.amount && (
          <S.Price>
            Price: <strong>{book?.saleInfo?.listPrice?.amount}</strong>
            <strong>{book?.saleInfo?.listPrice?.currencyCode}</strong>
          </S.Price>
        )}
      </S.InformationsWrapper>
      {book?.saleInfo?.listPrice?.amount && (
        <S.BuyAt href={book?.saleInfo?.buyLink}>Buy now</S.BuyAt>
      )}
    </S.Wrapper>
  );
};

export default Details;
