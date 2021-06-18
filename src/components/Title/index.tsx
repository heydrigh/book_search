import * as S from "./styles";

export type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};

export default Title;
