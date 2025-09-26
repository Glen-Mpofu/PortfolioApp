// File: app/_layout.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/Colors';
import { ProjectProvider } from "./(portfolio)/projectcontext";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Playright: require('../assets/fonts/PlaywriteMXGuides-Regular.ttf'),
    ChelaOne: require('../assets/fonts/ChelaOne-Regular.ttf'),
    PTSans: require('../assets/fonts/PTSansNarrow-Regular.ttf'),
    Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    PirataOne: require('../assets/fonts/PirataOne-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <GestureHandlerRootView>
    <ProjectProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>        
        <Stack screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#4B391B',
          headerTitleStyle: {
            color: theme.text,
            fontSize: 42,
            fontFamily: 'PirataOne',
          },
          headerStyle: {backgroundColor: theme.backgroundColor}
        }}>
          {/* Let Expo Router infer the rest */}
          <Stack.Screen name="(portfolio)/index" options={{ title: "Home", headerShown: false }} />
          <Stack.Screen name="(portfolio)/work" options={{ title: "Projects", headerShown: false}} />
          <Stack.Screen name="(portfolio)/projectpage" options={{ title: "Project BreakDowns" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" /> {/* this allows for the status bar to change too when moving from light to dark themes */}
      </ThemeProvider>
    </ProjectProvider>
    </GestureHandlerRootView>
  );
}