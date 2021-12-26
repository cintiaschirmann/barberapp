import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserContextProvider from './contexts/UserContext';

import Routes from './routes/index';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
