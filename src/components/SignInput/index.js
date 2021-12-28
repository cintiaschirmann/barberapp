import React from 'react';

import * as S from './styles';

const SignInput = ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <S.InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <S.Input
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </S.InputArea>
  );
};

export default SignInput;
