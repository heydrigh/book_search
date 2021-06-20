import { useState, useEffect, useCallback } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import Navbar from "../../components/Navbar";
import Book from "../../components/Book";
import api from "../../services/api";
import { Item } from "../../types/volumes";
import CircularProgress from "@material-ui/core/CircularProgress";

const Search = () => {
  const history = useHistory();
  const [books, setBooks] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [maxResults, setMaxResults] = useState(6);

  const handleSendToDetails = (bookId: string) => {
    history.push(`/details/${bookId}`);
  };

  const handleSearchMore = useCallback(() => {
    setMaxResults(maxResults + 3);
  }, [maxResults]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const handleSearchBooks = async () => {
        setLoading(true);
        try {
          if (search === "") {
            setBooks([]);
          }
          const response = await api.get(
            `?q=${search}&maxResults=${maxResults}`
          );

          setBooks(response.data.items);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error.message);
        }
      };
      handleSearchBooks();
    }, 500);

    return () => clearTimeout(timer);
  }, [search, maxResults, handleSearchMore]);

  return (
    <S.Wrapper>
      <Searchbar maxLength={16} onChange={(e) => setSearch(e.target.value)} />
      {!loading ? (
        <S.BooksWrapper>
          {!!books &&
            books.map((book) => (
              <Book
                key={book.id}
                onClick={() => handleSendToDetails(book.id)}
                author={
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : "Author desconhecido"
                }
                title={book.volumeInfo.title}
                coverURL={book.volumeInfo.imageLinks?.thumbnail}
                coverAlt="Capa do livro"
              />
            ))}
        </S.BooksWrapper>
      ) : (
        <S.LoadingWrapper>
          <CircularProgress />
        </S.LoadingWrapper>
      )}
      {books && books.length > 2 && (
        <S.LoadMore onClick={handleSearchMore}>Load more</S.LoadMore>
      )}
      <Navbar />
    </S.Wrapper>
  );
};

export default Search;
