import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './contexts/UserContext';

import BottomTabs from './routes/BottomTabs';
import Routes from './routes';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
