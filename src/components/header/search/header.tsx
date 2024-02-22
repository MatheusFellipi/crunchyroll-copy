import { Center, Icon, Modal, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { InputComponent } from "@shared/components/input";
import { Dispatch } from "react";

type Props = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  search: (text: string) => void;
};

export const SearchHeaderComponents = ({ setOpen, open, search }: Props) => (
  <Modal.Header
    bgColor={"black"}
    borderColor={"black"}
    paddingTop={"16"}
    flexDir={"row"}
    justifyContent={"space-between"}
  >
    <Center marginRight={"6"}>
      <Pressable onPress={() => setOpen(!open)}>
        <Icon as={Ionicons} name="arrow-back" size={"xl"} />
      </Pressable>
    </Center>
    <Center w={"5/6"}>
      <InputComponent placeholder="Pesquisar" onChangeText={(text) => search(text)} color={"white"} />
    </Center>
  </Modal.Header>
);
