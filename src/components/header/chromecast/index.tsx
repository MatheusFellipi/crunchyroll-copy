import { Icon, Pressable, View } from "native-base";
import { FontAwesome6 } from "@expo/vector-icons";
import { ModalComponents } from "@shared/components/modal";
import { useState } from "react";
import { Dimensions } from "react-native";
import { TextComponent } from "@shared/components/text";

const { height, width } = Dimensions.get("screen");

export const ChromecastComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <View width={"10"} height={"10"}>
      <Pressable
        alignItems={"center"}
        justifyContent={"center"}
        width={"10"}
        height={"10"}
        onPress={() => setOpen(!open)}
      >
        <Icon as={FontAwesome6} name="chromecast" size={"md"} color={"white"} />
      </Pressable>

      <ModalComponents open={open} close={setOpen}>
        <View
          position={"absolute"}
          bottom={0}
          bgColor={"gray.900"}
          height={height / 3}
          width={width}
          borderTopRadius={20}
          padding={"6"}
        >
          <TextComponent color={"white"} label="Conectar Tvs" />
        </View>
      </ModalComponents>
    </View>
  );
};
