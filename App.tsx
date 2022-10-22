import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'
import { useState } from 'react';
import { myColors } from './src/globalColors/Colors';
import { Button } from './src/components/Button';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container :[styles.container, {backgroundColor: myColors.dark}]}>
        <Text></Text>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />

        <Button title='9' onPress={() => {}}/>

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
