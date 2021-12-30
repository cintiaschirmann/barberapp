import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Platform } from 'react-native';
import { Search, MyLocation } from '../../assets/svg';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Api from '../../Api';
import { Alert } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords);
        getBarbers();
      });
    }
  };

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getBarbers();

    if (res.error === '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else {
      Alert.alert('DEU RUIM' + res.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
  }, []);

  return (
    <S.Container>
      <S.Scroller>
        <S.HeaderArea>
          <S.HeaderTitle numberOfLines={2}>
            Encontre seu barbeiro favorito!
          </S.HeaderTitle>
          <S.SearchButton
            onPress={() => navigation.navigate('Search')}
            value={locationText}
            onChangeText={t => setLocationText(t)}
          >
            <Search width="26" height="26" fill="#fff" />
          </S.SearchButton>
        </S.HeaderArea>

        <S.LoccationArea>
          <S.LoccationInput
            placeholder="Onde você esta?"
            placeholderTextColor={'#fff'}
          />
          <S.LoccationFinder onPress={handleLocationFinder}>
            <MyLocation widt="24" height="24" fill="#fff" />
          </S.LoccationFinder>
        </S.LoccationArea>

        {loading && <S.LoadingIcon size="large" calor="#ffff" />}

        <S.ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </S.ListArea>
      </S.Scroller>
    </S.Container>
  );
};

export default Home;
