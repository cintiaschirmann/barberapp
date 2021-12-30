import React from 'react';

import * as S from './styles';

const BarberItem = ({ data }) => {
  return (
    <S.Area>
      <S.Avatar source={{ uri: data.avatar }} />
      <S.InfoArea>
        <S.UserName>{data.name}</S.UserName>
        <S.ProfileButton>
          <S.ProfileButtonText>Ver Perfil</S.ProfileButtonText>
        </S.ProfileButton>
      </S.InfoArea>
    </S.Area>
  );
};

export default BarberItem;
