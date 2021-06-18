import * as S from "./styles";

import Title from "../Title";
import AditionalContent from "../AditionalContent";
import video from "../../assets/images/video.png";

const Reviews = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Title text="Reviews of The Days" />
        <AditionalContent text="All Videos" />
      </S.Header>
      <S.VideoWrapper>
        <img src={video} alt="video" />
      </S.VideoWrapper>
    </S.Wrapper>
  );
};

export default Reviews;
