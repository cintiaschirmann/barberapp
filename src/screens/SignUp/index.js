import React, {useState, useContext} from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInput} from '../../components';

import Api from '../../Api';

const SignUp = () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passowordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passowordField !== '') {
      let res = await Api.signUp(nameField, emailField, passowordField);
      console.log(res);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });
        navigation.reset({
          routes: [{name: 'BottomTabs'}],
        });
      } else {
        Alert.alert('DEU MERDA' + res.error);
      }
    } else {
      Alert.alert('Preencha os campos!');
    }
  };

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
