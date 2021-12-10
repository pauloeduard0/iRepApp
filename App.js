import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading  from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' transLucent={false} />
      <Routes/>
    </>
  );
}
