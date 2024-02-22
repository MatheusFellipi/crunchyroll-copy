import {
  Avatar,
 
  Icon,
  Pressable,
  ScrollView,
  View,
} from "native-base";
import { ModalComponents } from "@shared/components/modal";
import { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { useAuth } from "@context/auth.context";
import { FontAwesome6 } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

export const AvatarComponent = () => {
  const { perfil } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Pressable
        alignItems={"center"}
        justifyContent={"center"}
        width={"10"}
        height={"10"}
        onPress={() => setOpen(!open)}
      >
        <Avatar
          size="md"
          bgColor={"black"}
          source={{
            uri:
              perfil.avatar ||
              "https://xsgames.co/randomusers/avatar.php?g=pixel",
          }}
        />
      </Pressable>

      <ModalComponents open={open} close={setOpen}>
        <ModalComponents open={open} close={setOpen}>
          <View
            bgColor={"black"}
            height={height}
            width={width}
            position={"relative"}
            paddingTop={"16"}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 60,
                right: 20,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 60000,
              }}
              onPress={() => setOpen(false)}
            >
              <Icon
                as={FontAwesome6}
                name="xmark"
                size={"3xl"}
                color={"white"}
              />
            </TouchableOpacity>

            <ScrollView></ScrollView>
          </View>
        </ModalComponents>
      </ModalComponents>
    </View>
  );
};
