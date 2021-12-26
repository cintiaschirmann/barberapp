import React, {useEffect} from 'react';
import * as S from './styles';
import BarberLogo from '../../assets/barber.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <BarberLogo width="100%" height="160" />
      <S.LoadingIcon size="large" color="#FFFF" />
    </S.Container>
  );
};

export default Preload;
