import { useFonts as Fonts } from "expo-font";
export const useFonts = () => {
  const [loadedFonts, errosFonts] = Fonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });
  return {
    loadedFonts,
    errosFonts
  };
};
