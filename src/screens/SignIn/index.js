import React from 'react';
import * as S from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInput} from '../../components';

const SignIn = () => {
  return (
    <S.Container>
      <BarberLogo width="100%" height="160" />
      <S.InputArea>
        <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />
        <SignInput IconSvg={LockIcon} placeholder="Digite sua senha" />
        <S.CustomButton>
          <S.CustomButtomText>Login</S.CustomButtomText>
        </S.CustomButton>
      </S.InputArea>

      <S.SignMessage>
        <S.MessageButton>Ainda não tem uma conta?</S.MessageButton>
        <S.MessageButtonBold>CADASTRE-SE AQUI!</S.MessageButtonBold>
      </S.SignMessage>
    </S.Container>
  );
};

export default SignIn;
