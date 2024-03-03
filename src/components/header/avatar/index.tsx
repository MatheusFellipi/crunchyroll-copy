import { Avatar, Button, HStack, Icon, Pressable, ScrollView, View } from "native-base";
import { ModalComponents } from "@shared/components/modal";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useAuth } from "@context/auth.context";
import { AvatarHeaderComponent } from "./header";
import { options } from "./options";
import { TextComponent } from "@shared/components/text";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

export const AvatarComponent = () => {
  const { perfil } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Pressable alignItems={"center"} justifyContent={"center"} width={"10"} height={"10"} onPress={() => setOpen(!open)}>
        <Avatar size="md" bgColor={"black"} source={{ uri: perfil.avatar || "https://xsgames.co/randomusers/avatar.php?g=pixel", }} />
      </Pressable>
      <ModalComponents open={open} close={setOpen}>
        <View bgColor={"black"} height={height} width={width} position={"relative"} paddingTop={"16"}>
          <AvatarHeaderComponent setOpen={setOpen} />
          <ScrollView marginLeft={"4"} marginTop={"10"} position={"relative"}>
              {options?.map((item) => (
                <Pressable key={item.name} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} marginTop={"10"}>
                  <HStack space={"3"} flexDir={"row"} alignItems={"center"}>
                    <Icon as={Ionicons} name={item.icon} color={"white"} />
                    <TextComponent label={item.name} />
                  </HStack>
                  <Icon as={Ionicons} name={"arrow-forward"} color={"white"} />
                </Pressable>
              ))}
            <Button marginTop={"50%"} variant={"outline"} borderRadius={"20"} leftIcon={<Icon as={Ionicons} name={"exit"} size={"xl"} color={"white"} />}>
              <TextComponent label="Sair" />
            </Button>
          </ScrollView>
        </View>
      </ModalComponents>
    </View>
  );
};
