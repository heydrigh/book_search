import * as S from "./styles";
import Title from "../Title";
import AditionalContent from "../AditionalContent";

const CurrentlyReading = () => {
  return (
    <S.Wrapper>
      <S.header>
        <Title text="Currently Reading" />
        <AditionalContent text="All" />
      </S.header>
    </S.Wrapper>
  );
};

export default CurrentlyReading;
