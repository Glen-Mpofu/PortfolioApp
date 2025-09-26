/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = '#2D4B1B';
const tintColorDark = '#828b7dff';

export const Colors = {
  light: {
    heading: 'white',
    text: 'black',
    background: 'black',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    borderColor: 'black'
  },
  dark: {
    heading: 'black',
    text: 'white',
    background: 'white',
    tint: tintColorLight,
    icon: '#828b7dff',
    tabIconDefault: '#828b7dff',
    tabIconSelected: tintColorDark,
    borderColor: '#EADDCA'
  },
};
