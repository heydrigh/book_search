import * as S from "./styles";
import oval from "../../assets/images/oval2.png";

const HeaderBackground = () => {
  return (
    <S.Wrapper>
      <S.OvarWrapper>
        <img src={oval} alt="oval" />
      </S.OvarWrapper>
      <S.BlackBall />
      <S.RedBall />
    </S.Wrapper>
  );
};

export default HeaderBackground;
