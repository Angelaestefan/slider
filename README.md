# Color Picker App

This is a simple React Native app where users can adjust the Red, Green, and Blue (RGB) values of a color using sliders. The selected color is saved to local storage, so it persists between app sessions.

## Features

- Adjust Red, Green, and Blue values using sliders.
- Dynamically change the background color based on the RGB values.
- Saves the RGB values using the filesystem, allowing the last used color to persist even after closing the app.

## Installation

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) globally installed
- [React Native development environment](https://reactnative.dev/docs/environment-setup) set up

If you haven’t installed Expo CLI yet, run:

```bash
npm install -g expo-cli
```
### Steps

1. Clone the repository:

```bash
git clone https://github.com/Angelaestefan/slider.git
```
2. Navigate into the project directory:
```bash
cd slider
```
3. Install dependencies:
```bash
npm install
npm install @react-native-community/slider
expo install expo-file-system
```
4. Start the development server:
```bash
expo start
```

### Technologies Used
- React Native: For building the user interface.
- Expo: To simplify the React Native development process.
- Expo FileSystem: Used to store and retrieve RGB values from a local JSON file.
- @react-native-community/slider: Provides the slider components to adjust RGB values.
