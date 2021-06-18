import * as S from "./styles";
import Title from "../Title";
import AditionalContent from "../AditionalContent";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/images/banner1.png";
import oval from "../../assets/images/oval.png";

import "swiper/swiper.scss";

const Discover = () => {
  return (
    <S.Wrapper>
      <S.header>
        <Title text="Discover new books" />
        <AditionalContent text="More" />
      </S.header>
      <S.SwipperWrapper>
        <S.OvarWrapper>
          <img src={oval} alt="Oval" />
        </S.OvarWrapper>
        <Swiper
          spaceBetween={-50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={banner} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="banner" />
          </SwiperSlide>
        </Swiper>
      </S.SwipperWrapper>
    </S.Wrapper>
  );
};

export default Discover;
