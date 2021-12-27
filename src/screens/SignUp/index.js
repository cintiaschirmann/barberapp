import React, {useState} from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInput} from '../../components';

const SignUp = () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passowordField, setPasswordField] = useState('');

  const handleSignClick = () => {};

  const handleMessageButtomClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <S.Container>
      <BarberLogo width="100%" height="160" />
      <S.InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
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
          <S.CustomButtomText>CADASTRAR</S.CustomButtomText>
        </S.CustomButton>
      </S.InputArea>

      <S.SignMessage onPress={handleMessageButtomClick}>
        <S.MessageButton>Já possui uma conta?</S.MessageButton>
        <S.MessageButtonBold>FAÇA LOGIN AQUI!</S.MessageButtonBold>
      </S.SignMessage>
    </S.Container>
  );
};

export default SignUp;
