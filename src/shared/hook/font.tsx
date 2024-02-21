import {
  useFonts as Fonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export const useFonts = () => {
  const [loadedFonts, errosFonts] = Fonts({
    Inter: Inter_400Regular,
    InterBold: Inter_700Bold,
  });
  return {
    loadedFonts,
    errosFonts,
  };
};
