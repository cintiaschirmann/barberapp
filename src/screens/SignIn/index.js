import React, {useState, useContext} from 'react';
import * as S from './styles';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AsyncStorage} from '@react-native-community/async-storage';

import {UserContext} from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInput} from '../../components';

import Api from '../../Api';

const SignIn = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passowordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passowordField !== '') {
      let json = await Api.signIn(emailField, passowordField);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });
        navigation.reset({
          routes: [{name: 'BottomTabs'}],
        });
      } else {
        Alert.alert('E-mail e/ou senha invalidos!');
      }
    } else {
      Alert.alert('Preencha os campos!');
    }
  };

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
