import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import Discover from "../../components/Discover";
import CurrenlyReading from "../../components/CurrentlyReading";
import Reviews from "../../components/Reviews";
import Navbar from "../../components/Navbar";

const Home = () => {
  const history = useHistory();

  const handleSendToSearch = () => {
    history.push("/search");
  };

  return (
    <S.Wrapper>
      <Searchbar onClick={handleSendToSearch} />
      <S.GreetingWrapper>
        <h4>Hi, &nbsp;</h4>
        <S.Username>Heydrigh Ribeiro &nbsp;</S.Username>
        <h4>&#128075;</h4>
      </S.GreetingWrapper>
      <Discover />
      <CurrenlyReading />
      <Reviews />
      <Navbar />
    </S.Wrapper>
  );
};

export default Home;
