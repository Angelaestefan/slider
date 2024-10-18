import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import * as FileSystem from 'expo-file-system';


const filePath = `${FileSystem.documentDirectory}colorValues.json`;

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const loadStoredColors = async () => {
      try {
        const fileExists = await FileSystem.getInfoAsync(filePath);
        if (fileExists.exists) {
          console.log('File exists at:', filePath);
          const storedColors = await FileSystem.readAsStringAsync(filePath);
          const { red, green, blue } = JSON.parse(storedColors);
          setRed(red);
          setGreen(green);
          setBlue(blue);
        } else {
          console.log('File does not exist, creating a new one.');
        }
      } catch (error) {
        console.log('Error reading stored values:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    loadStoredColors();
  }, []);


  useEffect(() => {
    if (!isLoading) { 
      const saveColors = async () => {
        try {
          const colorData = JSON.stringify({ red, green, blue });
          await FileSystem.writeAsStringAsync(filePath, colorData);
          console.log('Colors saved successfully at:', filePath);
        } catch (error) {
          console.log('Error saving colors:', error);
        }
      };

      saveColors();
    }
  }, [red, green, blue, isLoading]);

 
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Red: {red}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={red}
        onValueChange={setRed}
        minimumTrackTintColor="red"
        maximumTrackTintColor="gray"
      />

      <Text style={styles.text}>Green: {green}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={green}
        onValueChange={setGreen}
        minimumTrackTintColor="green"
        maximumTrackTintColor="gray"
      />

      <Text style={styles.text}>Blue: {blue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={blue}
        onValueChange={setBlue}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
