import { useState, useEffect, useCallback } from "react";
import * as S from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const { pathname } = useLocation();
  const history = useHistory();

  const handleRedirect = (destination: string) => {
    history.push(`${destination}`);
  };

  const handleActiveRoute = useCallback(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    handleActiveRoute();
  }, [handleActiveRoute]);

  return (
    <S.Wrapper>
      <S.LinkButton onClick={() => handleRedirect("/")}>
        <AiOutlineHome
          size={26}
          color={activeRoute === "/" ? "#000" : "#BFBEBF"}
        />
      </S.LinkButton>
      <S.LinkButton onClick={() => handleRedirect("/search")}>
        <AiOutlineSearch
          size={26}
          color={activeRoute === "/search" ? "#000" : "#BFBEBF"}
        />
      </S.LinkButton>
    </S.Wrapper>
  );
};

export default Navbar;
