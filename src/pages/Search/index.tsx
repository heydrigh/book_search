import { useState, useEffect } from "react";
import * as S from "./styles";
import Searchbar from "../../components/Searchbar";
import Book from "../../components/Book";
import api from "../../services/api";
import { Item } from "../../types/volumes";
import CircularProgress from "@material-ui/core/CircularProgress";

const Search = () => {
  const [books, setBooks] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const handleSearchBooks = async () => {
        setLoading(true);
        try {
          const response = await api.get(`?q=${search}`);

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
  }, [search]);

  return (
    <S.Wrapper>
      <Searchbar onChange={(e) => setSearch(e.target.value)} />
      {!loading ? (
        <S.BooksWrapper>
          {books.length > 0 &&
            books.map((book) => (
              <Book
                key={book.id}
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
    </S.Wrapper>
  );
};

export default Search;
