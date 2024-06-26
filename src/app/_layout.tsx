import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationScreens } from "@navigation/routes";
import { useFonts } from "@shared/hook/font";
import { SplashScreen } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "@react-navigation/native";
import { theme } from "@shared/constants/colors";
import { AuthProvider } from "@context/auth.context";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { errosFonts, loadedFonts } = useFonts();

  useEffect(() => {
    if (loadedFonts || errosFonts) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, errosFonts]);

  if (!loadedFonts && !errosFonts) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider value={theme}>
        <SafeAreaView
          edges={["left", "right", "bottom"]}
          style={{
            flex: 1,
          }}
        >
          <AuthProvider>
            <NavigationScreens />
          </AuthProvider>
        </SafeAreaView>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
