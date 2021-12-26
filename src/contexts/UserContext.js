import React, {userContext, useReducer} from 'react';
import {initialState, UserReducer} from '../reducers/UserReducer';

export const UserContext = userContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
