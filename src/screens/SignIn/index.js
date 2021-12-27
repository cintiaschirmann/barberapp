import React, {useState} from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInput} from '../../components';

const SignIn = () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passowordField, setPasswordField] = useState('');

  const handleSignClick = () => {};

  const handleMessageButtomClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <S.Container>
      <BarberLogo width="100%" height="160" />
      <S.InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passowordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />
        <S.CustomButton onPress={handleSignClick}>
          <S.CustomButtomText>LOGIN</S.CustomButtomText>
        </S.CustomButton>
      </S.InputArea>

      <S.SignMessage onPress={handleMessageButtomClick}>
        <S.MessageButton>Ainda não tem uma conta?</S.MessageButton>
        <S.MessageButtonBold>CADASTRE-SE AQUI!</S.MessageButtonBold>
      </S.SignMessage>
    </S.Container>
  );
};

export default SignIn;
