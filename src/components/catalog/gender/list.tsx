import { Center, Icon, Pressable, ScrollView, View } from "native-base";
import { options } from "./options";
import { TextComponent } from "@shared/components/text";
import { Dimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get("screen");

export const ListGenderComponent = () => {
  const router = useRouter()
  const push = (gender: string) =>  router.push({ pathname: "dynamics/gender/[gender]", params: { gender: gender }} as any)

  return (
    <ScrollView>
      <View flexDir={"row"} flexWrap={"wrap"} p={"3.5'"} w={width} paddingBottom={"24"}>
        {options.map((item) => (
          <Pressable key={item.name} w={"48%"} bgColor={"transparent"} h={"24"} margin={"1"} onPress={()=> push(item.route)}>
            <LinearGradient style={{ width: "100%", height: "100%" }}
              colors={["transparent", "#838383"]}
            >
            <Center justifyContent={"center"} alignItems={"center"} h={"100%"}>
              <Icon as={FontAwesome6} name="ellipsis" color={"white"} />
              <TextComponent fontFamily={"InterBold"} fontSize={"12"} label={item.name.toUpperCase()} />
            </Center>
            </LinearGradient>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};
