
import React, { useState } from "react";
import { Text, View } from "react-native";

import { Provider } from 'react-redux';
import createStore from '@reducers';

//import navigator
import { AppContainer } from '@navigator';

// create our store
const store = createStore();

export default function App() { 
  return (
    <Provider store={store}>      
      <AppContainer />
    </Provider>
  );
}