import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'
import { useState } from 'react';
import { myColors } from './src/globalColors/Colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container :[styles.container, {backgroundColor: myColors.dark}]}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </ThemeContext.Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
