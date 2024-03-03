import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { View } from "native-base";
import { ImageBackground } from "react-native";

export default function Page() {
  const { slug } = useLocalSearchParams();
  return (
    <View bgColor={"white"}>
      <ImageBackground source={{}}>
        <LinearGradient colors={["transparent", "#000000"]}></LinearGradient>
      </ImageBackground>
    </View>
  );
}
