import React from 'react';
import {StatusBar} from 'react-native';
import AddTow from './src/screens/AddTow';
import AllJobs from './src/screens/AllJobs';
import Compound from './src/screens/Compound';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import CurrentJob from './src/screens/CurrentJob';
import TowConfirm from './src/screens/TowConfirm';
import PersonalInfo from './src/screens/PersonalInfo';
import ResetPassword from './src/screens/ResetPassword';
import CurrentJobsList from './src/screens/CurrentJobsList';
import AccountSettings from './src/screens/AccountSettings';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="AddTow" component={AddTow} />
            <Stack.Screen name="AllJobs" component={AllJobs} />
            <Stack.Screen name="Compound" component={Compound} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="CurrentJob" component={CurrentJob} />
            <Stack.Screen name="TowConfirm" component={TowConfirm} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CurrentJobsList" component={CurrentJobsList} />
            <Stack.Screen name="AccountSettings" component={AccountSettings} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      </SafeAreaProvider>
    </>
  );
}

export default App;
