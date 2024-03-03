import { FontAwesome6 } from "@expo/vector-icons";
import { TextComponent } from "@shared/components/text";
import { useRouter } from "expo-router";
import { Box, Center, HStack, Icon, Image, Pressable, VStack, View } from "native-base";

export const ListCatalogComponent = () => {
  const router = useRouter()
  const push = (anime: string) =>  router.push({ pathname: "dynamics/anime/[anime]", params: { anime: anime }} as any)
  return (
    <View>
      <Pressable flexDir={"row"} padding={"4"} onPress={() => push("01")}>
        <VStack space={1}>
          <Image source={{ uri: "https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256", }} alt="Alternate Text"  h={"56"} w={"40"}  />
          <TextComponent textAlign={"left"} label="Cowboy Bebop"/>
          <HStack alignItems={"center"}>
            <Box h={"4"} bg={"red.500"} padding={"0.5"} borderRadius={"5"} borderColor={"white"} borderWidth={"1"}>
              <Center>
                <TextComponent fontSize={"8"} textTransform={"uppercase"} label="A16"/> 
              </Center>
            </Box>
            <TextComponent fontSize={"10"} label=" . Dub | Leg"/>    
          </HStack>
      </VStack>
      </Pressable>
      <Pressable position={"absolute"} bottom={0} right={0} onPress={()=>console.log("oi menu")}>
        <Icon as={FontAwesome6} name="ellipsis-vertical" />
      </Pressable>
    </View>
  );
};
