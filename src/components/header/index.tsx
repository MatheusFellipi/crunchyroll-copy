import { HStack, View } from "native-base";
import { ChromecastComponent } from "./chromecast";
import { SearchComponent } from "./search";
import { AvatarComponent } from "./avatar";

export const HeaderComponent = () => {
  return (
    <View flexDir={"row"}>
      <HStack space={4} marginRight={"1.5"}>
        <ChromecastComponent />
        <SearchComponent />
        <AvatarComponent />
      </HStack>
    </View>
  );
};
