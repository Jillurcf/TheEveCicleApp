import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './Routes';
import { ThemeProvider } from '../context/ThemeContext';
// import { Provider } from 'react-redux';
// import store from '../redux/store';





const AppRoutes = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        {/* <Provider store={store}> */}
        <NavigationContainer >
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
        {/* </Provider> */}

      </ThemeProvider>

    </GestureHandlerRootView>
  );
};

export default AppRoutes;
