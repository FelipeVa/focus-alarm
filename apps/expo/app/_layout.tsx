import { useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from 'app/provider';
import { SafeArea } from 'app/provider/safe-area';
import { AuthProvider } from 'app/context';
import { NativeToast } from '@my/ui/src/NativeToast';
import { useTheme } from '@my/ui';

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function InnerApp() {
  const theme = useTheme();

  return (
    <ThemeProvider
      value={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.background?.val,
        },
      }}
    >
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <NativeToast />
      </AuthProvider>
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  return (
    <SafeArea>
      <Provider>
        <InnerApp />
      </Provider>
    </SafeArea>
  );
}
