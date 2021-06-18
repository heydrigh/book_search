import * as S from "./styles";

export type AditionalContentProps = {
  text: string;
};

const AditionalContent = ({ text }: AditionalContentProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};

export default AditionalContent;
