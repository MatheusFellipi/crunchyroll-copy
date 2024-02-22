import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const appStackTabs = [
  {
    name: "index",
    title: "home",
    Icon: <Icon as={Ionicons} name="home" />,
  },
  {
    name: "catalog",
    title: "Catalogo",
    Icon: <Icon as={Ionicons} name="apps" />,
  },
];
