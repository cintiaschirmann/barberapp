import React from 'react';
import * as S from './styles';

import {Home} from '../../assets/svg';

const CustomTabBar = () => {
  return (
    <S.TabArea>
      <S.TabItem>
        <Home />
      </S.TabItem>
    </S.TabArea>
  );
};

export default CustomTabBar;
