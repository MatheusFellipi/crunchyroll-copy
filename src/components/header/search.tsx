import { Icon, Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const SearchComponents = () => {
  return (
    <View>
      <Pressable bg="transparent">
        <Icon as={Ionicons} name="search" />
      </Pressable>
    </View>
  );
};
