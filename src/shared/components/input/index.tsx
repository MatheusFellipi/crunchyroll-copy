import React, { Dispatch } from "react";
import { Input, Icon, Pressable, Stack, IInputProps } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = { left?: boolean; icon?: string } & IInputProps;

export const InputComponent = ({ left, icon, ...props }: Props) => {
  const [show, setShow] = React.useState(false);

  const p = {
    ...(left
      ? {
          InputLeftElement: (
            <I icon={icon} setShow={setShow} show={show} type={props?.type} />
          ),
        }
      : {
          InputRightElement: (
            <I icon={icon} setShow={setShow} show={show} type={props?.type} />
          ),
        }),
  };

  return <Input w={"100%"} h={"10"} {...p} {...props} />;
};

type PropsI = {
  type: string;
  setShow: Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  icon?: string;
};

const I = ({ type, setShow, show, icon }: PropsI) => (
  <>
    {type === "password" && (
      <Pressable onPress={() => setShow(!show)}>
        <Icon
          as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
          size={5}
          mr="2"
          color="white"
        />
      </Pressable>
    )}
    {type !== "password" && (
      <Icon
        as={<MaterialIcons name={icon ?? "search"} />}
        size={5}
        mr="2"
        color="white"
      />
    )}
  </>
);
