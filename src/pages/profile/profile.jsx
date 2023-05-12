import * as S from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserHeader } from "../../components/userHeader/userHeader";
import PopupSelectWorkout from "../../components/popupSelectWorkout/popupSelectWorkout";
import {
  useEmailChangeMutation,
  usePassChangeMutation,
  UserToken,
} from "../../services/changeAccountDataApi";

import { useQueryUsersCourseDatabase } from "../../services/queryFirebaseUsersApi";

export default function ProfilePage() {
  const [changeEmail, { error, isLoading }] = useEmailChangeMutation();
  const [changePass] = usePassChangeMutation();
  const Tokens = UserToken();
  let login = localStorage.getItem("login");
  let pass = localStorage.getItem("pass");
  const [SelectWorkout, setSelectWorkout] = useState(false);

  const [edit, setEdit] = useState(false);
  const [valueMail, setValueMail] = useState(login);
  localStorage.setItem("userMail", valueMail);
  const [editPass, setEditPass] = useState(false);
  const [valuePass, setValuePass] = useState(pass);
  localStorage.setItem("userPass", valuePass);

  const emailPath = login.replace(/\./g, "-");
  useQueryUsersCourseDatabase(emailPath);
  const courses = useSelector((state) => state.userData.user_courses);

  const toggleTraining = (course) => {
    localStorage.setItem("selectedCourse", course);

    if (SelectWorkout) {
      setSelectWorkout(false);
    } else {
      setSelectWorkout(true);
    }
  };

  return (
    <S.ContainerDiv>
      {SelectWorkout === true ? (
        <PopupSelectWorkout
          active={SelectWorkout}
          setActive={setSelectWorkout}
          refURL={`courses/${localStorage.getItem("selectedCourse")}`}
        />
      ) : null}
      <S.ContentDiv>
        <UserHeader />
        <S.SubTitleDiv>
          <S.TitleTextSpan>Мой профиль</S.TitleTextSpan>
          <S.TitleTextSpanLogin>
            Логин:<S.SpanText>{valueMail}</S.SpanText>{" "}
          </S.TitleTextSpanLogin>
          {error ? <S.ErrorSpan>{error.status}</S.ErrorSpan> : isLoading}
          {edit ? (
            <div>
              <S.UserLoginInput
                onChange={(e) =>
                  setValueMail(e.target.value) >
                  localStorage.setItem("userMail", valueMail)
                }
                value={valueMail}
              />
              <S.LoginButton onClick={() => changeEmail() > setEdit(false)}>
                Сохранить
              </S.LoginButton>
            </div>
          ) : null}
          <S.TitleTextSpanPass>
            Пароль:<S.SpanText>{valuePass}</S.SpanText>{" "}
          </S.TitleTextSpanPass>
          {editPass ? (
            <div>
              <S.UserLoginInput
                onChange={(e) =>
                  setValuePass(e.target.value) >
                  localStorage.setItem("userPass", valuePass)
                }
                value={valuePass}
              />
              <S.LoginButton onClick={() => changePass() > setEditPass(false)}>
                Сохранить
              </S.LoginButton>
            </div>
          ) : null}
        </S.SubTitleDiv>
        <S.ChangeLogPassDiv>
          <S.LogButton onClick={() => setEdit(true) > Tokens}>
            Редактировать логин
          </S.LogButton>

          <S.PassButton onClick={() => setEditPass(true) > Tokens}>
            Редактировать пароль
          </S.PassButton>
        </S.ChangeLogPassDiv>
        <S.TitleCourseSpan>Мои курсы</S.TitleCourseSpan>
        {courses ? (
          <S.SportChoiceDiv>
            {Object.entries(courses).map((item) => (
              <li key={item[0]}>
                <S.SportDiv>
                  <S.ProfCardImg
                    src={require(`../../img/${item[1].img}`)}
                    alt="prof_card"
                  />
                  <S.SportButton onClick={() => toggleTraining(item[0])}>
                    Перейти →
                  </S.SportButton>
                </S.SportDiv>
              </li>
            ))}
          </S.SportChoiceDiv>
        ) : (
          <div>
            <S.textNoPay>У вас ещё не куплено ни одного курса</S.textNoPay>
            <Link to="/">
              <S.buttonNextPay>Купить...</S.buttonNextPay>
            </Link>
          </div>
        )}
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
