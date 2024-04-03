import { FontAwesome6 } from "@expo/vector-icons";
import { TextComponent } from "@shared/components/text";
import { useRouter } from "expo-router";
import { Box, Center, Flex, HStack, Icon, Image, Pressable, VStack, View } from "native-base";


export const CardCatalogComponent = ( props: CardCatalogProps) => {
  const router = useRouter()
  const push = (anime: string) =>  router.push({ pathname: "dynamics/anime/[anime]", params: { anime: anime }} as any)
  return (
    <View position={"relative"} w={"50%"} bg={"transparent"}>
      <Pressable flexDir={"row"} padding={"4"} onPress={() => push("01")}>
        <VStack space={1}>
          <Image source={{ uri: props.img, }} alt={props.title}  h={"56"} w={"40"}  />
          <TextComponent textAlign={"left"} label={props.title}/>
        </VStack>
      </Pressable>
      <HStack alignItems={"center"} bottom={-1} h={"6"} left={4} right={5} position={"absolute"} justifyContent={"space-between"}>
           <Flex flexDir={"row"}>
             <Box h={"4"} bg={"red.500"} padding={"0.5"} borderRadius={"5"} borderColor={"white"} borderWidth={"1"}>
              <Center>
                <TextComponent fontSize={"8"} textTransform={"uppercase"} label="A16"/> 
              </Center>
            </Box>
            <TextComponent fontSize={"10"} label=" . Dub | Leg"/>
          </Flex>    
          <Pressable onPress={()=>console.log("oi menu")}>
            <Icon as={FontAwesome6} name="ellipsis-vertical" />
          </Pressable>
      </HStack>
    </View>
  );
};
