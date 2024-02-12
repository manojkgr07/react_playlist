import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import Root from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store, { persistor } from "./src/store";

const App = () => {
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Root />
        </GestureHandlerRootView>
      </PersistGate>

    </Provider>


  );
}


export default App;