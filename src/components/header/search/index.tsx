import { Icon, Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { ModalComponents } from "@shared/components/modal";
import { useState } from "react";
import { SearchHeaderComponents } from "./header";
import { SearchBodyComponent } from "./card";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const search = (text: string) => {};

  return (
    <View width={"10"} height={"10"}>
      <Pressable
        alignItems={"center"}
        justifyContent={"center"}
        width={"10"}
        height={"10"}
        onPress={() => setOpen(!open)}
      >
        <Icon as={Ionicons} name="search" size={"md"} color={"white"} />
      </Pressable>
      <ModalComponents open={open} close={setOpen}>
        <View
          bgColor={"black"}
          height={height}
          width={width}
        >
          <SearchHeaderComponents
            open={open}
            setOpen={setOpen}
            search={search}
          />
          <SearchBodyComponent />
        </View>
      </ModalComponents>
    </View>
  );
};
