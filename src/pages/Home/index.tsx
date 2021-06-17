import { useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Searchbar from "../../components/Searchbar";

const Home = () => {
  const getBook = async () => {
    const response = await api.get("harry potter");
    console.log(response.data);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <S.Wrapper>
      <Searchbar />
    </S.Wrapper>
  );
};

export default Home;
