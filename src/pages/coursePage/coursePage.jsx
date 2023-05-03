import { Link } from "react-router-dom";

import * as S from "./styles";
import logo from "../../img/logoBlack.png";
import LikesImg1 from "../../img/likes1.png";
import LikesImg2 from "../../img/likes2.png";
import LikesImg3 from "../../img/likes3.png";
import Handset from "../../img/handset.png";
import backgroundProf1Url from "../../img/background_prof_1.png";
// import { getDatabase } from "../../services/firebaseApi";
import { getDataBase } from "../../firebase";

export default function CoursePage() {

  getDataBase();

  return (
    <S.Container>
      <S.ContentBlock>
        <S.TitleBlock>
          <S.LogoImg src={logo} alt="logo" />
          <Link to="/login">
            <S.EnterButton>Войти</S.EnterButton>
          </Link>
        </S.TitleBlock>
        <S.HeadContentBlock
          style={{ backgroundImage: `url(${backgroundProf1Url})` }}
        >
          <S.SubTitleBlock>
            <S.TitleText>Йога</S.TitleText>
            <S.ButtonPay>Купить курс</S.ButtonPay>
          </S.SubTitleBlock>
        </S.HeadContentBlock>
        <S.TitleLikeText>Подойдет для вас, если:</S.TitleLikeText>
        <S.LikesBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg1} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>
                Давно хотели попробовать йогу, но не решались начать.
              </S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg2} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах.
              </S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg3} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>
                Ищете активность, полезную для тела и души.
              </S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
        </S.LikesBlock>

        <S.TitleDirectionsText>Направления:</S.TitleDirectionsText>

        <S.DirectionsBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              <S.DirectionsListLi>Йога для новичков</S.DirectionsListLi>
              <S.DirectionsListLi>Классическая йога</S.DirectionsListLi>
              <S.DirectionsListLi>Йогатерапия</S.DirectionsListLi>
            </S.DirectionsList>
          </S.DirectionsSubBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              <S.DirectionsListLi>Кундалини-йога</S.DirectionsListLi>
              <S.DirectionsListLi>Хатха-йога</S.DirectionsListLi>
              <S.DirectionsListLi>Аштанга-йога</S.DirectionsListLi>
            </S.DirectionsList>
          </S.DirectionsSubBlock>
        </S.DirectionsBlock>

        <S.InfoBlock>
          <S.InfoText>
            Благодаря комплексному воздействию упражнений происходит проработка
            всех групп мышц, тренировка суставов, улучшается циркуляция крови.
            Кроме того, упражнения дарят отличное настроение, заряжают бодростью
            и помогают противостоять стрессам.
          </S.InfoText>
        </S.InfoBlock>

        <S.FooterContentBlock>
          <S.FooterSubBlock>
            <S.FooterTextBlock>
              <S.FooterText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
              </S.FooterText>
            </S.FooterTextBlock>
            <S.SignUpTrainingButton>
              Записаться на тренировку
            </S.SignUpTrainingButton>
          </S.FooterSubBlock>
          <S.HandsetImg src={Handset} alt="Handset" />
        </S.FooterContentBlock>
      </S.ContentBlock>
    </S.Container>
  );
}
