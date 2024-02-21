import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationScreens } from "@navigation/routes";
import { useFonts } from "@shared/hook/font";
import { SplashScreen } from "expo-router";
import { NativeBaseProvider } from "native-base";

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
      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={{
          flex: 1,
        }}
      >
        <NavigationScreens />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
