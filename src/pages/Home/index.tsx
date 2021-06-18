import { useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Searchbar from "../../components/Searchbar";
import Discover from "../../components/Discover";
import CurrenlyReading from "../../components/CurrentlyReading";
import Reviews from "../../components/Reviews";

const Home = () => {
  const getBook = async () => {
    const response = await api.get("harry potter");
    console.log(response.data);
  };

  return (
    <S.Wrapper>
      <Searchbar />
      <S.GreetingWrapper>
        <h4>Hi, &nbsp;</h4>
        <S.Username>Heydrigh Ribeiro &nbsp;</S.Username>
        <h4>&#128075;</h4>
      </S.GreetingWrapper>
      <Discover />
      <CurrenlyReading />
      <Reviews />
    </S.Wrapper>
  );
};

export default Home;
