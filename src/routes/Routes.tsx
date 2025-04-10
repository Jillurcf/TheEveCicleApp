import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomRoutes from './BottomRoutes';
import SplashScreen from '../screens/SplashScreen';
import DrawerRoute from './DrawerRotues';
import WelcomeScreen1 from '../screens/welcome/WelcomeScreen1';
import WelcomeScreen2 from '../screens/welcome/WelcomeScreen2';
import WelcomeScreen3 from '../screens/welcome/WelcomeScreen3';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import LoginForm from '../screens/auth/LoginForm';
import FreeTrialScreen from '../screens/auth/FreeTrialScreen';
import Signup from '../screens/auth/Signup';
import ForgetPassword from '../screens/auth/ForgetPassword';
import OtpScreen from '../screens/auth/OtpScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import FirstStep from '../screens/accountSetup/FirstStep';
import SetupStep1 from '../screens/accountSetup/SetupStep1';
import SetupStep2 from '../screens/accountSetup/SetupStep2';
import SetupStep3 from '../screens/accountSetup/SetupStep3';
import SetupStep4 from '../screens/accountSetup/SetupStep4';
import SetupStep5 from '../screens/accountSetup/SetupStep5';
import SetupStep6 from '../screens/accountSetup/SetupStep6';
import LinkOtherUsers from '../screens/accountSetup/LinkOtherUsers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Autumn from '../screens/phase/Autumn';
import Winter from '../screens/phase/Winter';
import Summer from '../screens/phase/Summer';
import Spring from '../screens/phase/Spring';
import AddLogs from '../screens/AddLogs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes() {
  const [partner, setPartner] = useState(false)
  return (
    // <StripeProvider publishableKey="pk_test_51QKAtBKOpUtqOuW1x5VdNqH3vG7CZZl1P6V3VuV1qsRUmPLNk26i34AXeu2zCO3QurFJAOZ9zfb0EkWeCVhqBYgH008X41cXr6">
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    //   initialRouteName="LoadingSplash"
    >
      {/* <Stack.Screen name="LoadingSplash" component={LoadingSplash}
         /> */}

      {/* <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Popup" component={PopupScreen} />
  
      <Stack.Screen name="DiscoverResult" component={DiscoverResult} /> */}

      {/* <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="FreeTrialScreen" component={FreeTrialScreen} />
      <Stack.Screen name="FirstStep" component={FirstStep} />
      <Stack.Screen name="SetupStep1" component={SetupStep1} />
      <Stack.Screen name="SetupStep2" component={SetupStep2} />
      <Stack.Screen name="SetupStep3" component={SetupStep3} />
      <Stack.Screen name="SetupStep4" component={SetupStep4} />
      <Stack.Screen name="SetupStep5" component={SetupStep5} />
      <Stack.Screen name="SetupStep6" component={SetupStep6} />
      <Stack.Screen name="LinkOtherUsers" component={LinkOtherUsers} /> */}
      <Stack.Screen name="Drawer" component={DrawerRoute} />
      <Stack.Screen name="Autumn" component={Autumn} />
      <Stack.Screen name="Winter" component={Winter} />
      <Stack.Screen name="Summer" component={Summer} />
      <Stack.Screen name="Spring" component={Spring} />
      <Stack.Screen name="AddLogs" component={AddLogs} />
    </Stack.Navigator>
    // </StripeProvider>
  );
}
