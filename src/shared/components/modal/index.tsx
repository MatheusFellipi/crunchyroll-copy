import { Modal, View } from "native-base";
import { Dimensions } from "react-native";
import { Dispatch, ReactNode } from "react";

const { height } = Dimensions.get("screen");

type Props = {
  open: boolean;
  children: ReactNode;
  close: Dispatch<React.SetStateAction<boolean>>;
};

export const ModalComponents = ({ open, close, children }: Props) => {
  return (
    <Modal isOpen={open} onClose={close} size={"full"} margin={0} padding={0}>
      <View height={height} w={"full"} position={"relative"}>
        {children}
      </View>
    </Modal>
  );
};
