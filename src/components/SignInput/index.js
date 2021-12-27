import React from 'react';

import * as S from './styles';

const SignInput = ({IconSvg, placeholder}) => {
  return (
    <S.InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <S.Input placeholder={placeholder} placeholderTextColor="#268596" />
    </S.InputArea>
  );
};

export default SignInput;
