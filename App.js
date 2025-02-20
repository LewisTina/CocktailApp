import React from "react";
import RootTabNavigator from "./src/navigation/RootTabNavigator";
import store from './src/store'
import { Provider } from 'react-redux'

export default App = () => {
  return (
    <Provider store={store}>
       <RootTabNavigator />
    </Provider>
  );
};
