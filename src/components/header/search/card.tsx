import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  Pressable,
  VStack,
  View,
} from "native-base";
import { FontAwesome6 } from "@expo/vector-icons";

import { TextComponent } from "@shared/components/text";

export const SearchBodyComponent = () => (
  <Modal.Body>
    <Box flexDir={"row"} position={"relative"}>
      <HStack space={3}>
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
          size="xl"
        />
        <VStack justifyContent={"space-between"}>
          <View>
            <Heading color={"white"}>title</Heading>
            <View flexDir={"row"}>
              <TextComponent
                fontSize={"12px"}
                color={"white"}
                label="1 temporadas. "
              />
              <TextComponent
                fontSize={"12px"}
                color={"white"}
                label="33 Episodio"
              />
            </View>
          </View>
          <View flexDir={"row"}>
            <TextComponent
              fontSize={"12px"}
              color={"primary.400"}
              label="Serie "
            />
            <TextComponent
              fontSize={"12px"}
              color={"white"}
              label="Dub | Leg"
            />
          </View>
        </VStack>
      </HStack>
      <Pressable position={"absolute"} bottom={0} right={0}>
        <Icon as={FontAwesome6} name="ellipsis-vertical" />
      </Pressable>
    </Box>
  </Modal.Body>
);
