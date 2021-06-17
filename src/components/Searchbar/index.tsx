import { InputHTMLAttributes } from "react";
import * as S from "./styles";
import magnifierIcon from "../../assets/images/magni.svg";

const Searchbar = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <S.Wrapper>
      <img src={magnifierIcon} alt="Magnifier" />
      <S.Input placeholder="Search Book" {...rest} />
    </S.Wrapper>
  );
};

export default Searchbar;
