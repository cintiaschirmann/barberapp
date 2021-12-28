import React, {useEffect, useContext} from 'react';
import * as S from './styles';
import {Barber} from '../../assets/svg';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';
import UserContext from '../../contexts/UserContext';

const Preload = () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
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
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <Barber width="100%" height="160" />
      <S.LoadingIcon size="large" color="#FFFF" />
    </S.Container>
  );
};

export default Preload;
