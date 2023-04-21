import * as S from "./styles";
import logo from "../../img/logo.png";
import SaleSticker from "../../img/Sale_sticker.png";
import ProfCard1 from "../../img/prof_card_1.png";
import ProfCard2 from "../../img/prof_card_2.png";
import ProfCard3 from "../../img/prof_card_3.png";
import ProfCard4 from "../../img/prof_card_4.png";
import ProfCard5 from "../../img/prof_card_5.png";

export default function MainPage() {
  return (
    <S.ContainerDiv>
        <S.ContentDiv>
      <S.LogoTitleDiv>
        <S.LogoImg src={logo} alt="logo" />
        <S.EnterButton>Войти</S.EnterButton>
      </S.LogoTitleDiv>
      <S.HeadContentDiv>
      <S.SubTitleDiv>
        <S.TitleTextSpan>Онлайн-тренировки для занятий дома</S.TitleTextSpan>
        <S.TitleTextSpanH>
          Начните заниматься спортом и улучшите качество жизни</S.TitleTextSpanH>
      </S.SubTitleDiv>
        <S.SaleStickerImg src={SaleSticker} alt="SaleSticker" />
      </S.HeadContentDiv>
      <S.SportChoiceDiv>
        <S.ProfCardImg src={ProfCard1} alt="prof_card_1" />
        <S.ProfCardImg src={ProfCard2} alt="prof_card_2" />
        <S.ProfCardImg src={ProfCard3} alt="prof_card_3" />
        <S.ProfCardImg src={ProfCard4} alt="prof_card_4" />
        <S.ProfCardImg src={ProfCard5} alt="prof_card_5" />
      </S.SportChoiceDiv>
      <S.ButtonDiv>
      <S.UpButton>Наверх ↑</S.UpButton>
      </S.ButtonDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
