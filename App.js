import React from "react";
import RootTabNavigator from "./src/navigation/RootTabNavigator";
import store from './src/store'
import { Provider } from 'react-redux'
import RootStackNavigator from "./src/navigation/stack";

export default App = () => {
  return (
    <Provider store={store}>
        <RootStackNavigator/>
       {/* <RootTabNavigator /> */}
    </Provider>
  );
};
