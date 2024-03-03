import { Avatar, Box, HStack, Icon, Pressable, View } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { useAuth } from "@context/auth.context";
import { FontAwesome6 } from "@expo/vector-icons";
import { TextComponent } from "@shared/components/text";
import { useRouter } from "expo-router";

const { height, width } = Dimensions.get("screen");

export const AvatarHeaderComponent = ({ setOpen }) => {
  const router = useRouter();
  const { perfil } = useAuth();

  return (
    <View>
      <Pressable
        onPress={() => {
          router.push("/perfil");
          setOpen(false);
        }}
      >
        <HStack space={4} marginLeft={"4"} alignItems={"center"}>
          <Avatar
            size="xl"
            bgColor={"black"}
            source={{
              uri:
                perfil.avatar ||
                "https://xsgames.co/randomusers/avatar.php?g=pixel",
            }}
          />
          <Box>
            <TextComponent label={perfil.name} />
            <TextComponent
              color={"orange.500"}
              fontSize={"12"}
              label={"editar perfil"}
            />
          </Box>
        </HStack>
      </Pressable>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0,
          right: 10,
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 60000,
        }}
        onPress={() => setOpen(false)}
      >
        <Icon as={FontAwesome6} name="xmark" size={"3xl"} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};
